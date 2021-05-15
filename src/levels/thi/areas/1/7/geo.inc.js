// Thi

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { thi_seg7_dl_07007930 } from "./model.inc"


// 0x0E0005F0
export const thi_geo_0005F0 = () => {return [
    GEO_CULLING_RADIUS(1200),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, thi_seg7_dl_07007930),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621007118 - 2021-05-15 11:25:19 -0400
