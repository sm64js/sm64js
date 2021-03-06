// Jrb

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { jrb_seg7_dl_0700AFB0 } from "./model.inc"

// 0x0E000918
export const jrb_geo_000918 = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, jrb_seg7_dl_0700AFB0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
