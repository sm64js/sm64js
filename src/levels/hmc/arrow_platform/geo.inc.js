// Hmc

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { hmc_seg7_dl_07022DA0 } from "./model.inc"

// 0x0E0005A0
export const hmc_geo_0005A0 = () => {return [
    GEO_CULLING_RADIUS(550),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07022DA0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
