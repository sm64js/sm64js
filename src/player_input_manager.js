import * as Keydrown from "./keydrown.min.js"
import { sendChat } from "./socket.js"
import { gameData } from "./socket.js"

/////// Keyboard / Gamepad Input ////////
window.playerInput = {}

let textboxfocus = false


//// Prevent scrolling for arrow keys
window.addEventListener("keydown", (e) => {
    textboxfocus = $("#chatbox").is(':focus') || $("#playerNameInput").is(':focus')

    if ($("#chatbox").is(':focus') && e.keyCode == 13) {
        sendChat(document.getElementById('chatbox').value)
        document.getElementById('chatbox').value = ""
        document.getElementById('chatbox').blur()
    }

    if ($("#playerNameInput").is(':focus') && e.keyCode == 13) {
        document.getElementById('playerNameInput').blur()
    }

    // space and arrow keys
    if (textboxfocus) return
    if ([32, 37, 38, 39, 40].includes(e.keyCode) > -1) {
        e.preventDefault()
    }
}, false)

const keyboardButtons = {}

if (navigator.getGamepads) navigator.getGamepads()

const allKeyboardButtons = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm',
    'backspace', 'tab', 'space', 'shift', 'enter', 'up', 'down', 'left', 'right', 'ctrl'
]

Keydrown.Q.down(() => { keyboardButtons.q = true })
Keydrown.W.down(() => { keyboardButtons.w = true })
Keydrown.E.down(() => { keyboardButtons.e = true })
Keydrown.R.down(() => { keyboardButtons.r = true })
Keydrown.T.down(() => { keyboardButtons.t = true })
Keydrown.Y.down(() => { keyboardButtons.y = true })
Keydrown.U.down(() => { keyboardButtons.u = true })
Keydrown.I.down(() => { keyboardButtons.i = true })
Keydrown.O.down(() => { keyboardButtons.o = true })
Keydrown.P.down(() => { keyboardButtons.p = true })

Keydrown.A.down(() => { keyboardButtons.a = true })
Keydrown.S.down(() => { keyboardButtons.s = true })
Keydrown.D.down(() => { keyboardButtons.d = true })
Keydrown.F.down(() => { keyboardButtons.f = true })
Keydrown.G.down(() => { keyboardButtons.g = true })
Keydrown.H.down(() => { keyboardButtons.h = true })
Keydrown.J.down(() => { keyboardButtons.j = true })
Keydrown.K.down(() => { keyboardButtons.k = true })
Keydrown.L.down(() => { keyboardButtons.l = true })

Keydrown.Z.down(() => { keyboardButtons.z = true })
Keydrown.X.down(() => { keyboardButtons.x = true })
Keydrown.C.down(() => { keyboardButtons.c = true })
Keydrown.V.down(() => { keyboardButtons.v = true })
Keydrown.B.down(() => { keyboardButtons.b = true })
Keydrown.N.down(() => { keyboardButtons.n = true })
Keydrown.M.down(() => { keyboardButtons.m = true })

Keydrown.BACKSPACE.down(() => { keyboardButtons.backspace = true })
Keydrown.TAB.down(() => { keyboardButtons.tab = true })
Keydrown.SHIFT.down(() => { keyboardButtons.shift = true })
Keydrown.SPACE.down(() => { keyboardButtons.space = true })
Keydrown.ENTER.down(() => { keyboardButtons.enter = true })
Keydrown.UP.down(() => { keyboardButtons.up = true })
Keydrown.DOWN.down(() => { keyboardButtons.down = true })
Keydrown.LEFT.down(() => { keyboardButtons.left = true })
Keydrown.RIGHT.down(() => { keyboardButtons.right = true })
Keydrown.CTRL.down(() => { keyboardButtons.ctrl = true })


///////////

Keydrown.Q.up(() => { keyboardButtons.q = false })
Keydrown.W.up(() => { keyboardButtons.w = false })
Keydrown.E.up(() => { keyboardButtons.e = false })
Keydrown.R.up(() => { keyboardButtons.r = false })
Keydrown.T.up(() => { keyboardButtons.t = false })
Keydrown.Y.up(() => { keyboardButtons.y = false })
Keydrown.U.up(() => { keyboardButtons.u = false })
Keydrown.I.up(() => { keyboardButtons.i = false })
Keydrown.O.up(() => { keyboardButtons.o = false })
Keydrown.P.up(() => { keyboardButtons.p = false })

Keydrown.A.up(() => { keyboardButtons.a = false })
Keydrown.S.up(() => { keyboardButtons.s = false })
Keydrown.D.up(() => { keyboardButtons.d = false })
Keydrown.F.up(() => { keyboardButtons.f = false })
Keydrown.G.up(() => { keyboardButtons.g = false })
Keydrown.H.up(() => { keyboardButtons.h = false })
Keydrown.J.up(() => { keyboardButtons.j = false })
Keydrown.K.up(() => { keyboardButtons.k = false })
Keydrown.L.up(() => { keyboardButtons.l = false })

Keydrown.Z.up(() => { keyboardButtons.z = false })
Keydrown.X.up(() => { keyboardButtons.x = false })
Keydrown.C.up(() => { keyboardButtons.c = false })
Keydrown.V.up(() => { keyboardButtons.v = false })
Keydrown.B.up(() => { keyboardButtons.b = false })
Keydrown.N.up(() => { keyboardButtons.n = false })
Keydrown.M.up(() => { keyboardButtons.m = false })

Keydrown.BACKSPACE.up(() => { keyboardButtons.backspace = false })
Keydrown.TAB.up(() => { keyboardButtons.tab = false })
Keydrown.SHIFT.up(() => { keyboardButtons.shift = false })
Keydrown.SPACE.up(() => { keyboardButtons.space = false })
Keydrown.ENTER.up(() => { keyboardButtons.enter = false })
Keydrown.UP.up(() => { keyboardButtons.up = false })
Keydrown.DOWN.up(() => { keyboardButtons.down = false })
Keydrown.LEFT.up(() => { keyboardButtons.left = false })
Keydrown.RIGHT.up(() => { keyboardButtons.right = false })
Keydrown.CTRL.up(() => { keyboardButtons.ctrl = false })

const keyboardButtonMapping = {
    a: 'space',
    b: 'b',
    start: 'enter',
    z: 'z',
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right'
}
const defaultKeyboardButtonMapping = { ...keyboardButtonMapping }

const gamepadButtonMapping = { //works for xbox
    a: 0,
    b: 2,
    start: 9,
    z: 6,
    stickX: 0,
    stickY: 1
}

const defaultGamepadButtonMapping = { ...gamepadButtonMapping }


let deadzone = 0.08

if (localStorage['sm64jsControls']) {
    Object.assign(keyboardButtonMapping, JSON.parse(localStorage['sm64jsControls']).keybaord)
    Object.assign(gamepadButtonMapping, JSON.parse(localStorage['sm64jsControls']).gamepad)
}

/// Fillout the select options - Keyboard only - gamepad does this on load popover
Array.from(document.getElementsByTagName("select")).forEach(selectElem => {
    if (selectElem.hasAttribute("keyboardButton")) {
        allKeyboardButtons.forEach(key => {
            const option = document.createElement("option")
            option.value = key
            option.text = key
            selectElem.add(option)
        })
    }
})

$('[data-toggle="keyboardControlsToggle"]').popover({
    container: "body",
    content: function () {
        return $('#keyboardControlsWindow').clone()
    },
})

$('[data-toggle="gamepadControlsToggle"]').popover({
    container: "body",
    content: function () {
        return $('#gamepadControlsWindow').clone()
    },
})

$('[data-toggle="keyboardControlsToggle"]').on('shown.bs.popover', () => {
    /// set default values
    Array.from(document.getElementsByTagName("select")).forEach(selectElem => {
        if (selectElem.hasAttribute("keyboardButton")) {
            selectElem.value = keyboardButtonMapping[selectElem.name]
        }
    })
})

$('[data-toggle="gamepadControlsToggle"]').on('shown.bs.popover', () => {
    const messages = document.getElementsByClassName('gamepadMessage')

    const gamepadIndex = window.switchGamepad ? 1 : 0

    if (navigator.getGamepads && navigator.getGamepads()[gamepadIndex]) {

        const gamepad = navigator.getGamepads()[gamepadIndex]
        const numButtons = gamepad.buttons.length
        const numAxes = gamepad.axes.length

        Array.from(messages).forEach(msg => {
            msg.innerHTML = `
                Detected Gamepad: ${gamepad.id.slice(0, 9)} with ${numButtons} Buttons. 
                <br/>  
                Is your gamepad not working correctly? 
                <br/>
                Contact me so I can support more gamepads. Discord: snuffysasa#2779 / 
                <a href="https://github.com/sm64js/sm64js/issues" style="color:black" >Github</a>
            `
        })

        ///Fillout the select options and set default value
        Array.from(document.getElementsByTagName("select")).forEach(selectElem => {
            if (selectElem.options.length == 0) { /// insert options
                if (selectElem.hasAttribute("gamepadButton")) {
                    for (let i = 0; i < navigator.getGamepads()[gamepadIndex].buttons.length; i++) {
                        const option = document.createElement("option")
                        option.value = i
                        option.text = i
                        selectElem.add(option)
                    }
                }
                if (selectElem.hasAttribute("gamepadAxes")) {
                    for (let i = 0; i < navigator.getGamepads()[gamepadIndex].axes.length; i++) {
                        const option = document.createElement("option")
                        option.value = i
                        option.text = i
                        selectElem.add(option)
                    }
                }
            }
            selectElem.value = gamepadButtonMapping[selectElem.name]
        })
    } else {  /// no gamepad detected
        Array.from(messages).forEach(msg => {
            msg.innerHTML = `No Gamepad Detected Yet`
        })
    }

})


window.updateDeadZone = (data) => { deadzone = parseFloat(data) }
window.switchGamepadFunc = () => { window.switchGamepad = true }

window.updateKeyboardMapping = (chosenKey, gameButton) => {
    keyboardButtonMapping[gameButton] = chosenKey
}

window.updateGamepadMapping = (chosenKey, gameButton) => {
    gamepadButtonMapping[gameButton] = chosenKey
}


window.saveControls = () => {
    localStorage['sm64jsControls'] = JSON.stringify({
        keybaord: keyboardButtonMapping,
        gamepad: gamepadButtonMapping
    })
}

window.loadDefaultControls = () => {
    Object.assign(keyboardButtonMapping, defaultKeyboardButtonMapping)
    Object.assign(gamepadButtonMapping, defaultGamepadButtonMapping)
    /// set default values
    Array.from(document.getElementsByTagName("select")).forEach(selectElem => {
        if (selectElem.hasAttribute("keyboardButton")) {
            selectElem.value = keyboardButtonMapping[selectElem.name]
        }
        if (selectElem.hasAttribute("gamepadButton")) {
            selectElem.value = gamepadButtonMapping[selectElem.name]
        }
        if (selectElem.hasAttribute("gamepadAxes")) {
            selectElem.value = gamepadButtonMapping[selectElem.name]
        }
    })
}

const applyDeadzone = (number, threshold) => {
    let percentage = (Math.abs(number) - threshold) / (1 - threshold)

    if (percentage < 0) percentage = 0

    return percentage * (number > 0 ? 1 : -1)
}

export const playerInputUpdate = () => {

    Keydrown.tick()

    const keyboardFinal = {}, gamepadFinal = {}

    Object.entries(keyboardButtonMapping).forEach(([key, value]) => {
        keyboardFinal[key] = Boolean(keyboardButtons[value]) && !textboxfocus
    })

    const gamepadIndex = window.switchGamepad ? 1 : 0

    let stickX = 0, stickY = 0, gamepad
    if (navigator.getGamepads) {
        gamepad = navigator.getGamepads()[gamepadIndex]
    }
    if (gamepad) {
        stickX = gamepad.axes[gamepadButtonMapping['stickX']]
        stickY = gamepad.axes[gamepadButtonMapping['stickY']] * -1
        Object.assign(gamepadFinal, {
            a: gamepad.buttons[gamepadButtonMapping['a']].touched,
            b: gamepad.buttons[gamepadButtonMapping['b']].touched,
            start: gamepad.buttons[gamepadButtonMapping['start']].touched,
            z: gamepad.buttons[gamepadButtonMapping['z']].touched,
        })
    }

    stickX = applyDeadzone(stickX, deadzone)
    stickY = applyDeadzone(stickY, deadzone)

    if (stickX == 0 && stickY == 0) {
        if (keyboardFinal.right) stickX += 1
        if (keyboardFinal.left) stickX -= 1

        if (keyboardFinal.up) stickY += 1
        if (keyboardFinal.down) stickY -= 1
    }

    stickX = Math.round(stickX * 64)
    stickY = Math.round(stickY * 64)

    let mag = Math.sqrt((stickX * stickX) + (stickY * stickY))

    let buttonDownA = gamepadFinal.a || keyboardFinal.a
    let buttonDownB = gamepadFinal.b || keyboardFinal.b
    let buttonDownStart = gamepadFinal.start || keyboardFinal.start
    let buttonDownZ = gamepadFinal.z || keyboardFinal.z

    window.playerInput = {
        stickX, stickY,
        stickMag: mag,

        buttonPressedA: buttonDownA && !window.playerInput.buttonDownA,
        buttonPressedStart: buttonDownStart && !window.playerInput.buttonDownStart,
        buttonPressedB: buttonDownB && !window.playerInput.buttonDownB,
        buttonPressedZ: buttonDownZ && !window.playerInput.buttonDownZ,

        buttonDownA, buttonDownB, buttonDownZ, buttonDownStart
    }
    
    if (gameData.marioState) gameData.marioState.controller = window.playerInput

    //// Repeat for other player
/*    stickX = 0, stickY = 0

    if (keyboardButtons.right) stickX += 1
    if (keyboardButtons.left) stickX -= 1

    if (keyboardButtons.up) stickY += 1
    if (keyboardButtons.down) stickY -= 1

    mag = Math.sqrt((stickX * stickX) + (stickY * stickY))
    ratio = mag > 0 ? (64 / mag) : 0
    stickX *= ratio
    stickY *= ratio

    window.playerInput2 = { stickX, stickY, stickMag: mag * ratio }*/

}
