// Water Wave

import { geo_switch_anim_state } from "../../game/ObjectHelpers"

import {
    GEO_SWITCH_CASE, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import {
    water_wave_seg4_dl_040273F0, water_wave_seg4_dl_04027408, water_wave_seg4_dl_04027420,
    water_wave_seg4_dl_04027438
} from "./model.inc"


// 0x17000124
export const idle_water_wave_geo = () => {return [
    GEO_SWITCH_CASE(6, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_040273F0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027408),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027420),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027420),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027408),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x17000168
export const wave_trail_geo = () => {return [
    GEO_SWITCH_CASE(8, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_040273F0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027408),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027420),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, water_wave_seg4_dl_04027438),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-25 14:42:00 -1000
