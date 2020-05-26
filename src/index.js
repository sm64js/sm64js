import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

let initialized_game = false

const send_display_list = (gfx_list) => {
    if (!initialized_game) return
    GFX.run(gfx_list)
}

const produce_one_frame = () => {
    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio

    GFX.end_frame()
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported

    Game.attachInterfaceToGfxProcessor(send_display_list)

    initialized_game = true

    const n_frames = 75 //78
    for (let i = 0; i < n_frames; i++) { produce_one_frame() }
    
    console.log("reached max frames - end program")
}

console.log("Starting Application!")
main_func()

