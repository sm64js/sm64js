// Ssl

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ssl_seg7_dl_070228A8, ssl_seg7_dl_070229E8 } from "./model.inc"

// 0x0E000764
export const ssl_geo_000764 = () => {return [
    GEO_CULLING_RADIUS(550),
    GEO_OPEN_NODE(),
        //GEO_SHADOW(0x00 + SHADOW_RECTANGLE_HARDCODED_OFFSET, 0xB4, 0),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_070228A8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, ssl_seg7_dl_070229E8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
