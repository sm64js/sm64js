import { checkForRom } from "./romTextureLoader.js"
import { GameInstance as Game } from "./game/Game"
import { playerInputUpdate } from "./player_input_manager"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"
import moment from "moment"
import  * as Socket from "./socket.js"
import "./cosmetics"
import "./cmts_cosmetics"
import "./template.css"
import "./countdown-widget.css"


const send_display_list = (gfx_list) => {
    start_render = performance.now()
    GFX.run(gfx_list)
}

let n_frames = 0
let target_time = 0
let frameSpeed = 0.03
let start_render = 0

const produce_one_frame = () => {

    const start_frame = performance.now()

    //if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++

    playerInputUpdate() /// Keyboard buttons / joystick process to game input commands
    Socket.send_controller_update(n_frames)
    GFX.start_frame()
    Game.main_loop_one_iteration()
    Socket.post_main_loop_one_iteration(n_frames)
    GFX.end_frame()

    /// Audio TODO

    const finished_frame = performance.now()
    webpage_update()
    gameLogicFrameTimeBuffer.push(start_render - start_frame)
    renderFrameTimeBuffer.push(finished_frame - start_render)
    totalFrameTimeBuffer.push(finished_frame - start_frame)
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

/*document.getElementById("slider").addEventListener('change', (event) => {
    frameSpeed = 1000 / event.target.value
    document.getElementById("fps").innerHTML = `${event.target.value} fps`
})*/

window.enterFullScreenMode = () => {
    const dstCanvas = document.getElementById('fullCanvas')
    dstCanvas.requestFullscreen()
}

///// Start Game
const rulesVersion = 2
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

if (localStorage['rules'] != rulesVersion) $('#rules-modal').modal({ backdrop: 'static', keyboard: false })
$("#rules-modal").on('hide.bs.modal', () => { localStorage['rules'] = rulesVersion })


$(document).ready(function () {
    function getTimeRemaining(endtime) {
        var t = (endtime - moment().unix()) * 1000
        if (t < 0) { return false }
        var seconds = Math.floor((t / 1000) % 60)
        var minutes = Math.floor((t / 1000 / 60) % 60)
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        var days = Math.floor(t / (1000 * 60 * 60 * 24))
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id)
        var daysSpan = clock.querySelector('.days')
        var hoursSpan = clock.querySelector('.hours')
        var minutesSpan = clock.querySelector('.minutes')
        var secondsSpan = clock.querySelector('.seconds')
        function updateClock() {
            var t = getTimeRemaining(endtime)
            if (t) {
                daysSpan.innerHTML = t.days
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
            } else {
                clearInterval(timeinterval)
            }
        }

        updateClock()
        var timeinterval = setInterval(updateClock, 1000)
    }
    initializeClock('clockdiv', 1606590000)
})