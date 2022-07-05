// animated_floor_switch.inc.js

import { MODEL_BITDW_STAIRCASE, MODEL_BITDW_STAIRCASE_FRAME1, MODEL_BITDW_STAIRCASE_FRAME2, MODEL_BITDW_STAIRCASE_FRAME3, MODEL_BITDW_STAIRCASE_FRAME4, MODEL_BITS_STAIRCASE, MODEL_BITS_STAIRCASE_FRAME1, MODEL_BITS_STAIRCASE_FRAME2, MODEL_BITS_STAIRCASE_FRAME3, MODEL_BITS_STAIRCASE_FRAME4, MODEL_RR_TRICKY_TRIANGLES, MODEL_RR_TRICKY_TRIANGLES_FRAME1, MODEL_RR_TRICKY_TRIANGLES_FRAME2, MODEL_RR_TRICKY_TRIANGLES_FRAME3, MODEL_RR_TRICKY_TRIANGLES_FRAME4 } from "../../include/model_ids";
import { oAction, oBehParams2ndByte, oFloorSwitchPressAnimationUnk100, oFloorSwitchPressAnimationUnkF4, oFloorSwitchPressAnimationUnkF8, oFloorSwitchPressAnimationUnkFC } from "../../include/object_constants";
import { SOUND_GENERAL2_SWITCH_TICK_FAST, SOUND_GENERAL2_SWITCH_TICK_SLOW } from "../../include/sounds";
import { bitdw_seg7_collision_0700F91C } from "../../levels/bitdw/collapsing_stairs_1/collision.inc";
import { bitdw_seg7_collision_0700FA3C } from "../../levels/bitdw/collapsing_stairs_2/collision.inc";
import { bitdw_seg7_collision_0700FB5C } from "../../levels/bitdw/collapsing_stairs_3/collision.inc";
import { bitdw_seg7_collision_0700FC7C } from "../../levels/bitdw/collapsing_stairs_4/collision.inc";
import { bitdw_seg7_collision_0700FD9C } from "../../levels/bitdw/collapsing_stairs_5/collision.inc";
import { bits_seg7_collision_0701B0D4 } from "../../levels/bits/areas/1/28/collision.inc";
import { bits_seg7_collision_0701B26C } from "../../levels/bits/areas/1/29/collision.inc";
import { bits_seg7_collision_0701B404 } from "../../levels/bits/areas/1/30/collision.inc";
import { bits_seg7_collision_0701B59C } from "../../levels/bits/areas/1/31/collision.inc";
import { bits_seg7_collision_0701B734 } from "../../levels/bits/areas/1/32/collision.inc";
import { rr_seg7_collision_07029924 } from "../../levels/rr/tricky_triangles_1/collision.inc";
import { rr_seg7_collision_07029C1C } from "../../levels/rr/tricky_triangles_2/collision.inc";
import { rr_seg7_collision_07029FA4 } from "../../levels/rr/tricky_triangles_3/collision.inc";
import { rr_seg7_collision_0702A32C } from "../../levels/rr/tricky_triangles_4/collision.inc";
import { rr_seg7_collision_0702A6B4 } from "../../levels/rr/tricky_triangles_5/collision.inc";
import { bhvFloorSwitchAnimatesObject } from "../BehaviorData";
import { cur_obj_nearest_object_with_behavior, cur_obj_set_model } from "../ObjectHelpers";
import { cur_obj_play_sound_1 } from "../SpawnSound";

const floorSwitchData = [
    [
        { collision: bits_seg7_collision_0701B734, model: MODEL_BITS_STAIRCASE_FRAME4 },
        { collision: bits_seg7_collision_0701B59C, model: MODEL_BITS_STAIRCASE_FRAME3 },
        { collision: bits_seg7_collision_0701B404, model: MODEL_BITS_STAIRCASE_FRAME2 },
        { collision: bits_seg7_collision_0701B26C, model: MODEL_BITS_STAIRCASE_FRAME1 },
        { collision: bits_seg7_collision_0701B0D4, model: MODEL_BITS_STAIRCASE },
    ],
    [
        { collision: bitdw_seg7_collision_0700FD9C, model: MODEL_BITDW_STAIRCASE },
        { collision: bitdw_seg7_collision_0700FC7C, model: MODEL_BITDW_STAIRCASE_FRAME1 },
        { collision: bitdw_seg7_collision_0700FB5C, model: MODEL_BITDW_STAIRCASE_FRAME2 },
        { collision: bitdw_seg7_collision_0700FA3C, model: MODEL_BITDW_STAIRCASE_FRAME3 },
        { collision: bitdw_seg7_collision_0700F91C, model: MODEL_BITDW_STAIRCASE_FRAME4 },
    ],
    [
        { collision: rr_seg7_collision_0702A6B4, model: MODEL_RR_TRICKY_TRIANGLES_FRAME4 },
        { collision: rr_seg7_collision_0702A32C, model: MODEL_RR_TRICKY_TRIANGLES_FRAME3 },
        { collision: rr_seg7_collision_07029FA4, model: MODEL_RR_TRICKY_TRIANGLES_FRAME2 },
        { collision: rr_seg7_collision_07029C1C, model: MODEL_RR_TRICKY_TRIANGLES_FRAME1 },
        { collision: rr_seg7_collision_07029924, model: MODEL_RR_TRICKY_TRIANGLES },
    ],
]

const D_80331ACC = [ 250, 200, 200 ]

export const bhv_animates_on_floor_switch_press_init = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.parentObj = cur_obj_nearest_object_with_behavior(o, bhvFloorSwitchAnimatesObject)
}

export const bhv_animates_on_floor_switch_press_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oFloorSwitchPressAnimationUnk100] != 0) {
        if (o.parentObj.rawData[oAction] != 2) {
            o.rawData[oFloorSwitchPressAnimationUnk100] = 0
        }

        if (o.rawData[oFloorSwitchPressAnimationUnkFC] != 0) {
            o.rawData[oFloorSwitchPressAnimationUnkF4] = D_80331ACC[o.rawData[oBehParams2ndByte]]
        } else {
            o.rawData[oFloorSwitchPressAnimationUnkF4] = 0
        }
    } else if (o.parentObj.rawData[oAction] == 2) {
        o.rawData[oFloorSwitchPressAnimationUnkFC] ^= 1
        o.rawData[oFloorSwitchPressAnimationUnk100] = 1
    }

    if (o.rawData[oFloorSwitchPressAnimationUnkF4] != 0) {
        if (o.rawData[oFloorSwitchPressAnimationUnkF4] < 60) {
            cur_obj_play_sound_1(SOUND_GENERAL2_SWITCH_TICK_SLOW)
        } else {
            cur_obj_play_sound_1(SOUND_GENERAL2_SWITCH_TICK_FAST)
        }

        // o.rawData[oFloorSwitchPressAnimationUnkF4]--

        if (--o.rawData[oFloorSwitchPressAnimationUnkF4] == 0) {
            o.rawData[oFloorSwitchPressAnimationUnkFC] = 0
        }

        if (o.rawData[oFloorSwitchPressAnimationUnkF8] < 9) {
            o.rawData[oFloorSwitchPressAnimationUnkF8]++
        }
    } else if ((o.rawData[oFloorSwitchPressAnimationUnkF8] -= 2) < 0) {
        o.rawData[oFloorSwitchPressAnimationUnkF8] = 0
        o.rawData[oFloorSwitchPressAnimationUnkFC] = 1
    }
    
    o.collisionData = floorSwitchData[o.rawData[oBehParams2ndByte]][Math.floor(o.rawData[oFloorSwitchPressAnimationUnkF8] / 2)]["collision"]
    cur_obj_set_model(floorSwitchData[o.rawData[oBehParams2ndByte]][Math.floor(o.rawData[oFloorSwitchPressAnimationUnkF8] / 2)]["model"])
}

gLinker.bhv_animates_on_floor_switch_press_init = bhv_animates_on_floor_switch_press_init
gLinker.bhv_animates_on_floor_switch_press_loop = bhv_animates_on_floor_switch_press_loop