// Water Splash
import * as Gbi from "../../include/gbi"

export const water_splash_seg4_texture_0402A5C8 = []  // #include "actors/water_splash/water_splash_0.rgba16.inc.c"
export const water_splash_seg4_texture_0402B5C8 = []  // #include "actors/water_splash/water_splash_1.rgba16.inc.c"
export const water_splash_seg4_texture_0402C5C8 = []  // #include "actors/water_splash/water_splash_2.rgba16.inc.c"
export const water_splash_seg4_texture_0402D5C8 = []  // #include "actors/water_splash/water_splash_3.rgba16.inc.c"
export const water_splash_seg4_texture_0402E5C8 = []  // #include "actors/water_splash/water_splash_4.rgba16.inc.c"
export const water_splash_seg4_texture_0402F5C8 = []  // #include "actors/water_splash/water_splash_5.rgba16.inc.c"
export const water_splash_seg4_texture_040305C8 = []  // #include "actors/water_splash/water_splash_6.rgba16.inc.c"
export const water_splash_seg4_texture_040315C8 = []  // #include "actors/water_splash/water_splash_7.rgba16.inc.c"

const water_splash_seg4_vertex_0402A588 = [
    {pos:[   -64,      0,      0], flag:0, tc:[     0,   2016], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    64,      0,      0], flag:0, tc:[   992,   2016], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[    64,    256,      0], flag:0, tc:[   992,      0], color:[0xff, 0xff, 0xff, 0xff]},
    {pos:[   -64,    256,      0], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xff]},
]

export const water_splash_seg4_dl_040325C8 = [
    Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    // gsDPLoadSync(),
    Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 64 - 1),
    Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 6, Gbi.G_TX_NOLOD, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD),
    Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (64 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
    Gbi.gsSPVertex(water_splash_seg4_vertex_0402A588, 4, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]

export const water_splash_seg4_dl_04032640 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402A5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_04032658 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402B5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_04032670 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402C5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_04032688 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402D5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_040326A0 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402E5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_040326B8 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_0402F5C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_040326D0 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_040305C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]

export const water_splash_seg4_dl_040326E8 = [
    // gsDPPipeSync(),
    Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, water_splash_seg4_texture_040315C8),
    Gbi.gsSPBranchList(water_splash_seg4_dl_040325C8),
]


// small water splash
export const stomp_smoke_seg4_texture_04022148 = []  // #include "actors/stomp_smoke/stomp_smoke_0.ia16.inc.c"
export const stomp_smoke_seg4_texture_04022948 = []  // #include "actors/stomp_smoke/stomp_smoke_1.ia16.inc.c"
export const stomp_smoke_seg4_texture_04023148 = []  // #include "actors/stomp_smoke/stomp_smoke_2.ia16.inc.c"
export const stomp_smoke_seg4_texture_04023948 = []  // #include "actors/stomp_smoke/stomp_smoke_3.ia16.inc.c"
export const stomp_smoke_seg4_texture_04024148 = []  // #include "actors/stomp_smoke/stomp_smoke_4.ia16.inc.c"
export const stomp_smoke_seg4_texture_04024948 = []  // #include "actors/stomp_smoke/stomp_smoke_5.ia16.inc.c"

const small_water_splash_vertex = [
    {pos:[   -32,      0,     32], flag:0, tc:[     0,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    32,      0,     32], flag:0, tc:[  1984,      0], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[    32,      0,    -32], flag:0, tc:[  1984,   1984], color:[0xff, 0xff, 0xff, 0xc8]},
    {pos:[   -32,      0,    -32], flag:0, tc:[     0,   1984], color:[0xff, 0xff, 0xff, 0xc8]},
]

const small_water_splash_dl_begin = [
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

const small_water_splash_dl_end = [
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    // gsDPPipeSync(),
    Gbi.gsSPTexture(0x0001, 0x0001, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsSPEndDisplayList(),
]


const small_water_splash_dl = [
    Gbi.gsSPDisplayList(small_water_splash_dl_begin),
    Gbi.gsSPVertex(small_water_splash_vertex, 4, 0),
    Gbi.gsSPBranchList(small_water_splash_dl_end),
]

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
