// White Particle

import {
    gsDPPipeSync, gsSPClearGeometryMode, gsDPSetCombineMode, gsDPLoadTextureBlock, gsSPTexture,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsSPEndDisplayList,
    G_LIGHTING, G_CC_DECALRGBA, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_CLAMP, G_TX_NOLOD,
    G_TX_RENDERTILE, G_ON, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x0302C660
const white_particle_vertex = [
    [[   -15,    -15,      0], 0, [     0,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    15,    -15,      0], 0, [   480,    480], [0xff, 0xff, 0xff, 0xff]],
    [[    15,     15,      0], 0, [   480,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   -15,     15,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0302C6A0
export const white_particle_texture = []
// actors/white_particle/snow_particle.rgba16.png

// 0x0302C8A0 - 0x0302C938
export const white_particle_dl = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsDPLoadTextureBlock(white_particle_texture, G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 16, 0, G_TX_CLAMP, G_TX_CLAMP, 4, 4, G_TX_NOLOD, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsSPVertex(white_particle_vertex, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 1619267130 - 2021-04-24 03:19:12 -1000
