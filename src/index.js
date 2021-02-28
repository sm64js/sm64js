import { checkForRom } from "./romTextureLoader.js"
import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"
import  * as Socket from "./mmo/socket.js"
//import "./mmo/cosmetics"

window.gameMasterDebug = true

const send_display_list = (gfx_list) => { if (window.gameMasterDebug) GFX.run(gfx_list) }

let n_frames = 0
let target_time = 0
let frameSpeed = 33 ///units is ms, so 30 equates to 33fps

const produce_one_frame = () => {

    Game.main_loop_one_iteration()
    Socket.post_main_loop_one_iteration(n_frames)
    /// Audio TODO

    //if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)

    setInterval(() => {  /// gameMaster main loop
        const startTime = performance.now()
        produce_one_frame()
        if (performance.now() - startTime > 30) console.log("WARN - Server frame took longer than 30ms!!")
    }, frameSpeed)

}


///// Start Game


const startGame = () => {
    console.log("Starting Game!")

    main_func()
}

checkForRom()
startGame()


