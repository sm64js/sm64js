// Checkerboard Platform

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import { checkerboard_platform_seg8_dl_0800D680 } from "./model.inc"


// 0x0F0004E4
export const checkerboard_platform_geo = () => {return [
    GEO_CULLING_RADIUS(400),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, checkerboard_platform_seg8_dl_0800D680),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:11:17 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
