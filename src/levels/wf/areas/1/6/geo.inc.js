// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { wf_seg7_dl_070064E8 } from "./1.inc"
import { wf_seg7_dl_070065F8 } from "./2.inc"

// 0x0E000820
export const wf_geo_000820 = () => {return [
    GEO_CULLING_RADIUS(1800),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-2048, 5000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_070064E8),
        GEO_CLOSE_NODE(),
        GEO_RENDER_RANGE(5000, 32767),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_070065F8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
