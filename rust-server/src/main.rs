#[macro_use]
extern crate lazy_static;

#[macro_use]
extern crate maplit;

mod chat;
mod client;
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
use actix_web::{middleware, web, App, Error, HttpRequest, HttpResponse, HttpServer};
use actix_web_actors::ws;
use session::Sm64JsWsSession;

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
        App::new()
            .data(server.clone())
            .wrap(middleware::Logger::default())
            .service(web::resource("/ws/").to(ws_index))
            .service(
                actix_files::Files::new("/", "./dist")
                    .show_files_listing()
                    .index_file("index.html"),
            )
    })
    .bind("0.0.0.0:3060")?
    .run()
    .await
}
