// Book

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import { book_seg5_dl_05002FB0 } from "./model.inc"


// 0x0C0000C0
export const bookend_geo = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, book_seg5_dl_05002FB0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1622010961 - 2021-05-25 23:38:45 -0700
