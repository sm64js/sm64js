// Ddd

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import {
    ddd_seg7_dl_0700AF10, ddd_seg7_dl_0700B068
} from "./model.inc"


// 0x0E0004A0
export const ddd_geo_0004A0 = () => {return [
    GEO_CULLING_RADIUS(10000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ddd_seg7_dl_0700AF10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ddd_seg7_dl_0700B068),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 10:29:05 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
