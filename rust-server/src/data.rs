use crate::{proto::MarioMsg, Sm64JsWebSocket};

use actix::Addr;
use std::{
    collections::HashMap,
    sync::{Arc, Mutex},
};

lazy_static! {
    pub static ref DATA: Arc<Mutex<Data>> = Arc::new(Mutex::new(Data::new()));
}

pub struct Data {
    clients: HashMap<Addr<Sm64JsWebSocket>, Client>,
}

impl Data {
    pub fn new() -> Self {
        Data {
            clients: HashMap::new(),
        }
    }

    pub fn add_client(&mut self, addr: Addr<Sm64JsWebSocket>, client: Client) {
        self.clients.insert(addr, client);
    }

    pub fn remove_client(&mut self, addr: &Addr<Sm64JsWebSocket>) {
        self.clients.remove(addr);
    }

    pub fn set_data(&mut self, addr: &Addr<Sm64JsWebSocket>, data: MarioMsg) {
        self.clients
            .get_mut(addr)
            .map(|client| client.set_data(data));
    }
}

pub struct Client {
    data: Option<MarioMsg>,
    valid: u8,
}

impl Client {
    pub fn new() -> Self {
        Client {
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
}
