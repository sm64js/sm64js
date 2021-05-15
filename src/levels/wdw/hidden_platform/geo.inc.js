// Wdw

import { SHADOW_SQUARE_TOGGLABLE } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"


// 0x0E0005E8
export const wdw_geo_0005E8 = () => {return [
    GEO_CULLING_RADIUS(420),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_TOGGLABLE, 0x96, 240),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_07013490),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1620705666 - 2021-05-13 00:28:59 -0400
