import { networkData, submitPlayerName } from "./socket"
import { SkinValue } from "../../proto/mario_pb"
import iro from "./iro.min"

export const defaultSkinData = () => {
    return {
        overalls: [0x00, 0x00, 0x7f, 0x00, 0x00, 0xff],
        hat: [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00],
        shirt: [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00],
        gloves: [0x7f, 0x7f, 0x7f, 0xff, 0xff, 0xff],
        boots: [0x39, 0x0e, 0x07, 0x72, 0x1c, 0x0e],
        skin: [0x7f, 0x60, 0x3c, 0xfe, 0xc1, 0x79],
        hair: [0x39, 0x03, 0x00, 0x73, 0x06, 0x00],
        parachute: [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00],
        customCapState: 0
    }
}

const luigi = {
    overalls: [34,0,127,69,0,255],
    hat: [0,127,0,0,255,0],
    shirt: [0,127,0,0,255,0],
    gloves: [127,127,127,255,255,255],
    boots: [57,14,7,114,28,14],
    skin: [127,96,60,254,193,121],
    hair: [57,3,0,115,6,0],
    parachute: [0,127,0,0,255,0],
    customCapState: 2
}

const wario = {
    overalls: [78,17,125,156,35,251],
    hat: [127,127,0,255,255,0],
    shirt: [127,127,0,255,255,0],
    gloves: [127,127,127,255,255,255],
    boots: [11,67,1,23,135,2],
    skin: [127,87,61,255,175,123],
    hair: [73,32,11,146,65,23],
    parachute: [127,127,0,255,255,0],
    customCapState: 4
}


const smb3Mario = {
    overalls: [0,0,0,0,0,0],
    hat: [127,0,0,255,0,0],
    shirt: [127,0,0,255,0,0],
    gloves: [127,96,60,254,193,121],
    boots: [127,0,0,255,0,0],
    skin: [127,96,60,254,193,121],
    hair: [0,0,0,0,0,0],
    parachute: [127,0,0,255,0,0],
    customCapState: 0
}

const smb3Luigi = {
    overalls: [0,0,0,0,0,0],
    hat: [0,127,0,0,255,0],
    shirt: [0,127,0,0,255,0],
    gloves: [127,96,60,254,193,121],
    boots: [0,127,0,0,255,0],
    skin: [127,96,60,254,193,121],
    hair: [0,0,0,0,0,0],
    parachute: [127,0,0,255,0,0],
    customCapState: 2
}

const waluigi = {
    overalls: [0,17,33,0,35,66],
    hat: [53,19,67,106,38,135],
    shirt: [53,19,67,106,38,135],
    gloves: [127,127,127,255,255,255],
    boots: [85,42,7,171,85,14],
    skin: [127,92,54,254,185,108],
    hair: [89,47,0,179,95,0],
    parachute: [53,19,67,106,38,135],
    customCapState: 2
}

const granddad = {
    overalls: [148,59,67,247,119,88],
    hat: [122,0,0,122,0,0],
    shirt: [82,11,0,165,22,1],
    gloves: [127,127,127,255,255,255],
    boots: [127,127,127,255,255,255],
    skin: [127,127,127,255,255,255],
    hair: [0,59,123,0,119,247],
    parachute: [127,0,0,255,0,0],
    customCapState: 0
}

const ssMario = {
    overalls: [127,0,0,255,0,0],
    hat: [127,0,0,255,0,0],
    shirt: [0,0,127,0,0,255],
    gloves: [127,127,127,255,255,255],
    boots: [57,14,7,114,28,14],
    skin: [127,96,60,254,193,121],
    hair: [0,0,0,0,0,0],
    parachute: [127,0,0,255,0,0],
    customCapState: 0
}

const ssLuigi = {
    overalls: [0,127,0,0,255,0],
    hat: [0,127,0,0,255,0],
    shirt: [0,0,127,0,0,255],
    gloves: [127,127,127,255,255,255],
    boots: [57,14,7,114,28,14],
    skin: [127,96,60,254,193,121],
    hair: [22,0,3,37,0,6],
    parachute: [0,127,0,0,255,0],
    customCapState: 2
}

const rMario = {
    overalls: "r",
    hat: "r",
    shirt: "r",
    gloves: "r",
    boots: "r",
    skin: "r",
    hair: "r",
    parachute: "r",
    customCapState: 0
}

const rLuigi = {
    overalls: "r",
    hat: "r",
    shirt: "r",
    gloves: "r",
    boots: "r",
    skin: "r",
    hair: "r",
    parachute: "r",
    customCapState: 2
}

const rWario = {
    overalls: "r",
    hat: "r",
    shirt: "r",
    gloves: "r",
    boots: "r",
    skin: "r",
    hair: "r",
    parachute: "r",
    customCapState: 4
}

const skinPresetIndex = [
    defaultSkinData(),
    luigi,
    wario,
    smb3Mario,
    smb3Luigi,
    waluigi,
    granddad,
    ssMario,
    ssLuigi,
    rMario,
    rLuigi,
    rWario
]

// Initialize color and ambient color wheels
window.colorPicker = new iro.ColorPicker('#picker', {
    width: 120
})
window.ambientPicker = new iro.ColorPicker('#ambpicker', {
    width: 120
})
window.colorPicker.on('input:move', function(color) {
    window.updateColors(color)
})
window.ambientPicker.on('input:move', function(color) {
    window.updateAmbientColors(color)
})

const componentToHex = (col) => {
    let hex = col.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}
const rgb2hex = (r,g,b) => { return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) }
window.hex2ambient = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let colors = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
    colors.r /= 2
    colors.g /= 2
    colors.b /= 2
    return rgb2hex(Math.floor(colors.r), Math.floor(colors.g), Math.floor(colors.b))
}

const get_char = () => {
	return Math.floor(window.myMario.skinData.customCapState/2)%3
}

const colorInput = document.getElementById("colorInput")
const ambientInput = document.getElementById("ambientInput")

// Update the colors on the wheel
window.updateWheel = () => {
    // update types too because why not
    document.getElementById("characterType").value = get_char()
    for (let i = 0; i < skinPresetIndex.length; i++) {
        if (window.myMario.skinData == skinPresetIndex[i]) {
            document.getElementById("presetBox").value = i
        }
    }

    let skinType = document.getElementById("skinTypes").value
    if (window.myMario.skinData[skinType].includes("r")) return

    window.colorPicker.color.red = window.myMario.skinData[skinType][3]
    window.colorPicker.color.green = window.myMario.skinData[skinType][4]
    window.colorPicker.color.blue = window.myMario.skinData[skinType][5]
    colorInput.value = window.colorPicker.color.hexString

    window.ambientPicker.color.red = window.myMario.skinData[skinType][0]
    window.ambientPicker.color.green = window.myMario.skinData[skinType][1]
    window.ambientPicker.color.blue = window.myMario.skinData[skinType][2]
    ambientInput.value = window.ambientPicker.color.hexString
}

// Update colors from color wheel data
window.updateColors = (color) => {
    let skinType = document.getElementById("skinTypes").value
    if (window.myMario.skinData[skinType].includes("r")) return

    window.myMario.skinData[skinType][3] = Math.floor(color.red)
    window.myMario.skinData[skinType][4] = Math.floor(color.green)
    window.myMario.skinData[skinType][5] = Math.floor(color.blue)
    if (document.getElementById("updateAmb").checked) {
        window.myMario.skinData[skinType][0] = Math.floor(color.red/2)
        window.myMario.skinData[skinType][1] = Math.floor(color.green/2)
        window.myMario.skinData[skinType][2] = Math.floor(color.blue/2)

        window.ambientPicker.color.red = window.myMario.skinData[skinType][0]
        window.ambientPicker.color.green = window.myMario.skinData[skinType][1]
        window.ambientPicker.color.blue = window.myMario.skinData[skinType][2]
    }

    localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
}
// Update ambient colors from color wheel data
window.updateAmbientColors = (color) => {
    let skinType = document.getElementById("skinTypes").value
    if (window.myMario.skinData[skinType].includes("r")) return

    window.myMario.skinData[skinType][0] = Math.floor(color.red)
    window.myMario.skinData[skinType][1] = Math.floor(color.green)
    window.myMario.skinData[skinType][2] = Math.floor(color.blue)
    
    localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
}

// Set skin to a preset
window.updateSkinID = (skinID) => {
    window.myMario.skinData = skinPresetIndex[skinID]
    updateWheel()
    if (skinPresetIndex[skinID].customCapState == 0 || skinPresetIndex[skinID].customCapState == 1) {
        document.getElementById("characterType").value = 0
    } else {
        document.getElementById("characterType").value = 1
    }
    /// Save all
    Object.keys(window.myMario.skinData).forEach((skinType) => {
        localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
    })
}

window.toggleCapState = () => {
	if (Math.floor(window.myMario.skinData.customCapState/2)%4 == 1) {
		window.myMario.skinData.customCapState = window.myMario.skinData.customCapState%2 == 1 ? 2 : 3
	} else if (Math.floor(window.myMario.skinData.customCapState/2)%4 == 2) {
		window.myMario.skinData.customCapState = window.myMario.skinData.customCapState%2 == 1 ? 4 : 5
	} else if (Math.floor(window.myMario.skinData.customCapState/2)%4 == 3) {
		window.myMario.skinData.customCapState = window.myMario.skinData.customCapState%2 == 1 ? 6 : 7
	} else if (Math.floor(window.myMario.skinData.customCapState/2)%4 == 4) {
		window.myMario.skinData.customCapState = window.myMario.skinData.customCapState%2 == 1 ? 8 : 9
	} else {
		window.myMario.skinData.customCapState = window.myMario.skinData.customCapState%2 == 1 ? 0 : 1
	}
    localStorage[`skinData-customCapState`] = JSON.stringify(window.myMario.skinData.customCapState)
}

window.setCharacter = (index) => {
	window.myMario.skinData.customCapState = Math.floor(index*2)+window.myMario.skinData.customCapState%2
    /// Save all
    Object.keys(window.myMario.skinData).forEach((skinType) => {
        localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
    })
}

/// Load all
window.myMario = { skinData: defaultSkinData() }
Object.keys(window.myMario.skinData).forEach((skinType) => {
    const skinData = localStorage[`skinData-${skinType}`]
    if (skinData) window.myMario.skinData[skinType] = JSON.parse(skinData)
})

window.myMario.exportColors = () => {
    console.log("myMario.skinData = " + JSON.stringify(window.myMario.skinData))
}
window.myMario.saveSkin = () => {
    /// Save all
    Object.keys(window.myMario.skinData).forEach((skinType) => {
        localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
    })
}
window.myMario.importColors = (code) => {
    if (typeof code === 'string' || code instanceof String) {
        let importing = code
        if (importing.includes("myMario.skinData =")) {
            importing = importing.replace("window.myMario.skinData =", "")
            importing = importing.replace("myMario.skinData =", "")
            importing = importing.replace(" ", "")
            try {
                window.myMario.skinData = JSON.parse(importing)
            } catch (error) {
                return "Invalid skin data!"
            }
        } else {
            importing = importing.replace(" ", "")
            try {
                window.myMario.skinData = JSON.parse(importing)
            } catch (error) {
                return "Invalid skin data!"
            }
        }
    } else {
        try {
            window.myMario.skinData = code
            window.updateWheel()
        } catch (error) {
            return "Invalid skin data!"
        }
    }

    window.myMario.saveSkin()
}

if (localStorage.getItem("presetBox")) {
    document.getElementById("presetBox").value = localStorage.getItem("presetBox")
}
if (window.myMario.skinData.customCapState == 2 || window.myMario.skinData.customCapState == 3) { 
    document.getElementById("characterType").value = 1
}

const rainbowLights = [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00];
let rainbowState = 0;
export const updateRainbowSkin = () => {
	var VAL = 10;
	switch (rainbowState) {
		case (0) : {
			rainbowLights[3] += VAL;
			if (rainbowLights[3] >= 255) {rainbowState = 1}
			break;
		}
		case (1) : {
			rainbowLights[5] -= VAL; 
			if (rainbowLights[5] <= 0) {rainbowState = 2}
			break;
		}
		case (2) : {
			rainbowLights[4] += VAL;
			if (rainbowLights[4] >= 255) {rainbowState = 3}
			break;
		}
		case (3) : {
			rainbowLights[3] -= VAL;
			if (rainbowLights[3] <= 0) {rainbowState = 4}
			break;
		}
		case (4) : {
			rainbowLights[5] += VAL;
			if (rainbowLights[5] >= 255) {rainbowState = 5}
			break;
		}
		case (5) : {
			rainbowLights[4] -= VAL;
			if (rainbowLights[4] <= 0) {rainbowState = 0}
			break;
		}
	}
	if (rainbowLights[3] > 255) {rainbowLights[3] = 255}
	if (rainbowLights[4] > 255) {rainbowLights[4] = 255}
	if (rainbowLights[5] > 255) {rainbowLights[5] = 255}
	if (rainbowLights[3] < 0) {rainbowLights[3] = 0}
	if (rainbowLights[4] < 0) {rainbowLights[4] = 0}
	if (rainbowLights[5] < 0) {rainbowLights[5] = 0}
	rainbowLights[0] = rainbowLights[3] / 4;
	rainbowLights[1] = rainbowLights[4] / 4;
	rainbowLights[2] = rainbowLights[5] / 4;
	
	rainbowLights[0] = parseInt(rainbowLights[0]);
	rainbowLights[1] = parseInt(rainbowLights[1]);
	rainbowLights[2] = parseInt(rainbowLights[2]);
	rainbowLights[3] = parseInt(rainbowLights[3]);
	rainbowLights[4] = parseInt(rainbowLights[4]);
	rainbowLights[5] = parseInt(rainbowLights[5]);
}

document.getElementById('playerNameForm').onsubmit = (e) => {
 if (name.trim(‎ ).length > 4) {
    e.preventDefault()
    submitPlayerName()
 }
}

window.updatePlayerName = (name) => {
    if (name.trim().length < 3) {
        document.getElementById("playerNameInput").style.borderColor = "red"
        document.getElementById("playerNameInput").style.borderWidth = "3px"
    } else {
        document.getElementById("playerNameInput").style.borderColor = "blue"
        document.getElementById("playerNameInput").style.borderWidth = "1px"
    }
}

export const shakePlayerNameInput = () => {
    document.getElementById("playerNameResult").innerHTML = "Rejected"
    document.getElementById("playerNameResult").style.color = "red"
    document.getElementById("playerNameInput").style.borderColor = "red"
    document.getElementById("playerNameInput").style.borderWidth = "3px"
    // $("#playerNameRow").effect("shake", { direction: "down", times: 3, distance: 3 }, 500)
}

export const recvPlayerNameResponse = (msg) => {

    const accepted = msg.getAccepted()
    if (!accepted) {
        shakePlayerNameInput()
    } else {
        networkData.mySocketID = msg.getSocketId()
        document.getElementById("playerNameInput").style.borderColor = "blue"
        document.getElementById("playerNameInput").disabled = true
        document.getElementById("playerNameInput").style.backgroundColor = "lightgrey"
        document.getElementById("playerNameResult").style.color = "#00ff00"
        document.getElementById("playerNameResult").innerHTML = "Accepted"
        document.getElementById("playerNameButton").hidden = true
        document.getElementById("discordNameRow").hidden = true
        document.getElementById("customNameRow").hidden = true
        // document.getElementById("mapSelect").disabled = true
        window.playerNameAccepted = true
        //localStorage['playername'] = msg.getName()

        window.selectedMap = msg.getLevel()
    }
}

const fromSkinValue = (skinValue) => {
    switch (skinValue.getValueCase()) {
        case SkinValue.ValueCase.BYTES:
            const bytes = skinValue.getBytes()
            if (bytes != null) {
                return [
                    bytes & 0xff,
                    (bytes / Math.pow(2, 8)) & 0xff,
                    (bytes / Math.pow(2, 0x10)) & 0xff,
                    (bytes / Math.pow(2, 0x18)) & 0xff,
                    (bytes / Math.pow(2, 0x20)) & 0xff,
                    (bytes / Math.pow(2, 0x28)) & 0xff,
                ]
            }
            break
        case SkinValue.ValueCase.SPECIAL:
            const special = skinValue.getSpecial()
            if (special === SkinValue.SpecialSkinValues.RAINBOW) {
                return "r"
            }
            break
        case SkinValue.ValueCase.VALUE_NOT_SET:
        default:
    }
}

const coinsToAccountLevel = (numCoins) => {
    let level = 1; let coins = 40
    while (coins <= numCoins) { coins += (40 + level++ * 8) }
    return level
}

export const recvSkinData = (skinMsg) => { 
    const socket_id = skinMsg.getSocketid()

    if (socket_id === networkData.mySocketID) {
        window.myMario.accountCoins = skinMsg.getNumCoins()
        window.myMario.accountLevel = coinsToAccountLevel(skinMsg.getNumCoins())
    }

    if (socket_id === networkData.mySocketID ||
        networkData.remotePlayers[socket_id] == null) return

    const skinDataMsg = skinMsg.getSkindata()
    const skinData = {
        overalls: fromSkinValue(skinDataMsg.getOveralls()),
        hat: fromSkinValue(skinDataMsg.getHat()),
        shirt: fromSkinValue(skinDataMsg.getShirt()),
        gloves: fromSkinValue(skinDataMsg.getGloves()),
        boots: fromSkinValue(skinDataMsg.getBoots()),
        skin: fromSkinValue(skinDataMsg.getSkin()),
        hair: fromSkinValue(skinDataMsg.getHair()),
        parachute: fromSkinValue(skinDataMsg.getParachute()),
        customCapState: skinDataMsg.getCustomcapstate()
    }

    networkData.remotePlayers[socket_id].skinData = skinData
    networkData.remotePlayers[socket_id].playerName = skinMsg.getPlayername()
    networkData.remotePlayers[socket_id].accountCoins = skinMsg.getNumCoins()
    networkData.remotePlayers[socket_id].accountLevel = coinsToAccountLevel(skinMsg.getNumCoins())
}

const isValidSkinEntry = (skinEntry) => {
    return skinEntry === "r" ||
        skinEntry.length === 6 && !skinEntry.find(skinVal => isNaN(skinVal) || skinVal < 0 || skinVal > 255 || !Number.isInteger(skinVal))
}

export const validSkins = () => {
    const skinData = window.myMario.skinData
    if (!isValidSkinEntry(skinData.overalls)) return false
    if (!isValidSkinEntry(skinData.hat)) return false
    if (!isValidSkinEntry(skinData.shirt)) return false
    if (!isValidSkinEntry(skinData.gloves)) return false
    if (!isValidSkinEntry(skinData.boots)) return false
    if (!isValidSkinEntry(skinData.skin)) return false
    if (!isValidSkinEntry(skinData.hair)) return false
    if (!isValidSkinEntry(skinData.parachute)) return false
    if (skinData.customCapState < 0 || skinData.customCapState > 5) return false

    return true
}

export const getExtraRenderData = (socket_id) => {

    const myChat = window.myMario.chatData

    //// Local Mario
    if (socket_id == networkData.mySocketID) return {
        custom3D: {
            mario_overalls_lights: (window.myMario.skinData.overalls == "r" ? rainbowLights : window.myMario.skinData.overalls),
            mario_hat_lights: (window.myMario.skinData.hat == "r" ? rainbowLights : window.myMario.skinData.hat),
            mario_shirt_lights: (window.myMario.skinData.shirt == "r" ? rainbowLights : window.myMario.skinData.shirt),
            mario_gloves_lights: (window.myMario.skinData.gloves == "r" ? rainbowLights : window.myMario.skinData.gloves),
            mario_boots_lights: (window.myMario.skinData.boots == "r" ? rainbowLights : window.myMario.skinData.boots),
            mario_skin_lights: (window.myMario.skinData.skin == "r" ? rainbowLights : window.myMario.skinData.skin),
            mario_hair_lights: (window.myMario.skinData.hair == "r" ? rainbowLights : window.myMario.skinData.hair),
            mario_parachute_lights: (window.myMario.skinData.parachute == "r" ? rainbowLights : window.myMario.skinData.parachute),
        },
        custom2D: {
            playerName: "", // pName ? pName : null,
            chat: (myChat && myChat.timer > 0) ? myChat.msg : null,
            announcement: (networkData.announcement.timer > 0) ? networkData.announcement.message : null
        }
    }

    const remote = networkData.remotePlayers[socket_id]
    // const accountLevel = remote.accountLevel

    const remoteChat = remote.chatData
    const overalls = remote.skinData.overalls
    const hat = remote.skinData.hat
    const shirt = remote.skinData.shirt
    const gloves = remote.skinData.gloves
    const boots = remote.skinData.boots
    const skin = remote.skinData.skin
    const hair = remote.skinData.hair
    const parachute = remote.skinData.parachute

    return {
        custom3D: {
            mario_overalls_lights: (overalls == "r" ? rainbowLights : overalls),
            mario_shirt_lights: (shirt == "r" ? rainbowLights : shirt),
            mario_hat_lights: (hat == "r" ? rainbowLights : hat),
            mario_gloves_lights: (gloves == "r" ? rainbowLights : gloves),
            mario_boots_lights: (boots == "r" ? rainbowLights : boots),
            mario_skin_lights: (skin == "r" ? rainbowLights : skin),
            mario_hair_lights: (hair == "r" ? rainbowLights : hair),
            mario_parachute_lights: (parachute == "r" ? rainbowLights : parachute),
        },
        custom2D: {
            playerName: remote.playerName ? remote.playerName : null,
            chat: (remoteChat && remoteChat.timer > 0) ? remoteChat.msg : null,
            announcement: (networkData.announcement.timer > 0) ? networkData.announcement.message : null
        }

    }

}

window.myMario.freezeCamera = false
const hudButton = document.getElementById('hudButton')
const freezeButton = document.getElementById('freezeButton')
    
window.hideHUD = () => {
    window.sm64js.HUDHidden = !window.sm64js.HUDHidden
    hudButton.innerHTML = ('<div class="sm64button">' + (window.sm64js.HUDHidden ? "Unhide HUD" : "Hide HUD") +'</div>')
}

window.freezeCamera = () => {
    window.myMario.freezeCamera = !window.myMario.freezeCamera
    freezeButton.innerHTML = window.myMario.freezeCamera ? ('<div class="sm64button">' + 'Freeze Camera (ON)' + '</div>') : ('<div class="sm64button">' + 'Freeze Camera (OFF)' + '</div>')
}

