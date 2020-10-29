use crate::{proto::MarioMsg, Sm64JsWebSocket};

use actix::Addr;
use std::collections::HashMap;

pub struct Data {
    clients: HashMap<Addr<Sm64JsWebSocket>, Client>,
}

impl Data {
    pub fn new() -> Self {
        Data {
            clients: HashMap::new(),
        }
    }
}

pub struct Client {
    data: MarioMsg,
    valid: u8,
}
