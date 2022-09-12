import * as _Linker from "../../game/Linker"
import { spawn_object, cur_obj_hide, cur_obj_set_pos_via_transform, cur_obj_unhide,
obj_mark_for_deletion, obj_copy_pos, cur_obj_push_mario_away_from_cylinder } from "../ObjectHelpers"
import { object_step, is_point_close_to_object, create_respawner, curr_obj_random_blink } from "../ObjBehaviors"
import { obj_forward_vel_approach, obj_move_pitch_approach, obj_face_yaw_approach } from "../ObjBehaviors2"
import { cur_obj_play_sound_2 } from "../SpawnSound"
import { s16, random_u16 } from "../../utils"
import { oPosX, oPosY, oPosZ, oMoveAnglePitch, oMoveAngleYaw, oFaceAnglePitch, oFaceAngleYaw,
oForwardVel, oAction, oBehParams2ndByte, oDistanceToMario } from "../../include/object_constants"
import { MODEL_WATER_BOMB, MODEL_CANNON_BARREL } from "../../include/model_ids"
import { SOUND_OBJ_CANNON4 } from "../../include/sounds"
import { SHAKE_POS_MEDIUM } from "../Camera"


/* Water Bomb Cannon */
const oWaterCannonWait    = 0x1B
const oWaterCannonMove    = 0x1C
const oWaterCannonPitch   = 0x1D
const oWaterCannonYaw     = 0x1E

/* Cannon Barrel Bubbles */
const oCannonBarrelBubblesUnkF4  = 0x1B


const bhv_bubble_cannon_barrel_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.parentObj.rawData[oAction] == 2) {
        obj_mark_for_deletion(o)
    } else {
        o.rawData[oMoveAngleYaw]   = o.parentObj.rawData[oFaceAngleYaw]
        o.rawData[oMoveAnglePitch] = s16(o.parentObj.rawData[oMoveAnglePitch] + 0x4000)
        o.rawData[oFaceAnglePitch] = o.parentObj.rawData[oMoveAnglePitch]

        if ((o.rawData[oCannonBarrelBubblesUnkF4] += o.rawData[oForwardVel]) > 0.0) {
            cur_obj_set_pos_via_transform()
            obj_forward_vel_approach(-5.0, 18.0)
        } else {
            o.rawData[oCannonBarrelBubblesUnkF4] = 0.0
            obj_copy_pos(o, o.parentObj)

              // check this
            if (o.parentObj.rawData[oWaterCannonWait] != 0) {
                if (o.rawData[oForwardVel] == 0.0) {
                    o.rawData[oForwardVel] = 35.0

                    let val04 = spawn_object(o, MODEL_WATER_BOMB, 'bhvWaterBomb')
                    if (val04 != null) {
                        val04.rawData[oForwardVel] = -100.0
                        val04.gfx.scale[1] = 1.7
                    }

                    gLinker.Camera.set_camera_shake_from_point(SHAKE_POS_MEDIUM, o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
                }
            } else {
                o.rawData[oForwardVel] = 0.0
            }
        }
    }
}

const water_bomb_cannon_act_0 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oDistanceToMario] < 2000.0) {
        spawn_object(o, MODEL_CANNON_BARREL, 'bhvCannonBarrelBubbles')
        cur_obj_unhide()

        o.rawData[oAction] = 1
        o.rawData[oMoveAnglePitch] = o.rawData[oWaterCannonPitch] = 0x1C00
    }
}

const water_bomb_cannon_act_1 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    if (o.rawData[oDistanceToMario] > 2500.0) {
        o.rawData[oAction] = 2
    } else if (o.rawData[oBehParams2ndByte] == 0) {
        if (o.rawData[oWaterCannonWait] != 0) {
            o.rawData[oWaterCannonWait] -= 1
        } else {
            obj_move_pitch_approach(o.rawData[oWaterCannonPitch], 0x80)
            obj_face_yaw_approach(o.rawData[oWaterCannonYaw], 0x100)

            if (o.rawData[oFaceAngleYaw] == o.rawData[oWaterCannonYaw]) {
                if (o.rawData[oWaterCannonMove] != 0) {
                    o.rawData[oWaterCannonMove] -= 1
                } else {
                    cur_obj_play_sound_2(SOUND_OBJ_CANNON4)
                    o.rawData[oWaterCannonWait] = 70
                    o.rawData[oWaterCannonPitch] = s16(0x1000 + 0x400 * (random_u16() & 0x3))
                    o.rawData[oWaterCannonYaw] = s16(-0x2000 + o.rawData[oMoveAngleYaw] + 0x1000 * (random_u16() % 5))
                    o.rawData[oWaterCannonMove] = 60
                }
            }
        }
    }
}

const water_bomb_cannon_act_2 = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_hide()
    o.rawData[oAction] = 0
}

const bhv_water_bomb_cannon_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    cur_obj_push_mario_away_from_cylinder(220.0, 300.0)

    switch (o.rawData[oAction]) {
        case 0:
            water_bomb_cannon_act_0()
            break
        case 1:
            water_bomb_cannon_act_1()
            break
        case 2:
            water_bomb_cannon_act_2()
            break
    }
}


gLinker.bhv_bubble_cannon_barrel_loop = bhv_bubble_cannon_barrel_loop
gLinker.bhv_water_bomb_cannon_loop = bhv_water_bomb_cannon_loop
