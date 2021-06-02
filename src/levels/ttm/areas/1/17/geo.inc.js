// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_ALPHA, LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { ttm_seg7_dl_0700F270 } from "./1.inc"
import { ttm_seg7_dl_0700FA18 } from "./2.inc"

// 0x0E000990
export const ttm_geo_000990 = () => {return [
    GEO_CULLING_RADIUS(780),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-1780, 5500),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, ttm_seg7_dl_0700F270),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700FA18),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
