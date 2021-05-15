// Wdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"


// 0x0E000628
export const wdw_geo_000628 = () => {return [
    GEO_CULLING_RADIUS(900),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_07013E40),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1620705666 - 2021-05-13 00:28:59 -0400
