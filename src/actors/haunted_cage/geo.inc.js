// Haunted Cage

import { SHADOW_CIRCLE_9_VERTS } from "../../game/Shadow"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_SHADOW, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    haunted_cage_seg5_dl_0500F7D8, haunted_cage_seg5_dl_0500FC28, haunted_cage_seg5_dl_05010100
} from "./model.inc"


// 0x0C000274
export const haunted_cage_geo = () => {return [
    GEO_CULLING_RADIUS(300),
    GEO_OPEN_NODE(),
        GEO_SHADOW(SHADOW_CIRCLE_9_VERTS, 0x96, 100),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, haunted_cage_seg5_dl_0500F7D8),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, haunted_cage_seg5_dl_0500FC28),
            GEO_DISPLAY_LIST(LAYER_ALPHA, haunted_cage_seg5_dl_05010100),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1622010961 - 2021-05-25 23:37:31 -0700
