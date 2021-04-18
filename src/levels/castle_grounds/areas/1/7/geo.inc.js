// Castle Grounds

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../../../engine/GeoLayout"

import {
    castle_grounds_seg7_dl_0700BB80
} from "./model.inc"


// 0x0E00070C
export const castle_grounds_geo_00070C = () => {return [
    GEO_CULLING_RADIUS(15000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, castle_grounds_seg7_dl_0700BB80),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1618763470 - 2021-04-18 06:31:12 -1000
