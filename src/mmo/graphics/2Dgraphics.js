import { networkData, gameData } from "../socket"
import * as Taunt from "./taunt"

const canvas2d = document.querySelector('#textCanvas')
const context2d = canvas2d.getContext('2d')

const fx2d = document.querySelector('#fxCanvas')
const contextFX2d = fx2d.getContext('2d')

export const customData2D = { }

//Easier image defines for stuff like taunts.
const defImage = (w,h,path) => {
	var IMG = new Image(w,h)
	IMG.src = path
	return IMG
}
const marioHealthWedges = [
    defImage(128, 128,'mmo/assets/HUD/meter_0.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_1.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_2.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_3.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_4.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_5.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_6.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_7.png'),
    defImage(128, 128,'mmo/assets/HUD/meter_8.png')
]
// Minimap Images - First number is the selected map and the table contains the image and player scale.
const Minimaps = {
	'm1000':{'img':defImage(401,401,'mmo/assets/minimaps/maps/bob_mountain.png'),'playerScaler':1.0,'hasFlags':true},
	'm1002':{'img':defImage(401,401,'mmo/assets/minimaps/maps/starman.png'),'playerScaler':2.15,'hasFlags':false},
    'm1003':{'img':defImage(401,401,'mmo/assets/minimaps/maps/gj.png'),'playerScaler':1.5,'hasFlags':false},
	'm9':{'img':defImage(401,401,'mmo/assets/minimaps/maps/bob_battlefield.png'),'playerScaler':1.82819,'hasFlags':true},
	'm16':{'img':defImage(401,401,'mmo/assets/minimaps/maps/castle_grounds.png'),'playerScaler':1.80144,'hasFlags':true},
	'm36':{'img':defImage(401,401,'mmo/assets/minimaps/maps/ttm.png'),'playerScaler':1.9838,'hasFlags':true},
	'm1001':{'img':defImage(401,401,'mmo/assets/minimaps/maps/ctf00.png'),'playerScaler':1.2,'hasFlags':true},
	'm999':{'img':defImage(401,401,'mmo/assets/minimaps/maps/clouded.png'),'playerScaler':1.60176,'hasFlags':false},
	'm56':{'img':defImage(401,401,'mmo/assets/minimaps/maps/ccs.png'),'playerScaler':1.8,'hasFlags':false},
    'm1004':{'img':defImage(401,401,'mmo/assets/minimaps/maps/raceway.png'),'playerScaler':0.69,'hasFlags':false},
}
// Example: Minimaps[`m${window.selectedMap}`].img would return '1000's table on bob mount and '9's table on bob battlefield
const Player_Img = new Image(14, 14); Player_Img.src = 'mmo/assets/minimaps/player.png'
const PlayerRemote_Img = new Image(14, 14); PlayerRemote_Img.src = 'mmo/assets/minimaps/player_remote.png'
const PlayerRemote_lower_Img = new Image(14, 14); PlayerRemote_lower_Img.src = 'mmo/assets/minimaps/player_remote_lower.png'
const PlayerRemote_upper_Img = new Image(14, 14); PlayerRemote_upper_Img.src = 'mmo/assets/minimaps/player_remote_upper.png'
const flag_outline = new Image(14, 14); flag_outline.src = "mmo/assets/minimaps/flag0.png"
const flag_base = new Image(14, 14); flag_base.src = "mmo/assets/minimaps/flag1.png"

const Taunts = [
    { 'img': defImage(32, 32,'mmo/assets/taunts/skull.png'),'taunt':'!taunt-die'},
	{'img':defImage(32,32,'mmo/assets/taunts/wave.png'),'taunt':'!taunt-wave'},
	{'img':defImage(32,32,'mmo/assets/taunts/skull.png'),'taunt':'!taunt-die2'},
	{'img':defImage(32,32,'mmo/assets/taunts/star.png'),'taunt':'!taunt-star'},
	{'img':defImage(32,32,'mmo/assets/taunts/shock.png'),'taunt':'!taunt-shock'},
	{'img':defImage(32,32,'mmo/assets/taunts/magic.png'),'taunt':'!taunt-magic'}
]
const TauntWheel = defImage(128, 128, 'mmo/assets/taunts/tauntWheel.png')

const minimapEnabledLevel = () => {
    return Minimaps[`m${window.selectedMap}`] != null
}

const snow = defImage(1280, 720, "mmo/assets/snow.png")

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
    context2d.font = `bold ${fontsize}px TextboxFont, verdana, sans-serif`
    const width = context2d.measureText(text).width

    context2d.fillStyle = backgroundColor
    context2d.globalAlpha = backgroundAlpha
    context2d.rect(pixelX - (width / 2) - 5, pixelY - 50, width + 10, 30)
    context2d.fill()
    context2d.globalCompositeOperation = 'source-over'

    context2d.globalAlpha = 1.0
    context2d.font = `bold ${fontsize}px TextboxFont, verdana, sans-serif`
    context2d.textAlign = "center"
    context2d.fillStyle = textColor
    if (maxWidth) context2d.fillText(text, pixelX, pixelY - 30, [maxWidth])
    else context2d.fillText(text, pixelX, pixelY - 30)
    context2d.globalCompositeOperation = 'destination-over'
}


export const custom_draw_text = (x, y, w) => {
    if (window.HUDHidden) return
    context2d.save()

    const pixelX = ((x / w) * 0.5 + 0.5) * canvas2d.width
    const pixelY = ((y / w) * -0.5 + 0.5) * canvas2d.height

    if (customData2D.playerName) {
        context2d.globalAlpha = 0.8
        context2d.font = "bold 20px TextboxFont, verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9e1bd1" //player name color
        context2d.fillText(customData2D.playerName , pixelX, pixelY)
    }
	
	if (customData2D.health != null) {
		const HEALTH = customData2D.health > 0 ? customData2D.health >> 8 : 0
		if (HEALTH < 8) {
			context2d.globalAlpha = 0.8
			context2d.drawImage(marioHealthWedges[HEALTH], pixelX - 32, pixelY - 80, 64, 64)
		}
	}
	
    if (customData2D.chat) {
        custom_draw_message_bubble(customData2D.chat, "18", pixelX, pixelY, "#FFFFFF", 0.8, "#121212")
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
    if (window.HUDHidden) return
    context2d.globalAlpha = 0.8
    if (window.latency) {
        context2d.font = "bold 24px TextboxFont, verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9e1bd1" //ping color?
        if (document.getElementById("gameCanvas").width == 640) {
            context2d.fillText(`Ping: ${window.latency}ms`, 580, 20)
        } else {
            context2d.fillText(`Ping: ${window.latency}ms`, 1220, 20) // can also be done by doing document.getElementById("gameCanvas").width - 60
        }
    }
    if (!isNaN(window.fps)) {
        context2d.globalAlpha = 0.8
        context2d.font = "bold 24px TextboxFont, verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#9e1bd1" //fps color
        if (document.getElementById("gameCanvas").width == 640) {
            context2d.fillText(`FPS: ${window.fps}`, 580, 40)
        } else {
            context2d.fillText(`FPS: ${window.fps}`, 1220, 40)
        }
    }
	if (gameData.marioState && !isNaN(window.myMario.readOnlyHealth)) {
        context2d.globalAlpha = 1.0
        //context2d.drawImage(marioHealthWedges[window.myMario.readOnlyHealth],518 + 16,42,96,96)
        context2d.globalAlpha = 0.8
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
            if (networkData.flagData) {
                networkData.flagData.forEach((flag, i) => {
                    const flagIcon = flagIcons[i]
                    drawFlag(flagIcon, 5, 5, flag.pos[0] * marScale, flag.pos[2] * marScale, scale, miniScale)
                })
            }
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

let imgHeight = 0

export const drawFX = () => {
    if (!window.snow) return
    contextFX2d.clearRect(0, 0, fx2d.width, fx2d.height)
    // snow
    contextFX2d.drawImage(snow, 0, imgHeight)
    contextFX2d.drawImage(snow, 0, imgHeight - canvas2d.height)

    // update image stats
    imgHeight += 3

    // reseting the images when the first image entirely exits the screen
    if (imgHeight == canvas2d.height) { imgHeight = 0 }
}