// Ccm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA, LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { ccm_seg7_dl_07010F28 } from "./1.inc"
import { ccm_seg7_dl_070118B0 } from "./2.inc"

// 0x0E0003D0
export const ccm_geo_0003D0 = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ccm_seg7_dl_07010F28),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_070118B0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
