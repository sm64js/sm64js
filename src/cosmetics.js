import { networkData, submitPlayerName } from "./socket"
import { SkinValue } from "../proto/mario_pb"

export const defaultSkinData = () => {
    return {
        overalls: [0x00, 0x00, 0x7f, 0x00, 0x00, 0xff],
        hat: [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00],
        shirt: [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00],
        gloves: [0x7f, 0x7f, 0x7f, 0xff, 0xff, 0xff],
        boots: [0x39, 0x0e, 0x07, 0x72, 0x1c, 0x0e],
        skin: [0x7f, 0x60, 0x3c, 0xfe, 0xc1, 0x79],
        hair: [0x39, 0x03, 0x00, 0x73, 0x06, 0x00],
        customCapState: 0
    }
}

const overallsPresets = [
    [0x00, 0x00, 0x7f, 0x00, 0x00, 0xff ],
    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ],
    [0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ],
    [0x7f, 0x00, 0x7f, 0xff, 0x00, 0xff ],
    [0x7f, 0x7f, 0x7f, 0xff, 0xff, 0xff ],
    [0x7f, 0x60, 0x3c, 0xfe, 0xc1, 0x79 ],
    [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00 ],
    [0x7f, 0x00, 0x7f, 0xff, 0x00, 0xff ],
    [0x39, 0x0e, 0x07, 0x72, 0x1c, 0x0e ],
    [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00 ]
]

const hatShirtPresets = [
    [ 0x7f, 0x00, 0x00, 0xff, 0x00, 0x00 ],
    [ 0x7f, 0x7f, 0x00, 0xff, 0xff, 0x00 ],
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ],
    [ 0x7f, 0x7f, 0x00, 0xff, 0xff, 0x00 ],
    [ 0x7f, 0x7f, 0x7f, 0xff, 0xff, 0xff ],
    [ 0x39, 0x0e, 0x07, 0x72, 0x1c, 0x0e ],
    [ 0x00, 0x00, 0x7f, 0x00, 0x00, 0xff ],
    [ 0x00, 0x7f, 0x7f, 0x00, 0xff, 0xff ],
    [ 0x00, 0x7f, 0x00, 0x00, 0xff, 0x00 ],
    [ 0x7f, 0x7f, 0x00, 0xff, 0xff, 0x00 ]
]

window.updateSkinID = (skinID) => {
    window.myMario.skinData = defaultSkinData()
    window.myMario.skinData.overalls = overallsPresets[skinID]
    window.myMario.skinData.hat = hatShirtPresets[skinID]
    window.myMario.skinData.shirt = hatShirtPresets[skinID]

    /// Save all
    Object.keys(window.myMario.skinData).forEach((skinType) => {
        localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
    })
}

const skinCustomizerHtml = $('#skinCustomizerWindow').detach()

window.setSkinSliderValues = () => {
    /// set default values
    let skinType = document.getElementById("skinTypes").value
    for (let i = 0; i < 6; i++) {
        document.getElementById("skinSliderRangeDisplay" + i).innerHTML = window.myMario.skinData[skinType][i]
        const slider = document.getElementById("skinSliderValue" + i)
        slider.value = window.myMario.skinData[skinType][i]
        const percent = (slider.value / 255) * 100
        const color = getComputedStyle(slider).borderColor
        slider.style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + percent + '%, #fff ' + percent + '%, white 100%)'
    }
}

$('[data-toggle="skinCustomizerToggle"]').popover({
    container: "body",
    html: true,
    sanitize: false,
    content: skinCustomizerHtml,
})

$('[data-toggle="skinCustomizerToggle"]').on('shown.bs.popover', () => { window.setSkinSliderValues() })

window.toggleCapState = () => {
    window.myMario.skinData.customCapState = window.myMario.skinData.customCapState == 1 ? 0 : 1
    localStorage[`skinData-customCapState`] = JSON.stringify(window.myMario.skinData.customCapState)
}

window.customSkinUpdate = (slider) => {
    let color = getComputedStyle(slider).borderColor

    let percent = (slider.value / 255) * 100
    slider.style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + percent + '%, #fff ' + percent + '%, white 100%)'

    let index = slider.id.slice(-1)
    document.getElementById("skinSliderRangeDisplay" + index).innerHTML = slider.value

    let skinType = document.getElementById("skinTypes").value
    let newValue = parseInt(document.getElementById("skinSliderValue" + index).value)
    window.myMario.skinData[skinType][index] = newValue

    if (index > 2) {
        index -= 3
        newValue = parseInt(newValue / 2)
        slider = document.getElementById("skinSliderValue" + index)
        slider.value = newValue
        color = getComputedStyle(slider).borderColor
        percent = (slider.value / 255) * 100
        slider.style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + percent + '%, #fff ' + percent + '%, white 100%)'

        document.getElementById("skinSliderRangeDisplay" + index).innerHTML = slider.value
        window.myMario.skinData[skinType][index] = newValue
    }

    localStorage[`skinData-${skinType}`] = JSON.stringify(window.myMario.skinData[skinType])
}


/// Load all
window.myMario = { skinData: defaultSkinData() }
Object.keys(window.myMario.skinData).forEach((skinType) => {
    const skinData = localStorage[`skinData-${skinType}`]
    if (skinData) window.myMario.skinData[skinType] = JSON.parse(skinData)
})
if (localStorage['playername']) document.getElementById('playerNameInput').value = localStorage['playername']

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
    submitPlayerName()
    e.preventDefault()
}

window.updatePlayerName = (name) => {
    if (name.length < 3) {
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
    $("#playerNameRow").effect("shake", { direction: "down", times: 3, distance: 3 }, 500)
}

export const recvPlayerNameResponse = (msg) => {

    const accepted = msg.getAccepted()
    if (!accepted) {
        shakePlayerNameInput()
    } else  {
        document.getElementById("playerNameInput").style.borderColor = "blue"
        document.getElementById("playerNameInput").disabled = true
        document.getElementById("playerNameInput").style.backgroundColor = "lightgrey"
        document.getElementById("playerNameResult").style.color = "#00ff00"
        document.getElementById("playerNameResult").innerHTML = "Accepted"
        document.getElementById("playerNameButton").hidden = true
        document.getElementById("mapSelect").disabled = true
        window.playerNameAccepted = true
        localStorage['playername'] = msg.getName()

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

export const recvSkinData = (skinMsg) => { 
    const socket_id = skinMsg.getSocketid()
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
        customCapState: skinDataMsg.getCustomcapstate()
    }

    networkData.remotePlayers[socket_id].skinData = skinData
    networkData.remotePlayers[socket_id].playerName = skinMsg.getPlayername()
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
    if (skinData.customCapState !== 0 && skinData.customCapState !== 1) return false

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
        },
        custom2D: {
            chat: (myChat && myChat.timer > 0) ? myChat.msg : null,
            announcement: (networkData.announcement.timer > 0) ? networkData.announcement.message : null
        }
    }

    const remote = networkData.remotePlayers[socket_id]

    const remoteChat = remote.chatData
    const overalls = remote.skinData.overalls
    const hat = remote.skinData.hat
    const shirt = remote.skinData.shirt
    const gloves = remote.skinData.gloves
    const boots = remote.skinData.boots
    const skin = remote.skinData.skin
    const hair = remote.skinData.hair

    return {
        custom3D: {
            mario_overalls_lights: (overalls == "r" ? rainbowLights : overalls),
            mario_shirt_lights: (shirt == "r" ? rainbowLights : shirt),
            mario_hat_lights: (hat == "r" ? rainbowLights : hat),
            mario_gloves_lights: (gloves == "r" ? rainbowLights : gloves),
            mario_boots_lights: (boots == "r" ? rainbowLights : boots),
            mario_skin_lights: (skin == "r" ? rainbowLights : skin),
            mario_hair_lights: (hair == "r" ? rainbowLights : hair),
        },
        custom2D: {
            playerName: remote.playerName ? remote.playerName : null,
            chat: (remoteChat && remoteChat.timer > 0) ? remoteChat.msg : null,
            announcement: (networkData.announcement.timer > 0) ? networkData.announcement.message : null
        }

    }

}
