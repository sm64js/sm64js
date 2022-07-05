// Chain Chomp

import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

import {
    GEO_SHADOW, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    chain_chomp_seg6_dl_06024940, chain_chomp_seg6_dl_06024FC0, chain_chomp_seg6_dl_06024240,
    chain_chomp_seg6_dl_06024D60, chain_chomp_seg6_dl_06024B00
} from "./model.inc"


// 0x0D0005EC
export const chain_chomp_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 200),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024940),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024FC0),
            GEO_CLOSE_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024240),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024D60),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, chain_chomp_seg6_dl_06024B00),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
GEO_CLOSE_NODE(), //! more close than open nodes
GEO_END(),
]};

// 2022-07-04 22:16:40 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
