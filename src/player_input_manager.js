import * as Keydrown from "./keydrown.min.js"
import { gameData, sendChat, submitPlayerName } from "./socket"

/////// Keyboard / Gamepad Input ////////
window.playerInput = {}
window.banPlayerList = []
window.show_minimap = 0
let textboxfocus = false

const tauntsMap = {
    "!taunt-wave": 0x1D,
    "!taunt-die": 0x2E,
    "!taunt-star": 0xCD,
    "!taunt-die2": 0x79,
    "!taunt-shock": 0x7A,
    "!taunt-magic": 0xB3
}

const handleTaunt = (str) => { window.taunt = tauntsMap[str] }

//// Prevent scrolling for arrow keys
window.addEventListener("keydown", (e) => {

    textboxfocus = $("#chatbox").is(':focus') ||
                    $("#playerNameInput").is(':focus') ||
                    $("#ccPasteArea").is(':focus') ||
                    $("#banbox").is(':focus')

    if ($("#chatbox").is(':focus') && e.keyCode == 13) {

        const chatbox = document.getElementById('chatbox')

        if (chatbox.value[0] == '!') {
            handleTaunt(chatbox.value)
        } else {
            sendChat({ message: chatbox.value })
        }

        chatbox.value = ""
        chatbox.blur()
    }

    if ($("#banbox").is(':focus') && e.keyCode == 13) {
        const message = document.getElementById('banbox').value
        if (message.split(' ')[0] == '/signin') {
            window.admin = { token: message.split(' ')[1] }
        } else {
            window.banPlayerList.push(message)
        }
        document.getElementById('banbox').value = ""
        document.getElementById('banbox').blur()
    }

    if (!window.playerNameAccepted && e.keyCode == 13) {
        document.getElementById('playerNameInput').blur()
        submitPlayerName()
    }

    if (textboxfocus) return

    // space and arrow keys
    if ([32, 37, 38, 39, 40].includes(e.keyCode)) { e.preventDefault()  }

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

Keydrown.ESC.down(() => { window.fullWindowMode = false })

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

const defaultKeyboardButtonMapping = {
    a: 'space',
    b: 'b',
    start: 'enter',
    z: 'z',
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
    cu: 'i',
    cd: 'k',
    cl: 'j',
    cr: 'l',
    map: 'm',
    taunt: 't'
}
const keyboardButtonMapping = { ...defaultKeyboardButtonMapping }

const gamepadButtonMapping = { //works for xbox
    a: 0,
    b: 2,
    map: 4,
    taunt: 5,
    start: 9,
    z: 6,
    stickX: 0,
    stickY: 1,
    cStickX: 2,
    cStickY: 3
}

const defaultGamepadButtonMapping = { ...gamepadButtonMapping }


let deadzone = 0.08

if (localStorage['controls']) {
    Object.assign(keyboardButtonMapping, JSON.parse(localStorage['controls']).keyboard)
    Object.assign(gamepadButtonMapping, JSON.parse(localStorage['controls']).gamepad)
}

/// Fillout the select options - Keyboard only - gamepad does this on gamepad connect
Array.from(document.getElementsByTagName("select")).forEach(selectElem => {
    if (selectElem.hasAttribute("keyboardButton")) {
        allKeyboardButtons.forEach(key => {
            const option = document.createElement("option")
            option.value = key
            option.text = key
            selectElem.add(option)
        })
    }

    if (selectElem.hasAttribute("keyboardButton")) {
        selectElem.value = keyboardButtonMapping[selectElem.name]
    }
})

const keyboardControlsHtml = $('#keyboardControlsWindow').detach()
const gamepadControlsHtml = $('#gamepadControlsWindow').detach()

$('[data-toggle="keyboardControlsToggle"]').popover({
    container: "body",
    content: keyboardControlsHtml
})

$('[data-toggle="gamepadControlsToggle"]').popover({
    container: "body",
    content: gamepadControlsHtml
})

let gamepadIndex

window.addEventListener("gamepadconnected", function (e) {

    const gamepad = e.gamepad

    gamepadIndex = gamepad.index

    const numButtons = gamepad.buttons.length
    const numAxes = gamepad.axes.length

    $('[data-toggle="gamepadControlsToggle"]').popover('show')

    document.getElementById('noGamepadMessage').hidden = true
    document.getElementById('gamepadMessageDiv').hidden = false
    document.getElementById('gamepadMessage').innerHTML = `Detected Gamepad: "${gamepad.id.slice(0, 30)}" with ${numButtons} Buttons`

    ///Fillout the select options and set default value
    const controlsWindowDiv = document.getElementById('gamepadControlsWindow')
    controlsWindowDiv.querySelectorAll("select").forEach(selectElem => {
        if (selectElem.options.length == 0) { /// insert options
            if (selectElem.hasAttribute("gamepadButton")) {
                for (let i = 0; i < numButtons; i++) {
                    const option = document.createElement("option")
                    option.value = i
                    option.text = i
                    selectElem.add(option)
                }
            }
            if (selectElem.hasAttribute("gamepadAxes")) {
                for (let i = 0; i < numAxes; i++) {
                    const option = document.createElement("option")
                    option.value = i
                    option.text = i
                    selectElem.add(option)
                }
            }
        }
        selectElem.value = gamepadButtonMapping[selectElem.name]
    })

    $('[data-toggle="gamepadControlsToggle"]').popover('hide')
    
})


window.updateDeadZone = (data) => { deadzone = parseFloat(data) }

window.updateKeyboardMapping = (chosenKey, gameButton) => {
    keyboardButtonMapping[gameButton] = chosenKey
}

window.updateGamepadMapping = (chosenKey, gameButton) => {
    gamepadButtonMapping[gameButton] = parseInt(chosenKey)
}


window.saveControls = () => {
    localStorage['controls'] = JSON.stringify({
        keyboard: keyboardButtonMapping,
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
            map: gamepad.buttons[gamepadButtonMapping['map']].touched,
            taunt: gamepad.buttons[gamepadButtonMapping['taunt']].touched,
            cr: gamepad.axes[gamepadButtonMapping['cStickX']] && gamepad.axes[gamepadButtonMapping['cStickX']] > 0.5,
            cl: gamepad.axes[gamepadButtonMapping['cStickX']] && gamepad.axes[gamepadButtonMapping['cStickX']] < -0.5,
            cu: gamepad.axes[gamepadButtonMapping['cStickY']] && gamepad.axes[gamepadButtonMapping['cStickY']] < -0.5,
            cd: gamepad.axes[gamepadButtonMapping['cStickY']] && gamepad.axes[gamepadButtonMapping['cStickY']] > 0.5,
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
    let buttonDownCl = gamepadFinal.cl || keyboardFinal.cl
    let buttonDownCr = gamepadFinal.cr || keyboardFinal.cr
    let buttonDownCu = gamepadFinal.cu || keyboardFinal.cu
    let buttonDownCd = gamepadFinal.cd || keyboardFinal.cd
    let buttonDownMap = gamepadFinal.map || keyboardFinal.map
    let buttonDownTaunt = gamepadFinal.taunt || keyboardFinal.taunt

    window.playerInput = {
        stickX, stickY,
        stickMag: mag,

        buttonPressedA: buttonDownA && !window.playerInput.buttonDownA,
        buttonPressedStart: buttonDownStart && !window.playerInput.buttonDownStart,
        buttonPressedB: buttonDownB && !window.playerInput.buttonDownB,
        buttonPressedZ: buttonDownZ && !window.playerInput.buttonDownZ,
        buttonPressedCl: buttonDownCl && !window.playerInput.buttonDownCl && !buttonDownTaunt,
        buttonPressedCr: buttonDownCr && !window.playerInput.buttonDownCr && !buttonDownTaunt,
        buttonPressedCu: buttonDownCu && !window.playerInput.buttonDownCu && !buttonDownTaunt,
        buttonPressedCd: buttonDownCd && !window.playerInput.buttonDownCd && !buttonDownTaunt,
        buttonPressedMap: buttonDownMap && !window.playerInput.buttonDownMap,

        buttonDownA, buttonDownB, buttonDownZ, buttonDownStart, buttonDownCl, buttonDownCr, buttonDownCu, buttonDownCd, buttonDownMap, buttonDownTaunt,

        taunt: (Object.values(tauntsMap).includes(window.taunt)) ? window.taunt : undefined
    }

    window.taunt = undefined

    if (window.playerInput.buttonPressedMap) window.show_minimap += 1
    if (window.show_minimap > 2) window.show_minimap = 0

    if (gameData.marioState) gameData.marioState.controller = window.playerInput

    if (window.playerInput.buttonPressedStart && keyboardButtonMapping.start != "enter") {
        submitPlayerName()
    }

}
