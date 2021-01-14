import { checkForRom } from "./romTextureLoader.js"
import { GameInstance as Game } from "./game/Game"
import { playerInputUpdate } from "./player_input_manager"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"
import  * as Socket from "./socket.js"
import "./cosmetics"
import "./cmts_cosmetics"
import "./template.css"


const send_display_list = (gfx_list) => { GFX.run(gfx_list) }

let n_frames = 0
let target_time = 0
let frameSpeed = 0.03

const produce_one_frame = () => {

    const start_frame = performance.now()

    playerInputUpdate() /// Keyboard buttons / joystick process to game input commands
    //Socket.send_controller_update(n_frames)
    GFX.start_frame()
    Game.main_loop_one_iteration()
    Socket.post_main_loop_one_iteration(n_frames)
    /// Audio TODO

    const finished_frame = performance.now()
    totalFrameTimeBuffer.push(finished_frame - start_frame)

    //if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++
}

//// implementation from Emil <3
const on_anim_frame = (time) => {

    time *= frameSpeed

    if (time >= target_time + 10.0) {
        // We are lagging 10 frames behind, probably due to coming back after inactivity,
        // so reset, with a small margin to avoid potential jitter later.
        target_time = time - 0.010
    }

    for (let i = 0; i < 2; i++) {
        // If refresh rate is 15 Hz or something we might need to generate two frames
        if (time >= target_time) {
            produce_one_frame()
            target_time = target_time + 1.0
        }
    }

    if (window.kill) throw "stopping game execution"
    requestAnimationFrame(on_anim_frame)

}

const main_func = () => {

    /// WebGL class and n64GfxProcessor class are initialized with their constructor when they are imported
    Game.attachInterfaceToGfxProcessor(send_display_list)

    on_anim_frame()

}


//////////////////// Some more website stuff

$('[data-toggle="popover"]').popover({
    container: "body",
    content: function () {
        return $('#controlsPopover').clone()
    },
})

const url = new URL(window.location.href)

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

const setStatsUpdate = setInterval(() => {
    const totalFrameTimeAvg = totalFrameTimeBuffer.getAvg().toFixed(2)
    const maxFps = (1000 / totalFrameTimeAvg).toFixed(2)
    window.fps = parseInt(maxFps)
    document.getElementById("maxFps").innerHTML = `Effective Max Fps: ${maxFps}`
    document.getElementById("timing-total").innerHTML = `${totalFrameTimeAvg}ms`
}, 500)


window.enterFullScreenMode = () => {
    const dstCanvas = document.getElementById('fullCanvas')
    dstCanvas.requestFullscreen()
}

///// Start Game
const rulesVersion = 11
let gameStarted = false

document.getElementById("startbutton").addEventListener('click', () => {
    if (localStorage['rules'] != rulesVersion) return
    if (gameStarted) {
        window.location.search = '&autostart=1' /// Refresh page (Reset Game)
    }
    else startGame()
})

document.getElementById("deleteRom").addEventListener('click', () => {
    localStorage.removeItem('sm64jsAssets')
    window.location.reload()
})

const startGame = () => {
    console.log("Starting Game!")
    gameStarted = true

    document.getElementById("startbutton").classList.remove('btn-success')
    document.getElementById("startbutton").classList.add('btn-light')
    document.getElementById("startbutton").innerHTML = "🔄 Reset Game"

    document.getElementById("connectedMsg").hidden = false

    main_func()
}

window.onload = () => {
    if (checkForRom() && url.searchParams.get("autostart") && localStorage['rules'] == rulesVersion) startGame()
    document.getElementById('mainContent').hidden = false
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && !gameStarted) {
        if (document.getElementById("startbutton").disabled) {
            $("#romSelect").effect("shake", { direction: "down", times: 3, distance: 3 }, 500)
        } else startGame()
    }
})

if (localStorage['rules'] != rulesVersion) $('#rules-modal').modal({ backdrop: 'static', keyboard: false })
$("#rules-modal").on('hide.bs.modal', () => { localStorage['rules'] = rulesVersion })
