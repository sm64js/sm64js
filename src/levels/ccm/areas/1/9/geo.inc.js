// Ccm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_TRANSPARENT
} from "../../../../../engine/GeoLayout"

import { ccm_seg7_dl_0700FD08 } from "./model.inc"

// 0x0E0004BC
export const ccm_geo_0004BC = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_RENDER_RANGE(-1000, 7000),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, ccm_seg7_dl_0700FD08),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
