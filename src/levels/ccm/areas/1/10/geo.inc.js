// Ccm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT
} from "../../../../../engine/GeoLayout"

import { ccm_seg7_dl_07010660 } from "./1.inc"
import { ccm_seg7_dl_070109D0 } from "./2.inc"
import { ccm_seg7_dl_07010B50 } from "./3.inc"

// 0x0E0004E4
export const ccm_geo_0004E4 = () => {return [
    GEO_CULLING_RADIUS(3500),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-3000, 6000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_07010660),
            GEO_DISPLAY_LIST(LAYER_ALPHA, ccm_seg7_dl_070109D0),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ccm_seg7_dl_07010B50),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
