use crate::{proto::MarioMsg, Message};

use actix::Recipient;
use anyhow::Result;
use dashmap::DashMap;
use std::sync::Arc;

pub type Clients = DashMap<u32, Client>;
pub type Players = DashMap<u32, Player>;

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

    pub fn get_socket_id(&self) -> u32 {
        self.socket_id
    }

    pub fn send(&self, msg: Message) -> Result<()> {
        self.addr.do_send(msg)?;
        Ok(())
    }
}

#[derive(Debug)]
pub struct Player {
    clients: Arc<Clients>,
    socket_id: u32,
    level: u32,
    name: String,
}

impl Player {
    pub fn new(clients: Arc<Clients>, socket_id: u32, level: u32, name: String) -> Self {
        Self {
            clients,
            socket_id,
            level,
            name,
        }
    }

    pub fn get_data(&self) -> Option<MarioMsg> {
        self.clients.get(&self.socket_id).unwrap().data.clone()
    }

    pub fn send_message(&self, msg: Vec<u8>) -> Result<()> {
        self.clients
            .get(&self.socket_id)
            .unwrap()
            .send(Message(msg))
    }
}
