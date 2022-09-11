// Number

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_SWITCH_CASE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    dl_billboard_num_0, dl_billboard_num_1, dl_billboard_num_2, dl_billboard_num_3, dl_billboard_num_4, 
    dl_billboard_num_5, dl_billboard_num_6, dl_billboard_num_7, dl_billboard_num_8, dl_billboard_num_9
} from "../../bin/segment2"

// 0x16000E14
export const number_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(10, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_0),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_1),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_2),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_3),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_4),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_5),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_6),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_7),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_8),
            GEO_DISPLAY_LIST(LAYER_ALPHA, dl_billboard_num_9),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 02:59:14 -1000
