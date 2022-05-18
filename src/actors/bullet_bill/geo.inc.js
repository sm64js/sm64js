// bullet bill

import {
    SHADOW_SQUARE_PERMANENT
} from "../../game/Shadow"

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, LAYER_OPAQUE, GEO_CLOSE_NODE, GEO_END
} from "../../engine/GeoLayout"

import {
    bullet_bill_seg5_dl_0500E8A8
} from "./model.inc"

export const bullet_bill_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_SQUARE_PERMANENT, 0x96, 400),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, bullet_bill_seg5_dl_0500E8A8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};