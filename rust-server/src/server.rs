use crate::proto::{sm64_js_message, ConnectedMsg, MarioListMsg, MarioMsg, Sm64JsMessage};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use flate2::{write::DeflateEncoder, Compression};
use prost::Message as ProstMessage;
use rand::{self, Rng};
use serde::Serialize;
use std::{
    collections::HashMap,
    io::prelude::*,
    sync::{Arc, Mutex},
    thread,
    time::Duration,
};

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
pub struct AddClient {
    id: u32,
    client: Client,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct RemoveClient {
    id: u32,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SetData {
    pub id: u32,
    pub data: MarioMsg,
}

pub struct Sm64JsServer {
    clients: Arc<Mutex<HashMap<u32, Client>>>,
}

impl Actor for Sm64JsServer {
    type Context = Context<Self>;

    fn started(&mut self, _: &mut Self::Context) {
        let clients = self.clients.clone();

        thread::spawn(move || loop {
            Sm64JsServer::broadcast_data(clients.clone()).unwrap();
            thread::sleep(Duration::from_millis(33));
        });
    }
}

impl Handler<Connect> for Sm64JsServer {
    type Result = u32;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let id = rand::thread_rng().gen::<u32>();
        let client = Client::new(msg.addr);

        let sm64js_msg = Sm64JsMessage {
            message: Some(sm64_js_message::Message::ConnectedMsg(ConnectedMsg {
                channel_id: id,
            })),
        };
        let mut msg = vec![];
        sm64js_msg.encode(&mut msg).unwrap();

        let mut encoder = DeflateEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg).unwrap();
        let msg = encoder.finish().unwrap();

        client.send(Message(msg)).unwrap();
        self.clients.lock().unwrap().insert(id, client);
        id
    }
}

impl Handler<Disconnect> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.clients.lock().unwrap().remove(&msg.id);
    }
}

impl Handler<AddClient> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: AddClient, _: &mut Context<Self>) {
        self.clients.lock().unwrap().insert(msg.id, msg.client);
    }
}

impl Handler<RemoveClient> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: RemoveClient, _: &mut Context<Self>) {
        self.clients.lock().unwrap().remove(&msg.id);
    }
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .lock()
            .unwrap()
            .get_mut(&msg.id)
            .map(|client| client.set_data(msg.data));
    }
}

impl Sm64JsServer {
    pub fn new() -> Self {
        Sm64JsServer {
            clients: Arc::new(Mutex::new(HashMap::new())),
        }
    }

    pub fn broadcast_data(clients: Arc<Mutex<HashMap<u32, Client>>>) -> Result<()> {
        let mario_list: Vec<MarioMsg> = clients
            .lock()
            .unwrap()
            .values_mut()
            .filter_map(|client| {
                if client.valid > 0 {
                    client.valid -= 1;
                    client.data.clone()
                } else if client.data.is_some() {
                    // TODO disconnect
                    None
                } else {
                    client.data.clone()
                }
            })
            .collect();
        let sm64js_msg = Sm64JsMessage {
            message: Some(sm64_js_message::Message::ListMsg(MarioListMsg {
                message_count: mario_list.len() as u32,
                mario: mario_list,
            })),
        };
        let mut msg = vec![];
        sm64js_msg.encode(&mut msg)?;

        let mut encoder = DeflateEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg)?;
        let msg = encoder.finish()?;

        clients
            .lock()
            .unwrap()
            .values()
            .map(|client| -> Result<()> {
                client.send(Message(msg.clone()))?;
                Ok(())
            })
            .collect::<Result<Vec<_>>>()?;
        Ok(())
    }
}

pub struct Client {
    addr: Recipient<Message>,
    data: Option<MarioMsg>,
    valid: u8,
}

impl Client {
    pub fn new(addr: Recipient<Message>) -> Self {
        Client {
            addr,
            data: None,
            valid: 0,
        }
    }

    pub fn set_data(&mut self, data: MarioMsg) {
        if data.player_name.len() < 3 || data.player_name.len() > 14 {
            return;
        }
        self.data = Some(data);
        self.valid = 30;
    }

    pub fn send(&self, msg: Message) -> Result<()> {
        self.addr.do_send(msg)?;
        Ok(())
    }
}
