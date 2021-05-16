// Cannon Lid

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATERGB,
    G_SHADING_SMOOTH, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x08004040
const cannon_lid_seg8_lights_08004040 = gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x08004058
export const cannon_lid_seg8_texture_08004058 = []
// actors/cannon_lid/cannon_lid.rgba16.png

// 0x08004858
const cannon_lid_seg8_vertex_08004858 = [
    [[   102,      0,   -101], 0, [   990,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[  -101,      0,   -101], 0, [     0,      0], [0x00, 0x7f, 0x00, 0xff]],
    [[  -101,      0,    102], 0, [     0,    990], [0x00, 0x7f, 0x00, 0xff]],
    [[   102,      0,    102], 0, [   990,    990], [0x00, 0x7f, 0x00, 0xff]],
];

// 0x08004898 - 0x080048E0
export const cannon_lid_seg8_dl_08004898 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cannon_lid_seg8_texture_08004058),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(cannon_lid_seg8_lights_08004040.l, 1),
    gsSPLight(cannon_lid_seg8_lights_08004040.a, 2),
    gsSPVertex(cannon_lid_seg8_vertex_08004858, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x080048E0 - 0x08004950
export const cannon_lid_seg8_dl_080048E0 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_MODULATERGB),
    gsSPClearGeometryMode(G_SHADING_SMOOTH),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(cannon_lid_seg8_dl_08004898),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();


// 1619274064 - 2021-04-24 04:24:36 -1000
