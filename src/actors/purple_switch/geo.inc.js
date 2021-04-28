// Purple Switch

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    purple_switch_seg8_dl_0800C718
} from "./model.inc"


// 0x0F0004CC
export const purple_switch_geo = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, purple_switch_seg8_dl_0800C718),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619272096 - 2021-04-24 04:07:06 -1000
