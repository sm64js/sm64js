﻿import { loadDataIntoGame } from "./romTextureLoader.js"
import { GameInstance as Game } from "./game/Game"
import { playerInputUpdate } from "./player_input_manager"
import { n64GfxProcessorInstance as GFX } from "./graphics/n64GfxProcessor"
import  * as Socket from "./mmo/socket.js"
import "./mmo/cosmetics"
import "./mmo/cmts_cosmetics"
import "./stylesheet.css"


const send_display_list = (gfx_list) => { GFX.run(gfx_list) }

window.pvp = true

let n_frames = 0
let target_time = 0
let frameSpeed = 0.03
let reset_delay = 0
export const textureVersion = 37

const produce_one_frame = () => {
	let respText = ""
		if (reset_delay > 0) {
			window.reset = false;
			let buff = Math.round(reset_delay / 30)
			respText = ` (${buff})`
			reset_delay--
		}
	
    const start_frame = performance.now()

    playerInputUpdate() /// Keyboard buttons / joystick process to game input commands
    //Socket.send_controller_update(n_frames)
    GFX.start_frame()
    Game.main_loop_one_iteration()
    Socket.post_main_loop_one_iteration(n_frames)
    /// Audio TODO

    const finished_frame = performance.now()
    totalFrameTimeBuffer.push(finished_frame - start_frame)

	if (window.reset == true && reset_delay < 1) reset_delay = (30 * 45)  /// 45 Seconds

    //if (n_frames > 100000) { throw "Hit max frames" }
    //console.log("new frame: " + n_frames)
    n_frames++
	document.getElementById("respawnButton").innerHTML = `Respawn${respText}`
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

//const url_hash = new URLSearchParams(window.location.hash.slice(1))
const url_params = new URLSearchParams(window.location.search)

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
        url_params.set('autostart', 1)
        window.location.search = url_params /// Refresh page (Reset Game)
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

    document.getElementById("startbutton").classList.remove('green-button')
    document.getElementById("startbutton").classList.add('yellow-button')
    document.getElementById("startbutton").innerHTML = "🔄 Reset Game"

    document.getElementById("connectedMsg").hidden = false
	
    main_func()
}

window.togglePvp = () => {
	window.pvp = !window.pvp
	document.getElementById("pvpButton").innerHTML = ('PvP: ' + (window.pvp ? 'On' : 'Off'))
}

window.onload = async () => {
    if (checkForRom() && url_params.has("autostart") && localStorage['rules'] == rulesVersion) startGame()
    document.getElementById('mainContent').hidden = false

    ///Discord
/*    if (url_hash.has("access_token")) {
        const accessToken = url_hash.get("access_token")
        const tokenType = url_hash.get("token_type")

        const fragment = new URLSearchParams(window.location.hash.slice(1))

        const discordFetch = fetch('https://discord.com/api/users/@me', {
            headers: { authorization: `${tokenType} ${accessToken}` }
        })

        discordFetch.then(res => res.json()).then(response => {
            const { username, discriminator } = response
            console.log(username, discriminator)
            //document.getElementById('info').innerText += ` ${username}#${discriminator}`
        }).catch(console.error)
    }*/
/*    if (url_params.has("code")) {
        const serverFetch = fetch(`http://localhost:3080/discord`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: url_params.get("code") })
        })

    }*/

    if (url_params.has('code')) {

        /// send access code to server
        const state = JSON.parse(decodeURIComponent(url_params.get("state")))
        const res = await fetch(`${process.env.BACKEND_URL ?? ''}/api/login/${state.type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: url_params.get("code") }),
            credentials: 'include'
        })
        const success = Socket.recvAuthorizedUser(res)

        if (success) {
            const url = new URL(window.location.href)
            url.searchParams.delete('code')
            url.searchParams.delete('state')
            url.pathname = '/'
            history.replaceState({ state: 'login' }, '', url)
        }
    } else {
        const res = await fetch(`${process.env.BACKEND_URL ?? ''}/api/login`, {
            method: 'POST',
            credentials: 'include'
        })
        Socket.recvAuthorizedUser(res)
    }
    Socket.loadSocket()

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

const checkForRom = () => {   /// happens one time when the page is loaded
    if (localStorage['sm64jsAssets']) {
        const data = JSON.parse(localStorage['sm64jsAssets'])
        if (data.textureVersion == textureVersion) {
            loadDataIntoGame(data)
            return true
        }
    }

    const url = new URL(window.location.href)
    if (url.searchParams.get("romExternal")) {
        const msgElement = document.getElementById('romMessage')
        msgElement.innerHTML = "Transfering ROM Data..."
        msgElement.style = "color:#ff0;"
        //TODO transfer ROM to client and extract
        ///extractAssetsFromRom and url.searchParams.get("romExternal")
        throw "temporarily unsupported"
    }


    return false
}
