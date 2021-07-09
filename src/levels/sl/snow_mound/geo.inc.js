// Sl

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"


// 0x0E000390
export const sl_geo_000390 = () => {return [
    GEO_CULLING_RADIUS(350),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, sl_seg7_dl_0700A780),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
