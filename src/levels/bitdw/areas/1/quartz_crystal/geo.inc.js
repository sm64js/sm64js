// Bitdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../../../../engine/GeoLayout"

import { bitdw_seg7_dl_070093B0 } from "./model.inc"


// 0x0E0004C8
export const geo_bitdw_0004C8 = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bitdw_seg7_dl_070093B0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
