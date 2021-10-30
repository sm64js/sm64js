// White Particle Small
import * as Gbi from "../../include/gbi"

export const white_particle_small_texture = []  // #include "actors/white_particle_small/small_snow_particle.rgba16.inc.c"

const white_particle_small_vertex = [
    {pos:[    -4,      0,      0], flag:0, tc:[     0,    960], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     4,      0,      0], flag:0, tc:[   960,    960], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[     4,      8,      0], flag:0, tc:[   960,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    -4,      8,      0], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xff]},
]

const white_particle_small_dl_begin = [
    // gsDPPipeSync(),
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBA),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    ...Gbi.gsDPLoadTextureBlock(white_particle_small_texture, Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 16, 16, 0, Gbi.G_TX_CLAMP, Gbi.G_TX_CLAMP, 4, 4, Gbi.G_TX_NOLOD, Gbi.G_TX_NOLOD),
    Gbi.gsSPEndDisplayList(),
]

const white_particle_small_dl_end = [
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    // gsDPPipeSync(),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]

export const white_particle_small_dl = [
    Gbi.gsSPDisplayList(white_particle_small_dl_begin),
    Gbi.gsSPVertex(white_particle_small_vertex, 4, 0),
    Gbi.gsSPBranchList(white_particle_small_dl_end),
]
