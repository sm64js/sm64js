// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { ttm_seg7_dl_0702BB60 } from "./model.inc"

// 0x0E000DF4
export const ttm_geo_000DF4 = () => {return [
    GEO_CULLING_RADIUS(8000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ttm_seg7_dl_0702BB60),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
