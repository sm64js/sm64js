// Wdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { wdw_seg7_dl_070140E0 } from "./model.inc"

// 0x0E000640
export const wdw_geo_000640 = () => {return [
    GEO_CULLING_RADIUS(450),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_070140E0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-15 11:42:13 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
