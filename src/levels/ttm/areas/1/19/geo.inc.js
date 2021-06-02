// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { ttm_seg7_dl_07011128 } from "./model.inc"

// 0x0E0009F0
export const ttm_geo_0009F0 = () => {return [
    GEO_CULLING_RADIUS(920),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-1920, 5000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_07011128),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
