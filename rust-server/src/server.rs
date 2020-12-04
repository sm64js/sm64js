use crate::proto::{
    root_msg, sm64_js_msg, ChatMsg, ConnectedMsg, MarioListMsg, MarioMsg, RootMsg, Sm64JsMsg,
};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use dashmap::DashMap;
use flate2::{write::ZlibEncoder, Compression};
use prost::Message as ProstMessage;
use rand::{self, Rng};
use rayon::prelude::*;
use serde::Serialize;
use std::{io::prelude::*, sync::Arc, thread, time::Duration};
use v_htmlescape::escape;

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

#[derive(Message)]
#[rtype(result = "()")]
pub struct SendChat {
    pub chat_msg: ChatMsg,
}

pub struct Sm64JsServer {
    clients: Arc<DashMap<u32, Client>>,
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
        let socket_id = rand::thread_rng().gen::<u32>();
        let client = Client::new(msg.addr, socket_id);

        let sm64js_msg = Sm64JsMsg {
            message: Some(sm64_js_msg::Message::ConnectedMsg(ConnectedMsg {
                socket_id,
            })),
        };

        let mut msg = vec![];
        sm64js_msg.encode(&mut msg).unwrap();

        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg).unwrap();
        let msg = encoder.finish().unwrap();

        client.send(Message(msg)).unwrap();
        self.clients.insert(socket_id, client);
        socket_id
    }
}

impl Handler<Disconnect> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.clients.remove(&msg.id);
    }
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .get_mut(&msg.id)
            .map(|mut client| client.set_data(msg.data));
    }
}

impl Handler<SendChat> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, send_chat: SendChat, _: &mut Context<Self>) {
        let mut chat_msg = send_chat.chat_msg;
        chat_msg.message = format!("{}", escape(&chat_msg.message));

        let root_msg = RootMsg {
            message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                message: Some(sm64_js_msg::Message::ChatMsg(chat_msg)),
            })),
        };

        let mut msg = vec![];
        root_msg.encode(&mut msg).unwrap();

        self.clients
            .iter()
            .par_bridge()
            .map(|client| -> Result<()> {
                client.send(Message(msg.clone()))?;
                Ok(())
            })
            .collect::<Result<Vec<_>>>()
            .unwrap();
    }
}

impl Sm64JsServer {
    pub fn new() -> Self {
        Sm64JsServer {
            clients: Arc::new(DashMap::new()),
        }
    }

    pub fn broadcast_data(clients: Arc<DashMap<u32, Client>>) -> Result<()> {
        let mario_list: Vec<_> = clients
            .iter()
            .par_bridge()
            .filter_map(|client| client.data.clone())
            .collect();
        let sm64js_msg = Sm64JsMsg {
            message: Some(sm64_js_msg::Message::ListMsg(MarioListMsg {
                flag: vec![],
                mario: mario_list,
            })),
        };
        let mut msg = vec![];
        sm64js_msg.encode(&mut msg)?;

        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(&msg)?;
        let msg = encoder.finish()?;

        clients
            .iter()
            .par_bridge()
            .map(|client| -> Result<()> {
                client.send(Message(msg.clone()))?;
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
    socket_id: u32,
}

impl Client {
    pub fn new(addr: Recipient<Message>, socket_id: u32) -> Self {
        Client {
            addr,
            data: None,
            socket_id,
        }
    }

    pub fn set_data(&mut self, mut data: MarioMsg) {
        data.socket_id = self.socket_id;

        self.data = Some(data);
    }

    pub fn send(&self, msg: Message) -> Result<()> {
        self.addr.do_send(msg)?;
        Ok(())
    }
}
