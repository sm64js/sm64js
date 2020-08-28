import * as Gbi from "../include/gbi"

const canvas = document.querySelector('#gameCanvas')

export const texture_shadow_quarter_circle = []

export const matrix_identity = [
    [1.0, 0.0, 0.0, 0.0],
    [0.0, 1.0, 0.0, 0.0],
    [0.0, 0.0, 1.0, 0.0],
    [0.0, 0.0, 0.0, 1.0]
]

export const matrix_fullscreen = [
    [4.0 / canvas.width, 0.0, 0.0, 0.0],
    [0.0, 4.0 / canvas.height, 0.0, 0.0],
    [0.0, 0.0, -1.0, 0.0],
    [-1.0, -1.0, -1.0, 1.0]
]

export const dl_proj_mtx_fullscreen = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_fullscreen, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPEndDisplayList()
]

export const dl_transition_draw_filled_region = [
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  1,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  2, 0x0,  2,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  7, 0x0,  2,  7,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  0, 0x0,  3,  7,  4, 0x0),
	Gbi.gsSPEndDisplayList()
]

export const dl_screen_transition_end = [
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_OPA_SURF_SURF2),
	Gbi.gsSPEndDisplayList(),
]

export const dl_shadow_begin = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPEndDisplayList()
]

export const dl_shadow_circle = [
	Gbi.gsSPDisplayList(dl_shadow_begin),
	...Gbi.gsDPLoadTextureBlock(texture_shadow_quarter_circle, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 16, 16, 0,
		Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, 4, 4, Gbi.G_TX_NOLOD,
		Gbi.G_TX_NOLOD),
	Gbi.gsSPEndDisplayList(),
]

export const dl_shadow_9_verts = [
	...Gbi.gsSP2Triangles(0, 3, 4, 0x0, 0, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 2, 0x0, 2, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 8, 0x0, 4, 8, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const dl_shadow_4_verts = [
	...Gbi.gsSP2Triangles(0, 2, 1, 0x0, 1, 2, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const dl_shadow_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const dl_draw_quad_verts_0123 = [
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const dl_skybox_begin = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
	Gbi.gsSPEndDisplayList(),
]

export const dl_skybox_tile_tex_settings = [
	Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const dl_skybox_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const dl_waterbox_rgba16_begin = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const dl_waterbox_ia16_begin = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
]

export const dl_waterbox_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
]

export const texture_waterbox_water = []
export const texture_waterbox_lava = []

export const texture_transition_star_half = []

