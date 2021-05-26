// Boo

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    geo_update_layer_transparency, geo_switch_anim_state
} from "../../game/ObjectHelpers"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ASM, GEO_SWITCH_CASE, GEO_DISPLAY_LIST,
    GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_TRANSPARENT
} from "../../engine/GeoLayout"

import { boo_seg5_dl_0500C1B0 } from "./model.inc"


// 0x0C000224
export const boo_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 70),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 26214),
        GEO_OPEN_NODE(),
            GEO_ASM(0, geo_update_layer_transparency),
            GEO_SWITCH_CASE(2, geo_switch_anim_state),
            GEO_OPEN_NODE(),
                GEO_DISPLAY_LIST(LAYER_OPAQUE, boo_seg5_dl_0500C1B0),
                GEO_DISPLAY_LIST(LAYER_TRANSPARENT, boo_seg5_dl_0500C1B0),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]};

// 1621915736 - 2021-05-25 23:34:02 -0700
