use censor::Censor;
use chrono::{prelude::*, Duration};
use indexmap::IndexMap;
use paperclip::actix::{api_v2_operation, web, Apiv2Schema};
use serde::{Deserialize, Serialize};
use v_htmlescape::escape;

#[api_v2_operation(tags(Chat))]
pub async fn get_chat(query: web::Query<GetChat>) -> web::Json<Vec<ChatMessage>> {
    web::Json(vec![])
}

#[derive(Apiv2Schema, Deserialize, Serialize)]
pub struct GetChat {
    /// Format must be given as %Y-%m-%d %H:%M:%S
    #[serde(with = "crate::date_format", skip_serializing_if = "Option::is_none")]
    from: Option<DateTime<Utc>>,
    /// Format must be given as %Y-%m-%d %H:%M:%S
    #[serde(with = "crate::date_format", skip_serializing_if = "Option::is_none")]
    to: Option<DateTime<Utc>>,
    player_name: Option<String>,
}

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

#[derive(Apiv2Schema, Debug, Deserialize, Serialize)]
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
