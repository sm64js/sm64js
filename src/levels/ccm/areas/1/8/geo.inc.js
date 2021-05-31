// Ccm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { ccm_seg7_dl_0700FB00 } from "./model.inc"

// 0x0E000494
export const ccm_geo_000494 = () => {return [
    GEO_CULLING_RADIUS(400),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-500, 7000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_0700FB00),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
