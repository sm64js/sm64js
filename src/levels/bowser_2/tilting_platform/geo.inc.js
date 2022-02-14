// Bowser 2

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { bowser_2_seg7_dl_07000FE0 } from "./model.inc"

// 0x0E000170
export const bowser_2_geo_000170 = () => {return [
    GEO_CULLING_RADIUS(5000),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bowser_2_seg7_dl_07000FE0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-08-02 18:37:25 -0400 (Convert.rb 2021-07-22 11:15:52 -0400)
