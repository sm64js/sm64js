// Cannon Base

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from '../../engine/GeoLayout'

import {
    cannon_base_seg8_dl_080057F8
} from './model.inc'

// 0x0F0001A8
export const cannon_base_geo = [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, cannon_base_seg8_dl_080057F8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]

// 1618208663 - 2021-04-11 20:48:04 -1000
