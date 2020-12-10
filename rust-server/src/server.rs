use crate::proto::{
    root_msg, sm64_js_msg, AnnouncementMsg, ChatMsg, ConnectedMsg, MarioListMsg, MarioMsg, RootMsg,
    Sm64JsMsg,
};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use censor::Censor;
use dashmap::DashMap;
use flate2::{write::ZlibEncoder, Compression};
use parking_lot::RwLock;
use prost::Message as ProstMessage;
use rand::{self, Rng};
use rayon::prelude::*;
use std::{collections::HashSet, env, io::prelude::*, sync::Arc, thread, time::Duration};
use v_htmlescape::escape;

lazy_static! {
    pub static ref ADMIN_COMMANDS: HashSet<&'static str> = hashset! {"ANNOUNCEMENT"};
    pub static ref ADMIN_TOKENS: Arc<RwLock<HashSet<String>>> =
        Arc::new(RwLock::new(HashSet::new()));
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Message(pub Vec<u8>);

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

#[derive(Message)]
#[rtype(u32)]
pub struct Connect {
    pub addr: Recipient<Message>,
}

impl Handler<Connect> for Sm64JsServer {
    type Result = u32;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let socket_id = rand::thread_rng().gen::<u32>();
        let client = Client::new(msg.addr, socket_id);

        let root_msg = RootMsg {
            message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                message: Some(sm64_js_msg::Message::ConnectedMsg(ConnectedMsg {
                    socket_id,
                })),
            })),
        };

        let mut msg = vec![];
        root_msg.encode(&mut msg).unwrap();

        client.send(Message(msg)).unwrap();
        self.clients.insert(socket_id, client);
        socket_id
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Disconnect {
    pub id: u32,
}

impl Handler<Disconnect> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: Disconnect, _: &mut Context<Self>) {
        self.clients.remove(&msg.id);
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SetData {
    pub id: u32,
    pub data: MarioMsg,
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .get_mut(&msg.id)
            .map(|mut client| client.set_data(msg.data));
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SendChat {
    pub chat_msg: ChatMsg,
}

impl Handler<SendChat> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, send_chat: SendChat, _: &mut Context<Self>) {
        let chat_msg = send_chat.chat_msg;

        let msg = if chat_msg.message.starts_with('/') {
            Self::handle_command(chat_msg.message)
        } else {
            Self::handle_chat(chat_msg)
        };

        if let Some(msg) = msg {
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
}

impl Sm64JsServer {
    pub fn new() -> Self {
        if let Ok(admin_tokens) = env::var("ADMIN_TOKENS") {
            admin_tokens
                .split(':')
                .par_bridge()
                .for_each(|admin_token| {
                    ADMIN_TOKENS.write().insert(admin_token.to_string());
                })
        }
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

        let root_msg = RootMsg {
            message: Some(root_msg::Message::CompressedSm64jsMsg(msg)),
        };
        let mut msg = vec![];
        root_msg.encode(&mut msg)?;

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

    fn handle_command(message: String) -> Option<Vec<u8>> {
        if let Some(index) = message.find(' ') {
            let (cmd, message) = message.split_at(index);
            if ADMIN_COMMANDS.contains(cmd) && !ADMIN_TOKENS.read().contains(cmd) {
                return None;
            }
            match cmd.to_ascii_uppercase().as_ref() {
                "ANNOUNCEMENT" => {
                    let root_msg = RootMsg {
                        message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                            message: Some(sm64_js_msg::Message::AnnouncementMsg(AnnouncementMsg {
                                message: message.to_string(),
                                timer: 300,
                            })),
                        })),
                    };

                    let mut msg = vec![];
                    root_msg.encode(&mut msg).unwrap();
                    Some(msg)
                }
                _ => None,
            }
        } else {
            None
        }
    }

    fn handle_chat(mut chat_msg: ChatMsg) -> Option<Vec<u8>> {
        chat_msg.message = format!("{}", escape(&chat_msg.message));
        let censor = Censor::Standard;
        chat_msg.message = censor.censor(&chat_msg.message);

        let root_msg = RootMsg {
            message: Some(root_msg::Message::UncompressedSm64jsMsg(Sm64JsMsg {
                message: Some(sm64_js_msg::Message::ChatMsg(chat_msg)),
            })),
        };

        let mut msg = vec![];
        root_msg.encode(&mut msg).unwrap();
        Some(msg)
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
