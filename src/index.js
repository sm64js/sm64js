import "./template.css"
import "./romTextureLoader.js"
import * as Keydrown from "./keydrown.min.js"
import { GameInstance as Game } from "./game/Game"
import { playerInputUpdate } from "./player_input_manager"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"

const send_display_list = (gfx_list) => {
    start_render = performance.now()
    GFX.run(gfx_list)
}

let n_frames = 0
const produce_one_frame = () => {

    if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++

    GFX.start_frame()
    Game.main_loop_one_iteration()

    /// Audio TODO

    GFX.end_frame()

}

const runGameWithMetrics = () => {

    if (window.kill) throw "stopping game execution"

    requestAnimationFrame(runGameWithMetrics)

    const elapsed = performance.now() - last_frame_start
    if (elapsed > frameSpeed) {

        playerInputUpdate() /// Keyboard buttons / joystick process to game input commands

        const start_frame = performance.now()
        last_frame_start = start_frame - (elapsed % frameSpeed)
        produce_one_frame()
        const finished_frame = performance.now()
        webpage_update()
        gameLogicFrameTimeBuffer.push(start_render - start_frame)
        renderFrameTimeBuffer.push(finished_frame - start_render)
        totalFrameTimeBuffer.push(finished_frame - start_frame)
    }
}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)

    runGameWithMetrics()

}

let frameSpeed = 33.3

let start_render = 0
let last_frame_start = 0


//////////////////// Some more website stuff

const letterColors = ["#3e51fa", "#fa3e3e", "#00ff00", "yellow"]

const generateRainbowText = (element) => {
    var text = element.innerText
    element.innerHTML = ""
    for (let i = 0; i < text.length; i++) {
        let charElem = document.createElement("span")
        charElem.style.color = letterColors[i % 4]
        charElem.innerHTML = text[i]
        element.appendChild(charElem)
    }
}

Array.from(document.getElementsByClassName("rainbowText")).forEach((element) => {
    generateRainbowText(element)
})

const createRingBuffer = (length) => {
    let index = 0
    const buffer = []

    return {
        push: (item) => {
            buffer[index] = item
            index = (index + 1) % length
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

const setStatsUpdate = setInterval(() => {
    const totalFrameTimeAvg = totalFrameTimeBuffer.getAvg().toFixed(2)
    const renderFrameTimeAvg = renderFrameTimeBuffer.getAvg().toFixed(2)
    const gameLogicFrametimeAvg = gameLogicFrameTimeBuffer.getAvg().toFixed(2)
    const maxFps = (1000 / totalFrameTimeAvg).toFixed(2)
    document.getElementById("maxFps").innerHTML = `Effective Max Fps: ${maxFps}`
    document.getElementById("timing-total").innerHTML = `${totalFrameTimeAvg}ms`
    document.getElementById("timing-game").innerHTML = `${gameLogicFrametimeAvg}ms`
    document.getElementById("timing-render").innerHTML = `${renderFrameTimeAvg}ms`
}, 500)

const webpage_update = () => {
    document.getElementById("numTriangles").innerHTML = `Total Triangles this frame: ${window.totalTriangles}`
}

document.getElementById("slider").addEventListener('change', (event) => {
    frameSpeed = 1000 / event.target.value
    document.getElementById("fps").innerHTML = `${event.target.value} fps`
})

document.getElementById("startbutton").addEventListener('click', () => {
    /// Start
    console.log("Starting Game!")
    main_func()
})
//////////////


