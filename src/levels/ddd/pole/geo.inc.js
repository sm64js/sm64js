// Ddd

import { SHADOW_SQUARE_PERMANENT } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { ddd_seg7_dl_0700D2A0 } from "./model.inc"


// 0x0E000450
export const ddd_geo_000450 = () => {return [
    GEO_CULLING_RADIUS(700),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0xB4, 120),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_0700D2A0),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
