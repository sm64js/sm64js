// ddd_warp.c.inc
import * as _Linker from "../../game/Linker"

import {
    gDddPaintingStatus,
    BOWSERS_SUB_BEATEN
} from "../Paintings"

import {
    inside_castle_seg7_collision_ddd_warp,
    inside_castle_seg7_collision_ddd_warp_2
} from "../../levels/castle_inside/areas/3/collision.inc"


const bhv_ddd_warp_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (gDddPaintingStatus & BOWSERS_SUB_BEATEN) {
        o.collisionData = inside_castle_seg7_collision_ddd_warp_2
    }
    else {
        o.collisionData = inside_castle_seg7_collision_ddd_warp
    }
}


gLinker.bhv_ddd_warp_loop = bhv_ddd_warp_loop
