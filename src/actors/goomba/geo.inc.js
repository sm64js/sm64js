// Goomba

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_BILLBOARD, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_SWITCH_CASE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    goomba_seg8_dl_0801D760, goomba_seg8_dl_0801B690, goomba_seg8_dl_0801B5C8,
    goomba_seg8_dl_0801B5F0, goomba_seg8_dl_0801CE20, goomba_seg8_dl_0801CF78
} from "./model.inc"

import { geo_switch_anim_state } from "../../game/ObjectHelpers"


// 0x0F0006E4
export const goomba_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801D760),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                    GEO_BILLBOARD(),
                    GEO_OPEN_NODE(),
                        GEO_DISPLAY_LIST(LAYER_ALPHA, goomba_seg8_dl_0801B690),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(2, geo_switch_anim_state),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 48, 0, 0, goomba_seg8_dl_0801B5C8),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 48, 0, 0, goomba_seg8_dl_0801B5F0),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -60, -16, 45, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801CE20),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, -60, -16, -45, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, goomba_seg8_dl_0801CF78),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:12:02 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
