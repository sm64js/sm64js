// 0x0700F680 - 0x0700F6C0

import {
    gsDPPipeSync, gsSPClearGeometryMode, gsDPSetCombineMode, gsSPTexture, gsDPLoadTextureBlock,
    gsSPVertex, gsSP2Triangles, gsSPSetGeometryMode, gsSPEndDisplayList,
    G_LIGHTING, G_CC_MODULATEIA, G_TX_RENDERTILE, G_ON, G_IM_FMT_IA, G_IM_SIZ_8b, G_TX_WRAP,
    G_TX_MIRROR, G_TX_NOLOD, G_OFF, G_CC_SHADE
} from "../../../include/gbi"
import { wf_seg7_texture_07002800 } from "../texture.inc"
const wf_seg7_vertex_0700F680 = [
    [[   -96,      0,    300], 0, [  -480,   -480], [0x00, 0x00, 0x00, 0x96]],
    [[    95,      0,    300], 0, [   480,   -480], [0x00, 0x00, 0x00, 0x96]],
    [[    95,      0,      0], 0, [   480,    480], [0x00, 0x00, 0x00, 0x96]],
    [[   -96,      0,      0], 0, [  -480,    480], [0x00, 0x00, 0x00, 0x96]],
];

// 0x0700F6C0 - 0x0700F758
export const wf_seg7_dl_0700F6C0 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPLoadTextureBlock(wf_seg7_texture_07002800, G_IM_FMT_IA, G_IM_SIZ_8b, 16, 16, 0, G_TX_WRAP | G_TX_MIRROR, G_TX_WRAP | G_TX_MIRROR, 4, 4, G_TX_NOLOD, G_TX_NOLOD),
    gsSPVertex(wf_seg7_vertex_0700F680, 4, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
