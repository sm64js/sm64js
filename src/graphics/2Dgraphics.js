import { networkData, gameData } from "../socket"
import * as Taunt from "./taunt"

const canvas2d = document.querySelector('#textCanvas')
const context2d = canvas2d.getContext('2d')

export const customData2D = { }

//Easier image defines for stuff like taunts.
const defImage = (w,h,path) => {
	var IMG = new Image(w,h)
	IMG.src = path
	return IMG
}

// Minimap Images - First number is the selected map and the table contains the image and player scale.
const Minimaps = {
	'm1000':{'img':defImage(401,401,'mini/minimaps/bob_mountain.png'),'playerScaler':1.0,'hasFlags':true},
	'm9':{'img':defImage(401,401,'mini/minimaps/bob_battlefield.png'),'playerScaler':1.82819,'hasFlags':false},
}
// Example: Minimaps[`m${window.selectedMap}`].img would return '1000's table on bob mount and '9's table on bob battlefield
const Player_Img = new Image(14, 14); Player_Img.src = 'mini/player.png'
const PlayerRemote_Img = new Image(14, 14); PlayerRemote_Img.src = 'mini/player_remote.png'
const PlayerRemote_lower_Img = new Image(14, 14); PlayerRemote_lower_Img.src = 'mini/player_remote_lower.png'
const PlayerRemote_upper_Img = new Image(14, 14); PlayerRemote_upper_Img.src = 'mini/player_remote_upper.png'
const flag_outline = new Image(14, 14); flag_outline.src = "mini/flag0.png"
const flag_base = new Image(14, 14); flag_base.src = "mini/flag1.png"

const Taunts = [
	{'img':defImage(32,32,'mini/taunts/skull.png'),'taunt':'!taunt-die'},
	{'img':defImage(32,32,'mini/taunts/wave.png'),'taunt':'!taunt-wave'},
	{'img':defImage(32,32,'mini/taunts/skull.png'),'taunt':'!taunt-die2'},
	{'img':defImage(32,32,'mini/taunts/star.png'),'taunt':'!taunt-star'},
	{'img':defImage(32,32,'mini/taunts/shock.png'),'taunt':'!taunt-shock'},
	{'img':defImage(32,32,'mini/taunts/magic.png'),'taunt':'!taunt-magic'}
]
const TauntWheel = defImage(128, 128, 'mini/tauntWheel.png')

const minimapEnabledLevel = () => {
    return Minimaps.[`m${window.selectedMap}`] != null
}

const getFlagColor = (i) => {
	switch (i) {
		case (0): {
			return [0.0,100.0,100.0]
		}
		case (1): {
			return [94.0,100.0,100.0]
		}
		case (2): {
			return [70.0,100.0,100.0]
		}
		case (3): {
			return [-87.0,100.0,100.0]
		}
		default: {
			return [0.0,-100.0,100.0]
		}
	}
}

const flagIcons = new Array(4).fill(0).map((unused, i) => {
    const newflagIcon = getFlagColor(i);
    return newflagIcon
})

const custom_draw_message_bubble = (text, fontsize, pixelX, pixelY, backgroundColor, backgroundAlpha, textColor, maxWidth) => {
    context2d.font = `bold ${fontsize}px verdana, sans-serif`
    const width = context2d.measureText(text).width

    context2d.fillStyle = backgroundColor
    context2d.globalAlpha = backgroundAlpha
    context2d.rect(pixelX - (width / 2) - 5, pixelY - 50, width + 10, 30)
    context2d.fill()
    context2d.globalCompositeOperation = 'source-over'

    context2d.globalAlpha = 1.0
    context2d.font = `bold ${fontsize}px verdana, sans-serif`
    context2d.textAlign = "center"
    context2d.fillStyle = textColor
    if (maxWidth) context2d.fillText(text, pixelX, pixelY - 30, [maxWidth])
    else context2d.fillText(text, pixelX, pixelY - 30)
    context2d.globalCompositeOperation = 'destination-over'
}


export const custom_draw_text = (x, y, w) => {

    context2d.save()

    const pixelX = ((x / w) * 0.5 + 0.5) * canvas2d.width
    const pixelY = ((y / w) * -0.5 + 0.5) * canvas2d.height

    if (customData2D.playerName) {
        context2d.globalAlpha = 0.8
        context2d.font = "bold 14px verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9400D3"
        context2d.fillText(customData2D.playerName, pixelX, pixelY)
    }

    if (customData2D.chat) {
        custom_draw_message_bubble(customData2D.chat, "16", pixelX, pixelY, "#FFFFFF", 0.8, "#000000")
    }

    if (customData2D.announcement) {
        custom_draw_message_bubble("Server Announcement:", "20", 320, 60, "#FFFFFF", 1.0, "#9400D3")
        custom_draw_message_bubble(customData2D.announcement, "18", 320, 90, "#FFFFFF", 1.0, "#9400D3", 640)
    }

    context2d.restore()

}


const drawMinimapIcon = (sprite, width, height, X, Z, scale_map, scale_icon) => {
    context2d.drawImage(sprite, (-(width / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + X * (scale_icon * scale_map)),
        (-(height / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + Z * (scale_icon * scale_map)), width * scale_map, height * scale_map)
}

const drawFlag = (sprite, width, height, X, Z, scale_map, scale_icon) => {
	context2d.filter = `hue-rotate(${sprite[0]}deg) saturate(${sprite[1]}) brightness(${sprite[2]})`;
    context2d.drawImage(flag_base, (-(width / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + X * (scale_icon * scale_map)),
        (-(height / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + Z * (scale_icon * scale_map)), width * scale_map, height * scale_map)
	context2d.filter = "none"
    context2d.drawImage(flag_outline, (-(width / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + X * (scale_icon * scale_map)),
        (-(height / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + Z * (scale_icon * scale_map)), width * scale_map, height * scale_map)
}

const drawMinimapIconRotation = (sprite, width, height, X, Z, scale_map, scale_icon, yaw) => {
    context2d.save()
    context2d.translate(parseInt((16 + ((128 * scale_map) / 2)) + X * (scale_icon * scale_map)),
        parseInt((16 + ((128 * scale_map) / 2)) + Z * (scale_icon * scale_map)))
    context2d.rotate(-yaw)
    context2d.drawImage(sprite, (-(width / 2) * (scale_map)), (-(height / 2) * (scale_map)), width * scale_map, height * scale_map)
    context2d.translate((width * scale_map) / 2, (height * scale_map) / 2)
    context2d.restore()
}

export const draw2Dpost3Drendering = () => {
    context2d.globalAlpha = 0.8
    if (window.latency) {
        context2d.font = "bold 14px verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9400D3"
        context2d.fillText(`Ping: ${window.latency}ms`, 580, 20)
    }
    if (!isNaN(window.fps)) {
        context2d.globalAlpha = 0.8
        context2d.font = "bold 14px verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9400D3"
        context2d.fillText(`fps: ${window.fps}`, 580, 40)
    }

    if (window.show_minimap > 0 && gameData.marioState && minimapEnabledLevel()) {
        context2d.globalAlpha = 0.8

        var scale = 0.25 + window.show_minimap
		var marScale = Minimaps[`m${window.selectedMap}`].playerScaler
        var miniScale = 0.00385
        context2d.drawImage(Minimaps[`m${window.selectedMap}`].img, 16, 16, 128 * scale, 128 * scale)
        Object.values(networkData.remotePlayers).forEach(data => { /// all remote marios - should just be dots
            const m = data.marioState
			if (m.pos[1] < gameData.marioState.pos[1] - 200) {
				drawMinimapIcon(PlayerRemote_lower_Img, 5, 5, m.pos[0]*marScale, m.pos[2]*marScale, scale, miniScale)
			} else if (m.pos[1] > gameData.marioState.pos[1] + 200) {
				drawMinimapIcon(PlayerRemote_upper_Img, 5, 5, m.pos[0]*marScale, m.pos[2]*marScale, scale, miniScale)
			} else {
				drawMinimapIcon(PlayerRemote_Img, 5, 5, m.pos[0]*marScale, m.pos[2]*marScale, scale, miniScale)
			}
        })
        const m = gameData.marioState  /// local mario - should be an arrow
        const yaw = ((m.faceAngle[1] * (Math.PI / 180)) / 180) - 3.111111
        drawMinimapIconRotation(Player_Img, 5, 5, m.pos[0]*marScale, m.pos[2]*marScale, scale, miniScale, yaw)
     
        if (window.show_minimap > 1 && Minimaps[`m${window.selectedMap}`].hasFlags) {
            flagIcons.forEach((flagIcon, i) => {
                drawFlag(flagIcon, 5, 5, networkData.flagData[i].pos[0]*marScale, networkData.flagData[i].pos[2]*marScale, scale, miniScale)
            })
        }
    }

    if (gameData.marioState && window.playerInput.buttonDownTaunt) {
        window.tauntOpened = true
        const SELECTED = Taunt.getSelectedTaunt()
        const wheelPos = Taunt.tauntsPosWheel[SELECTED]
        context2d.drawImage(TauntWheel,Taunt.tcx-(Taunt.gfxTscale*0.5),Taunt.tcy-(Taunt.gfxTscale*0.5),Taunt.gfxTscale,Taunt.gfxTscale)
        context2d.drawImage(Taunts[0].img,Taunt.tauntsPos[8][0],Taunt.tauntsPos[8][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(Taunts[1].img,Taunt.tauntsPos[1][0],Taunt.tauntsPos[1][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(Taunts[2].img,Taunt.tauntsPos[2][0],Taunt.tauntsPos[2][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(Taunts[3].img,Taunt.tauntsPos[4][0],Taunt.tauntsPos[4][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(Taunts[4].img,Taunt.tauntsPos[5][0],Taunt.tauntsPos[5][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(Taunts[5].img,Taunt.tauntsPos[6][0],Taunt.tauntsPos[6][1],Taunt.gfxTscaleICO,Taunt.gfxTscaleICO)
        context2d.drawImage(TauntWheel,wheelPos[0],wheelPos[1],(Taunt.gfxTscaleICO*1.1),(Taunt.gfxTscaleICO*1.1))
    }

    if (gameData.marioState && !window.playerInput.buttonDownTaunt && window.tauntOpened) {
		window.tauntOpened = false
		const TAUNT = Taunt.tauntsMap[Taunt.getSelectedTaunt()]
		if (TAUNT != -1) window.taunt = TAUNT
	}
}