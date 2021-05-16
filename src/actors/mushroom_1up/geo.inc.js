// Mushroom 1up

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    mushroom_1up_seg3_dl_0302A660
} from "./model.inc"


// 0x16000E84
export const mushroom_1up_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xB4, 80),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, mushroom_1up_seg3_dl_0302A660),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 02:57:44 -1000
