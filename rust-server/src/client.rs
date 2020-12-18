use crate::{
    proto::{MarioMsg, SkinData},
    Message,
};

use actix::Recipient;
use anyhow::Result;
use dashmap::DashMap;
use parking_lot::RwLock;
use std::{
    collections::HashMap,
    sync::{Arc, Weak},
};

pub type Clients = DashMap<u32, Client>;
pub type Players = HashMap<u32, Arc<RwLock<Player>>>;
pub type WeakPlayers = HashMap<u32, Weak<RwLock<Player>>>;

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
    skin_data: Option<SkinData>,
    skin_data_updated: bool,
}

impl Player {
    pub fn new(clients: Arc<Clients>, socket_id: u32, level: u32, name: String) -> Self {
        Self {
            clients,
            socket_id,
            level,
            name,
            skin_data: None,
            skin_data_updated: false,
        }
    }

    pub fn get_data(&self) -> Option<MarioMsg> {
        self.clients.get(&self.socket_id).unwrap().data.clone()
    }

    pub fn set_skin_data(&mut self, skin_data: Option<SkinData>) {
        self.skin_data = skin_data;
        self.skin_data_updated = true;
    }

    pub fn send_message(&self, msg: Vec<u8>) -> Result<()> {
        self.clients
            .get(&self.socket_id)
            .unwrap()
            .send(Message(msg))
    }

    pub fn get_updated_skin_data(&mut self) -> Option<SkinData> {
        if self.skin_data_updated {
            self.skin_data_updated = false;
            self.skin_data.clone()
        } else {
            None
        }
    }
}
