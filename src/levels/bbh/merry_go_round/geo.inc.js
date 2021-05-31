// Bbh

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { bbh_seg7_dl_070202F0 } from "./model.inc"

// 0x0E000640
export const geo_bbh_000640 = () => {return [
    GEO_CULLING_RADIUS(2300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070202F0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
