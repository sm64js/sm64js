// Flame

import {
    SHADOW_CIRCLE_4_VERTS
} from "../../game/Shadow"

import {
    geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_BRANCH_AND_LINK, GEO_CLOSE_NODE, GEO_END, GEO_NODE_START,
    GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    flame_seg3_dl_0301B3B0, flame_seg3_dl_0301B3C8, flame_seg3_dl_0301B3E0,
    flame_seg3_dl_0301B3F8, flame_seg3_dl_0301B410, flame_seg3_dl_0301B428,
    flame_seg3_dl_0301B440, flame_seg3_dl_0301B458, flame_seg3_dl_0301B500,
    flame_seg3_dl_0301B518, flame_seg3_dl_0301B530, flame_seg3_dl_0301B548,
    flame_seg3_dl_0301B560, flame_seg3_dl_0301B578, flame_seg3_dl_0301B590,
    flame_seg3_dl_0301B5A8
} from "./model.inc"


// 0x16000B10
export const red_flame_shadow_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x50, 20),
    GEO_OPEN_NODE(),
        GEO_BRANCH_AND_LINK(red_flame_geo),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000B2C
export const red_flame_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B3B0),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B3C8),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B3E0),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B3F8),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B410),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B428),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B440),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B458),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16000B8C
export const blue_flame_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_SWITCH_CASE(8, geo_switch_anim_state),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B500),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B518),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B530),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B548),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B560),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B578),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B590),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg3_dl_0301B5A8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619267130 - 2021-04-24 03:13:01 -1000
