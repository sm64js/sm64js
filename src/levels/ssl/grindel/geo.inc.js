// Ssl

import { SHADOW_SQUARE_SCALABLE } from "../../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ssl_seg7_dl_070220A8, ssl_seg7_dl_070221E8 } from "./model.inc"

// 0x0E000734
export const ssl_geo_000734 = () => {return [
    GEO_CULLING_RADIUS(700),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_SCALABLE, 0xB4, 550),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_070220A8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, ssl_seg7_dl_070221E8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
