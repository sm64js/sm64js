// Sl

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../../engine/GeoLayout"


// 0x0E000360
export const sl_geo_000360 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, sl_seg7_dl_0700A890),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)
