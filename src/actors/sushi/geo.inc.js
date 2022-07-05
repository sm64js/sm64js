// Sushi

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SCALE, GEO_ANIMATED_PART, GEO_ASM, GEO_CLOSE_NODE,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    sushi_seg5_dl_0500A768, sushi_seg5_dl_05009DD0, sushi_seg5_dl_0500A008,
    sushi_seg5_dl_0500A160, sushi_seg5_dl_0500A990, sushi_seg5_dl_0500A8A8
} from "./model.inc"

// import { geo_update_body_rot_from_parent } from "../../game/ObjectHelpers"


// 0x0C000068
export const sushi_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_SCALE(0x00, 16384),
        GEO_OPEN_NODE(),
            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
            GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, sushi_seg5_dl_0500A768),
                /*GEO_OPEN_NODE(),
                    GEO_ASM(0, geo_update_body_rot_from_parent),
                GEO_CLOSE_NODE(),*/
                GEO_OPEN_NODE(),
                    GEO_ANIMATED_PART(LAYER_OPAQUE, 201, 0, 0, sushi_seg5_dl_05009DD0),
                    GEO_OPEN_NODE(),
                        GEO_ANIMATED_PART(LAYER_OPAQUE, 415, 0, 0, sushi_seg5_dl_0500A008),
                        GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 486, 0, 0, sushi_seg5_dl_0500A160),
                        GEO_CLOSE_NODE(),
                    GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, sushi_seg5_dl_0500A990),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, sushi_seg5_dl_0500A8A8),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2022-07-04 22:08:31 -0400 (Convert.rb 2022-07-03 12:20:08 -0400)
