// Cannon Barrel

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import { cannon_barrel_seg8_dl_08006660 } from "./model.inc"


// 0x0F0001C0
export const cannon_barrel_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, cannon_barrel_seg8_dl_08006660),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:12:26 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
