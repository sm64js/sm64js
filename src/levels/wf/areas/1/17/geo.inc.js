// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { wf_seg7_dl_0700BF50 } from "./model.inc"

// 0x0E0009B8
export const wf_geo_0009B8 = () => {return [
    GEO_CULLING_RADIUS(1100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700BF50),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
