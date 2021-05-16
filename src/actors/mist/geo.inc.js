// Mist

import {
    geo_update_layer_transparency
} from "../../game/ObjectHelpers"

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_ASM, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    mist_seg3_dl_03000880, mist_seg3_dl_03000920
} from "./model.inc"


// 0x16000000
export const mist_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_ASM(0, geo_update_layer_transparency),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mist_seg3_dl_03000880),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000020
export const white_puff_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_ASM(0, geo_update_layer_transparency),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, mist_seg3_dl_03000920),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:28:33 -1000
