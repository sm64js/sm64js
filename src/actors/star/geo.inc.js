// Star

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    star_seg3_dl_0302B870, star_seg3_dl_0302BA18
} from "./model.inc"

// 0x16000EA0
export const star_geo = [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x9B, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, star_seg3_dl_0302B870),
            GEO_DISPLAY_LIST(LAYER_ALPHA, star_seg3_dl_0302BA18),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
];

// 1618752949 - 2021-04-18 04:55:20 -1000
