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

export const texture_hud_char_0 = []
export const texture_hud_char_1 = []
export const texture_hud_char_2 = []
export const texture_hud_char_3 = []
export const texture_hud_char_4 = []
export const texture_hud_char_5 = []
export const texture_hud_char_6 = []
export const texture_hud_char_7 = []
export const texture_hud_char_8 = []
export const texture_hud_char_9 = []
export const texture_hud_char_A = []
export const texture_hud_char_B = []
export const texture_hud_char_C = []
export const texture_hud_char_D = []
export const texture_hud_char_E = []
export const texture_hud_char_F = []
export const texture_hud_char_G = []
export const texture_hud_char_H = []
export const texture_hud_char_I = []
export const texture_hud_char_K = []
export const texture_hud_char_L = []
export const texture_hud_char_M = []
export const texture_hud_char_N = []
export const texture_hud_char_O = []
export const texture_hud_char_P = []
export const texture_hud_char_R = []
export const texture_hud_char_S = []
export const texture_hud_char_T = []
export const texture_hud_char_U = []
export const texture_hud_char_W = []
export const texture_hud_char_Y = []
export const texture_hud_char_apostrophe = []
export const texture_hud_char_double_quote = []
export const texture_hud_char_question = []
export const texture_hud_char_multiply = []
export const texture_hud_char_coin = []
export const texture_hud_char_mario_head = []
export const texture_hud_char_star = []
export const texture_credits_char_3 = []
export const texture_credits_char_4 = []
export const texture_credits_char_6 = []
export const texture_credits_char_A = []
export const texture_credits_char_B = []
export const texture_credits_char_C = []
export const texture_credits_char_D = []
export const texture_credits_char_E = []
export const texture_credits_char_F = []
export const texture_credits_char_G = []
export const texture_credits_char_H = []
export const texture_credits_char_I = []
export const texture_credits_char_J = []
export const texture_credits_char_K = []
export const texture_credits_char_L = []
export const texture_credits_char_M = []
export const texture_credits_char_N = []
export const texture_credits_char_O = []
export const texture_credits_char_P = []
export const texture_credits_char_Q = []
export const texture_credits_char_R = []
export const texture_credits_char_S = []
export const texture_credits_char_T = []
export const texture_credits_char_U = []
export const texture_credits_char_V = []
export const texture_credits_char_W = []
export const texture_credits_char_X = []
export const texture_credits_char_Y = []
export const texture_credits_char_Z = []
export const texture_credits_char_period = []
export const texture_font_char_jp_long_vowel = []
export const texture_font_char_eu_colon = []
export const texture_font_char_EU_slash = []
export const texture_font_char_us_0 = []
export const texture_font_char_us_1 = []
export const texture_font_char_us_2 = []
export const texture_font_char_us_3 = []
export const texture_font_char_us_4 = []
export const texture_font_char_us_5 = []
export const texture_font_char_us_6 = []
export const texture_font_char_us_7 = []
export const texture_font_char_us_8 = []
export const texture_font_char_us_9 = []
export const texture_font_char_us_A = []
export const texture_font_char_us_B = []
export const texture_font_char_us_C = []
export const texture_font_char_us_D = []
export const texture_font_char_us_E = []
export const texture_font_char_us_F = []
export const texture_font_char_us_G = []
export const texture_font_char_us_H = []
export const texture_font_char_us_I = []
export const texture_font_char_us_J = []
export const texture_font_char_us_K = []
export const texture_font_char_us_L = []
export const texture_font_char_us_M = []
export const texture_font_char_us_N = []
export const texture_font_char_us_O = []
export const texture_font_char_us_P = []
export const texture_font_char_us_Q = []
export const texture_font_char_us_R = []
export const texture_font_char_us_S = []
export const texture_font_char_us_T = []
export const texture_font_char_us_U = []
export const texture_font_char_us_V = []
export const texture_font_char_us_W = []
export const texture_font_char_us_X = []
export const texture_font_char_us_Y = []
export const texture_font_char_us_Z = []
export const texture_font_char_us_a = []
export const texture_font_char_us_b = []
export const texture_font_char_us_c = []
export const texture_font_char_us_d = []
export const texture_font_char_us_e = []
export const texture_font_char_us_f = []
export const texture_font_char_us_g = []
export const texture_font_char_us_h = []
export const texture_font_char_us_i = []
export const texture_font_char_us_j = []
export const texture_font_char_us_k = []
export const texture_font_char_us_l = []
export const texture_font_char_us_m = []
export const texture_font_char_us_n = []
export const texture_font_char_us_o = []
export const texture_font_char_us_p = []
export const texture_font_char_us_q = []
export const texture_font_char_us_r = []
export const texture_font_char_us_s = []
export const texture_font_char_us_t = []
export const texture_font_char_us_u = []
export const texture_font_char_us_v = []
export const texture_font_char_us_w = []
export const texture_font_char_us_x = []
export const texture_font_char_us_y = []
export const texture_font_char_us_z = []
export const texture_font_char_us_left_right_arrow = []
export const texture_font_char_us_exclamation = []
export const texture_font_char_us_coin = []
export const texture_font_char_us_multiply = []
export const texture_font_char_us_open_parentheses = []
export const texture_font_char_us_close_open_parentheses = []
export const texture_font_char_us_close_parentheses = []
export const texture_font_char_us_tilde = []
export const texture_font_char_us_period = []
export const texture_font_char_us_percent = []
export const texture_font_char_us_interpunct = []
export const texture_font_char_us_comma = []
export const texture_font_char_us_apostrophe = []
export const texture_font_char_us_question = []
export const texture_font_char_us_star_filled = []
export const texture_font_char_us_star_hollow = []
export const texture_font_char_us_double_quote_open = []
export const texture_font_char_us_double_quote_close = []
export const texture_font_char_us_ellipsis = []
export const texture_font_char_us_slash = []
export const texture_font_char_us_ampersand = []
export const texture_font_char_us_button_A = []
export const texture_font_char_us_button_B = []
export const texture_font_char_us_button_C = []
export const texture_font_char_us_button_Z = []
export const texture_font_char_us_button_R = []
export const texture_font_char_us_button_C_up = []
export const texture_font_char_us_button_C_down = []
export const texture_font_char_us_button_C_left = []
export const texture_font_char_us_button_C_right = []
export const texture_hud_char_camera = []
export const texture_hud_char_lakitu = []
export const texture_hud_char_no_camera = []
export const texture_hud_char_arrow_up = []
export const texture_hud_char_arrow_down = []


export const main_hud_camera_lut = [
	texture_hud_char_camera, texture_hud_char_mario_head, texture_hud_char_lakitu, texture_hud_char_no_camera,
	texture_hud_char_arrow_up, texture_hud_char_arrow_down,
];


export const main_hud_lut = [
	texture_hud_char_0, texture_hud_char_1, texture_hud_char_2, texture_hud_char_3,
	texture_hud_char_4, texture_hud_char_5, texture_hud_char_6, texture_hud_char_7,
	texture_hud_char_8, texture_hud_char_9, texture_hud_char_A, texture_hud_char_B,
	texture_hud_char_C, texture_hud_char_D, texture_hud_char_E, texture_hud_char_F,
	texture_hud_char_G, texture_hud_char_H, texture_hud_char_I, 0x0,
	texture_hud_char_K, texture_hud_char_L, texture_hud_char_M, texture_hud_char_N,
	texture_hud_char_O, texture_hud_char_P, 0x0, texture_hud_char_R,
	texture_hud_char_S, texture_hud_char_T, texture_hud_char_U, 0x0,
	texture_hud_char_W, 0x0, texture_hud_char_Y, 0x0,
	0x0, 0x0, 0x0, 0x0,
	0x0, 0x0, 0x0, 0x0,
	0x0, 0x0, 0x0, 0x0,
	0x0, 0x0, texture_hud_char_multiply, texture_hud_char_coin,
	texture_hud_char_mario_head, texture_hud_char_star, 0x0, 0x0,
	texture_hud_char_apostrophe, texture_hud_char_double_quote,
];



export const dl_hud_img_begin = function () {
	var result = [
		// Gbi.gsDPPipeSync(),
		Gbi.gsDPSetCycleType(Gbi.G_CYC_COPY),
		// Gbi.gsDPSetTexturePersp(Gbi.G_TP_NONE),
		// Gbi.gsDPSetAlphaCompare(Gbi.G_AC_THRESHOLD),
		// Gbi.gsDPSetBlendColor(255, 255, 255, 255),
	];

	result.push(Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_XLU_SURF_SURF2));

	result.push(Gbi.gsSPEndDisplayList());

	return result;
}();

export const dl_hud_img_end = function () {
	var result = [
		// Gbi.gsDPPipeSync(),
		// Gbi.gsDPSetTexturePersp(Gbi.G_TP_PERSP),
		Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
		// Gbi.gsDPSetAlphaCompare(Gbi.G_AC_NONE)
	];

	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE);
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF);

	result.push(Gbi.gsSPEndDisplayList());

	return result;
}();

export const dl_hud_img_load_tex_block = [
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD),
	// Gbi.gsDPLoadSync(),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 16 - 1),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
];

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

