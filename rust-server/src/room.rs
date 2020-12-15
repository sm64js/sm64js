use dashmap::DashMap;
use rayon::prelude::*;

pub struct Room {
    id: String,
    flags: Vec<Flag>,
}

impl Room {
    pub fn init_rooms() -> DashMap<u16, Room> {
        let rooms = DashMap::new();
        rooms.insert(
            5,
            Room {
                id: "Cool, Cool Mountain".to_string(),
                flags: vec![Flag::new([0, 7657, 0])],
            },
        );
        rooms.insert(
            9,
            Room {
                id: "Bob-omb Battlefield".to_string(),
                flags: vec![Flag::new([-2384, 260, 6203])],
            },
        );
        rooms.insert(
            16,
            Room {
                id: "Castle Grounds".to_string(),
                flags: vec![Flag::new([0, 3657, 0])],
            },
        );
        rooms.insert(
            24,
            Room {
                id: "Whomps Fortress".to_string(),
                flags: vec![Flag::new([0, 7657, 0])],
            },
        );
        rooms.insert(
            27,
            Room {
                id: "Princess's Secret Slide".to_string(),
                flags: vec![Flag::new([0, 7657, 0])],
            },
        );
        rooms.insert(
            36,
            Room {
                id: "Tall, Tall Mountain".to_string(),
                flags: vec![Flag::new([0, 7657, 0])],
            },
        );
        rooms.insert(
            1000,
            Room {
                id: "Mushroom Battlefield".to_string(),
                flags: vec![
                    Flag::new([9380, 7657, -8980]),
                    Flag::new([-5126, 3678, 10106]),
                    Flag::new([-14920, 3800, -8675]),
                    Flag::new([12043, 3000, 10086]),
                ],
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
}

pub struct Flag {
    pos: Box<[i32; 3]>,
    start_pos: Box<[i32; 3]>,
    linked_to_player: bool,
    at_start_position: bool,
    socket_id: Option<u32>,
    idle_timer: u16,
    fall_mode: bool,
    height_before_fall: u32,
}

impl Flag {
    pub fn new(pos: [i32; 3]) -> Self {
        Self {
            pos: Box::new(pos),
            start_pos: Box::new(pos),
            ..Flag::default()
        }
    }

    pub fn process_falling(&mut self) {
        if self.fall_mode && self.pos[1] > -10000 {
            self.pos[1] -= 2;
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
}

impl Default for Flag {
    fn default() -> Self {
        Flag {
            pos: Box::new([0, 0, 0]),
            start_pos: Box::new([0, 0, 0]),
            linked_to_player: false,
            at_start_position: true,
            socket_id: None,
            idle_timer: 0,
            fall_mode: false,
            height_before_fall: 20000,
        }
    }
}
