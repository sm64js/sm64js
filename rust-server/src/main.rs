#[macro_use]
extern crate lazy_static;

#[macro_use]
extern crate maplit;

mod chat;
mod client;
mod date_format;
mod room;
mod server;
mod session;

pub use chat::{ChatError, ChatHistory, ChatResult};
pub use client::{Client, Clients, Player, Players, WeakPlayers};
pub use room::{Flag, Room, Rooms};
pub use server::Message;

pub mod proto {
    include!(concat!(env!("OUT_DIR"), "/sm64js.rs"));
}

use actix::prelude::*;
use actix_web::{middleware, App, Error, HttpRequest, HttpResponse, HttpServer};
use actix_web_actors::ws;
use paperclip::{
    actix::{api_v2_operation, web, OpenApiExt},
    v2::models::{DefaultApiRaw, Info, Tag},
};
use session::Sm64JsWsSession;

#[api_v2_operation(tags(Hidden))]
async fn ws_index(
    r: HttpRequest,
    stream: web::Payload,
    srv: web::Data<Addr<server::Sm64JsServer>>,
) -> Result<HttpResponse, Error> {
    ws::start(Sm64JsWsSession::new(srv.get_ref().clone()), &r, stream)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_server=info,actix_web=info");
    env_logger::init();

    let server = server::Sm64JsServer::new().start();

    HttpServer::new(move || {
        let spec = DefaultApiRaw {
            tags: vec![
                Tag {
                    name: "Hidden".to_string(),
                    description: None,
                    external_docs: None,
                },
                Tag {
                    name: "Chat".to_string(),
                    description: Some("Chat related API endpoints".to_string()),
                    external_docs: None,
                },
            ],
            info: Info {
                title: "SM64JS API".into(),
                ..Default::default()
            },
            ..Default::default()
        };

        App::new()
            .wrap_api_with_spec(spec)
            .data(server.clone())
            .wrap(middleware::Logger::default())
            .with_json_spec_at("/api/spec")
            .service(web::resource("/ws/").to(ws_index))
            .service(
                actix_files::Files::new("/api", "./rust-server/src/openapi")
                    .index_file("index.html"),
            )
            .service(web::resource("/chat").route(web::get().to(chat::get_chat)))
            .service(actix_files::Files::new("/", "./dist").index_file("index.html"))
            .build()
    })
    .bind("0.0.0.0:3060")?
    .run()
    .await
}
