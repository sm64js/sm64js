import * as Gbi from "../../include/gbi"

export const texture_power_meter_left_side = []
export const texture_power_meter_right_side = []
export const texture_power_meter_full = []
export const texture_power_meter_seven_segments = []
export const texture_power_meter_six_segments = []
export const texture_power_meter_five_segments = []
export const texture_power_meter_four_segments = []
export const texture_power_meter_three_segments = []
export const texture_power_meter_two_segments = []
export const texture_power_meter_one_segments = []

export const vertex_power_meter_health_segments = [
    { pos: [   -16,    -16,      0], flag: 0, tc: [     0,    992], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [    15,    -16,      0], flag: 0, tc: [   992,    992], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [    15,     16,      0], flag: 0, tc: [   992,      0], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [   -16,     16,      0], flag: 0, tc: [     0,      0], color: [0xff, 0xff, 0xff, 0xff]},
];

export const vertex_power_meter_base = [
    { pos: [   -32,    -32,      0], flag: 0, tc: [     0,   2016], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [     0,    -32,      0], flag: 0, tc: [   992,   2016], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [     0,     32,      0], flag: 0, tc: [   992,      0], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [   -32,     32,      0], flag: 0, tc: [     0,      0], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [     0,    -32,      0], flag: 0, tc: [     1,   2016], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [    32,    -32,      0], flag: 0, tc: [  1024,   2016], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [    32,     32,      0], flag: 0, tc: [  1024,      0], color: [0xff, 0xff, 0xff, 0xff]},
    { pos: [     0,     32,      0], flag: 0, tc: [     1,      0], color: [0xff, 0xff, 0xff, 0xff]},
];

export const power_meter_health_segments_lut = [
    texture_power_meter_one_segments,
    texture_power_meter_two_segments,
    texture_power_meter_three_segments,
    texture_power_meter_four_segments,
    texture_power_meter_five_segments,
    texture_power_meter_six_segments,
    texture_power_meter_seven_segments,
    texture_power_meter_full,
];


export const dl_power_meter_base = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA, Gbi.G_CC_DECALRGBA),
    // Gbi.gsDPSetRenderMode(Gbi.G_RM_TEX_EDGE, Gbi.G_RM_TEX_EDGE2),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_POINT),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsSPVertex(vertex_power_meter_base, 8, 0),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
    // Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture_power_meter_left_side),
    // Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, texture_power_meter_right_side),
    // Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    Gbi.gsSPEndDisplayList(),
];

export const dl_power_meter_health_segments_begin = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsSPVertex(vertex_power_meter_health_segments, 4, 0),
    // Gbi.gsDPTileSync(),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPEndDisplayList(),
];

export const dl_power_meter_health_segments_end = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_OPA_SURF_SURF2),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE, Gbi.G_CC_SHADE),
    Gbi.gsDPSetTextureFilter(Gbi.G_TF_BILERP),
    Gbi.gsSPEndDisplayList(),
];