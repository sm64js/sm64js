// Ttm

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_BILLBOARD, GEO_SCALE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { ttm_seg7_dl_0702AB90 } from "./model.inc"

// 0x0E000D84
export const ttm_geo_000D84 = () => {return [
    GEO_CULLING_RADIUS(1000),
    GEO_OPEN_NODE(),
        GEO_BILLBOARD(),
        GEO_OPEN_NODE(),
            GEO_SCALE(0x00, 32768),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_ALPHA, ttm_seg7_dl_0702AB90),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 18:10:41 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
