// Bobomb

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_BILLBOARD, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_SWITCH_CASE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    bobomb_seg8_dl_08022D08, bobomb_seg8_dl_08023270, bobomb_seg8_dl_08023378,
    bobomb_seg8_dl_08023480, bobomb_seg8_dl_08022B58, bobomb_seg8_dl_08022B88,
    bobomb_seg8_dl_08022D78
} from "./model.inc"

import { geo_switch_anim_state } from "../../game/ObjectHelpers"


// 0x0F0007B8
export const black_bobomb_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 24576),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_BILLBOARD(),
                        GEO_OPEN_NODE(),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, bobomb_seg8_dl_08022D08),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 57, -60, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 91, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023270),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 55, 62, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 91, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023378),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023480),
                    GEO_SWITCH_CASE(2, geo_switch_anim_state),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bobomb_seg8_dl_08022B58),
                        GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bobomb_seg8_dl_08022B88),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x0F0008F4
export const bobomb_buddy_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 24576),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_OPEN_NODE(),
                        GEO_BILLBOARD(),
                        GEO_OPEN_NODE(),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, bobomb_seg8_dl_08022D78),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 57, -60, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 91, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023270),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 55, 62, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 91, 0, 0, null),
                            GEO_OPEN_NODE(),
                                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023378),
                            GEO_CLOSE_NODE(),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, bobomb_seg8_dl_08023480),
                    GEO_SWITCH_CASE(2, geo_switch_anim_state),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bobomb_seg8_dl_08022B58),
                        GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, bobomb_seg8_dl_08022B88),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1619334742 - 2021-04-24 22:22:19 -1000
