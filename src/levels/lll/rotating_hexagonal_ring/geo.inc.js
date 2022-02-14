// Lll

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { lll_seg7_dl_07019A08 } from "./model.inc"

// 0x0E000BB0
export const lll_geo_000BB0 = () => {return [
    GEO_CULLING_RADIUS(2100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_07019A08),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
