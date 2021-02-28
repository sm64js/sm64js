import { GameInstance as Game } from "./game/Game"
import  * as Socket from "./mmo/socket.js"

let n_frames = 0

let frameSpeed = 33 ///units is ms, so 33 equates to 30 tps

const produce_one_frame = () => {

    Game.main_loop_one_iteration()
    Socket.post_main_loop_one_iteration(n_frames)
    /// Audio TODO

    //if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++
}

const main_func = () => {

    setInterval(() => {  /// gameMaster main loop
        const startTime = Date.now()
        produce_one_frame()
        if (Date.now() - startTime > 30) console.log("WARN - Server frame took longer than 30ms!!")
    }, frameSpeed)

}


///// Start Game
console.log("Starting Game!")
main_func()




