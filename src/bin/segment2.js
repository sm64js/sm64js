import { CALC_DXT, gsDPLoadBlock, gsDPLoadSync, gsDPSetTile, gsDPSetTileSize, gsSPEndDisplayList, G_IM_FMT_IA, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_IM_SIZ_16b_BYTES, G_IM_SIZ_4b, G_IM_SIZ_4b_BYTES, G_IM_SIZ_4b_INCR, G_IM_SIZ_4b_SHIFT, G_TEXTURE_IMAGE_FRAC, G_TX_LOADTILE, G_TX_MIRROR, G_TX_NOLOD, G_TX_NOMIRROR, G_TX_RENDERTILE, G_TX_WRAP } from "../include/gbi"

const texture_font_char_us_0 = []
const texture_font_char_us_1 = []
const texture_font_char_us_2 = []
const texture_font_char_us_3 = []
const texture_font_char_us_4 = []
const texture_font_char_us_5 = []
const texture_font_char_us_6 = []
const texture_font_char_us_7 = []
const texture_font_char_us_8 = []
const texture_font_char_us_9 = []
const texture_font_char_us_A = []
const texture_font_char_us_B = []
const texture_font_char_us_C = []
const texture_font_char_us_D = []
const texture_font_char_us_E = []
const texture_font_char_us_F = []
const texture_font_char_us_G = []
const texture_font_char_us_H = []
const texture_font_char_us_I = []
const texture_font_char_us_J = []
const texture_font_char_us_K = []
const texture_font_char_us_L = []
const texture_font_char_us_M = []
const texture_font_char_us_N = []
const texture_font_char_us_O = []
const texture_font_char_us_P = []
const texture_font_char_us_Q = []
const texture_font_char_us_R = []
const texture_font_char_us_S = []
const texture_font_char_us_T = []
const texture_font_char_us_U = []
const texture_font_char_us_V = []
const texture_font_char_us_W = []
const texture_font_char_us_X = []
const texture_font_char_us_Y = []
const texture_font_char_us_Z = []
const texture_font_char_us_a = []
const texture_font_char_us_b = []
const texture_font_char_us_c = []
const texture_font_char_us_d = []
const texture_font_char_us_e = []
const texture_font_char_us_f = []
const texture_font_char_us_g = []
const texture_font_char_us_h = []
const texture_font_char_us_i = []
const texture_font_char_us_j = []
const texture_font_char_us_k = []
const texture_font_char_us_l = []
const texture_font_char_us_m = []
const texture_font_char_us_n = []
const texture_font_char_us_o = []
const texture_font_char_us_p = []
const texture_font_char_us_q = []
const texture_font_char_us_r = []
const texture_font_char_us_s = []
const texture_font_char_us_t = []
const texture_font_char_us_u = []
const texture_font_char_us_v = []
const texture_font_char_us_w = []
const texture_font_char_us_x = []
const texture_font_char_us_y = []
const texture_font_char_us_z = []
const texture_font_char_us_left_right_arrow = []
const texture_font_char_us_exclamation = []
const texture_font_char_us_coin = []
const texture_font_char_us_multiply = []
const texture_font_char_us_open_parentheses = []
const texture_font_char_us_close_open_parentheses = []
const texture_font_char_us_close_parentheses = []
const texture_font_char_us_tilde = []
const texture_font_char_us_period = []
const texture_font_char_us_percent = []
const texture_font_char_us_interpunct = []
const texture_font_char_us_comma = []
const texture_font_char_us_apostrophe = []
const texture_font_char_us_question = []
const texture_font_char_us_star_filled = []
const texture_font_char_us_star_hollow = []
const texture_font_char_us_double_quote_open = []
const texture_font_char_us_double_quote_close = []
const texture_font_char_us_ellipsis = []
const texture_font_char_us_slash = []
const texture_font_char_us_ampersand = []
const texture_font_char_us_button_A = []
const texture_font_char_us_button_B = []
const texture_font_char_us_button_C = []
const texture_font_char_us_button_Z = []
const texture_font_char_us_button_R = []
const texture_font_char_us_button_C_up = []
const texture_font_char_us_button_C_down = []
const texture_font_char_us_button_C_left = []
const texture_font_char_us_button_C_right = []
const texture_hud_char_camera = []
const texture_hud_char_lakitu = []
const texture_hud_char_no_camera = []
const texture_hud_char_arrow_up = []
const texture_hud_char_arrow_down = []
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
]

export const dl_ia_text_tex_settings = [
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_MIRROR, 3, G_TX_NOLOD, G_TX_WRAP | G_TX_MIRROR, 4, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, ((16 * 8 + G_IM_SIZ_4b_INCR) >> G_IM_SIZ_4b_SHIFT) - 1, CALC_DXT(16, G_IM_SIZ_4b_BYTES)),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_4b, 1, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_MIRROR, 3, G_TX_NOLOD, G_TX_WRAP | G_TX_MIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (8 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat()

export const dl_rgba16_load_tex_block = [
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (16 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat()