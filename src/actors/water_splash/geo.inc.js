// Water Splash

import { geo_switch_anim_state } from "../../game/ObjectHelpers"

import {
    GEO_SWITCH_CASE, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    water_splash_seg4_dl_04032640, water_splash_seg4_dl_04032658, water_splash_seg4_dl_04032670,
    water_splash_seg4_dl_04032688, water_splash_seg4_dl_040326A0, water_splash_seg4_dl_040326B8,
    water_splash_seg4_dl_040326D0, water_splash_seg4_dl_040326E8
} from "./model.inc"


// 0x17000230
export const water_splash_geo = () => {return [
    GEO_SWITCH_CASE(8, geo_switch_anim_state),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_04032640),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_04032658),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_04032670),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_04032688),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_040326A0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_040326B8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_040326D0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, water_splash_seg4_dl_040326E8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-25 14:40:51 -1000
