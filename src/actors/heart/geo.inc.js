// Heart

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    heart_seg8_dl_0800DFE0
} from "./model.inc"


// 0x0F0004FC
export const heart_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x64, 100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, heart_seg8_dl_0800DFE0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619275628 - 2021-04-24 04:47:13 -1000
