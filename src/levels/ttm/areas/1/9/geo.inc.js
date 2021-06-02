// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { ttm_seg7_dl_0700C408 } from "./model.inc"

// 0x0E000858
export const ttm_geo_000858 = () => {return [
    GEO_CULLING_RADIUS(450),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-1450, 5500),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0700C408),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
