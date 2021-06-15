// Ssl

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { ssl_seg7_dl_0700FCE0 } from "./model.inc"

// 0x0E000630
export const ssl_geo_000630 = () => {return [
    GEO_CULLING_RADIUS(4000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_0700FCE0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
