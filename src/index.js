import "./template.css"
import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

let max_frame_time = 0
let game_time = 0
let render_time = 0
let total_frame_time = 0
window.frameSpeed = 33

let start_render = 0

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const webpage_update = () => {
    document.getElementById("numTriangles").innerHTML = `Total Triangles this frame: ${window.totalTriangles}`
    document.getElementById("fps").innerHTML = `${ parseInt(1000 / window.frameSpeed)  } fps`
    document.getElementById("timing").innerHTML = `Total Frame Time: ${total_frame_time.toFixed(2)}ms  <br> Game Logic: ${game_time.toFixed(2)}ms <br> Rendering/WebGL: ${render_time.toFixed(2)}ms`
}

let n_frames = 0

const send_display_list = (gfx_list) => {
    start_render = performance.now()
    GFX.run(gfx_list)
}

const produce_one_frame = () => {

    if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++

    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio

    GFX.end_frame()

}

const main_func = async () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)

    while (1) {

        const start = performance.now()

        produce_one_frame()

        /// Webpage
        game_time = start_render - start
        render_time = performance.now() - start_render
        total_frame_time = performance.now() - start
        if (total_frame_time > max_frame_time) max_frame_time = total_frame_time
        webpage_update()

        await timeout(window.frameSpeed - total_frame_time)
    }
    
}

console.log("Starting Application!")
main_func()

