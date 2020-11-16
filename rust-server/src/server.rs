use crate::proto::{sm64_js_msg, ConnectedMsg, MarioListMsg, MarioMsg, Sm64JsMsg};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use flate2::{write::ZlibEncoder, Compression};
use parking_lot::RwLock;
use prost::Message as ProstMessage;
use rayon::prelude::*;
use serde::Serialize;
use sharded_slab::Slab;
use std::{collections::HashSet, io::prelude::*, sync::Arc, thread, time::Duration};

#[derive(Message)]
#[rtype(result = "()")]
pub struct Message(pub Vec<u8>);

#[derive(Debug, Serialize)]
pub struct ConnectedMessage {
    id: u32,
}

#[derive(Message)]
#[rtype(u32)]
pub struct Connect {
    pub addr: Recipient<Message>,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Disconnect {
    pub id: u32,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SetData {
    pub id: u32,
    pub data: MarioMsg,
}

pub struct Sm64JsServer {
    clients: Arc<Slab<RwLock<Client>>>,
    keys: Arc<RwLock<HashSet<u32>>>,
}

impl Actor for Sm64JsServer {
    type Context = Context<Self>;

    fn started(&mut self, _: &mut Self::Context) {
        let clients = self.clients.clone();
        let keys = self.keys.clone();

        thread::spawn(move || {
            let mut tick = 0;
            loop {
                tick += 1;
                if tick == 120 {
                    dbg!(keys.clone());
                    let clients: Vec<_> = keys
                        .read()
                        .iter()
                        .filter_map(|key| {
                            clients.get(*key as usize).map(|client| client.read().myid)
                        })
                        .collect();
                    dbg!(clients);
                    tick = 0;
                }
                Sm64JsServer::broadcast_data(clients.clone(), keys.clone()).unwrap();
                thread::sleep(Duration::from_millis(33));
            }
        });
    }
}

impl Handler<Connect> for Sm64JsServer {
    type Result = u32;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let entry = self.clients.vacant_entry().unwrap();
        let key = entry.key() as u32;
        let client = Client::new(msg.addr, key);

        let sm64js_msg = Sm64JsMsg {
            message: Some(sm64_js_msg::Message::ConnectedMsg(ConnectedMsg {
                channel_id: key,
            })),
        };

        let mut msg = vec![];
        sm64js_msg.encode(&mut msg).unwrap();

        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg).unwrap();
        let msg = encoder.finish().unwrap();

        client.send(Message(msg)).unwrap();
        entry.insert(RwLock::new(client));
        self.keys.write().insert(key);
        dbg!("insert", key);
        key
    }
}

impl Handler<Disconnect> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.clients.take(msg.id as usize);
        self.keys.write().remove(&msg.id);
        dbg!("remove", msg.id);
    }
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .get(msg.id as usize)
            .map(|client| client.write().set_data(msg.data));
    }
}

impl Sm64JsServer {
    pub fn new() -> Self {
        Sm64JsServer {
            clients: Arc::new(Slab::new()),
            keys: Arc::new(RwLock::new(HashSet::new())),
        }
    }

    pub fn broadcast_data(
        clients: Arc<Slab<RwLock<Client>>>,
        keys: Arc<RwLock<HashSet<u32>>>,
    ) -> Result<()> {
        // let mario_list: Vec<MarioMsg> = clients
        //     .unique_iter()
        //     .filter_map(|client| {
        //         // if client.valid > 0 {
        //         //     client.valid -= 1;
        //         //     client.data.clone()
        //         // } else if client.data.is_some() {
        //         //     // TODO disconnect
        //         //     None
        //         // } else {
        //         // client.read().data.clone()
        //         Some(MarioMsg::default())
        //         // }
        //     })
        //     .collect();
        let mario_list: Vec<_> = keys
            .read()
            .par_iter()
            // .iter()
            .filter_map(|key| {
                if let Some(client) = clients.get(*key as usize) {
                    client.read().data.clone()
                } else {
                    None
                }
            })
            .collect();
        let sm64js_msg = Sm64JsMsg {
            message: Some(sm64_js_msg::Message::ListMsg(MarioListMsg {
                message_count: mario_list.len() as u32,
                mario: mario_list,
            })),
        };
        let mut msg = vec![];
        sm64js_msg.encode(&mut msg)?;

        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg)?;
        let msg = encoder.finish()?;

        keys.read()
            .par_iter()
            // .iter()
            .map(|key| -> Result<()> {
                if let Some(client) = clients.get(*key as usize) {
                    client.read().send(Message(msg.clone()))?;
                }
                Ok(())
            })
            .collect::<Result<Vec<_>>>()?;
        Ok(())
    }
}

#[derive(Debug)]
pub struct Client {
    addr: Recipient<Message>,
    data: Option<MarioMsg>,
    // valid: u8,
    myid: u32,
}

impl Client {
    pub fn new(addr: Recipient<Message>, myid: u32) -> Self {
        Client {
            addr,
            data: None,
            // valid: 0,
            myid: myid,
        }
    }

    pub fn set_data(&mut self, mut data: MarioMsg) {
        if data.player_name.len() < 3 || data.player_name.len() > 14 {
            return;
        }
        data.channel_id = self.myid;

        self.data = Some(data);
        // self.valid = 30;
    }

    pub fn send(&self, msg: Message) -> Result<()> {
        self.addr.do_send(msg)?;
        Ok(())
    }
}
