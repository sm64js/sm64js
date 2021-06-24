// Wdw

import { SHADOW_SQUARE_TOGGLABLE } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { wdw_seg7_dl_07012E88 } from "./model.inc"

// 0x0E000598
export const wdw_geo_000598 = () => {return [
    GEO_CULLING_RADIUS(350),
    GEO_OPEN_NODE(),
        //GEO_SHADOW(SHADOW_SQUARE_TOGGLABLE, 0x96, 110),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_07012E88),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
