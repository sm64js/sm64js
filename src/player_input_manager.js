import * as Keydrown from "./keydrown.min.js"

/////// Keyboard / Gamepad Input ////////

//// Prevent scrolling for arrow keys
window.addEventListener("keydown", (e) => {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault()
    }
}, false)

const keyboardButtons = { w: false, a: false, s: false, d: false, up: false, down: false, left: false, right: false, space: false, enter: false, b: false, z: false }

const controllerButtons = { a: false, b: false, start: false, z: false }

Keydrown.W.down(() => { keyboardButtons.w = true })
Keydrown.A.down(() => { keyboardButtons.a = true })
Keydrown.S.down(() => { keyboardButtons.s = true })
Keydrown.D.down(() => { keyboardButtons.d = true })

Keydrown.SPACE.down(() => { keyboardButtons.space = true })
Keydrown.ENTER.down(() => { keyboardButtons.enter = true })
Keydrown.B.down(() => { keyboardButtons.b = true })
Keydrown.Z.down(() => { keyboardButtons.z = true })


Keydrown.UP.down(() => { keyboardButtons.up = true })
Keydrown.DOWN.down(() => { keyboardButtons.down = true })
Keydrown.LEFT.down(() => { keyboardButtons.left = true })
Keydrown.RIGHT.down(() => { keyboardButtons.right = true })

Keydrown.W.up(() => { keyboardButtons.w = false })
Keydrown.A.up(() => { keyboardButtons.a = false })
Keydrown.S.up(() => { keyboardButtons.s = false })
Keydrown.D.up(() => { keyboardButtons.d = false })

Keydrown.SPACE.up(() => { keyboardButtons.space = false })
Keydrown.ENTER.up(() => { keyboardButtons.enter = false })
Keydrown.B.up(() => { keyboardButtons.b = false })
Keydrown.Z.up(() => { keyboardButtons.z = false })

Keydrown.UP.up(() => { keyboardButtons.up = false })
Keydrown.DOWN.up(() => { keyboardButtons.down = false })
Keydrown.LEFT.up(() => { keyboardButtons.left = false })
Keydrown.RIGHT.up(() => { keyboardButtons.right = false })

export const playerInputUpdate = () => {
    Keydrown.tick()
    let stickX = 0, stickY = 0, gamepad
    if (navigator.getGamepads) {
        gamepad = navigator.getGamepads()[0];
    }
    if (gamepad) {
        stickX = gamepad.axes[0]
        stickY = gamepad.axes[1] * -1
        controllerButtons.a = gamepad.buttons[0].touched
        controllerButtons.b = gamepad.buttons[2].touched
        controllerButtons.start = gamepad.buttons[9].touched
        controllerButtons.z = gamepad.buttons[6].touched
    }

    if (stickX < 0.08 && stickX > -0.08) stickX = 0.0
    if (stickY < 0.08 && stickY > -0.08) stickY = 0.0

    if (stickX == 0 && stickY == 0) {
        if (keyboardButtons.d) stickX += 1
        if (keyboardButtons.a) stickX -= 1

        if (keyboardButtons.w) stickY += 1
        if (keyboardButtons.s) stickY -= 1
    }

    stickX = Math.round(stickX * 64)
    stickY = Math.round(stickY * 64)

    let mag = Math.sqrt((stickX * stickX) + (stickY * stickY))

    let buttonDownA = controllerButtons.a || keyboardButtons.space
    let buttonDownB = controllerButtons.b || keyboardButtons.b
    let buttonDownStart = controllerButtons.start || keyboardButtons.enter
    let buttonDownZ = controllerButtons.z || keyboardButtons.z

    window.playerInput = {
        stickX, stickY,
        stickMag: mag,

        buttonPressedA: buttonDownA && !window.playerInput.buttonDownA,
        buttonPressedStart: buttonDownStart && !window.playerInput.buttonDownStart,
        buttonPressedB: buttonDownB && !window.playerInput.buttonDownB,
        buttonPressedZ: buttonDownZ && !window.playerInput.buttonDownZ,

        buttonDownA, buttonDownB, buttonDownZ, buttonDownStart
    }

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
