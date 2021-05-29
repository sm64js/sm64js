// Bitdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../../../engine/GeoLayout"

import { bitdw_seg7_dl_07003608 } from "./model.inc"


// 0x0E0003F0
export const geo_bitdw_0003F0 = () => {return [
    GEO_CULLING_RADIUS(2000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bitdw_seg7_dl_07003608),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
