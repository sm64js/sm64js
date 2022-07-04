// Lakitu Enemy

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_ASM, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    lakitu_enemy_seg5_dl_050138B0, lakitu_enemy_seg5_dl_05012910, lakitu_enemy_seg5_dl_05013160,
    lakitu_enemy_seg5_dl_05013350, lakitu_enemy_seg5_dl_05013378, lakitu_enemy_seg5_dl_050136A0,
    lakitu_enemy_seg5_dl_050134A8
} from "./model.inc"

import {
    geo_switch_anim_state, geo_update_projectile_pos_from_parent
} from "../../game/ObjectHelpers"


// 0x0C0001BC
export const enemy_lakitu_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 100),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 63, -62, lakitu_enemy_seg5_dl_050138B0),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_enemy_seg5_dl_05012910),
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 132, 0, 0, lakitu_enemy_seg5_dl_05013160),
                    GEO_OPEN_NODE(),
                        GEO_SWITCH_CASE(2, geo_switch_anim_state),
                        GEO_OPEN_NODE(),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, lakitu_enemy_seg5_dl_05013350),
                            GEO_DISPLAY_LIST(LAYER_ALPHA, lakitu_enemy_seg5_dl_05013378),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 87, 18, 72, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_enemy_seg5_dl_050136A0),
                    GEO_CLOSE_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 87, 18, -72, null),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, lakitu_enemy_seg5_dl_050134A8),
                        GEO_ASM(0, geo_update_projectile_pos_from_parent),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 17:36:22 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
