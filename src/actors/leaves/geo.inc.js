// Leaves

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    leaves_seg3_dl_0301CDE0
} from "./model.inc"


// 0x16000C8C
export const leaves_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, leaves_seg3_dl_0301CDE0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1618763501 - 2021-04-18 06:32:58 -1000
