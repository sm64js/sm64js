// Wdw

import { SHADOW_SQUARE_SCALABLE } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../../engine/GeoLayout"


// 0x0E0005C0
export const wdw_geo_0005C0 = () => {return [
    GEO_CULLING_RADIUS(200),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_SCALABLE, 0x96, 90),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, wdw_seg7_dl_070131B8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1620705666 - 2021-05-13 00:28:59 -0400
