import { 
WARP_TRANSITION_FADE_FROM_COLOR,
WARP_TRANSITION_FADE_INTO_COLOR,
WARP_TRANSITION_FADE_FROM_STAR,
WARP_TRANSITION_FADE_INTO_STAR,
WARP_TRANSITION_FADE_FROM_CIRCLE,
WARP_TRANSITION_FADE_INTO_CIRCLE,
WARP_TRANSITION_FADE_INTO_MARIO,
WARP_TRANSITION_FADE_FROM_MARIO,
WARP_TRANSITION_FADE_FROM_BOWSER,
WARP_TRANSITION_FADE_INTO_BOWSER,
 } from "./Area"
import { GameInstance as Game } from "./Game"
import * as Gbi from "../include/gbi"
import { atan2s } from "../engine/math_util"
import { dl_proj_mtx_fullscreen, dl_transition_draw_filled_region,
	texture_transition_star_half, texture_transition_circle_half,
	texture_transition_mario, texture_transition_bowser_half,
	dl_draw_quad_verts_0123, dl_screen_transition_end, matrix_identity, matrix_fullscreen } from "../bin/segment2"
import { round_float, make_vertex } from "./GeoMisc"

const canvas = document.querySelector('#gameCanvas')

const TEX_TRANS_STAR = 0
const TEX_TRANS_CIRCLE = 1
const TEX_TRANS_MARIO = 2
const TEX_TRANS_BOWSER = 3

const TRANS_TYPE_MIRROR = 0
const TRANS_TYPE_CLAMP = 1

const sTransitionColorFadeCount = [ 0,0,0,0 ]
const sTransitionTextureFadeCount = [0, 0]

const sTextureTransitionID = [
	texture_transition_star_half,
    texture_transition_circle_half,
    texture_transition_mario,
    texture_transition_bowser_half,
]

const set_and_reset_transition_fade_timer = (fadeTimer, transTime) => {
	let reset = false

	sTransitionColorFadeCount[fadeTimer]++

	if (sTransitionColorFadeCount[fadeTimer] == transTime) {
		sTransitionColorFadeCount[fadeTimer] = 0
		sTransitionTextureFadeCount[fadeTimer] = 0
		reset = true
	}

	return reset
}

const vertex_transition_color = (transData, alpha) => {
	const verts = new Array(4)

	const r = transData.red, g = transData.green, b = transData.blue

	make_vertex(verts, 0, 0, 0, -1, 0, 0, r, g, b, alpha)
	make_vertex(verts, 1, canvas.width / 2, 0, -1, 0, 0, r, g, b, alpha)
	make_vertex(verts, 2, canvas.width / 2, canvas.height / 2, -1, 0, 0, r, g, b, alpha)
	make_vertex(verts, 3, 0, canvas.height / 2, -1, 0, 0, r, g, b, alpha)

	return verts
}

const dl_transition_color = (fadeTimer, transTime, transData, alpha) => {
	const verts = vertex_transition_color(transData, alpha)

	Gbi.gSPDisplayList(Game.gDisplayList, dl_proj_mtx_fullscreen)
	Gbi.gDPSetCombineMode(Game.gDisplayList, Gbi.G_CC_SHADE)
	Gbi.gDPSetRenderMode(Game.gDisplayList, Gbi.G_RM_AA_XLU_SURF_SURF2)
	Gbi.gSPVertex(Game.gDisplayList, verts, 4, 0)
	Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_quad_verts_0123)
	Gbi.gSPDisplayList(Game.gDisplayList, dl_screen_transition_end)

	return set_and_reset_transition_fade_timer(fadeTimer, transTime)
}

const set_transition_color_fade_alpha = (fadeType, fadeTimer, transTime) => {
	switch (fadeType) {
		case 0:
			return sTransitionColorFadeCount[fadeTimer] * 255.0 / (transTime - 1) + 0.5
		case 1:
			return (1.0 - sTransitionColorFadeCount[fadeTimer] / (transTime - 1)) * 255.0 + 0.5
		default: throw "unknown alpha fade type"
    }
}

const render_fade_transition_from_color = (fadeTimer, transTime, transData) => {
    const alpha = set_transition_color_fade_alpha(1, fadeTimer, transTime)
    return dl_transition_color(fadeTimer, transTime, transData, alpha)
}

const render_fade_transition_into_color = (fadeTimer, transTime, transData) => {
	const alpha = set_transition_color_fade_alpha(0, fadeTimer, transTime)
	return dl_transition_color(fadeTimer, transTime, transData, alpha)
}

const calc_tex_transition_time = (fadeTimer, transTime, transData) => {
	const startX = transData.startTexX
	const startY = transData.startTexY
	const endX = transData.endTexX
	const endY = transData.endTexY
	const sqrtfXY = Math.sqrt((startX - endX) * (startX - endX) + (startY - endY) * (startY - endY))
	const result = sTransitionColorFadeCount[fadeTimer] * sqrtfXY / (transTime - 1)

	return result
}

const convert_tex_transition_angle_to_pos = (transData) => {
	const x = transData.endTexX - transData.startTexX
	const y = transData.endTexY - transData.startTexY

	return atan2s(x, y)
}

const center_tex_transition_x = (transData, texTransTime, texTransPos) => {
	const x = transData.startTexX + Math.cos(texTransPos / 0x8000 * Math.PI) * texTransTime

	return Math.floor(x + 0.5)
}

const center_tex_transition_y = (transData, texTransTime, texTransPos) => {
	const y = transData.startTexY + Math.cos(texTransPos / 0x8000 * Math.PI) * texTransTime

	return Math.floor(y + 0.5)
}

const calc_tex_transition_radius = (fadeTimer, transTime, transData) => {
	const texRadius = transData.endTexRadius - transData.startTexRadius
	const radiusTime = sTransitionColorFadeCount[fadeTimer] * texRadius / (transTime - 1)
	const result = transData.startTexRadius + radiusTime

	return Math.floor(result + 0.5)
}

const make_tex_transition_vertex = (verts, n, fadeTimer, transData, centerTransX, centerTransY, texRadius1, texRadius2, tx, ty) => {

	const r = transData.red
	const g = transData.green
	const b = transData.blue
	const zeroTimer = sTransitionTextureFadeCount[fadeTimer]
	const centerX = texRadius1 * Math.cos(zeroTimer / 0x8000 * Math.PI) - texRadius2 * Math.sin(zeroTimer / 0x8000 * Math.PI) + centerTransX
	const centerY = texRadius1 * Math.sin(zeroTimer / 0x8000 * Math.PI) + texRadius2 * Math.cos(zeroTimer / 0x8000 * Math.PI) + centerTransY
	const x = round_float(centerX)
	const y = round_float(centerY)

	make_vertex(verts, n, x, y, -1, tx * 32, ty * 32, r, g, b, 255)
}

const load_tex_transition_vertex = (verts, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, transTexType) => {
	switch (transTexType) {
		case TRANS_TYPE_MIRROR:
			make_tex_transition_vertex(verts, 0, fadeTimer, transData, centerTransX, centerTransY, -texTransRadius, -texTransRadius, -31, 63)
			make_tex_transition_vertex(verts, 1, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, -texTransRadius, 31, 63)
			make_tex_transition_vertex(verts, 2, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, texTransRadius, 31, 0)
			make_tex_transition_vertex(verts, 3, fadeTimer, transData, centerTransX, centerTransY, -texTransRadius, texTransRadius, -31, 0)
			break
        case TRANS_TYPE_CLAMP:
            make_tex_transition_vertex(verts, 0, fadeTimer, transData, centerTransX, centerTransY, -texTransRadius, -texTransRadius, 0, 63)
            make_tex_transition_vertex(verts, 1, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, -texTransRadius, 63, 63)
            make_tex_transition_vertex(verts, 2, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, texTransRadius, 63, 0)
            make_tex_transition_vertex(verts, 3, fadeTimer, transData, centerTransX, centerTransY, -texTransRadius, texTransRadius, 0, 0)
            break
		default: throw "unimplemented transition type"
	}
	make_tex_transition_vertex(verts, 4, fadeTimer, transData, centerTransX, centerTransY, -2000, -2000, 0, 0)
	make_tex_transition_vertex(verts, 5, fadeTimer, transData, centerTransX, centerTransY, 2000, -2000, 0, 0)
	make_tex_transition_vertex(verts, 6, fadeTimer, transData, centerTransX, centerTransY, 2000, 2000, 0, 0)
	make_tex_transition_vertex(verts, 7, fadeTimer, transData, centerTransX, centerTransY, -2000, 2000, 0, 0)

}

const render_textured_transition = (fadeTimer, transTime, transData, texID, transTexType) => {
	const texTransTime = calc_tex_transition_time(fadeTimer, transTime, transData)
	const texTransPos = convert_tex_transition_angle_to_pos(transData)
	if (texTransPos < 0) throw "texTransPos is negative but it is supposed to be uint"
	const centerTransX = center_tex_transition_x(transData, texTransTime, texTransPos)
	const centerTransY = center_tex_transition_y(transData, texTransTime, texTransPos)
	const texTransRadius = calc_tex_transition_radius(fadeTimer, transTime, transData)

	const verts = new Array(8)

	load_tex_transition_vertex(verts, fadeTimer, transData, centerTransX, centerTransY, texTransRadius, transTexType)

	Gbi.gSPDisplayList(Game.gDisplayList, dl_proj_mtx_fullscreen)
	Gbi.gDPSetCombineMode(Game.gDisplayList, Gbi.G_CC_SHADE)
	Gbi.gDPSetRenderMode(Game.gDisplayList, Gbi.G_RM_AA_OPA_SURF_SURF2)
	Gbi.gSPVertex(Game.gDisplayList, verts, 8, 0)
	Gbi.gSPDisplayList(Game.gDisplayList, dl_transition_draw_filled_region)
	Gbi.gDPSetCombineMode(Game.gDisplayList, Gbi.G_CC_MODULATEIDECALA)
	Gbi.gDPSetRenderMode(Game.gDisplayList, Gbi.G_RM_AA_XLU_SURF_SURF2)
	Gbi.gDPSetTextureFilter(Game.gDisplayList, Gbi.G_TF_BILERP)

	if (sTextureTransitionID[texID] == undefined) {
		throw "need to add transition texture"
	}

	switch (transTexType) {
		case TRANS_TYPE_MIRROR:
			Gbi.gDPLoadTextureBlock(Game.gDisplayList, sTextureTransitionID[texID], Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 32, 64, 0, Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, 5, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD)
			break
        case TRANS_TYPE_CLAMP:
            Gbi.gDPLoadTextureBlock(Game.gDisplayList, sTextureTransitionID[texID], Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 64, 64, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 6, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD)
            break
		default: throw "unimplemented transition type"
	}

	Gbi.gSPTexture(Game.gDisplayList, 0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON)
	Gbi.gSPVertex(Game.gDisplayList, verts, 4, 0)
	Gbi.gSPDisplayList(Game.gDisplayList, dl_draw_quad_verts_0123)
	Gbi.gSPTexture(Game.gDisplayList, 0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF)
	Gbi.gSPDisplayList(Game.gDisplayList, dl_screen_transition_end)
	sTransitionTextureFadeCount[fadeTimer] += transData.texTimer

	return set_and_reset_transition_fade_timer(fadeTimer, transTime)
}

export const render_screen_transition = (fadeTimer, transType, transTime, transData) => {
	switch (transType) {
        case WARP_TRANSITION_FADE_FROM_COLOR:
            return render_fade_transition_from_color(fadeTimer, transTime, transData);
        case WARP_TRANSITION_FADE_INTO_COLOR:
			return render_fade_transition_into_color(fadeTimer, transTime, transData)
        case WARP_TRANSITION_FADE_FROM_STAR:
			return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_STAR, TRANS_TYPE_MIRROR)
        case WARP_TRANSITION_FADE_INTO_STAR:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_STAR, TRANS_TYPE_MIRROR);
        case WARP_TRANSITION_FADE_FROM_CIRCLE:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_CIRCLE, TRANS_TYPE_MIRROR);
        case WARP_TRANSITION_FADE_INTO_CIRCLE:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_CIRCLE, TRANS_TYPE_MIRROR);
        case WARP_TRANSITION_FADE_FROM_MARIO:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_MARIO, TRANS_TYPE_CLAMP);
        case WARP_TRANSITION_FADE_INTO_MARIO:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_MARIO, TRANS_TYPE_CLAMP);
        case WARP_TRANSITION_FADE_FROM_BOWSER:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_BOWSER, TRANS_TYPE_MIRROR);
        case WARP_TRANSITION_FADE_INTO_BOWSER:
            return render_textured_transition(fadeTimer, transTime, transData, TEX_TRANS_BOWSER, TRANS_TYPE_MIRROR);
    }
}

export const geo_cannon_circle_base = (callContext, node, mtx) => {
    // let dlist = null

    // if (callContext == GEO_CONTEXT_RENDER && gCurrentArea != null
    //     && gCurrentArea.camera.mode == CAMERA_MODE_INSIDE_CANNON) {
    //     graphNode.fnNode.node.flags = (graphNode.fnNode.node.flags & 0xFF) | 0x500
    //     dlist = render_cannon_circle_base()
    // }
    // return dlist
    return []
}
