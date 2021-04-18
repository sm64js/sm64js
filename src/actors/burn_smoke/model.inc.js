// Burn Smoke

import {
    gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsSPTexture, gsSPEndDisplayList,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsSPDisplayList, gsDPLoadTextureBlock,
    G_CC_MODULATERGBA, G_LIGHTING, G_CULL_BACK, G_TX_RENDERTILE, G_ON, G_OFF, G_CC_SHADE,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_CLAMP, G_TX_NOLOD
} from "../../include/gbi"

// 0x040217C0
const burn_smoke_seg4_vertex_040217C0 = [
    [[   -50,    -50,      0], 0, [     0,    992], [0x14, 0x0a, 0x0a, 0xff]],
    [[    50,    -50,      0], 0, [   992,    992], [0x14, 0x0a, 0x0a, 0xff]],
    [[    50,     50,      0], 0, [   992,      0], [0x14, 0x0a, 0x0a, 0xff]],
    [[   -50,     50,      0], 0, [     0,      0], [0x14, 0x0a, 0x0a, 0xff]],
];

// //! Wrong texture format. Called as rgba16, which makes the burn smoke appear
//     as a transparent black burn smoke. Probably meant to show up as white-ish
//     burn smoke, but mistakened for being intended as black smoke.
// 0x04021800
export const burn_smoke_seg4_texture_04021800 = []
// actors/burn_smoke/burn_smoke.ia16.png

// 0x04022000 - 0x04022028
export const burn_smoke_seg4_dl_04022000 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPEndDisplayList(),
].flat();

// 0x04022028 - 0x04022048
export const burn_smoke_seg4_dl_04022028 = [
    gsSPVertex(burn_smoke_seg4_vertex_040217C0, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x04022048 - 0x04022070
export const burn_smoke_seg4_dl_04022048 = [
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 0x04022070 - 0x040220C8
export const burn_smoke_seg4_dl_04022070 = [
    gsSPDisplayList(burn_smoke_seg4_dl_04022000),
    gsDPLoadTextureBlock(burn_smoke_seg4_texture_04021800, G_IM_FMT_RGBA, G_IM_SIZ_16b, 32, 32, 0, G_TX_CLAMP, G_TX_CLAMP, 5, 5, G_TX_NOLOD, G_TX_NOLOD),
    gsSPDisplayList(burn_smoke_seg4_dl_04022028),
    gsSPDisplayList(burn_smoke_seg4_dl_04022048),
    gsSPEndDisplayList(),
].flat();

// 1618762576 - 2021-04-18 06:26:12 -1000
