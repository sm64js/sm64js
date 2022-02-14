// Bitfs

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA, LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { bitfs_seg7_dl_07010340 } from "./1.inc"
import { bitfs_seg7_dl_07011138 } from "./2.inc"

// 0x0E000708
export const bitfs_geo_000708 = () => {return [
    GEO_CULLING_RADIUS(3000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bitfs_seg7_dl_07010340),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bitfs_seg7_dl_07011138),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
