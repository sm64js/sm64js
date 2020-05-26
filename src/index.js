import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

let initialized_game = false
let n_frames = 0 //78

const send_display_list = (gfx_list) => {
    if (!initialized_game) return
    GFX.run(gfx_list)
}

const produce_one_frame = () => {

    if (n_frames > 91) { throw "Hit max frames" }
    n_frames++

    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio

    GFX.end_frame()
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported

    Game.attachInterfaceToGfxProcessor(send_display_list)

    initialized_game = true

    setInterval(produce_one_frame, 33)
    
    console.log("reached max frames - end program")
}

console.log("Starting Application!")
main_func()

