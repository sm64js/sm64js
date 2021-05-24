import {
    gdSPDefLights1, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPEndDisplayList, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPSetGeometryMode, gsSPDisplayList, gsDPSetTextureImage, gsDPLoadSync,
    gsDPLoadBlock, gsSP1Triangle, gsDPSetRenderMode, gsSPBranchList, gsDPSetTexturePersp,
    gsDPSetEnvColor, gsDPSetTextureFilter,
    G_CC_MODULATERGB, G_SHADING_SMOOTH, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_LOADTILE, G_TX_WRAP,
    G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TEXTURE_IMAGE_FRAC, G_OFF,
    G_CC_SHADE, CALC_DXT, G_IM_SIZ_16b_BYTES, G_CC_DECALRGBA, G_RM_AA_TEX_EDGE, G_RM_AA_TEX_EDGE2,
    G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2, G_TP_NONE, G_CC_FADEA, G_RM_AA_XLU_SURF,
    G_RM_AA_XLU_SURF2, G_TF_POINT, G_IM_FMT_IA, G_IM_SIZ_8b, G_TX_CLAMP, G_TP_PERSP, G_TF_BILERP
} from "../../include/gbi"

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../include/surface_terrains"


// 0x07000000 - 0x07000018
const lights_menu_save_button = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07000018 - 0x07000818
export const texture_menu_stone = []
// levels/menu/main_menu_seg7.00018.rgba16.png

// 0x07000818 - 0x07001018
export const texture_menu_dark_stone = []
// levels/menu/main_menu_seg7.00818.rgba16.png

// 0x07001018 - 0x07002018
export const texture_menu_mario_save = []
// levels/menu/main_menu_seg7.01018.rgba16.png

// 0x07002018 - 0x07003018
export const texture_menu_mario_new = []
// levels/menu/main_menu_seg7.02018.rgba16.png

// 0x07003018 - 0x07003118
const vertex_menu_save_button_borders = [
    [[  -163,   -122,      0], 0, [     0,    990], [0x00, 0xb6, 0x66, 0xff]],
    [[   163,   -122,      0], 0, [   990,    990], [0x00, 0xb6, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [    96,    820], [0x00, 0xb6, 0x66, 0xff]],
    [[   122,    -81,     30], 0, [   862,    820], [0x00, 0xb6, 0x66, 0xff]],
    [[  -163,   -122,      0], 0, [     0,    990], [0xb6, 0x00, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [    96,    820], [0xb6, 0x00, 0x66, 0xff]],
    [[  -163,    122,      0], 0, [     0,      0], [0xb6, 0x00, 0x66, 0xff]],
    [[  -122,     81,     30], 0, [    96,    138], [0xb6, 0x00, 0x66, 0xff]],
    [[  -122,     81,     30], 0, [    96,    138], [0x00, 0x4a, 0x66, 0xff]],
    [[   122,     81,     30], 0, [   862,    138], [0x00, 0x4a, 0x66, 0xff]],
    [[   163,    122,      0], 0, [   990,      0], [0x00, 0x4a, 0x66, 0xff]],
    [[  -163,    122,      0], 0, [     0,      0], [0x00, 0x4a, 0x66, 0xff]],
    [[   122,     81,     30], 0, [   862,    138], [0x4a, 0x00, 0x66, 0xff]],
    [[   122,    -81,     30], 0, [   862,    820], [0x4a, 0x00, 0x66, 0xff]],
    [[   163,   -122,      0], 0, [   990,    990], [0x4a, 0x00, 0x66, 0xff]],
    [[   163,    122,      0], 0, [   990,      0], [0x4a, 0x00, 0x66, 0xff]],
];

// 0x07003118 - 0x07003158
const vertex_menu_save_button_front = [
    [[   122,     81,     30], 0, [  2012,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[  -122,     81,     30], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[   122,    -81,     30], 0, [  2012,    990], [0x00, 0x00, 0x7f, 0xff]],
    [[  -122,    -81,     30], 0, [     0,    990], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x07003158 - 0x070031A0
const dl_tex_block_menu_save_button_base = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x070031A0 - 0x07003218
const dl_vertex_menu_save_button_borders = [
    gsSPLight(lights_menu_save_button.l, 1),
    gsSPLight(lights_menu_save_button.a, 2),
    gsSPVertex(vertex_menu_save_button_borders, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 10, 0x0),
    gsSP2Triangles(12, 13, 14, 0x0, 15, 12, 14, 0x0),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 6, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x07003218 - 0x07003258
const dl_vertex_menu_save_button_front = [
    gsSPVertex(vertex_menu_save_button_front, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x07003258 - 0x07003298
const vertex_menu_save_button_back = [
    [[   163,   -122,      0], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -163,   -122,      0], 0, [   990,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   163,    122,      0], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -163,    122,      0], 0, [   990,      0], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07003298 - 0x070032E0
const dl_tex_block_menu_save_button_back = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x070032E0 - 0x07003330
const dl_vertex_menu_save_button_back = [
    gsSPLight(lights_menu_save_button.l, 1),
    gsSPLight(lights_menu_save_button.a, 2),
    gsSPVertex(vertex_menu_save_button_back, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x07003330 - 0x07003380
export const dl_menu_mario_save_button_base = [
    gsSPDisplayList(dl_tex_block_menu_save_button_base),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_stone),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_vertex_menu_save_button_borders),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_mario_save),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_vertex_menu_save_button_front),
    gsSPEndDisplayList(),
].flat();

// 0x07003380 - 0x070033D0
export const dl_menu_mario_new_button_base = [
    gsSPDisplayList(dl_tex_block_menu_save_button_base),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_stone),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_vertex_menu_save_button_borders),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_mario_new),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_vertex_menu_save_button_front),
    gsSPEndDisplayList(),
].flat();

// 0x070033D0 - 0x07003400
export const dl_menu_save_button_back = [
    gsSPDisplayList(dl_tex_block_menu_save_button_back),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_dark_stone),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_vertex_menu_save_button_back),
    gsSPEndDisplayList(),
].flat();

// 0x07003400 - 0x07003450
export const dl_menu_save_button_fade_back = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsSPLight(lights_menu_save_button.l, 1),
    gsSPLight(lights_menu_save_button.a, 2),
    gsSPVertex(vertex_menu_save_button_back, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsDPPipeSync(),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x07003450 - 0x07003468
const lights_menu_main_button = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07003468 - 0x07003468
export const texture_menu_erase = []
// levels/menu/main_menu_seg7.03468.rgba16.png

// 0x07003C68 - 0x07003C68
export const texture_menu_copy = []
// levels/menu/main_menu_seg7.03C68.rgba16.png

// 0x07004468 - 0x07004468
export const texture_menu_file = []
// levels/menu/main_menu_seg7.04468.rgba16.png

// 0x07004C68 - 0x07004C68
export const texture_menu_score = []
// levels/menu/main_menu_seg7.04C68.rgba16.png

// 0x07005468 - 0x07005468
export const texture_menu_sound = []
// levels/menu/main_menu_seg7.05468.rgba16.png

// 0x07005C68 - 0x07005D68
const vertex_menu_main_button_group1 = [
    [[  -163,   -122,      0], 0, [   990,      0], [0xb6, 0x00, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [   862,    138], [0xb6, 0x00, 0x66, 0xff]],
    [[  -163,    122,      0], 0, [   990,    990], [0xb6, 0x00, 0x66, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x59, 0x00, 0xa7, 0xff]],
    [[  -133,     92,     10], 0, [   894,    862], [0x59, 0x00, 0xa7, 0xff]],
    [[  -133,    -92,     10], 0, [   894,     96], [0x59, 0x00, 0xa7, 0xff]],
    [[  -133,     92,     10], 0, [   894,    862], [0x00, 0x00, 0x81, 0xff]],
    [[   133,    -92,     10], 0, [    64,     96], [0x00, 0x00, 0x81, 0xff]],
    [[  -133,    -92,     10], 0, [   894,     96], [0x00, 0x00, 0x81, 0xff]],
    [[   133,     92,     10], 0, [    64,    862], [0x00, 0x00, 0x81, 0xff]],
    [[   133,     92,     10], 0, [    64,    862], [0x00, 0xa7, 0xa7, 0xff]],
    [[  -133,     92,     10], 0, [   894,    862], [0x00, 0xa7, 0xa7, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x00, 0xa7, 0xa7, 0xff]],
    [[   143,   -102,      0], 0, [    32,     54], [0xa7, 0x00, 0xa7, 0xff]],
    [[   133,     92,     10], 0, [    64,    862], [0xa7, 0x00, 0xa7, 0xff]],
    [[   143,    102,      0], 0, [    32,    904], [0xa7, 0x00, 0xa7, 0xff]],
];

// 0x07005D68 - 0x07005E68
const vertex_menu_main_button_group2 = [
    [[   143,   -102,      0], 0, [    32,     54], [0xa7, 0x00, 0xa7, 0xff]],
    [[   133,    -92,     10], 0, [    64,     96], [0xa7, 0x00, 0xa7, 0xff]],
    [[   133,     92,     10], 0, [    64,    862], [0xa7, 0x00, 0xa7, 0xff]],
    [[   133,     92,     10], 0, [    64,    862], [0x00, 0xa7, 0xa7, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x00, 0xa7, 0xa7, 0xff]],
    [[   143,    102,      0], 0, [    32,    904], [0x00, 0xa7, 0xa7, 0xff]],
    [[  -143,   -102,      0], 0, [   926,     54], [0x00, 0x59, 0xa7, 0xff]],
    [[   133,    -92,     10], 0, [    64,     96], [0x00, 0x59, 0xa7, 0xff]],
    [[   143,   -102,      0], 0, [    32,     54], [0x00, 0x59, 0xa7, 0xff]],
    [[  -133,    -92,     10], 0, [   894,     96], [0x00, 0x59, 0xa7, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x59, 0x00, 0xa7, 0xff]],
    [[  -133,    -92,     10], 0, [   894,     96], [0x59, 0x00, 0xa7, 0xff]],
    [[  -143,   -102,      0], 0, [   926,     54], [0x59, 0x00, 0xa7, 0xff]],
    [[   163,    122,      0], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x00, 0x00, 0x81, 0xff]],
    [[  -163,    122,      0], 0, [   990,    990], [0x00, 0x00, 0x81, 0xff]],
];

// 0x07005E68 - 0x07005F48
const vertex_menu_main_button_group3 = [
    [[   163,    122,      0], 0, [     0,    990], [0x00, 0x00, 0x81, 0xff]],
    [[   143,    102,      0], 0, [    32,    904], [0x00, 0x00, 0x81, 0xff]],
    [[  -143,    102,      0], 0, [   926,    904], [0x00, 0x00, 0x81, 0xff]],
    [[   143,   -102,      0], 0, [    32,     54], [0x00, 0x00, 0x81, 0xff]],
    [[   163,   -122,      0], 0, [     0,      0], [0x00, 0x00, 0x81, 0xff]],
    [[  -163,    122,      0], 0, [   990,    990], [0x00, 0x00, 0x81, 0xff]],
    [[  -143,   -102,      0], 0, [   926,     54], [0x00, 0x00, 0x81, 0xff]],
    [[  -163,   -122,      0], 0, [   990,      0], [0x00, 0x00, 0x81, 0xff]],
    [[   163,   -122,      0], 0, [     0,      0], [0x00, 0xb6, 0x66, 0xff]],
    [[   122,    -81,     30], 0, [    96,    138], [0x00, 0xb6, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [   862,    138], [0x00, 0xb6, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [   862,    138], [0xb6, 0x00, 0x66, 0xff]],
    [[  -122,     81,     30], 0, [   862,    820], [0xb6, 0x00, 0x66, 0xff]],
    [[  -163,    122,      0], 0, [   990,    990], [0xb6, 0x00, 0x66, 0xff]],
];

// 0x07005F48 - 0x07006038
const vertex_menu_main_button_group4 = [
    [[  -122,     81,     30], 0, [   862,    820], [0x00, 0x00, 0x7f, 0xff]],
    [[  -122,    -81,     30], 0, [   862,    138], [0x00, 0x00, 0x7f, 0xff]],
    [[   122,    -81,     30], 0, [    96,    138], [0x00, 0x00, 0x7f, 0xff]],
    [[  -163,   -122,      0], 0, [   990,      0], [0x00, 0xb6, 0x66, 0xff]],
    [[   163,   -122,      0], 0, [     0,      0], [0x00, 0xb6, 0x66, 0xff]],
    [[  -122,    -81,     30], 0, [   862,    138], [0x00, 0xb6, 0x66, 0xff]],
    [[  -122,     81,     30], 0, [   862,    820], [0x00, 0x4a, 0x66, 0xff]],
    [[   122,     81,     30], 0, [    96,    820], [0x00, 0x4a, 0x66, 0xff]],
    [[   163,    122,      0], 0, [     0,    990], [0x00, 0x4a, 0x66, 0xff]],
    [[  -163,    122,      0], 0, [   990,    990], [0x00, 0x4a, 0x66, 0xff]],
    [[   122,     81,     30], 0, [    96,    820], [0x00, 0x00, 0x7f, 0xff]],
    [[   163,    122,      0], 0, [     0,    990], [0x4a, 0x00, 0x66, 0xff]],
    [[   122,     81,     30], 0, [    96,    820], [0x4a, 0x00, 0x66, 0xff]],
    [[   163,   -122,      0], 0, [     0,      0], [0x4a, 0x00, 0x66, 0xff]],
    [[   122,    -81,     30], 0, [    96,    138], [0x4a, 0x00, 0x66, 0xff]],
];

// 0x07006038 - 0x07006150
const dl_vertex_menu_main_button = [
    gsSPLight(lights_menu_main_button.l, 1),
    gsSPLight(lights_menu_main_button.a, 2),
    gsSPVertex(vertex_menu_main_button_group1, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(vertex_menu_main_button_group2, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(vertex_menu_main_button_group3, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 0,  4,  3, 0x0,  5,  2,  6, 0x0),
    gsSP2Triangles( 5,  6,  7, 0x0,  6,  3,  4, 0x0),
    gsSP2Triangles( 6,  4,  7, 0x0,  8,  9, 10, 0x0),
    gsSP1Triangle(11, 12, 13, 0x0),
    gsSPVertex(vertex_menu_main_button_group4, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9,  6,  8, 0x0),
    gsSP2Triangles(10,  0,  2, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(12, 14, 13, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07006150 - 0x07006198
const dl_tex_block_menu_main_button = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x07006198 - 0x070061C8
const dl_menu_main_button = [
    gsSPDisplayList(dl_vertex_menu_main_button),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 0x070061C8 - 0x070061F8
export const dl_menu_erase_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_erase),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x070061F8 - 0x07006228
export const dl_menu_copy_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_copy),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x07006228 - 0x07006258
export const dl_menu_file_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_file),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x07006258 - 0x07006288
export const dl_menu_score_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_score),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x07006288 - 0x070062B8
export const dl_menu_sound_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_sound),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x070062B8 - 0x070062E8
export const dl_menu_generic_button = [
    gsSPDisplayList(dl_tex_block_menu_main_button),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_stone),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPDisplayList(dl_menu_main_button),
    gsSPEndDisplayList(),
].flat();

// 0x070062E8 - 0x07006328
const vertex_menu_hand = [
    [[     0,      0,      0], 0, [     0,   1984], [0x00, 0x00, 0x7f, 0xff]],
    [[    32,      0,      0], 0, [  1984,   1984], [0x00, 0x00, 0x7f, 0xff]],
    [[    32,     32,      0], 0, [  1984,      0], [0x00, 0x00, 0x7f, 0xff]],
    [[     0,     32,      0], 0, [     0,      0], [0x00, 0x00, 0x7f, 0xff]],
];

// 0x07006328 - 0x07006B28
export const texture_menu_idle_hand = []
// levels/menu/main_menu_seg7.06328.rgba16.png

// 0x07006B28 - 0x07007328
export const texture_menu_grabbing_hand = []
// levels/menu/main_menu_seg7.06B28.rgba16.png

// 0x07007328 - 0x070073A0
const dl_menu_hand = [
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsDPSetRenderMode(G_RM_AA_TEX_EDGE, G_RM_AA_TEX_EDGE2),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPVertex(vertex_menu_hand, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0x0001, 0x0001, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x070073A0 - 0x070073B8
export const dl_menu_idle_hand = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_idle_hand),
    gsSPBranchList(dl_menu_hand),
].flat();

// 0x070073B8 - 0x070073D0
export const dl_menu_grabbing_hand = [
    gsDPPipeSync(),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_grabbing_hand),
    gsSPBranchList(dl_menu_hand),
].flat();

// 0x070073D0
export const texture_menu_hud_char_katakana_hu = []
// levels/menu/main_menu_seg7.073D0.rgba16.png

// 0x070075D0
export const texture_menu_hud_char_katakana_small_a = []
// levels/menu/main_menu_seg7.075D0.rgba16.png

// 0x070077D0
export const texture_menu_hud_char_katakana_i = []
// levels/menu/main_menu_seg7.077D0.rgba16.png

// 0x070079D0
export const texture_menu_hud_char_katakana_ru = []
// levels/menu/main_menu_seg7.079D0.rgba16.png

// 0x07007BD0
export const texture_menu_hud_char_katakana_se = []
// levels/menu/main_menu_seg7.07BD0.rgba16.png

// 0x07007DD0
export const texture_menu_hud_char_katakana_re = []
// levels/menu/main_menu_seg7.07DD0.rgba16.png

// 0x07007FD0
export const texture_menu_hud_char_katakana_ku = []
// levels/menu/main_menu_seg7.07FD0.rgba16.png

// 0x070081D0
export const texture_menu_hud_char_katakana_to = []
// levels/menu/main_menu_seg7.081D0.rgba16.png

// 0x070083D0
export const texture_menu_hud_char_hiragana_wo = []
// levels/menu/main_menu_seg7.083D0.rgba16.png

// 0x070085D0
export const texture_menu_hud_char_katakana_ko = []
// levels/menu/main_menu_seg7.085D0.rgba16.png

// 0x070087D0
export const texture_menu_hud_char_kana_handakuten_pi = []
// levels/menu/main_menu_seg7.087D0.rgba16.png

// 0x070089D0
export const texture_menu_hud_char_choonpu = []
// levels/menu/main_menu_seg7.089D0.rgba16.png

// 0x07008BD0
export const texture_menu_hud_char_hiragana_su = []
// levels/menu/main_menu_seg7.08BD0.rgba16.png

// 0x07008DD0
export const texture_menu_hud_char_hiragana_ru = []
// levels/menu/main_menu_seg7.08DD0.rgba16.png

// 0x07008FD0
export const texture_menu_hud_char_hiragana_ke = []
// levels/menu/main_menu_seg7.08FD0.rgba16.png

// 0x070091D0
export const texture_menu_hud_char_katakana_ma = []
// levels/menu/main_menu_seg7.091D0.rgba16.png

// 0x070093D0
export const texture_menu_hud_char_katakana_ri = []
// levels/menu/main_menu_seg7.093D0.rgba16.png

// 0x070095D0
export const texture_menu_hud_char_katakana_o = []
// levels/menu/main_menu_seg7.095D0.rgba16.png

// 0x070097D0
export const texture_menu_hud_char_katakana_su = []
// levels/menu/main_menu_seg7.097D0.rgba16.png

// 0x070099D0
export const texture_menu_hud_char_katakana_a = []
// levels/menu/main_menu_seg7.099D0.rgba16.png

// 0x07009BD0
export const texture_menu_hud_char_hiragana_mi = []
// levels/menu/main_menu_seg7.09BD0.rgba16.png

// 0x07009DD0
export const texture_menu_hud_char_hira_dakuten_do = []
// levels/menu/main_menu_seg7.09DD0.rgba16.png

// 0x07009FD0
export const texture_menu_hud_char_hiragana_no = []
// levels/menu/main_menu_seg7.09FD0.rgba16.png

// 0x0700A1D0
export const texture_menu_hud_char_question = []
// levels/menu/main_menu_seg7.0A1D0.rgba16.png

// 0x0700A3D0
export const texture_menu_hud_char_katakana_sa = []
// levels/menu/main_menu_seg7.0A3D0.rgba16.png

// 0x0700A5D0
export const texture_menu_hud_char_katakana_u = []
// levels/menu/main_menu_seg7.0A5D0.rgba16.png

// 0x0700A7D0
export const texture_menu_hud_char_katakana_n = []
// levels/menu/main_menu_seg7.0A7D0.rgba16.png

// 0x0700A9D0
export const texture_menu_hud_char_kana_dakuten_do = []
// levels/menu/main_menu_seg7.0A9D0.rgba16.png

// 0x0700AC40
export const texture_menu_font_char_0 = []
// levels/menu/main_menu_seg7_us.0AC40.ia8.png

// 0x0700AC80
export const texture_menu_font_char_1 = []
// levels/menu/main_menu_seg7_us.0AC80.ia8.png

// 0x0700ACC0
export const texture_menu_font_char_2 = []
// levels/menu/main_menu_seg7_us.0ACC0.ia8.png

// 0x0700AD00
export const texture_menu_font_char_3 = []
// levels/menu/main_menu_seg7_us.0AD00.ia8.png

// 0x0700AD40
export const texture_menu_font_char_4 = []
// levels/menu/main_menu_seg7_us.0AD40.ia8.png

// 0x0700AD80
export const texture_menu_font_char_5 = []
// levels/menu/main_menu_seg7_us.0AD80.ia8.png

// 0x0700ADC0
export const texture_menu_font_char_6 = []
// levels/menu/main_menu_seg7_us.0ADC0.ia8.png

// 0x0700AE00
export const texture_menu_font_char_7 = []
// levels/menu/main_menu_seg7_us.0AE00.ia8.png

// 0x0700AE40
export const texture_menu_font_char_8 = []
// levels/menu/main_menu_seg7_us.0AE40.ia8.png

// 0x0700AE80
export const texture_menu_font_char_9 = []
// levels/menu/main_menu_seg7_us.0AE80.ia8.png

// 0x0700AEC0
export const texture_menu_font_char_A = []
// levels/menu/main_menu_seg7_us.0AEC0.ia8.png

// 0x0700AF00
export const texture_menu_font_char_B = []
// levels/menu/main_menu_seg7_us.0AF00.ia8.png

// 0x0700AF40
export const texture_menu_font_char_C = []
// levels/menu/main_menu_seg7_us.0AF40.ia8.png

// 0x0700AF80
export const texture_menu_font_char_D = []
// levels/menu/main_menu_seg7_us.0AF80.ia8.png

// 0x0700AFC0
export const texture_menu_font_char_E = []
// levels/menu/main_menu_seg7_us.0AFC0.ia8.png

// 0x0700B000
export const texture_menu_font_char_F = []
// levels/menu/main_menu_seg7_us.0B000.ia8.png

// 0x0700B040
export const texture_menu_font_char_G = []
// levels/menu/main_menu_seg7_us.0B040.ia8.png

// 0x0700B080
export const texture_menu_font_char_H = []
// levels/menu/main_menu_seg7_us.0B080.ia8.png

// 0x0700B0C0
export const texture_menu_font_char_I = []
// levels/menu/main_menu_seg7_us.0B0C0.ia8.png

// 0x0700B100
export const texture_menu_font_char_J = []
// levels/menu/main_menu_seg7_us.0B100.ia8.png

// 0x0700B140
export const texture_menu_font_char_K = []
// levels/menu/main_menu_seg7_us.0B140.ia8.png

// 0x0700B180
export const texture_menu_font_char_L = []
// levels/menu/main_menu_seg7_us.0B180.ia8.png

// 0x0700B1C0
export const texture_menu_font_char_M = []
// levels/menu/main_menu_seg7_us.0B1C0.ia8.png

// 0x0700B200
export const texture_menu_font_char_N = []
// levels/menu/main_menu_seg7_us.0B200.ia8.png

// 0x0700B240
export const texture_menu_font_char_O = []
// levels/menu/main_menu_seg7_us.0B240.ia8.png

// 0x0700B280
export const texture_menu_font_char_P = []
// levels/menu/main_menu_seg7_us.0B280.ia8.png

// 0x0700B2C0
export const texture_menu_font_char_Q = []
// levels/menu/main_menu_seg7_us.0B2C0.ia8.png

// 0x0700B300
export const texture_menu_font_char_R = []
// levels/menu/main_menu_seg7_us.0B300.ia8.png

// 0x0700B340
export const texture_menu_font_char_S = []
// levels/menu/main_menu_seg7_us.0B340.ia8.png

// 0x0700B380
export const texture_menu_font_char_T = []
// levels/menu/main_menu_seg7_us.0B380.ia8.png

// 0x0700B3C0
export const texture_menu_font_char_U = []
// levels/menu/main_menu_seg7_us.0B3C0.ia8.png

// 0x0700B400
export const texture_menu_font_char_V = []
// levels/menu/main_menu_seg7_us.0B400.ia8.png

// 0x0700B440
export const texture_menu_font_char_W = []
// levels/menu/main_menu_seg7_us.0B440.ia8.png

// 0x0700B480
export const texture_menu_font_char_X = []
// levels/menu/main_menu_seg7_us.0B480.ia8.png

// 0x0700B4C0
export const texture_menu_font_char_Y = []
// levels/menu/main_menu_seg7_us.0B4C0.ia8.png

// 0x0700B500
export const texture_menu_font_char_Z = []
// levels/menu/main_menu_seg7_us.0B500.ia8.png

// 0x0700B540
export const texture_menu_font_char_coin = []
// levels/menu/main_menu_seg7_us.0B540.ia8.png

// 0x0700B580
export const texture_menu_font_char_multiply = []
// levels/menu/main_menu_seg7_us.0B580.ia8.png

// 0x0700B5C0
export const texture_menu_font_char_star_filled = []
// levels/menu/main_menu_seg7_us.0B5C0.ia8.png

// 0x0700B600
export const texture_menu_font_char_dash = []
// levels/menu/main_menu_seg7_us.0B600.ia8.png

// 0x0700B640
export const texture_menu_font_char_comma = []
// levels/menu/main_menu_seg7_us.0B640.ia8.png

// 0x0700B680
export const texture_menu_font_char_apostrophe = []
// levels/menu/main_menu_seg7_us.0B680.ia8.png

// 0x0700B6C0
export const texture_menu_font_char_exclamation = []
// levels/menu/main_menu_seg7_us.0B6C0.ia8.png

// 0x0700B700
export const texture_menu_font_char_question = []
// levels/menu/main_menu_seg7_us.0B700.ia8.png

// 0x0700B740
export const texture_menu_font_char_mface1 = []
// levels/menu/main_menu_seg7_us.0B740.ia8.png

// 0x0700B780
export const texture_menu_font_char_mface2 = []
// levels/menu/main_menu_seg7_us.0B780.ia8.png

// 0x0700B7C0
export const texture_menu_font_char_period = []
// levels/menu/main_menu_seg7_us.0B7C0.ia8.png

// 0x0700B800
export const texture_menu_font_char_ampersand = []
// levels/menu/main_menu_seg7_us.0B800.ia8.png

// 0x0700B840
export const texture_menu_font_char_umlaut = []
// levels/menu/main_menu_seg7_eu.0B840.ia8.png

// 0x0700B880
export const texture_menu_font_char_cedilla_mayus = []
// levels/menu/main_menu_seg7_eu.0B880.ia8.png

// 0x0700B8C0
export const texture_menu_font_char_colon = []
// levels/menu/main_menu_seg7_eu.0B8C0.ia8.png

// Menu small font print table
// 0x0700CD08

// 0x0700D108 - 0x0700D160
export const dl_menu_ia8_text_begin = [
    gsDPPipeSync(),
    gsDPSetTexturePersp(G_TP_NONE),
    gsDPSetCombineMode(G_CC_FADEA, G_CC_FADEA),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsDPSetRenderMode(G_RM_AA_XLU_SURF, G_RM_AA_XLU_SURF2),
    gsDPSetTextureFilter(G_TF_POINT),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_8b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_8b, 1, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 3, G_TX_NOLOD, G_TX_CLAMP, 3, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (8 - 1) << G_TEXTURE_IMAGE_FRAC, (8 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPEndDisplayList(),
].flat();

// 0x0700D160 - 0x0700D1A0
export const dl_menu_ia8_text_end = [
    gsDPPipeSync(),
    gsDPSetTexturePersp(G_TP_PERSP),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsDPSetEnvColor(255, 255, 255, 255),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetTextureFilter(G_TF_BILERP),
    gsSPEndDisplayList(),
].flat();


// 0x0700D1A8 - 0x0700E1A8
export const texture_menu_course_upper = []
// levels/menu/main_menu_seg7.0D1A8.rgba16.png

// 0x0700E1A8 - 0x0700F1A8
export const texture_menu_course_lower = []
// levels/menu/main_menu_seg7.0E1A8.rgba16.png

// 0x0700F1A8 - 0x0700F1E8
const vertex_menu_course_upper = [
    [[   -32,      0,      0], 0, [     0,   1984], [0x00, 0x00, 0x7f, 0x00]],
    [[    32,      0,      0], 0, [  4032,   1984], [0x00, 0x00, 0x7f, 0x00]],
    [[    32,     32,      0], 0, [  4032,      0], [0x00, 0x00, 0x7f, 0x00]],
    [[   -32,     32,      0], 0, [     0,      0], [0x00, 0x00, 0x7f, 0x00]],
];

// 0x0700F1E8 - 0x0700F228
const vertex_menu_course_lower = [
    [[   -32,    -32,      0], 0, [     0,   1984], [0x00, 0x00, 0x7f, 0x00]],
    [[    32,    -32,      0], 0, [  4032,   1984], [0x00, 0x00, 0x7f, 0x00]],
    [[    32,      0,      0], 0, [  4032,      0], [0x00, 0x00, 0x7f, 0x00]],
    [[   -32,      0,      0], 0, [     0,      0], [0x00, 0x00, 0x7f, 0x00]],
];

// 0x0700F228 - 0x0700F2F8
export const dl_menu_rgba16_wood_course = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPSetRenderMode(G_RM_AA_TEX_EDGE, G_RM_AA_TEX_EDGE2),
    gsSPEndDisplayList(),
].flat();
export const dl_menu_rgba16_wood_course_end = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_course_upper),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPVertex(vertex_menu_course_upper, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, texture_menu_course_lower),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 64 * 32 - 1, CALC_DXT(64, G_IM_SIZ_16b_BYTES)),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (64 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPVertex(vertex_menu_course_lower, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_AA_ZB_OPA_SURF2),
    gsSPTexture(0x0001, 0x0001, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 0x0700F2F8 - 0x0700F328
export const main_menu_seg7_collision = [
    COL_INIT(),
    COL_VERTEX_INIT(0x4),
    COL_VERTEX( 8192, -1000, -8192),
    COL_VERTEX(-8192, -1000, -8192),
    COL_VERTEX(-8192, -1000,  8192),
    COL_VERTEX( 8192, -1000,  8192),
    COL_TRI_INIT(SURFACE_DEFAULT, 2),
    COL_TRI(0, 1, 2),
    COL_TRI(0, 2, 3),
    COL_TRI_STOP(),
    COL_END(),
]

// 1621604711 - 2021-05-21 06:45:14 -0700
