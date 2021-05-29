import { geo_obj_init, geo_obj_init_animation, geo_obj_init_animation_accel, GRAPH_RENDER_INVISIBLE,
    GEO_CONTEXT_RENDER, GRAPH_RENDER_BILLBOARD } from "../engine/graph_node"

import {
    oAction, oPrevAction, oSubAction, oTimer, oFlags,
    oBehParams, oBehParams2ndByte,
    oAnimations, oAnimState, oActiveParticleFlags,
    oIntangibleTimer, oInteractionSubtype, oInteractStatus, oInteractType,
    oHealth, oHeldState,

    oPosX, oPosY, oPosZ,
    oHomeX, oHomeY, oHomeZ, oAngleToHome,
    oVelX, oVelY, oVelZ,
    oParentRelativePosX, oParentRelativePosY, oParentRelativePosZ,
    oGraphYOffset,

    oAngleVelPitch, oAngleVelRoll, oAngleVelYaw,
    oForwardVel, oForwardVelS32,
    oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw,
    oDrawingDistance, oOpacity,

    oBounciness, oBuoyancy, oDragStrength, oFriction, oGravity,
    oCollisionDistance, oDamageOrCoinValue, oNumLootCoins,
    oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oMoveFlags,
    oWallAngle, oWallHitboxRadius,

    oFloor, oFloorHeight, oFloorRoom, oFloorType, oRoom,
    oAngleToMario, oDistanceToMario,

    oDeathSound, oSoundStateID,
    oDialogResponse, oDialogState,

    oUnk1A8, oUnk94, oUnkBC, oUnkC0,

    oCoinUnk110,

    oPathedStartWaypoint, oPathedPrevWaypoint, oPathedPrevWaypointFlags, oPathedTargetPitch,
    oPathedTargetYaw,

    ACTIVE_FLAGS_DEACTIVATED, ACTIVE_FLAG_FAR_AWAY, ACTIVE_FLAG_IN_DIFFERENT_ROOM,
    ACTIVE_FLAG_UNK10, ACTIVE_FLAG_UNK7, ACTIVE_FLAG_DEACTIVATED,

    OBJ_MOVE_ABOVE_DEATH_BARRIER, OBJ_MOVE_MASK_HIT_WALL_OR_IN_WATER, OBJ_MOVE_IN_AIR,
    OBJ_MOVE_ABOVE_LAVA, OBJ_MOVE_HIT_WALL, OBJ_MOVE_HIT_EDGE, OBJ_MOVE_ON_GROUND,
    OBJ_MOVE_AT_WATER_SURFACE, OBJ_MOVE_MASK_IN_WATER, OBJ_MOVE_LEAVING_WATER,
    OBJ_MOVE_ENTERED_WATER, OBJ_MOVE_MASK_ON_GROUND, OBJ_MOVE_UNDERWATER_ON_GROUND,
    OBJ_MOVE_LEFT_GROUND, OBJ_MOVE_UNDERWATER_OFF_GROUND, OBJ_MOVE_MASK_33, OBJ_MOVE_13,
    OBJ_MOVE_LANDED, O_PARENT_RELATIVE_POS_INDEX, O_MOVE_ANGLE_INDEX, OBJ_FLAG_HOLDABLE,

    HELD_FREE, HELD_HELD, HELD_THROWN, HELD_DROPPED
 } from "../include/object_constants"

import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { TIME_STOP_ENABLED } from "./ObjectListProcessor"

import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"

import { SURFACE_BURNING, SURFACE_DEATH_PLANE } from "../include/surface_terrains"
import { ATTACK_PUNCH, INT_STATUS_WAS_ATTACKED, INT_STATUS_INTERACTED, INT_STATUS_TOUCHED_BOB_OMB } from "./Interaction"
import { ACT_GROUND_POUND_LAND, ACT_FLAG_AIR, ACT_DIVE_SLIDE, ANIM_FLAG_NOLOOP } from "./Mario"

import { MODEL_YELLOW_COIN, MODEL_BLUE_COIN } from "../include/model_ids"

import { GRAPH_RENDER_ACTIVE           } from "../engine/graph_node"

import { OBJ_LIST_UNIMPORTANT, OBJ_LIST_GENACTOR } from "./BehaviorData"

import { atan2s, mtxf_rotate_zxy_and_translate } from "../engine/math_util"
import { sins, coss, int16, s16, random_int16, random_float } from "../utils"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import * as _Linker from "./Linker"
import * as Gbi from "../include/gbi"
import { spawn_mist_particles_variable } from "./behaviors/white_puff.inc"
import { spawn_triangle_break_particles } from "./behaviors/break_particles.inc"


export const WATER_DROPLET_FLAG_RAND_ANGLE                = 0x02
export const WATER_DROPLET_FLAG_RAND_OFFSET_XZ            = 0x04 // Unused
export const WATER_DROPLET_FLAG_RAND_OFFSET_XYZ           = 0x08 // Unused
export const WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL      = 0x20
export const WATER_DROPLET_FLAG_RAND_ANGLE_INCR_PLUS_8000 = 0x40
export const WATER_DROPLET_FLAG_RAND_ANGLE_INCR           = 0x80 // Unused


export const cur_obj_set_behavior = (behavior) => {
    const o = ObjectListProc.gCurrentObject

    o.behavior = behavior
}

export const cur_obj_lateral_dist_to_home = () => {
    let dist;
    const o = ObjectListProc.gCurrentObject
    let dx = o.rawData[oHomeX] - o.rawData[oPosX];
    let dz = o.rawData[oHomeZ] - o.rawData[oPosZ];

    dist = Math.sqrt(dx * dx + dz * dz);
    return dist;
}

export const cur_obj_set_model = (modelID) => {
    const o = ObjectListProc.gCurrentObject

    o.gfx.sharedChild = gLinker.Area.gLoadedGraphNodes[modelID]
}

export const cur_obj_has_model = (modelID) => {
    const o = ObjectListProc.gCurrentObject

    if (o.gfx.sharedChild == gLinker.Area.gLoadedGraphNodes[modelID]) {
        return 1
    } else {
        return 0
    }
}

export const cur_obj_set_pos_to_home = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oPosX] = o.rawData[oHomeX]
    o.rawData[oPosY] = o.rawData[oHomeY]
    o.rawData[oPosZ] = o.rawData[oHomeZ]
}

export const cur_obj_set_pos_relative = (other, dleft, dy, dforward) => {
    const o = ObjectListProc.gCurrentObject

    const facingZ = coss(other.rawData[oMoveAngleYaw])
    const facingX = sins(other.rawData[oMoveAngleYaw])

    const dz = dforward * facingZ - dleft * facingX
    const dx = dforward * facingX + dleft * facingZ

    o.rawData[oMoveAngleYaw] = other.rawData[oMoveAngleYaw]

    o.rawData[oPosX] = other.rawData[oPosX] + dx
    o.rawData[oPosY] = other.rawData[oPosY] + dy
    o.rawData[oPosZ] = other.rawData[oPosZ] + dz
}

export const geo_switch_anim_state = (callerContext, node) => {
    if (callerContext == GEO_CONTEXT_RENDER) {
        let obj = GeoRenderer.gCurGraphNodeObject.object

        if (GeoRenderer.gCurGraphNodeHeldObject) {
            obj = GeoRenderer.gCurGraphNodeHeldObject.object
        }

        // if the case is greater than the number of cases, set to 0 to aexport const ove = rin=> g
        // the switch.
        if (obj.rawData[oAnimState] >= node.numCases) {
            obj.rawData[oAnimState] = 0
        }

        node.selectedCase = obj.rawData[oAnimState]
    }

    return null
}

export const geo_switch_area = (callerContext, node) => {
    if (callerContext == GEO_CONTEXT_RENDER) {
        if (ObjectListProc.gMarioObject == undefined) {
            node.selectedCase = 0
        } else {
            ///TODO gFindFloorIncludeSurfaceIntangible = 1

            const marioObj = ObjectListProc.gMarioObject

            const floorWrapper = {}
            const height = gLinker.SurfaceCollision.find_floor(marioObj.rawData[oPosX], marioObj.rawData[oPosY], marioObj.rawData[oPosZ], floorWrapper)

            if (floorWrapper.floor) {
                ObjectListProc.gMarioCurrentRoom = floorWrapper.floor.room
                let selectedRoom = floorWrapper.floor.room - 1

                if (selectedRoom >= 0) {
                    node.selectedCase = selectedRoom
                }
            }

        }
    } else {
        node.selectedCase = 0
    }
}

export const geo_update_layer_transparency = (callerContext, node) => {
    const dl = []

    if (callerContext == GEO_CONTEXT_RENDER) {
        let obj = GeoRenderer.gCurGraphNodeObject.object

        if (GeoRenderer.gCurGraphNodeHeldObject) {
            obj = GeoRenderer.gCurGraphNodeHeldObject.object
        }

        const opacity = obj.rawData[oOpacity]

        if (opacity == 0xFF) {
            if (node.parameter == 20) {
                node.flags = 0x600 | (node.flags & 0xFF)
            } else {
                node.flags = 0x100 | (node.flags & 0xFF)
            }

            obj.rawData[oAnimState] = 0
        } else {
            if (node.parameter == 20) {
                node.flags = 0x600 | (node.flags & 0xFF)
            } else {
                node.flags = 0x500 | (node.flags & 0xFF)
            }

            obj.rawData[oAnimState] = 1

            if (opacity == 0 && gLinker.behaviors.bhvBowser == obj.behavior) {
                obj.rawData[oAnimState] = 2
            }
        }

        Gbi.gDPSetEnvColor(dl, 255, 255, 255, opacity)
        Gbi.gSPEndDisplayList(dl)
    }

    return dl
}

export const spawn_water_droplet = (parent, params) => {
    let randomScale
    // allow getters
    if (params.call) {
        params = params()
    }
    const newObj = spawn_object(parent, params.model, params.behavior);

    if (params.flags & WATER_DROPLET_FLAG_RAND_ANGLE) {
        newObj.rawData[oMoveAngleYaw] = random_int16()
    }

    if (params.flags & WATER_DROPLET_FLAG_RAND_ANGLE_INCR_PLUS_8000) {
        newObj.rawData[oMoveAngleYaw] = (int16)(newObj.rawData[oMoveAngleYaw] + 0x8000
                                + random_f32_around_zero(params.moveAngleRange))
    }

    if (params.flags & WATER_DROPLET_FLAG_RAND_ANGLE_INCR) {
        newObj.rawData[oMoveAngleYaw] =
            s16(newObj.rawData[oMoveAngleYaw] + random_f32_around_zero(params.moveAngleRange))
    }

    if (params.flags & WATER_DROPLET_FLAG_SET_Y_TO_WATER_LEVEL) {
        newObj.rawData[oPosY] = gLinker.SurfaceCollision.find_water_level(newObj.rawData[oPosX], newObj.rawData[oPosZ])
    }

    if (params.flags & WATER_DROPLET_FLAG_RAND_OFFSET_XZ) {
        obj_translate_xz_random(newObj, params.moveRange)
    }

    if (params.flags & WATER_DROPLET_FLAG_RAND_OFFSET_XYZ) {
        obj_translate_xyz_random(newObj, params.moveRange)
    }

    newObj.rawData[oForwardVel] = random_float() * params.randForwardVel[1] + params.randForwardVel[0]
    newObj.rawData[oVelY] = random_float() * params.randYVel[1] + params.randYVel[0]

    randomScale = random_float() * params.randSize[1] + params.randSize[0]
    obj_scale(newObj, randomScale)

    newObj.gfx.bleh = "water droplet"
    return newObj
}

export const spawn_object_at_origin = (parent, model, behavior) => {
    const obj = gLinker.Spawn.create_object(behavior)

    obj.parentObj = parent
    obj.gfx.areaIndex = parent.gfx.areaIndex
    obj.gfx.activeAreaIndex = parent.gfx.areaIndex

    geo_obj_init(obj.gfx, gLinker.Area.gLoadedGraphNodes[model], [0,0,0], [0,0,0])

    return obj
}

export const spawn_object_abs_with_rot = (parent, model, behavior, x, y, z, rx, ry, rz) => {
    const newObj = spawn_object_at_origin(parent, model, behavior)
    obj_set_pos(newObj, x, y, z)
    obj_set_angle(newObj, rx, ry, rz)
    return newObj
}


export const cur_obj_check_anim_frame = (frame) => {
    const o = ObjectListProc.gCurrentObject

    const animFrame = o.gfx.unk38.animFrame
    if (animFrame == frame) {
        return 1
    } else {
        return 0
    }
}

export const cur_obj_check_anim_frame_in_range = (startFrame, rangeLength) => {
    const o = ObjectListProc.gCurrentObject
    let /*s32*/ animFrame = o.gfx.unk38.animFrame

    if (animFrame >= startFrame && animFrame < startFrame + rangeLength) {
        return 1
    } else {
        return 0
    }
}

// export const cur_obj_check_frame_prior_current_frame = (a0) => {
//     const o = ObjectListProc.gCurrentObject
//     let /*s16*/ sp6 = o.gfx.unk38.animFrame

//     while (*a0 != -1) {
//         if (*a0 == sp6) {
//             return 1
//         }

//         a0++
//     }

//     return 0
// }

export const mario_is_in_air_action = () => {
    if (LevelUpdate.gMarioState.action & ACT_FLAG_AIR) {
        return 1
    } else {
        return 0
    }
}

export const mario_is_dive_sliding = () => {
    if (LevelUpdate.gMarioState.action == ACT_DIVE_SLIDE) {
        return 1
    } else {
        return 0
    }
}

export const cur_obj_set_y_vel_and_animation = (velY, animIndex) => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oVelY] = velY
    cur_obj_init_animation_with_sound(animIndex)
}

export const cur_obj_unrender_and_reset_state = (animIndex, action) => {
    const o = ObjectListProc.gCurrentObject
    cur_obj_become_intangible()
    cur_obj_disable_rendering()

    if (animIndex >= 0) {
        cur_obj_init_animation_with_sound(animIndex)
    }

    o.rawData[oAction] = action
}

const cur_obj_move_after_thrown_or_dropped = (forwardVel, velY) => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oMoveFlags] = 0
    o.rawData[oFloorHeight] = gLinker.SurfaceCollision.find_floor_height(o.rawData[oPosX], o.rawData[oPosY] + 160.0, o.rawData[oPosZ])

    if (o.rawData[oFloorHeight] > o.rawData[oPosY]) {
        o.rawData[oPosY] = o.rawData[oFloorHeight]
    } else if (o.rawData[oFloorHeight] < -10000.0) {
        //! OoB failsafe
        obj_copy_pos(o, ObjectListProc.gMarioObject)
        o.rawData[oFloorHeight] = gLinker.SurfaceCollision.find_floor_height(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ])
    }

    o.rawData[oForwardVel] = forwardVel
    o.rawData[oVelY] = velY

    if (o.rawData[oForwardVel] != 0) {
        cur_obj_move_y(/*gravity*/ -4.0, /*bounciness*/ -0.1, /*buoyancy*/ 2.0)
    }
}

export const cur_obj_get_thrown_or_placed = (forwardVel, velY, thrownAction) => {
    const o = ObjectListProc.gCurrentObject
    if (o.behavior == gLinker.behaviors.bhvBowser) {
          // Interestingly, when bowser is thrown, he is offset slightly to
          // Mario's right
        cur_obj_set_pos_relative_to_parent(-41.684, 85.859, 321.577)
    }

    cur_obj_become_tangible()
    cur_obj_enable_rendering()

    o.rawData[oHeldState] = HELD_FREE

    if ((o.rawData[oInteractionSubtype] & INT_SUBTYPE_HOLDABLE_NPC) || forwardVel == 0.0) {
        cur_obj_move_after_thrown_or_dropped(0.0, 0.0)
    } else {
        o.rawData[oAction] = thrownAction
        cur_obj_move_after_thrown_or_dropped(forwardVel, velY)
    }
}

export const cur_obj_get_dropped = () => {
    const o = ObjectListProc.gCurrentObject
    cur_obj_become_tangible()
    cur_obj_enable_rendering()

    o.rawData[oHeldState] = HELD_FREE
    cur_obj_move_after_thrown_or_dropped(0.0, 0.0)
}

export const obj_translate_xz_random = (obj, rangeLength) => {
    obj.rawData[oPosX] += Math.random() * rangeLength - rangeLength * 0.5
    obj.rawData[oPosZ] += Math.random() * rangeLength - rangeLength * 0.5
}

export const obj_update_pos_from_parent_transformation = (a0, a1) => {
    const spC = a1.rawData[oParentRelativePosX]
    const sp8 = a1.rawData[oParentRelativePosY]
    const sp4 = a1.rawData[oParentRelativePosZ]

    a1.rawData[oPosX] = spC * a0[0][0] + sp8 * a0[1][0] + sp4 * a0[2][0] + a0[3][0]
    a1.rawData[oPosY] = spC * a0[0][1] + sp8 * a0[1][1] + sp4 * a0[2][1] + a0[3][1]
    a1.rawData[oPosZ] = spC * a0[0][2] + sp8 * a0[1][2] + sp4 * a0[2][2] + a0[3][2]
}

export const obj_apply_scale_to_matrix = (obj, dst, src) => {
    dst[0][0] = src[0][0] * obj.gfx.scale[0]
    dst[1][0] = src[1][0] * obj.gfx.scale[1]
    dst[2][0] = src[2][0] * obj.gfx.scale[2]
    dst[3][0] = src[3][0]

    dst[0][1] = src[0][1] * obj.gfx.scale[0]
    dst[1][1] = src[1][1] * obj.gfx.scale[1]
    dst[2][1] = src[2][1] * obj.gfx.scale[2]
    dst[3][1] = src[3][1]

    dst[0][2] = src[0][2] * obj.gfx.scale[0]
    dst[1][2] = src[1][2] * obj.gfx.scale[1]
    dst[2][2] = src[2][2] * obj.gfx.scale[2]
    dst[3][2] = src[3][2]

    dst[0][3] = src[0][3]
    dst[1][3] = src[1][3]
    dst[2][3] = src[2][3]
    dst[3][3] = src[3][3]
}


export const create_transformation_from_matrices = (a0, a1, a2) => {
    let spC, sp8, sp4

    spC = a2[3][0] * a2[0][0] + a2[3][1] * a2[0][1] + a2[3][2] * a2[0][2]
    sp8 = a2[3][0] * a2[1][0] + a2[3][1] * a2[1][1] + a2[3][2] * a2[1][2]
    sp4 = a2[3][0] * a2[2][0] + a2[3][1] * a2[2][1] + a2[3][2] * a2[2][2]

    a0[0][0] = a1[0][0] * a2[0][0] + a1[0][1] * a2[0][1] + a1[0][2] * a2[0][2]
    a0[0][1] = a1[0][0] * a2[1][0] + a1[0][1] * a2[1][1] + a1[0][2] * a2[1][2]
    a0[0][2] = a1[0][0] * a2[2][0] + a1[0][1] * a2[2][1] + a1[0][2] * a2[2][2]

    a0[1][0] = a1[1][0] * a2[0][0] + a1[1][1] * a2[0][1] + a1[1][2] * a2[0][2]
    a0[1][1] = a1[1][0] * a2[1][0] + a1[1][1] * a2[1][1] + a1[1][2] * a2[1][2]
    a0[1][2] = a1[1][0] * a2[2][0] + a1[1][1] * a2[2][1] + a1[1][2] * a2[2][2]

    a0[2][0] = a1[2][0] * a2[0][0] + a1[2][1] * a2[0][1] + a1[2][2] * a2[0][2]
    a0[2][1] = a1[2][0] * a2[1][0] + a1[2][1] * a2[1][1] + a1[2][2] * a2[1][2]
    a0[2][2] = a1[2][0] * a2[2][0] + a1[2][1] * a2[2][1] + a1[2][2] * a2[2][2]

    a0[3][0] = a1[3][0] * a2[0][0] + a1[3][1] * a2[0][1] + a1[3][2] * a2[0][2] - spC
    a0[3][1] = a1[3][0] * a2[1][0] + a1[3][1] * a2[1][1] + a1[3][2] * a2[1][2] - sp8
    a0[3][2] = a1[3][0] * a2[2][0] + a1[3][1] * a2[2][1] + a1[3][2] * a2[2][2] - sp4

    a0[0][3] = 0
    a0[1][3] = 0
    a0[2][3] = 0
    a0[3][3] = 1.0
}

export const obj_set_held_state = (obj, heldBehavior) => {
    const o = ObjectListProc.gCurrentObject
    obj.parentObj = o

    heldBehavior = gLinker.Spawn.get_bhv_script(heldBehavior)
    if (obj.rawData[oFlags] & OBJ_FLAG_HOLDABLE) {
        if (heldBehavior == gLinker.behaviors.bhvCarrySomething3) {
            obj.rawData[oHeldState] = HELD_HELD
        }

        if (heldBehavior == gLinker.behaviors.bhvCarrySomething5) {
            obj.rawData[oHeldState] = HELD_THROWN
        }

        if (heldBehavior == gLinker.behaviors.bhvCarrySomething4) {
            obj.rawData[oHeldState] = HELD_DROPPED
        }
    } else {
        obj.curBhvCommand = heldBehavior
        obj.bhvStackIndex = 0
    }
}

export const obj_build_transform_from_pos_and_angle = (obj, posIndex, angleIndex) => {
    const translate = []
    const rotation = []

    translate[0] = obj.rawData[posIndex + 0]
    translate[1] = obj.rawData[posIndex + 1]
    translate[2] = obj.rawData[posIndex + 2]

    rotation[0] = obj.rawData[angleIndex + 0]
    rotation[1] = obj.rawData[angleIndex + 1]
    rotation[2] = obj.rawData[angleIndex + 2]

    mtxf_rotate_zxy_and_translate(obj.transform, translate, rotation)

}

export const cur_obj_angle_to_home = () => {

    const o = ObjectListProc.gCurrentObject
    
    let angle;

    let dx = o.rawData[oHomeX] - o.rawData[oPosX];
    let dz = o.rawData[oHomeZ] - o.rawData[oPosZ];

    angle = atan2s(dz, dx);
    return angle;
}

const obj_translate_local = (obj, posIndex, localTranslateIndex) => {
    const dx = obj.rawData[localTranslateIndex + 0]
    const dy = obj.rawData[localTranslateIndex + 1]
    const dz = obj.rawData[localTranslateIndex + 2]

    obj.rawData[posIndex + 0] += obj.transform[0][0] * dx + obj.transform[1][0] * dy + obj.transform[2][0] * dz
    obj.rawData[posIndex + 1] += obj.transform[0][1] * dx + obj.transform[1][1] * dy + obj.transform[2][1] * dz
    obj.rawData[posIndex + 2] += obj.transform[0][2] * dx + obj.transform[1][2] * dy + obj.transform[2][2] * dz
}

const obj_build_relative_transform = (obj) => {
    obj_build_transform_from_pos_and_angle(obj, oParentRelativePosX /* Takes all XYZ */, oFaceAnglePitch, /* Takes all roll, pitch, yaw */)
    obj_translate_local(obj, oPosX, oParentRelativePosX)
}

export const linear_mtxf_mul_vec3f = (m, dst, v) => {
    for (let i = 0; i < 3; i++) {
        dst[i] = m[0][i] * v[0] + m[1][i] * v[1] + m[2][i] * v[2]
    }
}

export const linear_mtxf_transpose_mul_vec3f = (m, dst, v) => {
    for (let i = 0; i < 3; i++) {
        dst[i] = m[i][0] * v[0] + m[i][1] * v[1] + m[i][2] * v[2]
    }
}

const obj_build_vel_from_transform = (a0) => {
    let spC = a0.rawData[oUnkC0]
    let sp8 = a0.rawData[oUnkBC]
    let sp4 = a0.rawData[oForwardVel]

    a0.rawData[oVelX] = a0.transform[0][0] * spC + a0.transform[1][0] * sp8 + a0.transform[2][0] * sp4
    a0.rawData[oVelY] = a0.transform[0][1] * spC + a0.transform[1][1] * sp8 + a0.transform[2][1] * sp4
    a0.rawData[oVelZ] = a0.transform[0][2] * spC + a0.transform[1][2] * sp8 + a0.transform[2][2] * sp4
}

export const cur_obj_set_pos_via_transform = () => {
    const o = ObjectListProc.gCurrentObject
    obj_build_transform_from_pos_and_angle(o, O_PARENT_RELATIVE_POS_INDEX, O_MOVE_ANGLE_INDEX)
    obj_build_vel_from_transform(o)
    o.rawData[oPosX] += o.rawData[oVelX]
    o.rawData[oPosY] += o.rawData[oVelY]
    o.rawData[oPosZ] += o.rawData[oVelZ]
}

export const cur_obj_reflect_move_angle_off_wall = () => {
    const o = ObjectListProc.gCurrentObject
    return s16(o.rawData[oWallAngle] - (s16(o.rawData[oMoveAngleYaw]) - s16(o.rawData[oWallAngle])) + 0x8000)
}


export const approach_symmetric = (value, target, increment) => {
    const dist = s16(target - value)

    if (dist >= 0) {
        if (dist > increment) {
            value += increment
        } else {
            value = target
        }
    } else {
        if (dist < -increment) {
            value -= increment
        } else {
            value = target
        }
    }

    return value
}

export const approach_s16_symmetric = (value, target, increment) =>{
    let dist = s16(target - value)

    if (dist >= 0) {
        if (dist > increment) {
            value = s16(value + increment)
        } else {
            value = target
        }
    } else {
        if (dist < -increment) {
            value = s16(value - increment)
        } else {
            value = target
        }
    }

    return value
}

export const cur_obj_forward_vel_approach_upward = (target, increment) => {
    const o = ObjectListProc.gCurrentObject
    if (o.rawData[oForwardVel] >= target) {
        o.rawData[oForwardVel] = target
    } else {
        o.rawData[oForwardVel] += increment
    }
}

export const abs_angle_diff = (x0, x1) => {
    let diff = x1 - x0

    if (diff == -0x8000) {
        diff = -0x7FFF
    }

    if (diff < 0) {
        diff = -diff
    }

    return diff
}

export const cur_obj_detect_steep_floor = (steepAngleDegrees) => {

    const o = ObjectListProc.gCurrentObject
    const steepNormalY = coss(parseInt(steepAngleDegrees * (0x10000 / 360)))

    if (o.rawData[oForwardVel] != 0) {
        const intendedX = o.rawData[oPosX] + o.rawData[oVelX]
        const intendedZ = o.rawData[oPosZ] + o.rawData[oVelZ]
        const intendedFloorWrapper = {}
        const intendedFloorHeight = gLinker.SurfaceCollision.find_floor(intendedX, o.rawData[oPosY], intendedZ, intendedFloorWrapper)
        const intendedFloor = intendedFloorWrapper.floor
        const deltaFloorHeight = intendedFloorHeight - o.rawData[oFloorHeight]

        if (intendedFloorHeight < -10000.0) {
            o.rawData[oWallAngle] = o.rawData[oMoveAngleYaw] + 0x8000
            return 2
        } else if (intendedFloor.normal.y < steepNormalY && deltaFloorHeight > 0 && intendedFloorHeight > o.rawData[oPosY]) {
            o.rawData[oWallAngle] = atan2s(intendedFloor.normal.z, intendedFloor.normal.x)
            return 1
        } else {
            return 0
        }
    }

    return 0
}

export const cur_obj_resolve_wall_collisions = () => {
    const o = ObjectListProc.gCurrentObject

    const offsetY = 10.0
    const radius = o.rawData[oWallHitboxRadius]

    if (radius > 0.1) {
        const collisionData = {
            offsetY,
            radius,
            x: parseInt(o.rawData[oPosX]),
            y: parseInt(o.rawData[oPosY]),
            z: parseInt(o.rawData[oPosZ]),
            walls: []
        }

        const numCollisions = gLinker.SurfaceCollision.find_wall_collisions(collisionData)
        if (numCollisions != 0) {
            o.rawData[oPosX] = collisionData.x
            o.rawData[oPosY] = collisionData.y
            o.rawData[oPosZ] = collisionData.z

            const wall = collisionData.walls[collisionData.numWalls - 1]

            o.rawData[oWallAngle] = atan2s(wall.normal.z, wall.normal.x)
            if (abs_angle_diff(o.rawData[oWallAngle], o.rawData[oMoveAngleYaw]) > 0x4000) {
                return 1
            } else {
                return 0
            }

        }
    }

    return 0
}

export const cur_obj_update_floor_height_and_get_floor = () => {

    const o = ObjectListProc.gCurrentObject

    const floorWrapper = {}
    o.rawData[oFloorHeight] = gLinker.SurfaceCollision.find_floor(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], floorWrapper)
    return floorWrapper.floor
}

export const cur_obj_update_floor_height = () => {

    const o = ObjectListProc.gCurrentObject
    o.rawData[oFloorHeight] = gLinker.SurfaceCollision.find_floor(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], {})
}


export const cur_obj_update_floor = () => {
    const o = ObjectListProc.gCurrentObject
    const floor = cur_obj_update_floor_height_and_get_floor()
    o.rawData[oFloor] = floor

    if (floor) {
        if (floor.type == SURFACE_BURNING) o.rawData[oMoveFlags] |= OBJ_MOVE_ABOVE_LAVA
        else if (floor.type == SURFACE_DEATH_PLANE) o.rawData[oMoveFlags] |= OBJ_MOVE_ABOVE_DEATH_BARRIER

        o.rawData[oFloorType] = floor.type
        o.rawData[oFloorRoom] = floor.room
    } else {
        o.rawData[oFloorType] = 0
        o.rawData[oFloorRoom] = 0
    }

}

export const cur_obj_call_action_function = (actionFunctions) => {
    const o = ObjectListProc.gCurrentObject
    const actionFunction = actionFunctions[o.rawData[oAction]]
    actionFunction()
}

export const obj_explode_and_spawn_coins = (sp18, sp1C) => {
    const o = ObjectListProc.gCurrentObject
    spawn_mist_particles_variable(0, 0, sp18)
    spawn_triangle_break_particles(30, 138, 3.0, 4)
    obj_mark_for_deletion(o)

    if (sp1C == 1) {
        obj_spawn_loot_yellow_coins(o, o.rawData[oNumLootCoins], 20.0)
    } else if (sp1C == 2) {
        obj_spawn_loot_blue_coins(o, o.rawData[oNumLootCoins], 20.0, 150)
    }
}

export const cur_obj_if_hit_wall_bounce_away = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oMoveFlags] & OBJ_MOVE_HIT_WALL) {
        o.rawData[oMoveAngleYaw] = o.rawData[oWallAngle]
    }
}

export const cur_obj_update_floor_and_resolve_wall_collisions = (steepSlopeDegrees) => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oMoveFlags] &= ~(OBJ_MOVE_ABOVE_LAVA | OBJ_MOVE_ABOVE_DEATH_BARRIER)

    if (o.activeFlags & (ACTIVE_FLAG_FAR_AWAY | ACTIVE_FLAG_IN_DIFFERENT_ROOM)) {
        cur_obj_update_floor()
        o.rawData[oMoveFlags] &= ~OBJ_MOVE_MASK_HIT_WALL_OR_IN_WATER

        if (o.rawData[oPosY] > o.rawData[oFloorHeight]) {
            o.rawData[oMoveFlags] |= OBJ_MOVE_IN_AIR
        }
    } else {
        o.rawData[oMoveFlags] &= ~OBJ_MOVE_HIT_WALL
        if (cur_obj_resolve_wall_collisions()) {
            o.rawData[oMoveFlags] |= OBJ_MOVE_HIT_WALL
        }

        cur_obj_update_floor()

        if (o.rawData[oPosY] > o.rawData[oFloorHeight]) {
            o.rawData[oMoveFlags] |= OBJ_MOVE_IN_AIR
        }

        if (cur_obj_detect_steep_floor(steepSlopeDegrees)) {
            o.rawData[oMoveFlags] |= OBJ_MOVE_HIT_WALL
        }

    }
}
export const cur_obj_update_floor_and_walls = () => {
    cur_obj_update_floor_and_resolve_wall_collisions(60)
}

export const clear_move_flag = (bitSet, flag) => {
    if (bitSet & flag) {
        bitSet &= flag ^ 0xFFFFFFFF
        return { result: 1, bitSet }
    } else {
        return { result: 0, bitSet }
    }
}

export const cur_obj_rotate_yaw_toward = (target, increment) => {

    const o = ObjectListProc.gCurrentObject

    const startYaw = parseInt(o.rawData[oMoveAngleYaw])
    o.rawData[oMoveAngleYaw] = approach_symmetric(o.rawData[oMoveAngleYaw], target, increment)

    o.rawData[oAngleVelYaw] = parseInt(o.rawData[oMoveAngleYaw] - startYaw)
    if ((o.rawData[oAngleVelYaw]) == 0) {
        return 1
    } else {
        return 0
    }
}

export const cur_obj_move_update_ground_air_flags = (gravity, bounciness) => {

    const o = ObjectListProc.gCurrentObject

    o.rawData[oMoveFlags] &= ~OBJ_MOVE_13

    if (o.rawData[oPosY] < o.rawData[oFloorHeight]) {
        // On the first frame that we touch the ground, set OBJ_MOVE_LANDED.
        // On subsequent frames, set OBJ_MOVE_ON_GROUND
        if (!(o.rawData[oMoveFlags] & OBJ_MOVE_ON_GROUND)) {

            const { result, newBitSet } = clear_move_flag(o.rawData[oMoveFlags], OBJ_MOVE_LANDED)
            o.rawData[oMoveFlags] = newBitSet
            if (result) {
                o.rawData[oMoveFlags] |= OBJ_MOVE_ON_GROUND
            } else {
                o.rawData[oMoveFlags] |= OBJ_MOVE_LANDED
            }
        }

        o.rawData[oPosY] = o.rawData[oFloorHeight]

        if (o.rawData[oVelY] < 0.0) {
            o.rawData[oVelY] *= bounciness
        }

        if (o.rawData[oVelY] > 5.0) {
            //! If OBJ_MOVE_13 tracks bouncing, it overestimates, since velY
            // could be > 5 here without bounce (e.g. jump into misa)
            o.rawData[oMoveFlags] |= OBJ_MOVE_13
        }
    } else {
        o.rawData[oMoveFlags] &= ~OBJ_MOVE_LANDED
        const { result, newBitSet } = clear_move_flag(o.rawData[oMoveFlags], OBJ_MOVE_ON_GROUND)
        o.rawData[oMoveFlags] = newBitSet
        if (result) {
            o.rawData[oMoveFlags] |= OBJ_MOVE_LEFT_GROUND
        }
    }

    o.rawData[oMoveFlags] &= ~OBJ_MOVE_MASK_IN_WATER
}

export const cur_obj_move_y_and_get_water_level = (gravity, buoyancy) => {

    const o = ObjectListProc.gCurrentObject

    let waterLevel

    o.rawData[oVelY] += gravity + buoyancy
    if (o.rawData[oVelY] < -78.0) {
        o.rawData[oVelY] = -78.0
    }

    o.rawData[oPosY] += o.rawData[oVelY]
    if (o.activeFlags & ACTIVE_FLAG_UNK10) {
        waterLevel = -11000.0
    } else {
        waterLevel = gLinker.SurfaceCollision.find_water_level(o.rawData[oPosX], o.rawData[oPosZ])
    }

    return waterLevel
}

export const cur_obj_move_xz_using_fvel_and_yaw = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oVelX] = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw])
    o.rawData[oVelZ] = o.rawData[oForwardVel] * coss(o.rawData[oMoveAngleYaw])

    o.rawData[oPosX] += o.rawData[oVelX]
    o.rawData[oPosZ] += o.rawData[oVelZ]
}

export const cur_obj_move_xz = (steepSlopeNormalY, careAboutEdgesAndSteepSlopes) => {

    const o = ObjectListProc.gCurrentObject

    const intendedX = o.rawData[oPosX] + o.rawData[oVelX]
    const intendedZ = o.rawData[oPosZ] + o.rawData[oVelZ]

    const intendedFloorWrapper = {}
    const intendedFloorHeight = gLinker.SurfaceCollision.find_floor(intendedX, o.rawData[oPosY], intendedZ, intendedFloorWrapper)
    const deltaFloorHeight = intendedFloorHeight - o.rawData[oFloorHeight]


    o.rawData[oMoveFlags] &= ~OBJ_MOVE_HIT_EDGE

    if (o.rawData[oRoom] != -1 && intendedFloorWrapper.floor) {
        if (intendedFloorWrapper.floor.room != 0 && o.rawData[oRoom] != intendedFloorWrapper.floor.room && intendedFloorWrapper.floor.room != 18) {
            // Don't leave native room
            return 0
        }
    }

    if (intendedFloorHeight < -10000.0) {
        // Don't move into OoB
        o.rawData[oMoveFlags] |= OBJ_MOVE_HIT_EDGE
        return 0
    } else if (deltaFloorHeight < 5.0) {
        if (!careAboutEdgesAndSteepSlopes) {
            // If we don't care about edges or steep slopes, okay to move
            o.rawData[oPosX] = intendedX
            o.rawData[oPosZ] = intendedZ
            return 1
        } else if (deltaFloorHeight < -50.0 && (o.rawData[oMoveFlags] & OBJ_MOVE_ON_GROUND)) {
            // Don't walk off an edge
            o.rawData[oMoveFlags] |= OBJ_MOVE_HIT_EDGE
            return 0
        } else if (intendedFloorWrapper.floor.normal.y > steepSlopeNormalY) {
            // Allow movement onto a slope, provided it's not too steep
            o.rawData[oPosX] = intendedX
            o.rawData[oPosZ] = intendedZ
            return 1
        } else {
            // We are likely trying to move onto a steep downward slope
            o.rawData[oMoveFlags] |= OBJ_MOVE_HIT_EDGE
            return 0
        }
    } else if ((intendedFloorWrapper.floor.normal.y) > steepSlopeNormalY || o.rawData[oPosY] > intendedFloorHeight) {
        // Allow movement upward, provided either:
        // - The target floor is flat enough (e.g. walking up stairs)
        // - We are above the target floor (most likely in the air)
        o.rawData[oPosX] = intendedX
        o.rawData[oPosZ] = intendedZ
        //! Returning FALSE but moving anyway (not exploitable; return value is
        //  never used)
    }

    // We are likely trying to move onto a steep upward slope
    return 0
}

export const cur_obj_move_y = (gravity, bounciness, buoyancy) => {

    const o = ObjectListProc.gCurrentObject

    o.rawData[oMoveFlags] &= ~OBJ_MOVE_LEFT_GROUND

    if (o.rawData[oMoveFlags] & OBJ_MOVE_AT_WATER_SURFACE) {
        if (o.rawData[oVelY] > 5.0) {
            o.rawData[oMoveFlags] &= ~OBJ_MOVE_MASK_IN_WATER
            o.rawData[oMoveFlags] |= OBJ_MOVE_LEAVING_WATER
        }
    }

    if (!(o.rawData[oMoveFlags] & OBJ_MOVE_MASK_IN_WATER)) {
        const waterLevel = cur_obj_move_y_and_get_water_level(gravity, 0.0)
        if (o.rawData[oPosY] > waterLevel) {
            //! We only handle floor collision if the object does not enter
            //  water. This allows e.g. coins to clip through floors if they
            //  enter water on the same frame.
            cur_obj_move_update_ground_air_flags(gravity, bounciness)
        } else {
            o.rawData[oMoveFlags] |= OBJ_MOVE_ENTERED_WATER
            o.rawData[oMoveFlags] &= ~OBJ_MOVE_MASK_ON_GROUND
        }
    } else {
        o.rawData[oMoveFlags] &= ~OBJ_MOVE_ENTERED_WATER

        const waterLevel = cur_obj_move_y_and_get_water_level(gravity, buoyancy)
        if (o.rawData[oPosY] < waterLevel) {
            throw "cur_obj_move_y implement underwater"
            cur_obj_move_update_underwater_flags()
        } else {
            if (o.rawData[oPosY] < o.rawData[oFloorHeight]) {
                o.rawData[oPosY] = o.rawData[oFloorHeight]
                o.rawData[oMoveFlags] &= ~OBJ_MOVE_MASK_IN_WATER
            } else {
                o.rawData[oPosY] = waterLevel
                o.rawData[oVelY] = 0.0
                o.rawData[oMoveFlags] &= ~(OBJ_MOVE_UNDERWATER_OFF_GROUND | OBJ_MOVE_UNDERWATER_ON_GROUND)
                o.rawData[oMoveFlags] |= OBJ_MOVE_AT_WATER_SURFACE
            }
        }
    }

    if (o.rawData[oMoveFlags] & OBJ_MOVE_MASK_33) {
        o.rawData[oMoveFlags] &= ~OBJ_MOVE_IN_AIR
    } else {
        o.rawData[oMoveFlags] |= OBJ_MOVE_IN_AIR
    }
}


export const cur_obj_move_standard = (steepSlopeAngleDegrees) => {
    const o = ObjectListProc.gCurrentObject
    const gravity = o.rawData[oGravity]
    const bounciness = o.rawData[oBounciness]
    const bouyancy = o.rawData[oBuoyancy]
    const dragStrength = o.rawData[oDragStrength]
    let steepSlopeNormalY
    let careAboutEdgesAndSteepSlopes = 0
    let negativeSpeed = 0

    //! Because some objects allow these active flags to be set but don't
    //  aexport const updating when they are, we end up with "partial" update = ser=> e
    //  an object's internal state will be updated, but it doesn't move.
    //  This allows numerous glitches and is typically referred to as
    //  deactivation (though this term has a different meaning in the code).
    //  Objects that do this will be marked with //PARTIAL_UPDATE.

    if (!(o.activeFlags & (ACTIVE_FLAG_FAR_AWAY | ACTIVE_FLAG_IN_DIFFERENT_ROOM))) {
        if (steepSlopeAngleDegrees < 0) {
            careAboutEdgesAndSteepSlopes = 1
            steepSlopeAngleDegrees = -steepSlopeAngleDegrees
        }

        steepSlopeNormalY = coss(steepSlopeAngleDegrees * (0x10000 / 360))

        cur_obj_compute_vel_xz()
        cur_obj_apply_drag_xz(dragStrength)

        cur_obj_move_xz(steepSlopeNormalY, careAboutEdgesAndSteepSlopes)
        cur_obj_move_y(gravity, bounciness, bouyancy)

        if (o.rawData[oForwardVel] < 0) {
            negativeSpeed = 1
        }

        o.rawData[oForwardVel] = Math.sqrt(Math.pow(o.rawData[oVelX], 2) + Math.pow(o.rawData[oVelZ], 2))
        if (negativeSpeed) {
            o.rawData[oForwardVel] = -o.rawData[oForwardVel]
        }
    }

}

export const cur_obj_is_mario_ground_pounding_platform = () => {
    if (ObjectListProc.gMarioObject.platform == ObjectListProc.gCurrentObject) {
        if (LevelUpdate.gMarioState.action == ACT_GROUND_POUND_LAND) {
            return 1
        }
    }

    return 0
}

export const obj_turn_toward_object = (obj, target, angleIndex, turnAmount) => {
    const o = ObjectListProc.gCurrentObject

    let targetAngle, a, b, c, d
    switch (angleIndex) {
        case oMoveAnglePitch:
        case oFaceAnglePitch:
            a = target.rawData[oPosX] - obj.rawData[oPosX]
            c = target.rawData[oPosZ] - obj.rawData[oPosZ]
            a = Math.sqrt(a * a + c * c)

            b = -obj.rawData[oPosY]
            d = -target.rawData[oPosY]

            targetAngle = atan2s(a, d - b)
            break

        case oMoveAngleYaw:
        case oFaceAngleYaw:
            a = obj.rawData[oPosZ]
            c = target.rawData[oPosZ]
            b = obj.rawData[oPosX]
            d = target.rawData[oPosX]

            targetAngle = atan2s(c - a, d - b)
            break
    }

    const startAngle = s16(o.rawData[angleIndex])
    o.rawData[angleIndex] = approach_symmetric(startAngle, targetAngle, turnAmount)
    return targetAngle
}

export const obj_attack_collided_from_other_object = (obj) => {
    if (obj.numCollidedObjs != 0) {
        const other = obj.collidedObjs[0]

        if (other != ObjectListProc.gMarioObject) {
            other.rawData[oInteractStatus] |= ATTACK_PUNCH | INT_STATUS_WAS_ATTACKED | INT_STATUS_INTERACTED | INT_STATUS_TOUCHED_BOB_OMB
            return 1
        }
    }

    return 0
}

export const cur_obj_was_attacked_or_ground_pounded = () => {
    const o = ObjectListProc.gCurrentObject
    let attacked = 0

    if ((o.rawData[oInteractStatus] & INT_STATUS_INTERACTED)
        && (o.rawData[oInteractStatus] & INT_STATUS_WAS_ATTACKED)) {
        attacked = 1
    }

    if (cur_obj_is_mario_ground_pounding_platform()) {
        attacked = 1
    }

    o.rawData[oInteractStatus] = 0
    return attacked
}


export const spawn_object_relative = (behaviorParam, relativePosX, relativePosY, relativePosZ, parent, model, behavior) => {

    const obj = spawn_object_at_origin(parent, model, behavior)

    obj_copy_pos_and_angle(obj, parent)
    obj_set_parent_relative_pos(obj, relativePosX, relativePosY, relativePosZ)
    obj_build_relative_transform(obj)

    obj.rawData[oBehParams2ndByte] = behaviorParam
    obj.rawData[oBehParams] = (behaviorParam & 0xFF) << 16

    return obj
}


export const spawn_object_relative_with_scale = (behaviorParam, relativePosX, relativePosY, relativePosZ,
                                              scale, parent, model, behavior) => {
    const obj = spawn_object_relative(behaviorParam, relativePosX, relativePosY, relativePosZ,
                                               parent, model, behavior)
    obj_scale(obj, scale)
    return obj
}


export const try_to_spawn_object = (offsetY, scale, parent, model, behavior) => {
    const obj = spawn_object(parent, model, behavior)
    obj.rawData[oPosY] += offsetY
    obj_scale(obj, scale)
    return obj
}

export const spawn_object = (parent, model, behavior) => {
    const obj = spawn_object_at_origin(parent, model, behavior)
    obj_copy_pos_and_angle(obj, parent)
    return obj
}


export const cur_obj_rotate_move_angle_using_vel = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oMoveAnglePitch] = s16(o.rawData[oMoveAnglePitch] + o.rawData[oAngleVelPitch])
    o.rawData[oMoveAngleYaw]   = s16(o.rawData[oMoveAngleYaw]   + o.rawData[oAngleVelYaw])
    o.rawData[oMoveAngleRoll]  = s16(o.rawData[oMoveAngleRoll]  + o.rawData[oAngleVelRoll])
}

export const cur_obj_rotate_face_angle_using_vel = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oFaceAnglePitch] = s16(o.rawData[oFaceAnglePitch] + o.rawData[oAngleVelPitch])
    o.rawData[oFaceAngleYaw]   = s16(o.rawData[oFaceAngleYaw]   + o.rawData[oAngleVelYaw])
    o.rawData[oFaceAngleRoll]  = s16(o.rawData[oFaceAngleRoll]  + o.rawData[oAngleVelRoll])
}

export const cur_obj_set_face_angle_to_move_angle = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oFaceAnglePitch] = o.rawData[oMoveAnglePitch]
    o.rawData[oFaceAngleYaw]   = o.rawData[oMoveAngleYaw]
    o.rawData[oFaceAngleRoll]  = o.rawData[oMoveAngleRoll]
}

export const get_object_list_from_behavior = (behavior) => {
    behavior = gLinker.Spawn.get_bhv_script(behavior)
    return gLinker.Spawn.get_bhv_object_list(behavior)
}

export const cur_obj_nearest_object_with_behavior = (behavior) => {
    return cur_obj_find_nearest_object_with_behavior(behavior)
}

export const cur_obj_dist_to_nearest_object_with_behavior = (behavior) => {
    let dist = {}
    let obj = cur_obj_find_nearest_object_with_behavior(behavior, dist)
    if (!obj) {
        dist.dist = 15000.0
    }

    return dist.dist
}

export const cur_obj_find_nearest_object_with_behavior = (behavior, dist) => {
    let closestObj = null
    let listHead = ObjectListProc.gObjectLists[get_object_list_from_behavior(behavior)]
    let minDist = 0x20000
    let obj

    obj = listHead.next

    while (obj != listHead) {
        if (obj.behavior == behavior) {
            if (obj.activeFlags != ACTIVE_FLAG_DEACTIVATED && obj != o) {
                let objDist = dist_between_objects(o, obj)
                if (objDist < minDist) {
                    closestObj = obj
                    minDist = objDist
                }
            }
        }
        obj = obj.next
    }

    if (dist) {
        dist.dist = minDist
    }
    return closestObj
}

export const find_unimportant_object = () => {
    let listHead = ObjectListProc.gObjectLists[OBJ_LIST_UNIMPORTANT]
    let obj = listHead.next

    if (listHead == obj) {
        obj = null
    }

    return obj
}

export const count_unimportant_objects = () => {
    let listHead = ObjectListProc.gObjectLists[OBJ_LIST_UNIMPORTANT]
    let obj = listHead.next
    let count = 0

    while (listHead != obj) {
        count++
        obj = obj.next
    }

    return count
}

export const count_objects_with_behavior = (behavior) => {
    let listHead = ObjectListProc.gObjectLists[get_object_list_from_behavior(behavior)]
    let obj = listHead.next
    let count = 0

    while (listHead != obj) {
        if (obj.behavior == behavior) {
            count++
        }

        obj = obj.next
    }

    return count
}

export const cur_obj_find_nearby_held_actor = (behavior, maxDist) => {
    let listHead
    let obj
    let foundObj

    listHead = ObjectListProc.gObjectLists[OBJ_LIST_GENACTOR]
    obj = listHead.next
    foundObj = null

    while (listHead != obj) {
        if (obj.behavior == behavior) {
            if (obj.activeFlags != ACTIVE_FLAG_DEACTIVATED) {
                  // This includes the dropped and thrown states. By combining instant
                  // release, this allows us to activate mama penguin remotely
                if (obj.rawData[oHeldState] != HELD_FREE) {
                    if (dist_between_objects(o, obj) < maxDist) {
                        foundObj = obj
                        break
                    }
                }
            }
        }

        obj = obj.next
    }

    return foundObj
}

const cur_obj_reset_timer_and_subaction = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oTimer] = 0
    o.rawData[oSubAction] = 0
}

export const cur_obj_change_action = (action) => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oAction] = action
    o.rawData[oPrevAction] = action
    cur_obj_reset_timer_and_subaction()
}

export const cur_obj_set_vel_from_mario_vel = (f12, f14) => {
    const o = ObjectListProc.gCurrentObject
    let /*f32*/ sp4 = gMarioStates[0].forwardVel
    let /*f32*/ sp0 = f12 * f14

    if (sp4 < sp0) {
        o.rawData[oForwardVel] = sp0
    } else {
        o.rawData[oForwardVel] = sp4 * f14
    }
}

export const cur_obj_reverse_animation = () => {
    const o = ObjectListProc.gCurrentObject
    if (o.gfx.unk38.animFrame >= 0) {
        o.gfx.unk38.animFrame--
    }
}

export const cur_obj_extend_animation_if_at_end = () => {
    const o = ObjectListProc.gCurrentObject

    const sp4 = o.gfx.unk38.animFrame
    const sp0 = o.gfx.unk38.curAnim.unk08 - 2

    if (sp4 == sp0) {
        o.gfx.unk38.animFrame--
    }
}


export const cur_obj_check_if_near_animation_end = () => {
    const o = ObjectListProc.gCurrentObject
    let animFlags = o.gfx.unk38.curAnim.flags
    let animFrame = o.gfx.unk38.animFrame
    let nearLoopEnd = o.gfx.unk38.curAnim.unk08 - 2
    let isNearEnd = 0

    if (animFlags & ANIM_FLAG_NOLOOP && nearLoopEnd + 1 == animFrame) {
        isNearEnd = 1
    }

    if (animFrame == nearLoopEnd) {
        isNearEnd = 1
    }

    return isNearEnd
}

export const cur_obj_check_if_at_animation_end = () => {
    const o = ObjectListProc.gCurrentObject
    let animFrame = o.gfx.unk38.animFrame
    let lastFrame = o.gfx.unk38.curAnim.unk08 - 1

    if (animFrame == lastFrame) {
        return 1
    } else {
        return 0
    }
}


// struct Waypoint
// {
//     s16 flags;
//     Vec3s pos;
// };

const WAYPOINT_FLAGS_END = -1
const WAYPOINT_FLAGS_INITIALIZED = 0x8000
const WAYPOINT_MASK_00FF = 0x00FF
const WAYPOINT_FLAGS_PLATFORM_ON_TRACK_PAUSE = 3

const PATH_NONE = 0
const PATH_REACHED_END = -1
const PATH_REACHED_WAYPOINT = 1

export const cur_obj_follow_path = (unusedArg) => {
    const o = ObjectListProc.gCurrentObject
    let trajectory
    let lastIndex, lastWaypoint
    let targetIndex, targetWaypoint
    let prevToNextX, prevToNextY, prevToNextZ
    let objToNextXZ
    let objToNextX, objToNextY, objToNextZ

    if (o.rawData[oPathedPrevWaypointFlags] == 0) {
        o.rawData[oPathedPrevWaypoint] = 0
        o.rawData[oPathedPrevWaypointFlags] = WAYPOINT_FLAGS_INITIALIZED
    }

    trajectory = o.rawData[oPathedStartWaypoint]
    lastIndex  = o.rawData[oPathedPrevWaypoint]

    if (trajectory[lastIndex + 1].flags != WAYPOINT_FLAGS_END) {
        targetIndex = lastIndex + 1
    } else {
        targetIndex = 0
    }

    lastWaypoint   = trajectory[lastIndex]
    targetWaypoint = trajectory[targetIndex]

    o.rawData[oPathedPrevWaypointFlags] = lastWaypoint.flags | WAYPOINT_FLAGS_INITIALIZED

    prevToNextX = targetWaypoint.pos[0] - lastWaypoint.pos[0]
    prevToNextY = targetWaypoint.pos[1] - lastWaypoint.pos[1]
    prevToNextZ = targetWaypoint.pos[2] - lastWaypoint.pos[2]

    objToNextX = targetWaypoint.pos[0] - o.rawData[oPosX]
    objToNextY = targetWaypoint.pos[1] - o.rawData[oPosY]
    objToNextZ = targetWaypoint.pos[2] - o.rawData[oPosZ]
    objToNextXZ = Math.sqrt(objToNextX * objToNextX + objToNextZ * objToNextZ)

    o.rawData[oPathedTargetYaw] = atan2s(objToNextZ, objToNextX)
    o.rawData[oPathedTargetPitch] = atan2s(objToNextXZ, -objToNextY)

      // If dot(prevToNext, objToNext) <= 0 (i.e. reached other side of target waypoint)
    if (prevToNextX * objToNextX + prevToNextY * objToNextY + prevToNextZ * objToNextZ <= 0.0) {
        o.rawData[oPathedPrevWaypoint] = targetIndex
        if (trajectory[targetIndex + 1].flags == WAYPOINT_FLAGS_END) {
            return PATH_REACHED_END
        } else {
            return PATH_REACHED_WAYPOINT
        }
    }

    return PATH_NONE
}


export const random_f32_around_zero = (diameter) => {
    return random_float() * diameter - diameter / 2
}

export const cur_obj_spawn_particles = (info) => {
    const o = ObjectListProc.gCurrentObject

    let numParticles = info.count

    // If there are a lot of objects already, limit the number of particles
    if (ObjectListProc.gPrevFrameObjectCount > 150 && numParticles > 10) {
        numParticles = 10
    }

    // We're close to running out of object slots, so don't spawn particles at all
    if (ObjectListProc.gPrevFrameObjectCount > 210) {
        numParticles = 0
    }

    for (let i = 0; i < numParticles; i++) {
        const scale = Math.random() * (info.sizeRange * 0.1) + (info.sizeBase * 0.1)

        const particle = spawn_object(o, info.model, gLinker.behaviors.bhvWhitePuffExplosion)

        particle.rawData[oBehParams2ndByte] = info.behParam
        particle.rawData[oMoveAngleYaw] = random_int16()
        particle.rawData[oGravity] = info.gravity
        particle.rawData[oDragStrength] = info.dragStrength

        particle.rawData[oPosY] += info.offsetY
        particle.rawData[oForwardVel] = Math.random() * info.forwardVelRange + info.forwardVelBase
        particle.rawData[oVelY] = Math.random() * info.velYRange + info.velYBase

        obj_scale_xyz(particle, scale, scale, scale)

    }

}

export const obj_copy_pos_and_angle = (dst, src) => {
    obj_copy_pos(dst, src)
    obj_copy_angle(dst, src)
}

export const obj_copy_angle = (dst, src) => {
    dst.rawData[oFaceAnglePitch] = src.rawData[oFaceAnglePitch]
    dst.rawData[oFaceAngleYaw] = src.rawData[oFaceAngleYaw]
    dst.rawData[oFaceAngleRoll] = src.rawData[oFaceAngleRoll]

    dst.rawData[oMoveAnglePitch] = src.rawData[oMoveAnglePitch]
    dst.rawData[oMoveAngleYaw] = src.rawData[oMoveAngleYaw]
    dst.rawData[oMoveAngleRoll] = src.rawData[oMoveAngleRoll]
}

export const obj_copy_pos = (dst, src) => {
    dst.rawData[oPosX] = src.rawData[oPosX]
    dst.rawData[oPosY] = src.rawData[oPosY]
    dst.rawData[oPosZ] = src.rawData[oPosZ]
}

export const obj_set_pos = (obj, x, y, z) => {
    obj.rawData[oPosX] = x
    obj.rawData[oPosY] = y
    obj.rawData[oPosZ] = z
}

export const obj_copy_scale = (dst, src) => {
    dst.gfx.scale[0] = src.gfx.scale[0]
    dst.gfx.scale[1] = src.gfx.scale[1]
    dst.gfx.scale[2] = src.gfx.scale[2]
}

export const obj_set_parent_relative_pos = (obj, relX, relY, relZ) => {
    obj.rawData[oParentRelativePosX] = relX
    obj.rawData[oParentRelativePosY] = relY
    obj.rawData[oParentRelativePosZ] = relZ

}

export const obj_set_angle = (obj, pitch, yaw, roll) => {
    obj.rawData[oFaceAnglePitch] = pitch
    obj.rawData[oFaceAngleYaw] = yaw
    obj.rawData[oFaceAngleRoll] = roll

    obj.rawData[oMoveAnglePitch] = pitch
    obj.rawData[oMoveAngleYaw] = yaw
    obj.rawData[oMoveAngleRoll] = roll
}

export const cur_obj_within_12k_bounds = () => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[oPosX] < -12000 || 12000 < o.rawData[oPosX]) return 0
    if (o.rawData[oPosY] < -12000 || 12000 < o.rawData[oPosY]) return 0
    if (o.rawData[oPosZ] < -12000 || 12000 < o.rawData[oPosZ]) return 0

    return 1
}

export const cur_obj_enable_rendering = () => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.flags |= GRAPH_RENDER_ACTIVE
}

export const cur_obj_disable_rendering = () => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.flags &= ~GRAPH_RENDER_ACTIVE
}

export const cur_obj_become_tangible = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oIntangibleTimer] = 0
}

export const cur_obj_become_intangible = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oIntangibleTimer] = -1
}

export const cur_obj_hide = () => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.flags |= GRAPH_RENDER_INVISIBLE
}

export const cur_obj_unhide = () => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
}

export const cur_obj_clear_interact_status_flag = (flag) => {
    const o = ObjectListProc.gCurrentObject
    if (o.rawData[oInteractStatus] & flag) {
        o.rawData[oInteractStatus] &= flag ^ ~(0)
        return 1
    }
    return 0
}

export const obj_mark_for_deletion = (obj) => {
    obj.activeFlags = ACTIVE_FLAGS_DEACTIVATED
}

export const obj_scale = (obj, scale) => {
    obj.gfx.scale[0] = scale
    obj.gfx.scale[1] = scale
    obj.gfx.scale[2] = scale
}

export const obj_scale_xyz = (obj, xScale, yScale, zScale) => {
    obj.gfx.scale[0] = xScale
    obj.gfx.scale[1] = yScale
    obj.gfx.scale[2] = zScale
}

export const cur_obj_scale = (scale) => {
    const o = ObjectListProc.gCurrentObject
    o.gfx.scale[0] = scale
    o.gfx.scale[1] = scale
    o.gfx.scale[2] = scale
}

export const obj_scale_random = (obj, rangeLength, minScale) => {
    const scale = random_float() * rangeLength + minScale
    obj_scale_xyz(obj, scale, scale, scale)
}

export const obj_translate_xyz_random = (obj, rangeLength) => {
    obj.rawData[oPosX] += random_float() * rangeLength - rangeLength * 0.5
    obj.rawData[oPosY] += random_float() * rangeLength - rangeLength * 0.5
    obj.rawData[oPosZ] += random_float() * rangeLength - rangeLength * 0.5
}

export const obj_set_gfx_pos_from_pos = (obj) => {
    obj.gfx.pos[0] = obj.rawData[oPosX]
    obj.gfx.pos[1] = obj.rawData[oPosY]
    obj.gfx.pos[2] = obj.rawData[oPosZ]
}

export const cur_obj_init_animation = (animIndex) => {
    const o = ObjectListProc.gCurrentObject
    const anims = o.rawData[oAnimations]
    geo_obj_init_animation(o.gfx, anims[animIndex]);
}

export const cur_obj_init_animation_with_sound = (animIndex) => {
    const o = ObjectListProc.gCurrentObject
    const anims = o.rawData[oAnimations]
    geo_obj_init_animation(o.gfx, anims[animIndex])
    o.rawData[oSoundStateID] = animIndex
}

export const cur_obj_init_animation_with_accel_and_sound = (animIndex, accel) => {
    const o = ObjectListProc.gCurrentObject
    const anims = o.rawData[oAnimations]
    const animAccel = parseInt(accel * 65536.0)
    geo_obj_init_animation_accel(o.gfx, anims[animIndex], animAccel)
}

export const obj_init_animation_with_sound = (obj, animations, animIndex) => {
    obj.rawData[oAnimations] = animations
    geo_obj_init_animation(obj.gfx, animations[animIndex])
    obj.rawData[oSoundStateID] = animIndex
}

export const cur_obj_compute_vel_xz = () => {
    const o = ObjectListProc.gCurrentObject
    o.rawData[oVelX] = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw])
    o.rawData[oVelZ] = o.rawData[oForwardVel] * coss(o.rawData[oMoveAngleYaw])
}

export const apply_drag_to_value = (ptr, dragStrength) => {

    if (ptr.value != 0) {
        //! Can overshoot if |*value| > 1/(dragStrength * 0.0001)
        const decel = (ptr.value) * (ptr.value) * (dragStrength * 0.0001)

        if (ptr.value > 0) {
            ptr.value -= decel
            if (ptr.value < 0.001) {
                ptr.value = 0
            }
        } else {
            ptr.value += decel
            if (ptr.value > -0.001) {
                ptr.value = 0
            }
        }
    }

}


export const cur_obj_apply_drag_xz = (dragStrength) => {
    const o = ObjectListProc.gCurrentObject

    const wrapper = { value: o.rawData[oVelX] }
    apply_drag_to_value(wrapper, dragStrength)
    o.rawData[oVelX] = wrapper.value

    wrapper.value = o.rawData[oVelZ]
    apply_drag_to_value(wrapper, dragStrength)
    o.rawData[oVelZ] = wrapper.value
}

export const cur_obj_move_using_vel_and_gravity = () => {
    const o = ObjectListProc.gCurrentObject
    if (cur_obj_within_12k_bounds()) {
        o.rawData[oPosX] += o.rawData[oVelX]
        o.rawData[oPosZ] += o.rawData[oVelZ]
        o.rawData[oVelY] += o.rawData[oGravity]
        o.rawData[oPosY] += o.rawData[oVelY]
    }
}

export const cur_obj_move_using_fvel_and_gravity = () => {
    cur_obj_compute_vel_xz()
    cur_obj_move_using_vel_and_gravity()
}

export const cur_obj_push_mario_away = (radius) => {
    const o = ObjectListProc.gCurrentObject
    const marioRelX = ObjectListProc.gMarioObject.rawData[oPosX] - o.rawData[oPosX]
    const marioRelZ = ObjectListProc.gMarioObject.rawData[oPosZ] - o.rawData[oPosZ]
    const marioDist = Math.sqrt(Math.pow(marioRelX, 2) + Math.pow(marioRelZ, 2))

    if (marioDist < radius) {
        LevelUpdate.gMarioState.pos[0] += (radius - marioDist) / radius * marioRelX
        LevelUpdate.gMarioState.pos[2] += (radius - marioDist) / radius * marioRelZ
    }
}

export const cur_obj_push_mario_away_from_cylinder = (radius, extentY) => {
    const o = ObjectListProc.gCurrentObject
    let marioRelY = ObjectListProc.gMarioObject.rawData[oPosY] - o.rawData[oPosY]

    if (marioRelY < 0.0) {
        marioRelY = -marioRelY
    }

    if (marioRelY < extentY) {
        cur_obj_push_mario_away(radius)
    }
}

export const dist_between_objects = (obj1, obj2) => {
    const dx = obj1.rawData[oPosX] - obj2.rawData[oPosX]
    const dy = obj1.rawData[oPosY] - obj2.rawData[oPosY]
    const dz = obj1.rawData[oPosZ] - obj2.rawData[oPosZ]
    return Math.sqrt(dx * dx + dy * dy + dz * dz)
}


export const lateral_dist_between_objects = (obj1, obj2) => {
    const dx = obj1.rawData[oPosX] - obj2.rawData[oPosX]
    const dz = obj1.rawData[oPosZ] - obj2.rawData[oPosZ]
    return Math.sqrt(dx * dx + dz * dz)
}

export const obj_angle_to_object = (obj1, obj2) => {
    const x1 = obj1.rawData[oPosX], z1 = obj1.rawData[oPosZ]
    const x2 = obj2.rawData[oPosX], z2 = obj2.rawData[oPosZ]

    return atan2s(z2 - z1, x2 - x1)
}


export const obj_set_billboard = (obj) => {
    obj.gfx.flags |= GRAPH_RENDER_BILLBOARD
}


export const obj_spawn_loot_coins = (obj, numCoins, sp30, coinsBehavior, posJitter, model) => {

    const floorWrapper = {}
    let spawnHeight = gLinker.SurfaceCollision.find_floor(obj.rawData[oPosX], obj.rawData[oPosY], obj.rawData[oPosZ], floorWrapper)

    if (obj.rawData[oPosY] - spawnHeight > 100) {
        spawnHeight = obj.rawData[oPosY]
    }

    for (let i = 0; i < numCoins; i++) {
        if (obj.rawData[oNumLootCoins] <= 0) break

        obj.rawData[oNumLootCoins]--

        const coin = spawn_object(obj, model, coinsBehavior)
        obj_translate_xz_random(coin, posJitter)
        coin.rawData[oPosY] = spawnHeight
        coin.rawData[oCoinUnk110] = sp30
    }
}

export const obj_spawn_loot_blue_coins = (obj, numCoins, sp28, posJitter) => {
    obj_spawn_loot_coins(obj, numCoins, sp28, gLinker.behaviors.bhvBlueCoinJumping, posJitter, MODEL_BLUE_COIN)
}

export const obj_spawn_loot_yellow_coins = (obj, numCoins, sp28) => {
    obj_spawn_loot_coins(obj, numCoins, sp28, gLinker.behaviors.bhvSingleCoinGetsSpawned, 0, MODEL_YELLOW_COIN)
}

export const spawn_mist_particles = () => {
    spawn_mist_particles_variable(0, 0, 46.0)
}

export const cur_obj_wait_then_blink = (timeUntilBlinking, numBlinks) => {
    const o = ObjectListProc.gCurrentObject

    let done = 0
    let timeBlinking = 0

    if (o.rawData[oTimer] >= timeUntilBlinking) {
        timeBlinking = o.rawData[oTimer] - timeUntilBlinking
        if (timeBlinking % 2 != 0) {
            o.gfx.flags |= GRAPH_RENDER_INVISIBLE

            if (timeBlinking / 2 > numBlinks) {
                done = 1
            }
        } else {
            o.gfx.flags &= ~ GRAPH_RENDER_INVISIBLE
        }
    }

    return done
}

export const enable_time_stop = () => {
    ObjectListProc.gTimeStopState |= TIME_STOP_ENABLED
}

export const disable_time_stop = () => {
    ObjectListProc.gTimeStopState &= ~TIME_STOP_ENABLED
}

export const obj_set_behavior = (obj, behavior) => {
    obj.behavior = behavior
}

export const cur_obj_has_behavior = (behavior) => {
    const o = ObjectListProc.gCurrentObject
    if (o.behavior == behavior) {
        return true
    } else {
        return false
    }
}

export const obj_has_behavior = (obj, behavior) => {
    if (obj.behavior == behavior) {
        return true
    } else {
        return false
    }
}

import { LEVEL_BBH, LEVEL_CASTLE, LEVEL_HMC } from "../levels/level_defines_constants"
const sLevelsWithRooms = [LEVEL_BBH, LEVEL_CASTLE, LEVEL_HMC]

export const bhv_init_room = () => {
    const o = ObjectListProc.gCurrentObject
    let floor
    let /*f32*/ floorHeight

    if (sLevelsWithRooms.includes(gLinker.Area.gCurrLevelNum)) {
        const floorWrapper = {}
        floorHeight = gLinker.SurfaceCollision.find_floor(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], floorWrapper)
        floor = floorWrapper.floor

        if (floor != null) {
            if (floor.room != 0) {
                o.rawData[oRoom] = floor.room
            } else {
                  // Floor probably belongs to a platform object. Try looking
                  // underneath it
                const floorWrapper = {}
                gLinker.SurfaceCollision.find_floor(o.rawData[oPosX], floorHeight - 100.0, o.rawData[oPosZ], floorWrapper)
                floor = floorWrapper.floor
                if (floor != null) {
                      //! Technically possible that the room could still be 0 here
                    o.rawData[oRoom] = floor.room
                }
            }
        }
    } else {
        o.rawData[oRoom] = -1
    }
}


gLinker.bhv_init_room = bhv_init_room

gLinker.cur_obj_rotate_face_angle_using_vel = cur_obj_rotate_face_angle_using_vel
gLinker.cur_obj_move_using_fvel_and_gravity = cur_obj_move_using_fvel_and_gravity
