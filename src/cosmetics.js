import { networkData } from "./socket"

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

const storedPlayerName = localStorage['playername']
window.myMario = {
    playerName: storedPlayerName ? storedPlayerName : "Unnamed Player",
    skinData: defaultSkinData()
}
document.getElementById('playerNameInput').value = window.myMario.playerName

Object.keys(window.myMario.skinData).forEach((skinType) => {
    const skinData = localStorage[`skinData-${skinType}`]
    if (skinData) window.myMario.skinData[skinType] = JSON.parse(skinData)
})

window.rainbow = [0x7f, 0x00, 0x00, 0xff, 0x00, 0x00];
window.rainbowState = 0;
export const updateRainbowSkin = () => {
	var VAL = 10;
	switch (window.rainbowState) {
		case (0) : {
			window.rainbow[3] += VAL;
			if (window.rainbow[3] >= 255) {window.rainbowState = 1}
			break;
		}
		case (1) : {
			window.rainbow[5] -= VAL; 
			if (window.rainbow[5] <= 0) {window.rainbowState = 2}
			break;
		}
		case (2) : {
			window.rainbow[4] += VAL;
			if (window.rainbow[4] >= 255) {window.rainbowState = 3}
			break;
		}
		case (3) : {
			window.rainbow[3] -= VAL;
			if (window.rainbow[3] <= 0) {window.rainbowState = 4}
			break;
		}
		case (4) : {
			window.rainbow[5] += VAL;
			if (window.rainbow[5] >= 255) {window.rainbowState = 5}
			break;
		}
		case (5) : {
			window.rainbow[4] -= VAL;
			if (window.rainbow[4] <= 0) {window.rainbowState = 0}
			break;
		}
	}
	if (window.rainbow[3] > 255) {window.rainbow[3] = 255}
	if (window.rainbow[4] > 255) {window.rainbow[4] = 255}
	if (window.rainbow[5] > 255) {window.rainbow[5] = 255}
	if (window.rainbow[3] < 0) {window.rainbow[3] = 0}
	if (window.rainbow[4] < 0) {window.rainbow[4] = 0}
	if (window.rainbow[5] < 0) {window.rainbow[5] = 0}
	window.rainbow[0] = window.rainbow[3] / 4;
	window.rainbow[1] = window.rainbow[4] / 4;
	window.rainbow[2] = window.rainbow[5] / 4;
	
	window.rainbow[0] = parseInt(window.rainbow[0]);
	window.rainbow[1] = parseInt(window.rainbow[1]);
	window.rainbow[2] = parseInt(window.rainbow[2]);
	window.rainbow[3] = parseInt(window.rainbow[3]);
	window.rainbow[4] = parseInt(window.rainbow[4]);
	window.rainbow[5] = parseInt(window.rainbow[5]);
}

window.updatePlayerName = (name) => {
    if (name.length < 3) {
        document.getElementById("playerNameInput").style.borderColor = "red"
        document.getElementById("playerNameInput").style.borderWidth = "3px"
    } else {
        document.getElementById("playerNameInput").style.borderColor = "blue"
        document.getElementById("playerNameInput").style.borderWidth = "1px"
        window.myMario.playerName = name
        localStorage['playername'] = name
    }
}

export const recvSkinData = (msg) => { 
    if (msg.channel_id != networkData.mySocketID &&
        networkData.remotePlayers[msg.channel_id] == undefined) return

    networkData.remotePlayers[msg.channel_id].skinData = msg.skinData
}

export const validSkins = () => {
    if (window.myMario.skinData.overalls.length != 6 && window.myMario.skinData.overalls != "r") return false
    if (window.myMario.skinData.hat.length != 6 && window.myMario.skinData.hat != "r") return false
    if (window.myMario.skinData.shirt.length != 6 && window.myMario.skinData.shirt != "r") return false
    if (window.myMario.skinData.gloves.length != 6 && window.myMario.skinData.gloves != "r") return false
    if (window.myMario.skinData.boots.length != 6 && window.myMario.skinData.boots != "r") return false
    if (window.myMario.skinData.skin.length != 6 && window.myMario.skinData.skin != "r") return false
    if (window.myMario.skinData.hair.length != 6 && window.myMario.skinData.hair != "r") return false

    for (let i = 0; i < 6; i++) {
        let number = window.myMario.skinData.overalls[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.overalls != "r") return false
        number = window.myMario.skinData.hat[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.hat != "r") return false
        number = window.myMario.skinData.shirt[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.shirt != "r") return false
        number = window.myMario.skinData.gloves[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.gloves != "r") return false
        number = window.myMario.skinData.boots[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.boots != "r") return false
        number = window.myMario.skinData.skin[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.skin != "r") return false
        number = window.myMario.skinData.hair[i]
        if ((number < 0 || number > 255 || !Number.isInteger(number)) && window.myMario.skinData.hair != "r") return false
    }

    if (window.myMario.skinData.customCapState != 0 && window.myMario.skinData.customCapState != 1) return false

    return true

}

export const getExtraRenderData = (channel_id) => {

    const myChat = window.myMario.chatData

    if (channel_id == networkData.myChannelID) return {
        mario_overalls_lights: (window.myMario.skinData.overalls == "r" ? window.rainbow : window.myMario.skinData.overalls),
        mario_hat_lights: (window.myMario.skinData.hat == "r" ? window.rainbow : window.myMario.skinData.hat),
        mario_shirt_lights: (window.myMario.skinData.shirt == "r" ? window.rainbow : window.myMario.skinData.shirt),
        mario_gloves_lights: (window.myMario.skinData.gloves == "r" ? window.rainbow : window.myMario.skinData.gloves),
        mario_boots_lights: (window.myMario.skinData.boots == "r" ? window.rainbow : window.myMario.skinData.boots),
        mario_skin_lights: (window.myMario.skinData.skin == "r" ? window.rainbow : window.myMario.skinData.skin),
        mario_hair_lights: (window.myMario.skinData.hair == "r" ? window.rainbow : window.myMario.skinData.hair),
        chat: (myChat && myChat.timer > 0) ? myChat.msg : null
    }

    const remoteMario = networkData.remotePlayers[channel_id].marioState
    const remoteChat = networkData.remotePlayers[channel_id].chatData
    const overalls = networkData.remotePlayers[channel_id].skinData.overalls
    const hat = networkData.remotePlayers[channel_id].skinData.hat
    const shirt = networkData.remotePlayers[channel_id].skinData.shirt
    const gloves = networkData.remotePlayers[channel_id].skinData.gloves
    const boots = networkData.remotePlayers[channel_id].skinData.boots
    const skin = networkData.remotePlayers[channel_id].skinData.skin
    const hair = networkData.remotePlayers[channel_id].skinData.hair

    return {
        mario_overalls_lights: (overalls == "r" ? window.rainbow : overalls),
        mario_shirt_lights: (shirt == "r" ? window.rainbow : shirt),
        mario_hat_lights: (hat == "r" ? window.rainbow : hat),
        mario_gloves_lights: (gloves == "r" ? window.rainbow : gloves),
        mario_boots_lights: (boots == "r" ? window.rainbow : boots),
        mario_skin_lights: (skin == "r" ? window.rainbow : skin),
        mario_hair_lights: (hair == "r" ? window.rainbow : hair),
        playerName: remoteMario.playerName,
        chat: (remoteChat && remoteChat.timer > 0) ? remoteChat.msg : null
    }

}
