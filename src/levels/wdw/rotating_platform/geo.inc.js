// Wdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"


// 0x0E000640
export const wdw_geo_000640 = () => {return [
    GEO_CULLING_RADIUS(450),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_070140E0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1620705666 - 2021-05-13 00:28:59 -0400
