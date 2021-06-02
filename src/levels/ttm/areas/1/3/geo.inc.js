// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../../../../engine/GeoLayout"

import { ttm_seg7_dl_0700A8C0 } from "./1.inc"
import { ttm_seg7_dl_0700AB08 } from "./2.inc"

// 0x0E000748
export const ttm_geo_000748 = () => {return [
    GEO_CULLING_RADIUS(1800),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-2800, 10000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700A8C0),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ttm_seg7_dl_0700AB08),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
