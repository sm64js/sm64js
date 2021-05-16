// Metal Box

import {
    SHADOW_SQUARE_PERMANENT
} from "../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import {
    metal_box_dl
} from "./model.inc"


// 0x0F000A30
export const metal_box_geo = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0xB4, 70),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, metal_box_dl),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619274064 - 2021-04-24 04:21:59 -1000
