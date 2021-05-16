// Burn Smoke

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    burn_smoke_seg4_dl_04022070
} from "./model.inc"


// 0x17000084
export const burn_smoke_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, burn_smoke_seg4_dl_04022070),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1618762576 - 2021-04-18 06:26:12 -1000
