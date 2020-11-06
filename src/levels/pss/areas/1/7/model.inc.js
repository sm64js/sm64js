import * as Gbi from "../../../../../include/gbi"
import {
    mountain_09000000,
    mountain_09000800,
    mountain_09001800,
    mountain_09002800,
    mountain_09003000,
    mountain_09003800,
    mountain_09004000,
    mountain_09004800,
    mountain_09005000,
    mountain_09005800,
    mountain_09006800,
    mountain_09007000,
    mountain_09007800,
    mountain_09008000,
    mountain_09008800,
    mountain_09009800,
    mountain_0900A000,
    mountain_0900A800,
    mountain_0900B000,
    mountain_0900B800,
    mountain_0900C000,
} from "../../../../../textures/mountain.js"
import {
    pss_seg7_texture_07000000,
    pss_seg7_texture_07000800,
    pss_seg7_texture_07001000
} from "../../../textures.inc.js"
const pss_seg7_lights_0700E348 = Gbi.gdSPDefLights1(
	    0x3f, 0x3f, 0x3f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const pss_seg7_vertex_0700E360 = [
	{ pos: [ -5845, -4509, 3251 ], flag: 0, tc: [ 6100, 990 ], color: [ 0, 126, 11, 255 ] },
	{ pos: [ -5845, -4490, 3047 ], flag: 0, tc: [ 6100, -1054 ], color: [ 0, 126, 11, 255 ] },
	{ pos: [ -6869, -4490, 3047 ], flag: 0, tc: [ -4118, -1054 ], color: [ 0, 126, 11, 255 ] },
	{ pos: [ -6869, -4509, 3251 ], flag: 0, tc: [ -4118, 990 ], color: [ 0, 126, 11, 255 ] },
]

export const pss_seg7_dl_0700E3A0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, pss_seg7_texture_07001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(pss_seg7_lights_0700E348.l[0], 1),
	Gbi.gsSPLight(pss_seg7_lights_0700E348.a, 2),
	Gbi.gsSPVertex(pss_seg7_vertex_0700E360, 4, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const pss_seg7_dl_0700E3E8 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A, Gbi.G_RM_AA_ZB_OPA_DECAL2),
	// Gbi.gsDPSetDepthSource(Gbi.G_ZS_PIXEL), TODO is not a function
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(980, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(pss_seg7_dl_0700E3A0),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_OPA_SURF2),//	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_DECAL, Gbi.G_RM_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

