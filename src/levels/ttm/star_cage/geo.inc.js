// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ttm_seg7_dl_07013430 } from "./1.inc"
import { ttm_seg7_dl_07013608 } from "./2.inc"


// 0x0E000710
export const ttm_geo_000710 = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_07013430),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ttm_seg7_dl_07013608),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
