import * as Gbi from "../include/gbi"

import {
    gdSPDefLights1, gsSPVertex, gsSP2Triangles, gsSP1Triangle, gsSPEndDisplayList,
    gsSPDisplayList, gsSPLight, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPSetGeometryMode,
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsDPSetAlphaCompare, gsDPSetEnvColor,
    gsDPLoadTextureBlock,
    G_CC_DECALRGBA, G_LIGHTING, G_CULL_BACK, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_LOADTILE,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TX_CLAMP,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE, G_CC_BLENDRGBFADEA, CALC_DXT, G_IM_SIZ_16b_BYTES,
    G_CC_SHADEFADEA, G_AC_NONE, G_TEXTURE_GEN, G_CC_MODULATERGBFADE, G_CC_DECALFADEA
} from "../include/gbi"

const canvas = document.querySelector('#gameCanvas')

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
export const texture_hud_char_J = []
export const texture_hud_char_K = []
export const texture_hud_char_L = []
export const texture_hud_char_M = []
export const texture_hud_char_N = []
export const texture_hud_char_O = []
export const texture_hud_char_P = []
export const texture_hud_char_Q = []
export const texture_hud_char_R = []
export const texture_hud_char_S = []
export const texture_hud_char_T = []
export const texture_hud_char_U = []
export const texture_hud_char_V = []
export const texture_hud_char_W = []
export const texture_hud_char_X = []
export const texture_hud_char_Y = []
export const texture_hud_char_Z = []
// for define errors, nothing should reference these:
export const texture_hud_char_exclamation = []
export const texture_hud_char_double_exclamation = []
export const texture_hud_char_question = []
export const texture_hud_char_ampersand = []
export const texture_hud_char_percent = []
// .
export const texture_hud_char_apostrophe = []
export const texture_hud_char_double_quote = []
export const texture_hud_char_multiply = []
export const texture_hud_char_coin = []
export const texture_hud_char_mario_head = []
export const texture_hud_char_star = []
export const texture_hud_char_decimal_point = []
export const texture_hud_char_beta_key = []
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
export const texture_ia8_up_arrow = []
export const texture_shadow_quarter_circle = []
export const texture_shadow_quarter_square = []
export const texture_transition_bowser_half = []
export const texture_transition_circle_half = []
export const texture_transition_mario = []
export const texture_transition_star_half = []
export const texture_waterbox_jrb_water = []
export const texture_waterbox_lava = []
export const texture_waterbox_mist = []
export const texture_waterbox_unknown_water = []
export const texture_waterbox_water = []

const vertex_ia8_char = [
    [[     0,      0,      0], 0, [     0,   1024], [0xff, 0xff, 0xff, 0xff]],
    [[     8,      0,      0], 0, [   512,   1024], [0xff, 0xff, 0xff, 0xff]],
    [[     8,     16,      0], 0, [   512,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,     16,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
]

export const dl_ia_text_begin = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(Gbi.G_CC_FADEA, Gbi.G_CC_FADEA),
    gsDPSetEnvColor(255, 255, 255, 255),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_XLU_SURF, Gbi.G_RM_XLU_SURF2),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_POINT),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPEndDisplayList(),
].flat();

export const dl_ia_text_tex_settings = [
    gsDPSetTile(Gbi.G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | Gbi.G_TX_MIRROR, 3, G_TX_NOLOD, G_TX_WRAP | Gbi.G_TX_MIRROR, 4, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, ((16 * 8 + Gbi.G_IM_SIZ_4b_INCR) >> Gbi.G_IM_SIZ_4b_SHIFT) - 1, CALC_DXT(16, Gbi.G_IM_SIZ_4b_BYTES)),
    gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_4b, 1, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | Gbi.G_TX_MIRROR, 3, G_TX_NOLOD, G_TX_WRAP | Gbi.G_TX_MIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (8 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

export const dl_ia_text_end = [
    gsDPPipeSync(),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetCombineMode(Gbi.G_CC_SHADE, Gbi.G_CC_SHADE),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPSetGeometryMode(G_LIGHTING | Gbi.G_SHADING_SMOOTH),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_AA_ZB_OPA_SURF2),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_BILERP),
    gsSPEndDisplayList(),
].flat();

const vertex_triangle = [
    [[     0,      0,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     8,      8,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,     16,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
]

export const dl_draw_triangle = [
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(Gbi.G_CC_FADE, Gbi.G_CC_FADE),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_XLU_SURF, Gbi.G_RM_XLU_SURF2),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_POINT),
    gsSPVertex(vertex_triangle, 3, 0),
    gsSP1Triangle( 0,  1,  2, 0x0),
    gsSPSetGeometryMode(G_LIGHTING),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_AA_ZB_OPA_SURF2),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x0200EFB0 - 0x0200EFF0
const vertex_billboard_num = [
    [[   -32,    -32,      0], 0, [     0,   1024], [0xff, 0xff, 0xff, 0xff]],
    [[    32,    -32,      0], 0, [  1024,   1024], [0xff, 0xff, 0xff, 0xff]],
    [[    32,     32,      0], 0, [  1024,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -32,     32,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0200EFF0 - 0x0200F038
export const dl_billboard_num_begin = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 4, G_TX_NOLOD, G_TX_CLAMP, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (16 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x0200F038 - 0x0200F078
export const dl_billboard_num_end = [
    gsSPVertex(vertex_billboard_num, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 0x0200F078 - 0x0200F0A8
export const dl_billboard_num_0 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_0),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F0A8 - 0x0200F0D8
export const dl_billboard_num_1 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_1),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F0D8 - 0x0200F108
export const dl_billboard_num_2 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_2),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F108 - 0x0200F138
export const dl_billboard_num_3 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_3),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F138 - 0x0200F168
export const dl_billboard_num_4 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_4),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F168 - 0x0200F198
export const dl_billboard_num_5 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_5),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F198 - 0x0200F1C8
export const dl_billboard_num_6 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_6),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F1C8 - 0x0200F1F8
export const dl_billboard_num_7 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_7),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F1F8 - 0x0200F228
export const dl_billboard_num_8 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_8),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

// 0x0200F228 - 0x0200F258
export const dl_billboard_num_9 = [
    gsSPDisplayList(dl_billboard_num_begin),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_hud_char_9),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_billboard_num_end),
    gsSPEndDisplayList(),
].flat();

export const main_hud_lut = [
    texture_hud_char_0, texture_hud_char_1, texture_hud_char_2, texture_hud_char_3,
    texture_hud_char_4, texture_hud_char_5, texture_hud_char_6, texture_hud_char_7,
    texture_hud_char_8, texture_hud_char_9, texture_hud_char_A, texture_hud_char_B,
    texture_hud_char_C, texture_hud_char_D, texture_hud_char_E, texture_hud_char_F,
    texture_hud_char_G, texture_hud_char_H, texture_hud_char_I, texture_hud_char_J,
    texture_hud_char_K, texture_hud_char_L, texture_hud_char_M, texture_hud_char_N,
    texture_hud_char_O, texture_hud_char_P, texture_hud_char_Q, texture_hud_char_R,
    texture_hud_char_S, texture_hud_char_T, texture_hud_char_U, texture_hud_char_V,
    texture_hud_char_W, texture_hud_char_X, texture_hud_char_Y, texture_hud_char_Z,
    texture_hud_char_exclamation, texture_hud_char_double_exclamation, texture_hud_char_question, texture_hud_char_ampersand,
    texture_hud_char_percent,                 0x0,                      0x0,                  0x0,
                      0x0,                   0x0,                      0x0,                  0x0,
                      0x0,                   0x0, texture_hud_char_multiply, texture_hud_char_coin,
    texture_hud_char_mario_head, texture_hud_char_star, texture_hud_char_decimal_point, texture_hud_char_beta_key,
    texture_hud_char_apostrophe, texture_hud_char_double_quote,
]

export const main_font_lut = [
    texture_font_char_us_0, texture_font_char_us_1, texture_font_char_us_2, texture_font_char_us_3,
    texture_font_char_us_4, texture_font_char_us_5, texture_font_char_us_6, texture_font_char_us_7,
    texture_font_char_us_8, texture_font_char_us_9, texture_font_char_us_A, texture_font_char_us_B,
    texture_font_char_us_C, texture_font_char_us_D, texture_font_char_us_E, texture_font_char_us_F,
    texture_font_char_us_G, texture_font_char_us_H, texture_font_char_us_I, texture_font_char_us_J,
    texture_font_char_us_K, texture_font_char_us_L, texture_font_char_us_M, texture_font_char_us_N,
    texture_font_char_us_O, texture_font_char_us_P, texture_font_char_us_Q, texture_font_char_us_R,
    texture_font_char_us_S, texture_font_char_us_T, texture_font_char_us_U, texture_font_char_us_V,
    texture_font_char_us_W, texture_font_char_us_X, texture_font_char_us_Y, texture_font_char_us_Z,
    texture_font_char_us_a, texture_font_char_us_b, texture_font_char_us_c, texture_font_char_us_d,
    texture_font_char_us_e, texture_font_char_us_f, texture_font_char_us_g, texture_font_char_us_h,
    texture_font_char_us_i, texture_font_char_us_j, texture_font_char_us_k, texture_font_char_us_l,
    texture_font_char_us_m, texture_font_char_us_n, texture_font_char_us_o, texture_font_char_us_p,
    texture_font_char_us_q, texture_font_char_us_r, texture_font_char_us_s, texture_font_char_us_t,
    texture_font_char_us_u, texture_font_char_us_v, texture_font_char_us_w, texture_font_char_us_x,
    texture_font_char_us_y, texture_font_char_us_z, texture_font_char_us_apostrophe, texture_font_char_us_period,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
    texture_font_char_us_button_C_up, texture_font_char_us_button_C_down, texture_font_char_us_button_C_left, texture_font_char_us_button_C_right,
    texture_font_char_us_button_A, texture_font_char_us_button_B, texture_font_char_us_button_C, texture_font_char_us_button_Z,
    texture_font_char_us_button_R,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0, texture_font_char_us_comma,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0, texture_font_char_us_slash,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0, texture_font_char_us_open_parentheses, texture_font_char_us_close_open_parentheses, texture_font_char_us_close_parentheses,
    texture_font_char_us_left_right_arrow, texture_font_char_us_ampersand, texture_font_char_us_ellipsis,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0,               0x0,               0x0,
                  0x0,               0x0, texture_font_char_us_exclamation, texture_font_char_us_percent,
    texture_font_char_us_question, texture_font_char_us_double_quote_open, texture_font_char_us_double_quote_close, texture_font_char_us_tilde,
                  0x0, texture_font_char_us_coin, texture_font_char_us_star_filled, texture_font_char_us_multiply,
    texture_font_char_us_interpunct, texture_font_char_us_star_hollow,               0x0,               0x0,
];

export const main_hud_camera_lut = [
	texture_hud_char_camera, texture_hud_char_mario_head, texture_hud_char_lakitu, texture_hud_char_no_camera,
	texture_hud_char_arrow_up, texture_hud_char_arrow_down,
];

const vertex_text_bg_box = [
    [[     0,    -80,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   130,    -80,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   130,      0,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[     0,      0,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

export const dl_draw_text_bg_box = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(Gbi.G_CC_FADE, Gbi.G_CC_FADE),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_XLU_SURF, Gbi.G_RM_XLU_SURF2),
    gsSPVertex(vertex_text_bg_box, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

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
].flat();

export const dl_rgba16_text_begin = [
    gsDPPipeSync(),
    Gbi.gsDPSetTexturePersp(Gbi.G_TP_NONE),
    gsDPSetCombineMode(Gbi.G_CC_FADEA, Gbi.G_CC_FADEA),
    gsDPSetEnvColor(255, 255, 255, 255),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_XLU_SURF, Gbi.G_RM_AA_XLU_SURF2),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_POINT),
    gsSPEndDisplayList(),
].flat();

export const dl_rgba16_load_tex_block = [
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (16 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

export const dl_rgba16_text_end = [
    gsDPPipeSync(),
    Gbi.gsDPSetTexturePersp(Gbi.G_TP_PERSP),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF, Gbi.G_RM_AA_ZB_OPA_SURF2),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsDPSetEnvColor(255, 255, 255, 255),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_BILERP),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsSPEndDisplayList(),
].flat();

export const dl_proj_mtx_fullscreen = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_fullscreen, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
    Gbi.gsSPEndDisplayList()
].flat();

export const dl_transition_draw_filled_region = [
	...Gbi.gsSP2Triangles( 0,  4,  1, 0x0,  1,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 1,  5,  2, 0x0,  2,  5,  6, 0x0),
	...Gbi.gsSP2Triangles( 2,  6,  7, 0x0,  2,  7,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  0, 0x0,  3,  7,  4, 0x0),
	Gbi.gsSPEndDisplayList()
].flat()

export const dl_screen_transition_end = [
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_OPA_SURF_SURF2),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_shadow_begin = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsSPEndDisplayList()
].flat()

export const dl_shadow_circle = [
	Gbi.gsSPDisplayList(dl_shadow_begin),
	...Gbi.gsDPLoadTextureBlock(texture_shadow_quarter_circle, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 16, 16, 0,
		Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, 4, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_shadow_square = [
    Gbi.gsSPDisplayList(dl_shadow_begin),
    ...Gbi.gsDPLoadTextureBlock(texture_shadow_quarter_square, Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_8b, 16, 16, 0,
        Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, Gbi.G_TX_WRAP | Gbi.G_TX_MIRROR, 4, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
    Gbi.gsSPEndDisplayList(),
].flat()

export const dl_shadow_9_verts = [
	...Gbi.gsSP2Triangles(0, 3, 4, 0x0, 0, 4, 1, 0x0),
	...Gbi.gsSP2Triangles(1, 4, 2, 0x0, 2, 4, 5, 0x0),
	...Gbi.gsSP2Triangles(3, 6, 4, 0x0, 4, 6, 7, 0x0),
	...Gbi.gsSP2Triangles(4, 7, 8, 0x0, 4, 8, 5, 0x0),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_shadow_4_verts = [
	...Gbi.gsSP2Triangles(0, 2, 1, 0x0, 1, 2, 3, 0x0),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_shadow_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_draw_quad_verts_0123 = [
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_skybox_begin = [
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB),
	Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_skybox_tile_tex_settings = [
	Gbi.gsSPMatrix(matrix_identity, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_skybox_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_waterbox_rgba16_begin = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_waterbox_ia16_begin = [
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPEndDisplayList(),
].flat()

export const dl_waterbox_end = [
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPEndDisplayList(),
].flat()