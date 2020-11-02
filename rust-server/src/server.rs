use crate::proto::{MarioListMsg, MarioMsg};

use actix::{prelude::*, Recipient};
use prost::Message as ProstMessage;
use rand::{self, rngs::ThreadRng, Rng};
use std::collections::HashMap;

#[derive(Message)]
#[rtype(result = "()")]
pub struct Message(pub Vec<u8>);

#[derive(Message)]
#[rtype(usize)]
pub struct Connect {
    pub addr: Recipient<Message>,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct AddClient {
    id: usize,
    client: Client,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct RemoveClient {
    id: usize,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct SetData {
    id: usize,
    data: MarioMsg,
}

pub struct Sm64JsServer {
    clients: HashMap<usize, Client>,
    rng: ThreadRng,
}

impl Actor for Sm64JsServer {
    type Context = Context<Self>;
}

impl Handler<Connect> for Sm64JsServer {
    type Result = usize;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let id = self.rng.gen::<usize>();
        // self.sessions.insert(id, msg.addr);
        // TODO insert
        id
    }
}

impl Handler<AddClient> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: AddClient, _: &mut Context<Self>) {
        self.clients.insert(msg.id, msg.client);
    }
}

impl Handler<RemoveClient> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: RemoveClient, _: &mut Context<Self>) {
        self.clients.remove(&msg.id);
    }
}

impl Handler<SetData> for Sm64JsServer {
    type Result = ();

    fn handle(&mut self, msg: SetData, _: &mut Context<Self>) {
        self.clients
            .get_mut(&msg.id)
            .map(|client| client.set_data(msg.data));
    }
}

impl Sm64JsServer {
    pub fn new() -> Self {
        Sm64JsServer {
            clients: HashMap::new(),
            rng: rand::thread_rng(),
        }
    }

    pub fn broadcast_data(&mut self) -> Result<(), prost::EncodeError> {
        let mario_list: Vec<MarioMsg> = self
            .clients
            .values_mut()
            .filter_map(|client| {
                client.valid -= 1;
                client.data.clone()
            })
            .collect();
        let mario_list_msg = MarioListMsg {
            message_count: mario_list.len() as u32,
            mario: mario_list,
        };
        let mut msg = vec![];
        mario_list_msg.encode(&mut msg)?;
        self.clients.values().for_each(|client| {
            client.send(Message(msg.clone()));
        });
        Ok(())
    }

    /*
        setInterval(async () => {
        Object.values(allChannels).forEach(data => {
            if (data.valid > 0) data.valid--
            else if (data.decodedMario) data.channel.close()
        })

        const mariolist = Object.values(allChannels).filter(data => data.decodedMario).map(data => data.decodedMario)
        const mariolistproto = new MarioListMsg()
        mariolistproto.setMarioList(mariolist)
        const bytes = mariolistproto.serializeBinary()
        const compressedMsg = await deflate(bytes)
        broadcastData(compressedMsg)

    }, 33)

    const broadcastData = (bytes) => {
        if (bytes.length == undefined) bytes = Buffer.from(bytes)
        Object.values(allChannels).forEach(s => { s.channel.send(bytes, true) })
    }
        */
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

    pub fn send(&self, msg: Message) {
        self.addr.do_send(msg);
    }
}
