// Wdw

import { SHADOW_SQUARE_SCALABLE } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../../engine/GeoLayout"

import { wdw_seg7_dl_070131B8 } from "./model.inc"

// 0x0E0005C0
export const wdw_geo_0005C0 = () => {return [
    GEO_CULLING_RADIUS(200),
    GEO_OPEN_NODE(),
        //GEO_SHADOW(SHADOW_SQUARE_SCALABLE, 0x96, 90),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, wdw_seg7_dl_070131B8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
