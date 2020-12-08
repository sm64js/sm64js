mod server;

pub mod proto {
    include!(concat!(env!("OUT_DIR"), "/sm64js.rs"));
}

use proto::{root_msg, sm64_js_msg, RootMsg, Sm64JsMsg};

use actix::prelude::*;
use actix_web::{middleware, web, App, Error, HttpRequest, HttpResponse, HttpServer};
use actix_web_actors::ws;
use prost::Message;
use std::time::{Duration, Instant};

/// How often heartbeat pings are sent
const HEARTBEAT_INTERVAL: Duration = Duration::from_secs(5);

/// How long before lack of client response causes a timeout
const CLIENT_TIMEOUT: Duration = Duration::from_secs(10);

async fn ws_index(
    r: HttpRequest,
    stream: web::Payload,
    srv: web::Data<Addr<server::Sm64JsServer>>,
) -> Result<HttpResponse, Error> {
    ws::start(Sm64JsWsSession::new(srv.get_ref().clone()), &r, stream)
}
pub struct Sm64JsWsSession {
    id: u32,
    hb: Instant,
    hb_data: Option<Instant>,
    addr: Addr<server::Sm64JsServer>,
}

impl Actor for Sm64JsWsSession {
    type Context = ws::WebsocketContext<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        self.hb(ctx);

        let addr = ctx.address();
        self.addr
            .send(server::Connect {
                addr: addr.recipient(),
            })
            .into_actor(self)
            .then(|res, act, ctx| {
                match res {
                    Ok(res) => act.id = res,
                    _ => ctx.stop(),
                }
                fut::ready(())
            })
            .wait(ctx);
    }

    fn stopping(&mut self, _: &mut Self::Context) -> Running {
        self.addr.do_send(server::Disconnect { id: self.id });
        Running::Stop
    }
}

/// Handler for `ws::Message`
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for Sm64JsWsSession {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Ping(msg)) => {
                self.hb = Instant::now();
                ctx.pong(&msg);
            }
            Ok(ws::Message::Pong(_)) => {
                self.hb = Instant::now();
            }
            Ok(ws::Message::Binary(bin)) => {
                let data = RootMsg::decode(bin.clone()).unwrap();
                let sm64js_msg: Sm64JsMsg = match data.message {
                    Some(root_msg::Message::UncompressedSm64jsMsg(msg)) => msg,
                    Some(root_msg::Message::CompressedSm64jsMsg(msg)) => {
                        use flate2::write::ZlibDecoder;
                        use std::io::Write;

                        let mut decoder = ZlibDecoder::new(Vec::new());
                        decoder.write_all(&msg).unwrap();
                        let msg = decoder.finish().unwrap();
                        Sm64JsMsg::decode(&msg[..]).unwrap()
                    }
                    None => {
                        return;
                    }
                    Some(root_msg::Message::JsonBytesMsg(_)) => todo!(),
                };
                match sm64js_msg.message {
                    Some(sm64_js_msg::Message::PingMsg(_)) => {
                        use flate2::{write::ZlibEncoder, Compression};
                        use std::io::Write;

                        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
                        encoder.write_all(&bin).unwrap();
                        let msg = encoder.finish().unwrap();

                        ctx.binary(msg);
                    }
                    Some(sm64_js_msg::Message::MarioMsg(mario_msg)) => {
                        self.hb_data = Some(Instant::now());
                        self.addr.do_send(server::SetData {
                            id: self.id,
                            data: mario_msg,
                        });
                    }
                    Some(sm64_js_msg::Message::PlayerListsMsg(player_lists_msg)) => {
                        // TODO
                    }
                    Some(sm64_js_msg::Message::AttackMsg(attack_msg)) => {
                        // TODO
                    }
                    Some(sm64_js_msg::Message::GrabMsg(grab_msg)) => {
                        // TODO
                    }
                    Some(sm64_js_msg::Message::ChatMsg(chat_msg)) => {
                        self.addr.do_send(server::SendChat { chat_msg });
                    }
                    Some(sm64_js_msg::Message::SkinMsg(skin_msg)) => {
                        // TODO
                    }
                    Some(sm64_js_msg::Message::ListMsg(_)) => {
                        // TODO clients don't send this
                    }
                    Some(sm64_js_msg::Message::ConnectedMsg(_)) => {
                        // TODO clients don't send this
                    }
                    None => {}
                }
            }
            Ok(ws::Message::Close(reason)) => {
                ctx.close(reason);
                ctx.stop();
            }
            _ => ctx.stop(),
        }
    }
}

impl Sm64JsWsSession {
    fn new(addr: Addr<server::Sm64JsServer>) -> Self {
        Self {
            id: 0,
            hb: Instant::now(),
            hb_data: None,
            addr,
        }
    }

    /// helper method that sends ping to client every second.
    ///
    /// also this method checks heartbeats from client
    fn hb(&self, ctx: &mut <Self as Actor>::Context) {
        ctx.run_interval(HEARTBEAT_INTERVAL, |act, ctx| {
            if Instant::now().duration_since(act.hb) > CLIENT_TIMEOUT {
                println!("Websocket Client heartbeat failed, disconnecting!");

                ctx.stop();

                return;
            }

            if let Some(hb_data) = act.hb_data {
                if Instant::now().duration_since(hb_data) > CLIENT_TIMEOUT {
                    println!("Websocket Client timed out due to not sending data, disconnecting!");

                    ctx.stop();

                    return;
                }
            }

            ctx.ping(b"");
        });
    }
}

impl Handler<server::Message> for Sm64JsWsSession {
    type Result = ();

    fn handle(&mut self, msg: server::Message, ctx: &mut Self::Context) {
        ctx.binary(msg.0);
    }
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
