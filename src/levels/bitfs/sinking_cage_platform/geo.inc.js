// Bitfs

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { bitfs_seg7_dl_0700F6A8 } from "./model.inc"

// 0x0E000690
export const bitfs_geo_000690 = () => {return [
    GEO_CULLING_RADIUS(550),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bitfs_seg7_dl_0700F6A8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
