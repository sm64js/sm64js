use crate::proto::{MarioListMsg, MarioMsg};

use actix::{prelude::*, Recipient};
use anyhow::Result;
use flate2::{write::DeflateEncoder, Compression};
use prost::Message as ProstMessage;
use rand::{self, Rng};
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

#[derive(Message)]
#[rtype(usize)]
pub struct Connect {
    pub addr: Recipient<Message>,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct Disconnect {
    pub id: usize,
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
    pub id: usize,
    pub data: MarioMsg,
}

pub struct Sm64JsServer {
    clients: Arc<Mutex<HashMap<usize, Client>>>,
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
    type Result = usize;

    fn handle(&mut self, msg: Connect, _: &mut Context<Self>) -> Self::Result {
        let id = rand::thread_rng().gen::<usize>();
        self.clients
            .lock()
            .unwrap()
            .insert(id, Client::new(msg.addr));
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

    pub fn broadcast_data(clients: Arc<Mutex<HashMap<usize, Client>>>) -> Result<()> {
        let mario_list: Vec<MarioMsg> = clients
            .lock()
            .unwrap()
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

        let mut encoder = DeflateEncoder::new(Vec::new(), Compression::default());
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

    pub fn send(&self, msg: Message) -> Result<()> {
        self.addr.do_send(msg)?;
        Ok(())
    }
}
