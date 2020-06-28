import * as Gbi from "../../include/gbi"

const title_screen_bg_vertex_0A000000 = [
    { pos: [ 0, 60, -1 ], flag: 0, tc: [ 0, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 60, -1 ], flag: 0, tc: [ 2528, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 80, -1 ], flag: 0, tc: [ 2528, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 80, -1 ], flag: 0, tc: [ 0, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 40, -1 ], flag: 0, tc: [ 0, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 40, -1 ], flag: 0, tc: [ 2528, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 60, -1 ], flag: 0, tc: [ 2528, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 60, -1 ], flag: 0, tc: [ 0, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 20, -1 ], flag: 0, tc: [ 0, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 20, -1 ], flag: 0, tc: [ 2528, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 40, -1 ], flag: 0, tc: [ 2528, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 40, -1 ], flag: 0, tc: [ 0, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 0, -1 ], flag: 0, tc: [ 0, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 0, -1 ], flag: 0, tc: [ 2528, 608 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 80, 20, -1 ], flag: 0, tc: [ 2528, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
    { pos: [ 0, 20, -1 ], flag: 0, tc: [ 0, 0 ], color: [ 0xff, 0xff, 0xff, 0xff ] },
]

export const title_screen_bg_dl_0A000100 = [
    Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGB),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_OPA_SURF_SURF2), //  G_RM_AA_OPA_SURF, G_RM_AA_OPA_SURF2),
    Gbi.gsSPEndDisplayList(),
]

export const title_screen_bg_dl_0A000190 = [
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
    Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING),
    Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
    Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_OPA_SURF_SURF2),
    Gbi.gsSPEndDisplayList(),
]

export const title_screen_bg_dl_0A000118 = [
    Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
    Gbi.gsSPVertex(title_screen_bg_vertex_0A000000, 16, 0),
    Gbi.gsSPEndDisplayList()
]

export const title_texture_0A0001C0 = []

export const title_texture_0A000E40 = []

export const title_texture_0A001AC0 = []

export const title_texture_0A002740 = []


export const title_screen_bg_dl_0A000130 = [
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const title_screen_bg_dl_0A000148 = [
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const title_screen_bg_dl_0A000160 = [
    ...Gbi.gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const title_screen_bg_dl_0A000178 = [
    ...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 12, 14, 15, 0x0),
    Gbi.gsSPEndDisplayList(),
]

export const mario_title_texture_table = [
    title_texture_0A0001C0, title_texture_0A000E40, title_texture_0A001AC0, title_texture_0A002740,
]