// Ddd

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT, LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import {
    ddd_seg7_dl_07009030, ddd_seg7_dl_07009120, ddd_seg7_dl_07009208
} from "./model.inc"


// 0x0E000478
export const ddd_geo_000478 = () => {return [
    GEO_CULLING_RADIUS(10000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ddd_seg7_dl_07009030),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_07009120),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ddd_seg7_dl_07009208),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
