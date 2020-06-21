import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

let max_frame_time = 0
let game_time = 0
let render_time = 0
let total_frame_time = 0

let start_render = 0

const webpage_update = () => {
    document.getElementById("numTriangles").innerHTML = `Total Triangles this frame: ${window.totalTriangles}`
    document.getElementById("timing").innerHTML = `Total Frame Time: ${total_frame_time.toFixed(2)}ms  <br> Game Logic: ${game_time.toFixed(2)}ms <br> Rendering/WebGL: ${render_time.toFixed(2)}ms`
}

let n_frames = 0

const send_display_list = (gfx_list) => {
    start_render = performance.now()
    GFX.run(gfx_list)
}

const produce_one_frame = () => {

    const start = performance.now()

    if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++

    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio

    GFX.end_frame()

    /// Webpage
    game_time = start_render - start
    render_time = performance.now() - start_render
    total_frame_time = performance.now() - start
    if (total_frame_time > max_frame_time) max_frame_time = total_frame_time
    webpage_update()
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)
     
    setInterval(produce_one_frame, 30) //36 seems good
    
}

console.log("Starting Application!")
main_func()

