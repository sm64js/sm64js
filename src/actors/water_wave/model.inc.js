// Water Waves
import * as Gbi from "../../include/gbi"

const water_wave_seg4_vertex_04025318 = [
    {pos:[   -64,      0,     64], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    64,      0,     64], flag:0, tc:[   992,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    64,      0,    -64], flag:0, tc:[   992,    992], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[   -64,      0,    -64], flag:0, tc:[     0,    992], color:[0xff, 0xff, 0xff, 0xc8]},
]

export const water_wave_seg4_texture_04025358 = []  // #include "actors/water_wave/water_wave_0.ia16.inc.c"
export const water_wave_seg4_texture_04025B58 = []  // #include "actors/water_wave/water_wave_1.ia16.inc.c"
export const water_wave_seg4_texture_04026358 = []  // #include "actors/water_wave/water_wave_2.ia16.inc.c"
export const water_wave_seg4_texture_04026B58 = []  // #include "actors/water_wave/water_wave_3.ia16.inc.c"

export const water_wave_seg4_dl_04027358 = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    // Gbi.gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPEndDisplayList(),
]

export const water_wave_seg4_dl_040273A0 = [
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    // Gbi.gsDPPipeSync(),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]

export const water_wave_seg4_dl_040273D8 = [
    Gbi.gsSPDisplayList(water_wave_seg4_dl_04027358),
    Gbi.gsSPVertex(water_wave_seg4_vertex_04025318, 4, 0),
    Gbi.gsSPBranchList(water_wave_seg4_dl_040273A0),
]

export const water_wave_seg4_dl_040273F0 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, water_wave_seg4_texture_04025358),
    Gbi.gsSPBranchList(water_wave_seg4_dl_040273D8),
]

export const water_wave_seg4_dl_04027408 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, water_wave_seg4_texture_04025B58),
    Gbi.gsSPBranchList(water_wave_seg4_dl_040273D8),
]

export const water_wave_seg4_dl_04027420 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, water_wave_seg4_texture_04026358),
    Gbi.gsSPBranchList(water_wave_seg4_dl_040273D8),
]

export const water_wave_seg4_dl_04027438 = [
    // Gbi.gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, water_wave_seg4_texture_04026B58),
    Gbi.gsSPBranchList(water_wave_seg4_dl_040273D8),
]
