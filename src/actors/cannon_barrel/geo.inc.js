// Cannon Barrel

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from '../../engine/GeoLayout'

import {
    cannon_barrel_seg8_dl_08006660
} from './model.inc'

// 0x0F0001C0
export const cannon_barrel_geo = [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, cannon_barrel_seg8_dl_08006660),
    GEO_CLOSE_NODE(),
    GEO_END(),
]

// 1618208663 - 2021-04-11 20:48:00 -1000
