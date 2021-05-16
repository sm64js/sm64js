// Transparent Star

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    transparent_star_seg3_dl_0302C620
} from "./model.inc"

// 0x16000F6C
export const transparent_star_geo = [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x9B, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, transparent_star_seg3_dl_0302C620),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
];

// 1618752949 - 2021-04-18 04:56:43 -1000
