// Wf

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT_DECAL
} from "../../../engine/GeoLayout"

import { wf_seg7_dl_0700F610 } from "./1.inc"
import { wf_seg7_dl_0700F6C0 } from "./2.inc"

// 0x0E000BA8
export const wf_geo_000BA8 = () => {return [
    GEO_CULLING_RADIUS(1300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700F610),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, wf_seg7_dl_0700F6C0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0E000BC8
export const wf_geo_000BC8 = () => {return [
    GEO_CULLING_RADIUS(1300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wf_seg7_dl_0700F610),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:16:34 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
