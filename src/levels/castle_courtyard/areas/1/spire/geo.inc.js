// Castle Courtyard

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import {
    castle_courtyard_seg7_dl_07005078
} from "./model.inc"

// 0x0E000200
export const castle_courtyard_geo_000200 = () => {return [
    GEO_CULLING_RADIUS(2600),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, castle_courtyard_seg7_dl_07005078),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621915736 - 2021-05-25 23:20:16 -0700
