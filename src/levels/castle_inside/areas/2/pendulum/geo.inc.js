// Castle Inside

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import {
    inside_castle_seg7_dl_070512F8
} from "./model.inc"

// 0x0E001518
export const castle_geo_001518 = () => {return [
    GEO_CULLING_RADIUS(600),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070512F8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621726940 - 2021-05-22 16:42:23 -0700
