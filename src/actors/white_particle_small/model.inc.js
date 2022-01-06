// White Particle Small

import {
    gsDPPipeSync, gsSPClearGeometryMode, gsDPSetCombineMode, gsSPTexture, gsDPLoadTextureBlock,
    gsSPEndDisplayList, gsSP2Triangles, gsSPSetGeometryMode, gsSPDisplayList, gsSPVertex,
    gsSPBranchList,
    G_LIGHTING, G_CC_MODULATERGBA, G_TX_RENDERTILE, G_ON, G_IM_FMT_RGBA, G_IM_SIZ_16b, G_TX_CLAMP,
    G_TX_NOLOD, G_OFF, G_CC_SHADE
} from "../../include/gbi"

// 0x04032700
const white_particle_small_vertex = [
    [[    -4,      0,      0], 0, [     0,    960], [0xff, 0xff, 0xff, 0xff]],
    [[     4,      0,      0], 0, [   960,    960], [0xff, 0xff, 0xff, 0xff]],
    [[     4,      8,      0], 0, [   960,      0], [0xff, 0xff, 0xff, 0xff]],
    [[    -4,      8,      0], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x04032740
const white_particle_small_unused_vertex = [
    [[    -4,      0,      0], 0, [     0,    960], [0xff, 0x00, 0x00, 0xff]],
    [[     4,      0,      0], 0, [   960,    960], [0xff, 0x00, 0x00, 0xff]],
    [[     4,      8,      0], 0, [   960,      0], [0xff, 0x00, 0x00, 0xff]],
    [[    -4,      8,      0], 0, [     0,      0], [0xff, 0x00, 0x00, 0xff]],
];

// 0x04032780
export const white_particle_small_texture = []
// actors/white_particle_small/small_snow_particle.rgba16.png

// 0x04032980 - 0x040329E0
export const white_particle_small_dl_begin = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_MODULATERGBA, G_CC_MODULATERGBA),
    gsSPTexture(0x8000, 0x8000, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(white_particle_small_texture, G_IM_FMT_RGBA, G_IM_SIZ_16b, 16, 16, 0, G_TX_CLAMP, G_TX_CLAMP, 4, 4, G_TX_NOLOD, G_TX_NOLOD),
    gsSPEndDisplayList(),
].flat();

// 0x040329E0 - 0x04032A18
export const white_particle_small_dl_end = [
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsDPPipeSync(),
    gsSPTexture(0x0001, 0x0001, 0, G_TX_RENDERTILE, G_OFF),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 0x04032A18 - 0x04032A30
export const white_particle_small_dl = [
    gsSPDisplayList(white_particle_small_dl_begin),
    gsSPVertex(white_particle_small_vertex, 4, 0),
    gsSPBranchList(white_particle_small_dl_end),
].flat();

// 0x04032A30 - 0x04032A48 # Unused, has different vertex color
export const white_particle_small_unused_dl = [
    gsSPDisplayList(white_particle_small_dl_begin),
    gsSPVertex(white_particle_small_unused_vertex, 4, 0),
    gsSPBranchList(white_particle_small_dl_end),
].flat();

// 1619267130 - 2021-04-24 03:27:28 -1000
