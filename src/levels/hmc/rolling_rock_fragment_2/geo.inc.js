// Hmc

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { hmc_seg7_dl_07024110 } from "./model.inc"

// 0x0E000588
export const hmc_geo_000588 = () => {return [
    GEO_CULLING_RADIUS(100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, hmc_seg7_dl_07024110),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
