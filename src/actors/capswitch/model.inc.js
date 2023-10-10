// ** actors/capswitch/model
import * as Gbi from "../../include/gbi"

const capswitch_seg5_lights_05001BB8 = Gbi.gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

const capswitch_seg5_lights_05001BD0 = Gbi.gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

const capswitch_seg5_lights_05001BE8 = Gbi.gdSPDefLights1(
    0x3f, 0x00, 0x00,
    0xff, 0x00, 0x00, 0x28, 0x28, 0x28
);

const capswitch_seg5_lights_05001C00 = Gbi.gdSPDefLights1(
    0x01, 0x2a, 0x09,
    0x07, 0xa9, 0x25, 0x28, 0x28, 0x28
);

const capswitch_seg5_lights_05001C18 = Gbi.gdSPDefLights1(
    0x00, 0x00, 0x3f,
    0x00, 0x00, 0xff, 0x28, 0x28, 0x28
);

const capswitch_seg5_lights_05001C30 = Gbi.gdSPDefLights1(
    0x3f, 0x25, 0x02,
    0xff, 0x96, 0x08, 0x28, 0x28, 0x28
);

export const capswitch_seg5_texture_05001C48 = []
export const capswitch_seg5_texture_05002C48 = []

const capswitch_seg5_vertex_05002CC8 = [
    [[  -118,    262,   -203], 0, [  -130,    364], [0x00, 0x36, 0x8e, 0xff]],
    [[   130,      0,   -224], 0, [  1144,   2144], [0x00, 0x0a, 0x82, 0xff]],
    [[  -129,      0,   -224], 0, [  -184,   2144], [0x00, 0x0a, 0x82, 0xff]],
    [[   119,    262,   -203], 0, [  1088,    364], [0x00, 0x36, 0x8e, 0xff]],
    [[   109,    352,   -108], 0, [  1034,   -252], [0x00, 0x5c, 0xa9, 0xff]],
    [[  -108,    352,   -108], 0, [   -74,   -252], [0x00, 0x5c, 0xa9, 0xff]],
    [[  -129,      0,    225], 0, [  -184,   2144], [0x00, 0x0a, 0x7e, 0xff]],
    [[   119,    262,    204], 0, [  1088,    364], [0x00, 0x36, 0x72, 0xff]],
    [[  -118,    262,    204], 0, [  -130,    364], [0x00, 0x36, 0x72, 0xff]],
    [[  -108,    352,    109], 0, [   -74,   -252], [0x00, 0x5c, 0x57, 0xff]],
    [[   130,      0,    225], 0, [  1144,   2144], [0x00, 0x0a, 0x7e, 0xff]],
    [[   109,    352,    109], 0, [  1034,   -252], [0x00, 0x5c, 0x57, 0xff]],
];

// 0x05002D88 - 0x05002E00
export const capswitch_seg5_dl_05002D88 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, capswitch_seg5_texture_05001C48),
    Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1, Gbi.CALC_DXT(32, Gbi.G_IM_SIZ_16b_BYTES)),
    Gbi.gsSPLight(capswitch_seg5_lights_05001BB8.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001BB8.a, 2),
    Gbi.gsSPVertex(capswitch_seg5_vertex_05002CC8, 12, 0),
    Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  0,  3, 0x0),
    Gbi.gsSP2Triangles( 4,  3,  0, 0x0,  5,  4,  0, 0x0),
    Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  8,  7,  9, 0x0),
    Gbi.gsSP2Triangles( 7,  6, 10, 0x0, 11,  9,  7, 0x0),
    Gbi.gsSPEndDisplayList(),
];

// 0x05002E00 - 0x05002E60
export const cap_switch_exclamation_seg5_dl_05002E00 = [
    Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA, Gbi.G_CC_MODULATEIA),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05002D88),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE, Gbi.G_CC_SHADE),
    Gbi.gsSPEndDisplayList(),
];

// 0x05002E60
const capswitch_seg5_vertex_05002E60 = [
    [[   147,      0,   -253], 0, [     0,    499], [0x29, 0x00, 0x88, 0xff]],
    [[  -146,      0,   -253], 0, [     0,   -436], [0xad, 0x00, 0xa1, 0xff]],
    [[  -146,    137,   -253], 0, [   407,   -436], [0xd3, 0x48, 0xa3, 0xff]],
    [[  -146,      0,    254], 0, [     0,   -436], [0xd7, 0x00, 0x77, 0xff]],
    [[   147,      0,    254], 0, [     0,    499], [0x53, 0x00, 0x5f, 0xff]],
    [[   147,    137,    254], 0, [   407,    499], [0x2d, 0x48, 0x5d, 0xff]],
    [[   293,    137,      0], 0, [   407,    967], [0x68, 0x48, 0x07, 0xff]],
    [[   293,      0,      0], 0, [     0,    967], [0x7c, 0x00, 0xe8, 0xff]],
    [[   147,    137,   -253], 0, [   407,    499], [0x3a, 0x47, 0xaa, 0xff]],
    [[   111,    170,   -192], 0, [   510,    386], [0x23, 0x72, 0xd7, 0xff]],
    [[   222,    170,      0], 0, [   510,    741], [0x35, 0x72, 0x0a, 0xff]],
    [[  -146,    137,    254], 0, [   407,   -436], [0xc6, 0x47, 0x56, 0xff]],
    [[   111,    170,    193], 0, [   510,    386], [0x11, 0x72, 0x33, 0xff]],
    [[  -292,    137,      0], 0, [   407,   -904], [0x98, 0x48, 0xf9, 0xff]],
    [[  -110,    170,    193], 0, [   510,   -323], [0xdd, 0x72, 0x29, 0xff]],
    [[  -221,    170,      0], 0, [   510,   -678], [0xcb, 0x72, 0xf6, 0xff]],
];

// 0x05002F60
const capswitch_seg5_vertex_05002F60 = [
    [[  -146,      0,   -253], 0, [     0,   -436], [0xad, 0x00, 0xa1, 0xff]],
    [[  -292,      0,      0], 0, [     0,   -904], [0x84, 0x00, 0x17, 0xff]],
    [[  -292,    137,      0], 0, [   407,   -904], [0x98, 0x48, 0xf9, 0xff]],
    [[   147,    137,   -253], 0, [   407,    499], [0x3a, 0x47, 0xaa, 0xff]],
    [[  -146,    137,   -253], 0, [   407,   -436], [0xd3, 0x48, 0xa3, 0xff]],
    [[  -110,    170,   -192], 0, [   510,   -323], [0xef, 0x72, 0xcd, 0xff]],
    [[  -221,    170,      0], 0, [   510,   -678], [0xcb, 0x72, 0xf6, 0xff]],
    [[   111,    170,   -192], 0, [   510,    386], [0x23, 0x72, 0xd7, 0xff]],
    [[  -146,    137,    254], 0, [   407,   -436], [0xc6, 0x47, 0x56, 0xff]],
    [[   111,    170,    193], 0, [   510,    386], [0x11, 0x72, 0x33, 0xff]],
    [[  -110,    170,    193], 0, [   510,   -323], [0xdd, 0x72, 0x29, 0xff]],
    [[  -146,      0,    254], 0, [     0,   -436], [0xd7, 0x00, 0x77, 0xff]],
];

// 0x05003020 - 0x05003120
export const capswitch_seg5_dl_05003020 = [
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, capswitch_seg5_texture_05002C48),
    Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 16 * 4 - 1, Gbi.CALC_DXT(16, Gbi.G_IM_SIZ_16b_BYTES)),
    Gbi.gsSPLight(capswitch_seg5_lights_05001BD0.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001BD0.a, 2),
    Gbi.gsSPVertex(capswitch_seg5_vertex_05002E60, 16, 0),
    Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  4,  7,  6, 0x0),
    Gbi.gsSP2Triangles( 7,  8,  6, 0x0,  6,  9, 10, 0x0),
    Gbi.gsSP2Triangles( 6,  8,  9, 0x0,  5,  6, 10, 0x0),
    Gbi.gsSP2Triangles(11,  5, 12, 0x0,  3,  5, 11, 0x0),
    Gbi.gsSP2Triangles( 5, 10, 12, 0x0,  7,  0,  8, 0x0),
    Gbi.gsSP2Triangles( 0,  2,  8, 0x0, 13, 14, 15, 0x0),
    Gbi.gsSP1Triangle( 1, 13,  2, 0x0),
    Gbi.gsSPVertex(capswitch_seg5_vertex_05002F60, 12, 0),
    Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    Gbi.gsSP2Triangles( 4,  6,  5, 0x0,  4,  2,  6, 0x0),
    Gbi.gsSP2Triangles( 3,  5,  7, 0x0,  8,  9, 10, 0x0),
    Gbi.gsSP2Triangles( 1,  8,  2, 0x0,  1, 11,  8, 0x0),
    Gbi.gsSP1Triangle( 2,  8, 10, 0x0),
    Gbi.gsSPEndDisplayList(),
];

// 0x05003120 - 0x05003180
export const cap_switch_base_seg5_dl_05003120 = [
    Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGB, Gbi.G_CC_MODULATERGB),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 4, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 2, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 4, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (16 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (4 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05003020),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPPipeSync(),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE, Gbi.G_CC_SHADE),
    Gbi.gsSPEndDisplayList(),
];

//0x05003180
const capswitch_seg5_vertex_05003180 = [
    [[  -118,    262,   -203], 0, [     0,      0], [0xd9, 0x37, 0x95, 0xff]],
    [[   130,      0,   -224], 0, [     0,      0], [0x29, 0x0b, 0x89, 0xff]],
    [[  -129,      0,   -224], 0, [     0,      0], [0xae, 0x0a, 0xa0, 0xff]],
    [[   119,    262,   -203], 0, [     0,      0], [0x49, 0x2c, 0xa3, 0xff]],
    [[   260,      0,      0], 0, [     0,      0], [0x7c, 0x0a, 0xe8, 0xff]],
    [[  -238,    262,      0], 0, [     0,      0], [0x8e, 0x34, 0xf4, 0xff]],
    [[  -108,    352,   -108], 0, [     0,      0], [0xdb, 0x75, 0xe0, 0xff]],
    [[   109,    352,   -108], 0, [     0,      0], [0x25, 0x6d, 0xcd, 0xff]],
    [[   239,    262,      0], 0, [     0,      0], [0x72, 0x34, 0x0c, 0xff]],
    [[  -259,      0,      0], 0, [     0,      0], [0x84, 0x0a, 0x18, 0xff]],
    [[  -118,    262,    204], 0, [     0,      0], [0xb7, 0x2c, 0x5d, 0xff]],
    [[  -108,    352,    109], 0, [     0,      0], [0xdb, 0x6d, 0x33, 0xff]],
    [[  -129,      0,    225], 0, [     0,      0], [0xd7, 0x0b, 0x77, 0xff]],
    [[   119,    262,    204], 0, [     0,      0], [0x27, 0x37, 0x6b, 0xff]],
    [[   109,    352,    109], 0, [     0,      0], [0x25, 0x75, 0x20, 0xff]],
    [[   130,      0,    225], 0, [     0,      0], [0x52, 0x0a, 0x5f, 0xff]],
];

// 0x05003280 - 0x05003350
export const capswitch_seg5_dl_05003280 = [
    Gbi.gsSPVertex(capswitch_seg5_vertex_05003180, 16, 0),
    Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  4, 0x0),
    Gbi.gsSP2Triangles( 1,  0,  3, 0x0,  2,  5,  0, 0x0),
    Gbi.gsSP2Triangles( 0,  5,  6, 0x0,  7,  3,  0, 0x0),
    Gbi.gsSP2Triangles( 6,  7,  0, 0x0,  8,  3,  7, 0x0),
    Gbi.gsSP2Triangles( 4,  3,  8, 0x0,  9, 10,  5, 0x0),
    Gbi.gsSP2Triangles(11,  6,  5, 0x0,  5, 10, 11, 0x0),
    Gbi.gsSP2Triangles( 5,  2,  9, 0x0, 10,  9, 12, 0x0),
    Gbi.gsSP2Triangles(12, 13, 10, 0x0, 10, 13, 11, 0x0),
    Gbi.gsSP2Triangles( 6, 11, 14, 0x0, 14, 11, 13, 0x0),
    Gbi.gsSP2Triangles( 6, 14,  7, 0x0, 15,  8, 13, 0x0),
    Gbi.gsSP2Triangles(13,  8, 14, 0x0, 13, 12, 15, 0x0),
    Gbi.gsSP2Triangles( 8, 15,  4, 0x0,  7, 14,  8, 0x0),
    Gbi.gsSPEndDisplayList(),
];

// 0x05003350 - 0x05003370
export const capswitch_seg5_dl_05003350 = [
    Gbi.gsSPLight(capswitch_seg5_lights_05001BE8.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001BE8.a, 2),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05003280),
    Gbi.gsSPEndDisplayList(),
];

// 0x05003370 - 0x05003390
export const capswitch_seg5_dl_05003370 = [
    Gbi.gsSPLight(capswitch_seg5_lights_05001C00.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001C00.a, 2),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05003280),
    Gbi.gsSPEndDisplayList(),
];

// 0x05003390 - 0x050033B0
export const capswitch_seg5_dl_05003390 = [
    Gbi.gsSPLight(capswitch_seg5_lights_05001C18.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001C18.a, 2),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05003280),
    Gbi.gsSPEndDisplayList(),
];

// 0x050033B0 - 0x050033D0
export const capswitch_seg5_dl_050033B0 = [
    Gbi.gsSPLight(capswitch_seg5_lights_05001C30.l, 1),
    Gbi.gsSPLight(capswitch_seg5_lights_05001C30.a, 2),
    Gbi.gsSPDisplayList(capswitch_seg5_dl_05003280),
    Gbi.gsSPEndDisplayList(),
];