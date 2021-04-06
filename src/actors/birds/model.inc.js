// Birds
import * as Gbi from "../../include/gbi"
// first 3 const all Lights1, removed and copied pattern from blue_fish
// 0x05000000
const birds_seg5_lights_05000000 = Gbi.gdSPDefLights1(
    0x07, 0x24, 0x2c,
    0x1d, 0x91, 0xb0, 0x28, 0x28, 0x28
);

// 0x05000018
const birds_seg5_lights_05000018 = Gbi.gdSPDefLights1(
    0x33, 0x27, 0x0d,
    0xce, 0x9d, 0x34, 0x28, 0x28, 0x28
);

// 0x05000030
const birds_seg5_lights_05000030 = Gbi.gdSPDefLights1(
    0x3f, 0x3f, 0x3f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x05000048
const birds_seg5_vertex_05000048 = [
    {pos: [178,    2,     39], flag: 0, tc: [0, 0], color: [0x0d, 0x7e, 0x00, 0x00]},
    {pos: [122,   -4,    -33], flag: 0, tc: [0, 0], color: [0x10, 0x79, 0xde, 0x00]},
    {pos: [97,    10,     13], flag: 0, tc: [0, 0], color: [0x0b, 0x7e, 0xff, 0x00]},
    {pos: [47,     4,     47], flag: 0, tc: [0, 0], color: [0xfe, 0x7c, 0x1b, 0xff]},
    {pos: [53,    14,      7], flag: 0, tc: [0, 0], color: [0xfe, 0x7e, 0xf8, 0xff]},
    {pos: [0,      5,     32], flag: 0, tc: [0, 0], color: [0xf0, 0x7d, 0x03, 0xff]},
    {pos: [27,     9,     16], flag: 0, tc: [0, 0], color: [0xee, 0x7d, 0x05, 0xff]},
    {pos: [53,    -8,    -58], flag: 0, tc: [0, 0], color: [0x0a, 0x78, 0xd8, 0xff]},
    {pos: [-4,    -6,    -64], flag: 0, tc: [0, 0], color: [0xf1, 0x7b, 0xe9, 0xff]},
];

// 0x050000D8
const birds_seg5_vertex_050000D8 = [
    {pos: [-143,  -7,    -29], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0xc2, 0x00]},
    {pos: [-86,  -11,     -2], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0xc2, 0x00]},
    {pos: [-154, -21,     -9], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0xc2, 0x00]},
];

// 0x05000108
const birds_seg5_vertex_05000108 = [
    {pos: [-154, -21,      9], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0x3e, 0x00]},
    {pos: [-86,  -11,      2], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0x3e, 0x00]},
    {pos: [-143,  -7,     29], flag: 0, tc: [0, 0], color: [0x16, 0x94, 0x3e, 0x00]},
];

// 0x05000138
const birds_seg5_vertex_05000138 = [
    {pos:[  -152,    -30,    -17], flag: 0, tc:[     0,      0], color: [0x26, 0x87, 0x00, 0x00]},
    {pos:[   -80,     -7,      0], flag: 0, tc:[     0,      0], color: [0x26, 0x87, 0x00, 0x00]},
    {pos:[  -152,    -30,     17], flag: 0, tc:[     0,      0], color: [0x26, 0x87, 0x00, 0x00]},
];

// 0x05000168
const birds_seg5_vertex_05000168 = [
    {pos:[    97,     10,    -13], flag: 0, tc:[     0,      0], color: [0x0b, 0x7e, 0x01, 0x00]},
    {pos:[   122,     -4,     33], flag: 0, tc:[     0,      0], color: [0x10, 0x79, 0x22, 0x00]},
    {pos:[   178,      2,    -39], flag: 0, tc:[     0,      0], color: [0x0d, 0x7e, 0x00, 0x00]},
    {pos:[    47,      4,    -47], flag: 0, tc:[     0,      0], color: [0xfe, 0x7c, 0xe5, 0xff]},
    {pos:[    53,     14,     -7], flag: 0, tc:[     0,      0], color: [0xff, 0x7f, 0x02, 0xff]},
    {pos:[    27,      9,    -16], flag: 0, tc:[     0,      0], color: [0xf1, 0x7d, 0x06, 0xff]},
    {pos:[     0,      5,    -32], flag: 0, tc:[     0,      0], color: [0xf0, 0x7d, 0xfd, 0xff]},
    {pos:[    -4,     -6,     64], flag: 0, tc:[     0,      0], color: [0xf7, 0x7c, 0x14, 0xff]},
    {pos:[    53,     -8,     58], flag: 0, tc:[     0,      0], color: [0xfa, 0x79, 0x25, 0xff]},
];

// 0x050001F8
const birds_seg5_vertex_050001F8 = [
    {pos:[    69,      4,    -40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x9a, 0x00]},
    {pos:[    78,    -51,    -21], flag: 0, tc:[     0,      0], color:[0x27, 0xae, 0xa8, 0x00]},
    {pos:[    -1,      0,    -56], flag: 0, tc:[     0,      0], color:[0xf4, 0xc6, 0x90, 0x00]},
    {pos:[    69,      4,     40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x66, 0xff]},
    {pos:[    10,     48,     56], flag: 0, tc:[     0,      0], color:[0xef, 0x41, 0x6b, 0xff]},
    {pos:[    -1,      0,     56], flag: 0, tc:[     0,      0], color:[0xf4, 0xc6, 0x70, 0xff]},
    {pos:[   -88,     21,      0], flag: 0, tc:[     0,      0], color:[0xaa, 0x5d, 0x00, 0xff]},
    {pos:[  -103,    -10,    -11], flag: 0, tc:[     0,      0], color:[0xa7, 0x30, 0xb4, 0xff]},
    {pos:[  -103,    -10,     11], flag: 0, tc:[     0,      0], color:[0xa7, 0x30, 0x4c, 0xff]},
    {pos:[    83,    -57,      0], flag: 0, tc:[     0,      0], color:[0xdd, 0x87, 0x00, 0xff]},
    {pos:[    -9,    -30,      0], flag: 0, tc:[     0,      0], color:[0xe0, 0x86, 0x00, 0xff]},
    {pos:[   113,      0,    -10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0xab, 0xff]},
    {pos:[   113,      0,     10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0x55, 0xff]},
    {pos:[    78,    -51,     21], flag: 0, tc:[     0,      0], color:[0x27, 0xae, 0x58, 0xff]},
    {pos:[  -103,    -10,     11], flag: 0, tc:[     0,      0], color:[0xea, 0x88, 0x1f, 0xff]},
    {pos:[   113,    -23,      0], flag: 0, tc:[     0,      0], color:[0x62, 0xb0, 0x00, 0xff]},
];

// 0x050002F8
const birds_seg5_vertex_050002F8 = [
    {pos:[    83,    -57,      0], flag: 0, tc:[     0,      0], color:[0x60, 0xad, 0x00, 0xff]},
    {pos:[   113,    -23,      0], flag: 0, tc:[     0,      0], color:[0x62, 0xb0, 0x00, 0x00]},
    {pos:[    78,    -51,     21], flag: 0, tc:[     0,      0], color:[0x27, 0xae, 0x58, 0x00]},
    {pos:[    78,    -51,    -21], flag: 0, tc:[     0,      0], color:[0x27, 0xae, 0xa8, 0xff]},
    {pos:[  -103,    -10,    -11], flag: 0, tc:[     0,      0], color:[0xa7, 0x30, 0xb4, 0xff]},
    {pos:[   -88,     21,      0], flag: 0, tc:[     0,      0], color:[0xaa, 0x5d, 0x00, 0xff]},
    {pos:[    10,     48,    -56], flag: 0, tc:[     0,      0], color:[0xef, 0x41, 0x95, 0xff]},
    {pos:[    -1,      0,    -56], flag: 0, tc:[     0,      0], color:[0xf4, 0xc6, 0x90, 0xff]},
    {pos:[    10,     48,     56], flag: 0, tc:[     0,      0], color:[0xef, 0x41, 0x6b, 0xff]},
    {pos:[  -103,    -10,     11], flag: 0, tc:[     0,      0], color:[0xa7, 0x30, 0x4c, 0xff]},
    {pos:[  -103,    -10,    -11], flag: 0, tc:[     0,      0], color:[0xea, 0x88, 0xe1, 0xff]},
    {pos:[    -9,    -30,      0], flag: 0, tc:[     0,      0], color:[0xe0, 0x86, 0x00, 0xff]},
    {pos:[  -103,    -10,     11], flag: 0, tc:[     0,      0], color:[0xea, 0x88, 0x1f, 0xff]},
    {pos:[    83,    -57,      0], flag: 0, tc:[     0,      0], color:[0xdd, 0x87, 0x00, 0xff]},
    {pos:[    -1,      0,     56], flag: 0, tc:[     0,      0], color:[0xf4, 0xc6, 0x70, 0xff]},
    {pos:[    69,      4,    -40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x9a, 0xff]},
];

// 0x050003F8
const birds_seg5_vertex_050003F8 = [
    {pos:[    -1,      0,     56], flag: 0, tc:[     0,      0], color:[0xf4, 0xc6, 0x70, 0xff]},
    {pos:[    78,    -51,     21], flag: 0, tc:[     0,      0], color:[0x27, 0xae, 0x58, 0x00]},
    {pos:[    69,      4,     40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x66, 0x00]},
];

// 0x05000428
const birds_seg5_vertex_05000428 = [
    {pos:[    69,      4,    -40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x9a, 0x00]},
    {pos:[    10,     48,    -56], flag: 0, tc:[     0,      0], color:[0xef, 0x41, 0x95, 0x00]},
    {pos:[    18,     78,      0], flag: 0, tc:[     0,      0], color:[0x54, 0x5e, 0x00, 0x00]},
    {pos:[    10,     48,     56], flag: 0, tc:[     0,      0], color:[0xef, 0x41, 0x6b, 0xff]},
    {pos:[    18,     78,      0], flag: 0, tc:[     0,      0], color:[0xc4, 0x6f, 0x00, 0xff]},
    {pos:[   -88,     21,      0], flag: 0, tc:[     0,      0], color:[0xaa, 0x5d, 0x00, 0xff]},
    {pos:[   113,      0,    -10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0xab, 0xff]},
    {pos:[    69,     33,      0], flag: 0, tc:[     0,      0], color:[0x4b, 0x65, 0x00, 0xff]},
    {pos:[   113,      0,     10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0x55, 0xff]},
    {pos:[    69,      4,     40], flag: 0, tc:[     0,      0], color:[0x40, 0x26, 0x66, 0xff]},
];

// 0x050004C8
const birds_seg5_vertex_050004C8 = [
    {pos:[   113,    -23,      0], flag: 0, tc:[     0,      0], color:[0x62, 0xb0, 0x00, 0x00]},
    {pos:[   113,      0,    -10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0xab, 0x00]},
    {pos:[   143,     -2,      0], flag: 0, tc:[     0,      0], color:[0x24, 0xcb, 0x93, 0x00]},
    {pos:[   113,      0,     10], flag: 0, tc:[     0,      0], color:[0x4e, 0x32, 0x55, 0xff]},
    {pos:[   143,     -2,      0], flag: 0, tc:[     0,      0], color:[0x24, 0xcb, 0x6d, 0xff]},
    {pos:[   143,     -2,      0], flag: 0, tc:[     0,      0], color:[0x07, 0x7e, 0x00, 0xff]},
];

// 0x05000528 - 0x05000598
export const birds_seg5_dl_05000528 = [
    //Might have to change any variable ending in .l to .l[0] to match blue fish pattern
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_05000048, 9, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
    ...Gbi.gsSP2Triangles( 4,  3,  2, 0x0,  5,  3,  6, 0x0),
    ...Gbi.gsSP2Triangles( 4,  7,  8, 0x0,  4,  8,  6, 0x0),
    ...Gbi.gsSP2Triangles( 6,  8,  5, 0x0,  6,  3,  4, 0x0),
    ...Gbi.gsSP2Triangles( 2,  1,  7, 0x0,  2,  7,  4, 0x0),
    gsSPEndDisplayList(),
];

// 0x05000598 - 0x05000600
export const birds_seg5_dl_05000598 = [
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_050000D8, 3, 0),
    ...Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_05000108, 3, 0),
    ...Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_05000138, 3, 0),
    ...Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
    Gbi.gsSPEndDisplayList(),
];

// 0x05000600 - 0x05000670
export const birds_seg5_dl_05000600 = [
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_05000168, 9, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  3,  0, 0x0),
    ...Gbi.gsSP2Triangles( 0,  3,  4, 0x0,  5,  3,  6, 0x0),
    ...Gbi.gsSP2Triangles( 5,  7,  8, 0x0,  5,  8,  4, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  5, 0x0,  4,  3,  5, 0x0),
    ...Gbi.gsSP2Triangles( 4,  8,  1, 0x0,  4,  1,  0, 0x0),
    gsSPEndDisplayList(),
];

// 0x05000670 - 0x050007E0
export const birds_seg5_dl_05000670 = [
    Gbi.gsSPLight(birds_seg5_lights_05000000.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000000.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_050001F8, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  1,  9, 10, 0x0),
    ...Gbi.gsSP2Triangles( 1,  0, 11, 0x0, 12,  3, 13, 0x0),
    ...Gbi.gsSP2Triangles( 8,  5,  4, 0x0,  5, 14, 10, 0x0),
    ...Gbi.gsSP2Triangles(13, 15, 12, 0x0, 11, 15,  1, 0x0),
    Gbi.gsSPVertex(birds_seg5_vertex_050002F8, 16, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
    ...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  6,  7,  4, 0x0),
    ...Gbi.gsSP2Triangles( 8,  5,  9, 0x0, 10,  7, 11, 0x0),
    ...Gbi.gsSP2Triangles(11, 12, 10, 0x0, 11, 13,  2, 0x0),
    ...Gbi.gsSP2Triangles( 2, 14, 11, 0x0, 11,  7,  3, 0x0),
    ...Gbi.gsSP1Triangle( 7,  6, 15, 0x0),
    Gbi.gsSPVertex(birds_seg5_vertex_050003F8, 3, 0),
    ...Gbi.gsSP1Triangle( 0,  1,  2, 0x0),
    Gbi.gsSPLight(birds_seg5_lights_05000030.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000030.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_05000428, 10, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    ...Gbi.gsSP2Triangles( 6,  0,  7, 0x0,  7,  8,  6, 0x0),
    ...Gbi.gsSP2Triangles( 9,  7,  2, 0x0,  2,  7,  0, 0x0),
    ...Gbi.gsSP2Triangles( 2,  3,  9, 0x0,  7,  9,  8, 0x0),
    ...Gbi.gsSP1Triangle( 5,  4,  1, 0x0),
    Gbi.gsSPLight(birds_seg5_lights_05000018.l, 1),
    Gbi.gsSPLight(birds_seg5_lights_05000018.a, 2),
    Gbi.gsSPVertex(birds_seg5_vertex_050004C8, 6, 0),
    ...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  4, 0x0),
    ...Gbi.sSP1Triangle( 1,  3,  5, 0x0),
    Gbi.gsSPEndDisplayList(),
];
