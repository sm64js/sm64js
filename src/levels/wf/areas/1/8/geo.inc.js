// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../../../engine/GeoLayout"

import { wf_seg7_dl_07007220 } from "./model.inc"

// 0x0E000878
export const wf_geo_000878 = () => {return [
    GEO_CULLING_RADIUS(9000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, wf_seg7_dl_07007220),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
