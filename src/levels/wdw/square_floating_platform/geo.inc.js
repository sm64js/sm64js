// Wdw

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"


// 0x0E000580
export const wdw_geo_000580 = () => {return [
    GEO_CULLING_RADIUS(550),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, wdw_seg7_dl_07012B90),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1620705666 - 2021-05-13 00:28:59 -0400
