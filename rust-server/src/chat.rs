use censor::Censor;
use chrono::{prelude::*, Duration};
use indexmap::IndexMap;
use v_htmlescape::escape;

#[derive(Debug)]
pub struct ChatHistory(IndexMap<DateTime<Utc>, ChatMessage>);

impl ChatHistory {
    pub fn new() -> Self {
        Self(IndexMap::new())
    }

    pub fn add_message(&mut self, message: &String) -> ChatResult {
        let escaped_message = format!("{}", escape(message));
        let is_escaped = &escaped_message != message;

        let censor = Censor::Standard;
        let censored_message = censor.censor(&escaped_message);
        let is_censored = censored_message != escaped_message;

        let date = Utc::now() - Duration::seconds(15);
        let is_spam = self
            .0
            .keys()
            .skip_while(|k| *k < &date)
            .filter(|k| !self.0.get(*k).unwrap().is_spam)
            .count()
            > 5;

        self.0.insert(
            Utc::now(),
            ChatMessage {
                message: message.clone(),
                is_escaped,
                is_censored,
                is_spam,
            },
        );

        ChatResult::Ok(censored_message)
    }
}

#[derive(Debug)]
pub struct ChatMessage {
    message: String,
    is_escaped: bool,
    is_censored: bool,
    is_spam: bool,
}

pub enum ChatResult {
    Ok(String),
    Err(ChatError),
}

pub enum ChatError {
    Spam,
}
