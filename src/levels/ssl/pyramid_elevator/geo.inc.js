// Ssl

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ssl_seg7_dl_070233A8, ssl_seg7_dl_070235C0 } from "./model.inc"

// 0x0E0007AC
export const ssl_geo_0007AC = () => {return [
    GEO_CULLING_RADIUS(900),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_seg7_dl_070233A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ssl_seg7_dl_070235C0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
