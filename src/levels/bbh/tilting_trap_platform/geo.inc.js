// Bbh

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { bbh_seg7_dl_0701F5F8 } from "./model.inc"

// 0x0E0005C8
export const geo_bbh_0005C8 = () => {return [
    GEO_CULLING_RADIUS(600),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F5F8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
