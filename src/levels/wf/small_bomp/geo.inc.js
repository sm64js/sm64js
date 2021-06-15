// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { wf_seg7_dl_0700D708 } from "./1.inc"
import { wf_seg7_dl_0700D9F0 } from "./2.inc"

// 0x0E000A00
export const wf_geo_000A00 = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-2048, 5000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700D708),
        GEO_CLOSE_NODE(),
        GEO_RENDER_RANGE(5000, 32767),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700D9F0),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
