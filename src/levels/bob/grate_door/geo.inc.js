// Bob

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../../engine/GeoLayout"

import { bob_seg7_dl_0700E8A0 } from "./model.inc"


// 0x0E000470
export const bob_geo_000470 = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bob_seg7_dl_0700E8A0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-24 21:12:30 -1000
