use crate::{proto::MarioMsg, Message};

use actix::Recipient;
use anyhow::Result;
use dashmap::DashMap;

pub type Clients = DashMap<u32, Client>;

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

#[derive(Debug)]
pub struct Player<'a> {
    client: &'a Client,
    level: String,
    name: String,
}

impl<'a> Player<'a> {
    pub fn get_data(&self) -> Option<MarioMsg> {
        self.client.data.clone()
    }

    pub fn send_message(&self, msg: Vec<u8>) -> Result<()> {
        self.client.send(Message(msg))
    }
}
