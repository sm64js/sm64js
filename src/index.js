import "./template.css"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"
import { intro_seg7_texture_070086A0, intro_seg7_texture_07007EA0, intro_seg7_texture_0700B4A0, intro_seg7_texture_0700C4A0 } from "./levels/intro/leveldata"
import { title_texture_0A0001C0, title_texture_0A000E40, title_texture_0A001AC0, title_texture_0A002740 } from "./levels/intro/title_screen_bg"
import {
    gd_texture_mario_face_shine,
    gd_texture_red_star_0,
    gd_texture_red_star_1,
    gd_texture_red_star_2,
    gd_texture_red_star_3,
    gd_texture_red_star_4,
    gd_texture_red_star_5,
    gd_texture_red_star_6,
    gd_texture_red_star_7,
    gd_texture_white_star_0,
    gd_texture_white_star_1,
    gd_texture_white_star_2,
    gd_texture_white_star_3,
    gd_texture_white_star_4,
    gd_texture_white_star_5,
    gd_texture_white_star_6,
    gd_texture_white_star_7,
    gd_texture_sparkle_0,
    gd_texture_sparkle_1,
    gd_texture_sparkle_2,
    gd_texture_sparkle_3,
    gd_texture_sparkle_4
 } from "./goddard/GoddardRenderer"
import { GameInstance as Game } from "./game/Game"


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

    requestAnimationFrame(runGameWithMetrics)

    const elapsed = performance.now() - last_frame_start
    if (elapsed > frameSpeed) {
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

$('#romUpload').submit(
    (e) =>  {
        e.preventDefault()
        $.ajax({
            url: '/romUpload',
            type: 'POST',
            data: new FormData(e.target),
            processData: false,
            contentType: false,
            success: (extractedData) => {
                intro_seg7_texture_070086A0.push( ...extractedData['levels/intro/1.rgba16.png'].split(',') )
                intro_seg7_texture_07007EA0.push( ...extractedData['levels/intro/0.rgba16.png'].split(',') )
                intro_seg7_texture_0700B4A0.push( ...extractedData['levels/intro/2_copyright.rgba16.png'].split(','))
                intro_seg7_texture_0700C4A0.push( ...extractedData['levels/intro/3_tm.rgba16.png'].split(','))
                gd_texture_mario_face_shine.push( ...extractedData['textures/intro_raw/mario_face_shine.ia8.png'].split(','))
                gd_texture_red_star_0.push( ...extractedData['textures/intro_raw/red_star_0.rgba16.png'].split(','))
                gd_texture_red_star_1.push( ...extractedData['textures/intro_raw/red_star_1.rgba16.png'].split(','))
                gd_texture_red_star_2.push( ...extractedData['textures/intro_raw/red_star_2.rgba16.png'].split(','))
                gd_texture_red_star_3.push( ...extractedData['textures/intro_raw/red_star_3.rgba16.png'].split(','))
                gd_texture_red_star_4.push( ...extractedData['textures/intro_raw/red_star_4.rgba16.png'].split(','))
                gd_texture_red_star_5.push( ...extractedData['textures/intro_raw/red_star_5.rgba16.png'].split(','))
                gd_texture_red_star_6.push( ...extractedData['textures/intro_raw/red_star_6.rgba16.png'].split(','))
                gd_texture_red_star_7.push( ...extractedData['textures/intro_raw/red_star_7.rgba16.png'].split(','))
                gd_texture_white_star_0.push( ...extractedData['textures/intro_raw/white_star_0.rgba16.png'].split(','))
                gd_texture_white_star_1.push( ...extractedData['textures/intro_raw/white_star_1.rgba16.png'].split(','))
                gd_texture_white_star_2.push( ...extractedData['textures/intro_raw/white_star_2.rgba16.png'].split(','))
                gd_texture_white_star_3.push( ...extractedData['textures/intro_raw/white_star_3.rgba16.png'].split(','))
                gd_texture_white_star_4.push( ...extractedData['textures/intro_raw/white_star_4.rgba16.png'].split(','))
                gd_texture_white_star_5.push( ...extractedData['textures/intro_raw/white_star_5.rgba16.png'].split(','))
                gd_texture_white_star_6.push( ...extractedData['textures/intro_raw/white_star_6.rgba16.png'].split(','))
                gd_texture_white_star_7.push( ...extractedData['textures/intro_raw/white_star_7.rgba16.png'].split(','))
                gd_texture_sparkle_0.push( ...extractedData['textures/intro_raw/sparkle_0.rgba16.png'].split(','))
                gd_texture_sparkle_1.push( ...extractedData['textures/intro_raw/sparkle_1.rgba16.png'].split(','))
                gd_texture_sparkle_2.push( ...extractedData['textures/intro_raw/sparkle_2.rgba16.png'].split(','))
                gd_texture_sparkle_3.push( ...extractedData['textures/intro_raw/sparkle_3.rgba16.png'].split(','))
                gd_texture_sparkle_4.push( ...extractedData['textures/intro_raw/sparkle_4.rgba16.png'].split(','))
                title_texture_0A0001C0.push( ...extractedData['textures/title_screen_bg/title_screen_bg.001C0.rgba16.png'].split(','))
                title_texture_0A000E40.push( ...extractedData['textures/title_screen_bg/title_screen_bg.00E40.rgba16.png'].split(','))
                title_texture_0A001AC0.push( ...extractedData['textures/title_screen_bg/title_screen_bg.01AC0.rgba16.png'].split(','))
                title_texture_0A002740.push( ...extractedData['textures/title_screen_bg/title_screen_bg.02740.rgba16.png'].split(','))
                document.getElementById("startbutton").disabled = false
            }
        })
    }
)

window.addEventListener("load", function () {
    var elements = document.getElementsByClassName("rainbowText")
    for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i])
    }
})

const letterColors = ["#3e51fa", "#fa3e3e", "#00ff00", "yellow"]

function generateRainbowText(element) {
    var text = element.innerText
    element.innerHTML = ""
    for (let i = 0; i < text.length; i++) {
        let charElem = document.createElement("span")
        charElem.style.color = letterColors[i % 4]
        charElem.innerHTML = text[i]
        element.appendChild(charElem)
    }
}

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


