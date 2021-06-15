// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT_DECAL
} from "../../../../../engine/GeoLayout"

import { wf_seg7_dl_0700ABA0 } from "./1.inc"
import { wf_seg7_dl_0700AFB8 } from "./3.inc"
import { wf_seg7_dl_0700AEC8 } from "./2.inc"

// 0x0E000958
export const wf_geo_000958 = () => {return [
    GEO_CULLING_RADIUS(2000),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-2000, 8000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700ABA0),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, wf_seg7_dl_0700AFB8),
        GEO_CLOSE_NODE(),
        GEO_RENDER_RANGE(8000, 20000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700AEC8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
