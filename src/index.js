import "./template.css"
import { GameInstance as Game } from "./game/Game"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

window.frameSpeed = 33

let start_render = 0

const createRingBuffer = (length) => {
    let pointer = 0
    const buffer = []

    return {
        push: (item) => {
            buffer[pointer] = item
            pointer = (pointer + 1) % length
            return item
        },
        getAvg: () => {
            return buffer.reduce((a, b) => a + b, 0) / length
        }
    }
}

const totalFrameTimeBuffer = createRingBuffer(10)
const renderFrameTimeBuffer = createRingBuffer(10)
const gameLogicFrameTimeBuffer = createRingBuffer(10)

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const setStatsUpdate = setInterval(() => {
    const totalFrameTimeAvg = totalFrameTimeBuffer.getAvg().toFixed(2)
    const renderFrameTimeAvg = renderFrameTimeBuffer.getAvg().toFixed(2)
    const gameLogicFrametimeAvg = gameLogicFrameTimeBuffer.getAvg().toFixed(2)
    const maxFps = (1000 / totalFrameTimeAvg).toFixed(2)
    document.getElementById("maxFps").innerHTML = `Effective Max Fps: ${maxFps}`
    document.getElementById("timing-total").innerHTML = `${totalFrameTimeAvg}ms`
    document.getElementById("timing-game").innerHTML = `${gameLogicFrametimeAvg}ms`
    document.getElementById("timing-render").innerHTML = `${renderFrameTimeAvg}ms`

}, 333)

const webpage_update = () => {
    document.getElementById("numTriangles").innerHTML = `Total Triangles this frame: ${window.totalTriangles}`
    document.getElementById("fps").innerHTML = `${ parseInt(1000 / window.frameSpeed)  } fps`
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
        const totalFrameTime = performance.now() - start
        gameLogicFrameTimeBuffer.push(start_render - start)
        renderFrameTimeBuffer.push(performance.now() - start_render)
        totalFrameTimeBuffer.push(performance.now() - start)
        webpage_update()

        await timeout(window.frameSpeed - totalFrameTime)
    }
    
}

console.log("Starting Application!")
main_func()

