// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../../../engine/GeoLayout"

import { ttm_seg7_dl_07011C78 } from "./1.inc"
import { ttm_seg7_dl_07011D78 } from "./2.inc"

// 0x0E000A40
export const ttm_geo_000A40 = () => {return [
    GEO_CULLING_RADIUS(900),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-1900, 5000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_07011C78),
            GEO_DISPLAY_LIST(LAYER_ALPHA, ttm_seg7_dl_07011D78),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
