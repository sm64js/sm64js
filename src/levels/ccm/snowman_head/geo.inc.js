// Ccm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ccm_seg7_dl_070136D0 } from "./1.inc"
import { ccm_seg7_dl_07013870 } from "./2.inc"

// 0x0E00040C
export const ccm_geo_00040C = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_070136D0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, ccm_seg7_dl_07013870),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
