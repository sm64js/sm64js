use crate::{
    proto::{root_msg, sm64_js_msg, FlagMsg, MarioListMsg, RootMsg, Sm64JsMsg},
    Player, WeakPlayers,
};

use anyhow::Result;
use dashmap::DashMap;
use flate2::{write::ZlibEncoder, Compression};
use parking_lot::RwLock;
use prost::Message as ProstMessage;
use rayon::prelude::*;
use std::{collections::HashMap, io::prelude::*, sync::Weak};

pub type Rooms = DashMap<u32, Room>;

pub struct Room {
    id: String,
    flags: Vec<Flag>,
    players: WeakPlayers,
}

impl Room {
    pub fn init_rooms() -> Rooms {
        let rooms = DashMap::new();
        rooms.insert(
            5,
            Room {
                id: "Cool, Cool Mountain".to_string(),
                flags: vec![Flag::new([0., 7657., 0.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            9,
            Room {
                id: "Bob-omb Battlefield".to_string(),
                flags: vec![Flag::new([-2384., 260., 6203.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            16,
            Room {
                id: "Castle Grounds".to_string(),
                flags: vec![Flag::new([0., 3657., 0.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            24,
            Room {
                id: "Whomps Fortress".to_string(),
                flags: vec![Flag::new([0., 7657., 0.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            27,
            Room {
                id: "Princess's Secret Slide".to_string(),
                flags: vec![Flag::new([0., 7657., 0.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            36,
            Room {
                id: "Tall, Tall Mountain".to_string(),
                flags: vec![Flag::new([0., 7657., 0.])],
                players: HashMap::new(),
            },
        );
        rooms.insert(
            1000,
            Room {
                id: "Mushroom Battlefield".to_string(),
                flags: vec![
                    Flag::new([9380., 7657., -8980.]),
                    Flag::new([-5126., 3678., 10106.]),
                    Flag::new([-14920., 3800., -8675.]),
                    Flag::new([12043., 3000., 10086.]),
                ],
                players: HashMap::new(),
            },
        );
        rooms
    }

    pub fn process_flags(&mut self) {
        self.flags.par_iter_mut().for_each(|flag| {
            flag.process_falling();
            flag.process_idle();
        });
    }

    pub fn broadcast_data(&self) -> Result<()> {
        let mario_list: Vec<_> = self
            .players
            .values()
            .par_bridge()
            .filter_map(|player| {
                if let Some(player) = player.upgrade() {
                    player.read().get_data()
                } else {
                    None
                }
            })
            .collect();
        let flag_list: Vec<_> = self
            .flags
            .iter()
            .par_bridge()
            .map(|flag| flag.get_msg())
            .collect();
        let sm64js_msg = Sm64JsMsg {
            message: Some(sm64_js_msg::Message::ListMsg(MarioListMsg {
                flag: flag_list,
                mario: mario_list,
            })),
        };
        let mut msg = vec![];
        sm64js_msg.encode(&mut msg)?;

        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg)?;
        let msg = encoder.finish()?;

        let root_msg = RootMsg {
            message: Some(root_msg::Message::CompressedSm64jsMsg(msg)),
        };
        let mut msg = vec![];
        root_msg.encode(&mut msg)?;

        self.players
            .values()
            .par_bridge()
            .map(|player| -> Result<()> {
                if let Some(player) = player.upgrade() {
                    player.read().send_message(msg.clone())?
                }
                Ok(())
            })
            .collect::<Result<Vec<_>>>()?;
        Ok(())
    }

    pub fn has_player(&self, socket_id: u32) -> bool {
        if let Some(res) = self
            .players
            .get(&socket_id)
            .map(|player| player.strong_count() > 0)
        {
            res
        } else {
            false
        }
    }

    pub fn add_player(&mut self, socket_id: u32, player: Weak<RwLock<Player>>) {
        self.players.insert(socket_id, player);
    }
}

pub struct Flag {
    pos: Box<[f32; 3]>,
    start_pos: Box<[f32; 3]>,
    linked_to_player: bool,
    at_start_position: bool,
    socket_id: Option<u32>,
    idle_timer: u16,
    fall_mode: bool,
    height_before_fall: f32,
}

impl Flag {
    pub fn new(pos: [f32; 3]) -> Self {
        Self {
            pos: Box::new(pos),
            start_pos: Box::new(pos),
            linked_to_player: false,
            at_start_position: true,
            socket_id: None,
            idle_timer: 0,
            fall_mode: false,
            height_before_fall: 20000.,
        }
    }

    pub fn process_falling(&mut self) {
        if self.fall_mode && self.pos[1] > -10000. {
            self.pos[1] -= 2.;
        }
    }

    pub fn process_idle(&mut self) {
        if !self.linked_to_player && !self.at_start_position {
            self.idle_timer += 1;
            if self.idle_timer > 3000 {
                self.pos = self.start_pos.clone();
                self.fall_mode = false;
                self.at_start_position = true;
                self.idle_timer = 0;
            }
        }
    }

    pub fn get_msg(&self) -> FlagMsg {
        FlagMsg {
            pos: self.pos.to_vec(),
            linked_to_player: self.linked_to_player,
            socket_id: self.socket_id.unwrap_or_default(), // TODO
            height_before_fall: self.height_before_fall,
        }
    }
}
