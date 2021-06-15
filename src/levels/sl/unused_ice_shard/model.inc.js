// 0x0700A910 - 0x0700A928

import {
    gdSPDefLights1, gsSPLight, gsSPVertex, gsSP1Triangle, gsSPEndDisplayList, gsDPPipeSync,
    gsSPClearGeometryMode, gsSPDisplayList, gsSPSetGeometryMode,
    G_CULL_BACK, G_SHADING_SMOOTH
} from "../../../include/gbi"
const sl_seg7_lights_0700A910 = gdSPDefLights1(
    0x7f, 0x7f, 0x7f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x0700A928 - 0x0700A958
const sl_seg7_vertex_0700A928 = [
    [[    -8,      0,      5], 0, [     0,      0], [0x00, 0x7f, 0x00, 0x64]],
    [[     9,      0,      5], 0, [     0,      0], [0x00, 0x7f, 0x00, 0x64]],
    [[     0,      0,     -9], 0, [     0,      0], [0x00, 0x7f, 0x00, 0x64]],
];

// 0x0700A958 - 0x0700A980
const sl_seg7_dl_0700A958 = [
    gsSPLight(sl_seg7_lights_0700A910.l, 1),
    gsSPLight(sl_seg7_lights_0700A910.a, 2),
    gsSPVertex(sl_seg7_vertex_0700A928, 3, 0),
    gsSP1Triangle( 0,  1,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700A980 - 0x0700A9B0
export const sl_seg7_dl_0700A980 = [
    gsDPPipeSync(),
    gsSPClearGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsSPDisplayList(sl_seg7_dl_0700A958),
    gsDPPipeSync(),
    gsSPSetGeometryMode(G_CULL_BACK | G_SHADING_SMOOTH),
    gsSPEndDisplayList(),
].flat();

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
