// Wooden Signpost

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    wooden_signpost_seg3_dl_0302DA48, wooden_signpost_seg3_dl_0302DD08
} from "./model.inc"

// 0x16000FB4
export const wooden_signpost_geo = [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 60),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wooden_signpost_seg3_dl_0302DA48),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wooden_signpost_seg3_dl_0302DD08),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
];

// 1618752949 - 2021-04-18 03:38:05 -1000
