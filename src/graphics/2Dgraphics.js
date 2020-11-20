import { networkData, gameData } from "../socket"
import { oFaceAngleYaw } from "../include/object_constants"

const canvas2d = document.querySelector('#textCanvas')
const context2d = canvas2d.getContext('2d')

export const customData2D = { playerName: "", chat: "" }

// Minimap Stuff ~0x2480
const Minimap_Img = new Image(535, 535); Minimap_Img.src = 'mini/bob_mountain.png'
const Player_Img = new Image(14, 14); Player_Img.src = 'mini/player.png'

const flagIcons = new Array(4).fill(0).map((unused, i) => {
    const newflagIcon = new Image(14, 14)
    newflagIcon.src = "mini/flag" + i + ".png"
    return newflagIcon
})


export const custom_draw_text = (x, y, w) => {

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
        context2d.font = "bold 16px verdana, sans-serif"
        const width = context2d.measureText(customData2D.chat).width

        context2d.fillStyle = "#FFFFFF"
        context2d.globalAlpha = 0.8
        context2d.rect(pixelX - (width / 2) - 5, pixelY - 50, width + 10, 30)
        context2d.fill()
        context2d.globalCompositeOperation = 'source-over'


        context2d.globalAlpha = 1.0
        context2d.font = "bold 16px verdana, sans-serif"
        context2d.textAlign = "center"
        context2d.fillStyle = "#000000"
        context2d.fillText(customData2D.chat, pixelX, pixelY - 30)
        context2d.globalCompositeOperation = 'destination-over'
    }


}


const drawMinimapIcon = (sprite, width, height, X, Z, scale_map, scale_icon) => {
    context2d.drawImage(sprite, (-(width / 2) * (scale_map)) + parseInt((16 + ((128 * scale_map) / 2)) + X * (scale_icon * scale_map)),
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
    if (window.show_minimap > 0) {
        var scale = 0.25 + window.show_minimap
        var miniScale = 0.00385
        context2d.drawImage(Minimap_Img, 16, 16, 128 * scale, 128 * scale)
        Object.values(networkData.remotePlayers).forEach(data => { /// all remote marios - should just be dots
            const m = data.marioState
            const yaw = ((m.faceAngle[1] * (Math.PI / 180)) / 180) - 3.111111
            drawMinimapIconRotation(Player_Img, 5, 5, m.pos[0], m.pos[2], scale, miniScale, yaw)
        })
        const m = gameData.marioState  /// local mario - should be an arrow
        const yaw = ((m.faceAngle[1] * (Math.PI / 180)) / 180) - 3.111111
        drawMinimapIconRotation(Player_Img, 5, 5, m.pos[0], m.pos[2], scale, miniScale, yaw)
     
        if (window.show_minimap > 1) {
            flagIcons.forEach((flagIcon, i) => {
                drawMinimapIcon(flagIcon, 5, 5, networkData.flagData[i].pos[0], networkData.flagData[i].pos[2], scale, miniScale)
            })
        }
    }
}