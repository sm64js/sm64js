import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

let n_frames = 0

const send_display_list = (gfx_list) => {
    GFX.run(gfx_list)
}

const produce_one_frame = () => {

    if (n_frames > 100000) { throw "Hit max frames" }
    console.log("new frame: " + n_frames)
    n_frames++

    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio

    GFX.end_frame()
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)
     
    setInterval(produce_one_frame, 36) //36 seems good
    
}

console.log("Starting Application!")
main_func()

