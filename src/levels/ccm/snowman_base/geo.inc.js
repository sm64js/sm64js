// Ccm

import { SHADOW_CIRCLE_4_VERTS } from "../../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../engine/GeoLayout"

import { ccm_seg7_dl_07012BD8 } from "./model.inc"

// 0x0E0003F0
export const ccm_geo_0003F0 = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0xC8, 400),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, ccm_seg7_dl_07012BD8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-31 17:13:37 -0400 (Convert.rb 2021-05-31 17:07:40 -0400)
