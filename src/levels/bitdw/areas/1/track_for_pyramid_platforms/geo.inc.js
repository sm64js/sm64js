// Bitdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../../../engine/GeoLayout"

import { bitdw_seg7_dl_0700A6A8 } from "./model.inc"


// 0x0E0004F8
export const geo_bitdw_0004F8 = () => {return [
    GEO_CULLING_RADIUS(1100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bitdw_seg7_dl_0700A6A8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
