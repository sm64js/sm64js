// Thi

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END, GEO_SCALE,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { thi_seg7_dl_07007648 } from "./model.inc"

// 0x0E0005B0
export const thi_geo_0005B0 = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07007648),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E0005C8
export const thi_geo_0005C8 = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 19660),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07007648),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
