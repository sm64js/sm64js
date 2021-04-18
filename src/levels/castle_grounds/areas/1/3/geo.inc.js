// Castle Grounds

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import {
    castle_grounds_seg7_dl_0700A290
} from "./model.inc"

// 0x0E0006F4
export const castle_grounds_geo_0006F4 = [
    GEO_CULLING_RADIUS(2100),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, castle_grounds_seg7_dl_0700A290),
    GEO_CLOSE_NODE(),
    GEO_END(),
];

// 1618712075 - 2021-04-17 16:16:02 -1000
