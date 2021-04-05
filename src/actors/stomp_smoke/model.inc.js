// ** actors/stomp_smoke/model
import * as Gbi from "../../include/gbi"

export const stomp_smoke_seg4_texture_04022148 = []
export const stomp_smoke_seg4_texture_04022948 = []
export const stomp_smoke_seg4_texture_04023148 = []
export const stomp_smoke_seg4_texture_04023948 = []
export const stomp_smoke_seg4_texture_04024148 = []
export const stomp_smoke_seg4_texture_04024948 = []

const small_water_splash_vertex = [
    {pos:[   -32,      0,     32], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    32,      0,     32], flag:0, tc:[  1984,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    32,      0,    -32], flag:0, tc:[  1984,   1984], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[   -32,      0,    -32], flag:0, tc:[     0,   1984], color:[0xff, 0xff, 0xff, 0xc8]},
]

const small_water_splash_dl_head = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    // gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPEndDisplayList(),
]

const small_water_splash_dl_tail = [
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    // gsDPPipeSync(),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]


const small_water_splash_dl = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATEIA),
    Gbi.gsSPTexture(0x8000, 0x8000, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    // gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),

    Gbi.gsSPVertex(small_water_splash_vertex, 4, 0),

    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    // gsDPPipeSync(),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]



// const small_water_splash_dl = [
//     Gbi.gsSPDisplayList(small_water_splash_dl_head),
//     Gbi.gsSPVertex(small_water_splash_vertex, 4, 0),
//     Gbi.gsSPBranchList(small_water_splash_dl_tail),
// ]

export const stomp_smoke_seg4_dl_040251F8 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04022148),
    Gbi.gsSPBranchList(small_water_splash_dl),
]

export const stomp_smoke_seg4_dl_04025210 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04022948),
    Gbi.gsSPBranchList(small_water_splash_dl),
]

export const stomp_smoke_seg4_dl_04025228 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04023148),
    Gbi.gsSPBranchList(small_water_splash_dl),
]

export const stomp_smoke_seg4_dl_04025240 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04023948),
    Gbi.gsSPBranchList(small_water_splash_dl),
]

export const stomp_smoke_seg4_dl_04025258 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04024148),
    Gbi.gsSPBranchList(small_water_splash_dl),
]

export const stomp_smoke_seg4_dl_04025270 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_IA, Gbi.G_IM_SIZ_16b, 1, stomp_smoke_seg4_texture_04024948),
    Gbi.gsSPBranchList(small_water_splash_dl),
]
