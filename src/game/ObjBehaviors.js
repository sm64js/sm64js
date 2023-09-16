import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { oPosX, oPosY, oPosZ, oHomeX, oHomeY, oHomeZ, oForwardVel, oMoveAngleYaw, oVelY,
    oFaceAngleYaw, oFriction, oGravity, oGraphYOffset, oAction, OBJ_ACT_LAVA_DEATH, OBJ_ACT_DEATH_PLANE_DEATH,
    oAngleToMario, oTimer, oAnimState,
    oBehParams, oRespawnerModelToRespawn, oRespawnerMinSpawnDist, oRespawnerBehaviorToRespawn, ACTIVE_FLAG_DEACTIVATED, oVelX, oVelZ
     } from "../include/object_constants"
import { sins, coss, int32, uint16, int16, random_uint16, random_float } from "../utils"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { atan2s, mtxf_align_terrain_normal } from "../engine/math_util"
import { GRAPH_RENDER_BILLBOARD, GRAPH_RENDER_INVISIBLE } from "../engine/graph_node"
import { approach_symmetric, spawn_object, spawn_object_abs_with_rot } from "./ObjectHelpers"
import { SURFACE_BURNING, SURFACE_DEATH_PLANE } from "../include/surface_terrains"
import { MODEL_YELLOW_COIN, MODEL_NONE, MODEL_SMOKE } from "../include/model_ids"
import { bhvBobombBullyDeathSmoke, bhvMovingYellowCoin, bhvRespawner } from "./BehaviorData"
import { cur_obj_play_sound_2 } from "./SpawnSound"
import { SOUND_OBJ_BULLY_EXPLODE_2 } from "../include/sounds"

export const OBJ_COL_FLAG_GROUNDED = (1 << 0)
export const OBJ_COL_FLAG_HIT_WALL = (1 << 1)
export const OBJ_COL_FLAG_UNDERWATER = (1 << 2)
export const OBJ_COL_FLAG_NO_Y_VEL = (1 << 3)
export const OBJ_COL_FLAGS_LANDED = (OBJ_COL_FLAG_GROUNDED | OBJ_COL_FLAG_NO_Y_VEL)

export let sObjFloor
export let sOrientObjWithFloor = 1

export const obj_move_xyz_using_fvel_and_yaw = (obj) => {
    const o = ObjectListProc.gCurrentObject
    
    o.rawData[oVelX] = obj.rawData[oForwardVel] * sins(obj.rawData[oMoveAngleYaw])
    o.rawData[oVelZ] = obj.rawData[oForwardVel] * coss(obj.rawData[oMoveAngleYaw])

    obj.rawData[oPosX] += o.rawData[oVelX]
    obj.rawData[oPosY] += obj.rawData[oVelY]
    obj.rawData[oPosZ] += o.rawData[oVelZ]
}

export const is_point_within_radius_of_mario = (x, y, z, dist) => {
    const mGfxX = ObjectListProc.gMarioObject.gfx.pos[0]
    const mGfxY = ObjectListProc.gMarioObject.gfx.pos[1]
    const mGfxZ = ObjectListProc.gMarioObject.gfx.pos[2]

    if ((x - mGfxX) * (x - mGfxX) + (y - mGfxY) * (y - mGfxY) + (z - mGfxZ) * (z - mGfxZ) < dist * dist) {
        return true
    }

    return false

}

/**
 * Checks whether a point is within distance of a given point. Test is exclusive.
 */
export const is_point_close_to_object = (obj, x, y, z, dist) => {
   let /*f32*/objX = obj.rawData[oPosX]
   let /*f32*/objY = obj.rawData[oPosY]
   let /*f32*/objZ = obj.rawData[oPosZ]

    if ((x - objX) * (x - objX) + (y - objY) * (y - objY) + (z - objZ) * (z - objZ)
        < (dist * dist)) {
        return true
    }

    return false
}


export const create_respawner = (model, behToSpawn, minSpawnDist) => {
    const o = ObjectListProc.gCurrentObject
    const respawner = spawn_object_abs_with_rot(o, MODEL_NONE, bhvRespawner, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 0, 0, 0)

    respawner.rawData[oBehParams] = o.rawData[oBehParams]
    respawner.rawData[oRespawnerModelToRespawn] = model
    respawner.rawData[oRespawnerMinSpawnDist] = minSpawnDist
    respawner.rawData[oRespawnerBehaviorToRespawn] = behToSpawn
}


// JS NOTE: The Parameter is a rawData "o" offset, not a pointer nor a wrapper object.
// Trying this out, maybe it can replace some use cases of wrappers.
export const curr_obj_random_blink = (blinkTimer) => {
    const o = ObjectListProc.gCurrentObject

    if (o.rawData[blinkTimer] == 0) {
        if (parseInt(Math.random() * 100.0) == 0) {
            o.rawData[oAnimState] = 1
            o.rawData[blinkTimer] = 1
        }
    } else {
        o.rawData[blinkTimer]++
        if (o.rawData[blinkTimer] >= 6)
            o.rawData[oAnimState] = 0
        if (o.rawData[blinkTimer] >= 11)
            o.rawData[oAnimState] = 1
        if (o.rawData[blinkTimer] >= 16) {
            o.rawData[oAnimState] = 0
            o.rawData[blinkTimer] = 0
        }
    }
}


/**
 * Sets an object as visible if within a certain distance of Mario's graphical position.
 */
export const set_object_visibility = (obj, dist) => {
    if (is_point_within_radius_of_mario(obj.rawData[oPosX], obj.rawData[oPosY], obj.rawData[oPosZ], dist) == 1) {
        obj.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
    } else {
        obj.gfx.flags |= GRAPH_RENDER_INVISIBLE
    }
}

/**
 * Turns an object away from floors/walls that it runs into.
 */
export const turn_obj_away_from_surface = (velX, velZ, nX, nZ, objYawWrapper) => {
    objYawWrapper.x = (nZ * nZ - nX * nX) * velX / (nX * nX + nZ * nZ)
        - 2 * velZ * (nX * nZ) / (nX * nX + nZ * nZ);

    objYawWrapper.z = (nX * nX - nZ * nZ) * velZ / (nX * nX + nZ * nZ)
        - 2 * velX * (nX * nZ) / (nX * nX + nZ * nZ)
}

export const obj_find_wall = (objNewX, objY, objNewZ, objVelX, objVelZ) => {

    const o = ObjectListProc.gCurrentObject

    const hitbox = {
        x: objNewX,
        y: objY,
        z: objNewZ,
        radius: o.hitboxRadius,
        offsetY: o.hitboxHeight / 2,
        walls: []
    }

    if (SurfaceCollision.find_wall_collisions(hitbox) != 0) {
        o.rawData[oPosX] = hitbox.x
        o.rawData[oPosY] = hitbox.y
        o.rawData[oPosZ] = hitbox.z

        const wall_nX = hitbox.walls[0].normal.x
        const wall_nZ = hitbox.walls[0].normal.z

        const objVelXCopy = objVelX
        const objVelZCopy = objVelZ

        // Turns away from the first wall only.
        const objYawWrapper = {}
        turn_obj_away_from_surface(objVelXCopy, objVelZCopy, wall_nX, wall_nZ, objYawWrapper)

        o.rawData[oMoveAngleYaw] = atan2s(objYawWrapper.z, objYawWrapper.x)
        return false
    }

    return true
}

export const obj_update_pos_vel_xz = () => {
    const o = ObjectListProc.gCurrentObject

    const xVel = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw])
    const zVel = o.rawData[oForwardVel] * coss(o.rawData[oMoveAngleYaw])

    o.rawData[oPosX] += xVel
    o.rawData[oPosZ] += zVel
}

/**
 * Turns an object away from steep floors, similarly to walls.
 */
export const turn_obj_away_from_steep_floor = (objFloor, floorY, objVelX, objVelZ) => {
    const o = ObjectListProc.gCurrentObject

    if (objFloor == null) {
        //! (OOB Object Crash) TRUNC overflow exception after 36 minutes
        o.rawData[oMoveAngleYaw] += int32(o.rawData[oMoveAngleYaw] + 32767.999200000002)
        return false
    }

    const floor_nX = objFloor.normal.x
    const floor_nY = objFloor.normal.y
    const floor_nZ = objFloor.normal.z

    // If the floor is steep and we are below it (i.e. walking into it), turn away from the floor.
    if (floor_nY < 0.5 && floorY > o.rawData[oPosY]) {
        let objVelXCopy = objVelX
        let objVelZCopy = objVelZ
        const objYawWrapper = {}
        turn_obj_away_from_surface(objVelXCopy, objVelZCopy, floor_nX, floor_nZ, objYawWrapper)
        o.rawData[oMoveAngleYaw] = atan2s(objYawWrapper.z, objYawWrapper.x)
        return false
    }

    return true
}

export const obj_orient_graph = (obj, normalX, normalY, normalZ) => {

    const objVisualPosition = new Array(3), surfaceNormals = new Array(3)

    // Passes on orienting certain objects that shouldn't be oriented, like boulders.
    if (sOrientObjWithFloor == 0) return

    // Passes on orienting billboard objects, i.e. coins, trees, etc.
    if ((obj.gfx.flags & GRAPH_RENDER_BILLBOARD) != 0) return

    const throwMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

    objVisualPosition[0] = obj.rawData[oPosX]
    objVisualPosition[1] = obj.rawData[oPosY] + obj.rawData[oGraphYOffset]
    objVisualPosition[2] = obj.rawData[oPosZ]

    surfaceNormals[0] = normalX
    surfaceNormals[1] = normalY
    surfaceNormals[2] = normalZ

    mtxf_align_terrain_normal(throwMatrix, surfaceNormals, objVisualPosition, obj.rawData[oFaceAngleYaw])
    obj.gfx.throwMatrix = throwMatrix
}

export const calc_obj_friction = (objFrictionWrapper, floor_nY) => {

    const o = ObjectListProc.gCurrentObject

    if (floor_nY < 0.2 && o.rawData[oFriction] < 0.9999) {
        objFrictionWrapper.value = 0
    } else {
        objFrictionWrapper.value = o.rawData[oFriction]
    }
}

export const calc_new_obj_vel_and_pos_y = (objFloor, objFloorY, objVelX, objVelZ) => {

    const o = ObjectListProc.gCurrentObject

    const floor_nX = objFloor.normal.x
    const floor_nY = objFloor.normal.y
    const floor_nZ = objFloor.normal.z

    // Caps vertical speed with a "terminal velocity".
    o.rawData[oVelY] -= o.rawData[oGravity]
    if (o.rawData[oVelY] > 75.0) {
        o.rawData[oVelY] = 75.0
    }
    if (o.rawData[oVelY] < -75.0) {
        o.rawData[oVelY] = -75.0
    }

    o.rawData[oPosY] += o.rawData[oVelY]

    //Snap the object up to the floor.
    if (o.rawData[oPosY] < objFloorY) {
        o.rawData[oPosY] = objFloorY

        // Bounces an object if the ground is hit fast enough.
        if (o.rawData[oVelY] < -17.5) {
            o.rawData[oVelY] = -(o.rawData[oVelY] / 2)
        } else {
            o.rawData[oVelY] = 0
        }
    }

    //! (Obj Position Crash) If you got an object with height past 2^31, the game would crash.
    if (o.rawData[oPosY] >= objFloorY && o.rawData[oPosY] < objFloorY + 37) {
        obj_orient_graph(o, floor_nX, floor_nY, floor_nZ)

        // Adds horizontal component of gravity for horizontal speed.
        objVelX += floor_nX * (floor_nX * floor_nX + floor_nZ * floor_nZ)
            / (floor_nX * floor_nX + floor_nY * floor_nY + floor_nZ * floor_nZ) * o.rawData[oGravity]
            * 2
        objVelZ += floor_nZ * (floor_nX * floor_nX + floor_nZ * floor_nZ)
            / (floor_nX * floor_nX + floor_nY * floor_nY + floor_nZ * floor_nZ) * o.rawData[oGravity]
            * 2

        if (objVelX < 0.000001 && objVelX > -0.000001) {
            objVelX = 0
        }
        if (objVelZ < 0.000001 && objVelZ > -0.000001) {
            objVelZ = 0
        }

        if (objVelX != 0 || objVelZ != 0) {
            o.rawData[oMoveAngleYaw] = atan2s(objVelZ, objVelX)
        }

        const objFrictionWrapper = {}
        calc_obj_friction(objFrictionWrapper, floor_nY)
        o.rawData[oForwardVel] = Math.sqrt(objVelX * objVelX + objVelZ * objVelZ) * objFrictionWrapper.value
    }
}

export const object_step = () => {
    const o = ObjectListProc.gCurrentObject

    const objX = o.rawData[oPosX]
    const objY = o.rawData[oPosY]
    const objZ = o.rawData[oPosZ]

    const waterY = -10000.0

    const objVelX = o.rawData[oForwardVel] * sins(o.rawData[oMoveAngleYaw])
    const objVelZ = o.rawData[oForwardVel] * coss(o.rawData[oMoveAngleYaw])

    let collisionFlags = 0

    // Find any wall collisions, receive the push, and set the flag.
    if (obj_find_wall(objX + objVelX, objY, objZ + objVelZ, objVelX, objVelZ) == 0) {
        collisionFlags += OBJ_COL_FLAG_HIT_WALL
    }

    const sObjFloorWrapper = {}
    const floorY = gLinker.SurfaceCollision.find_floor(objX + objVelX, objY, objZ + objVelZ, sObjFloorWrapper)
    sObjFloor = sObjFloorWrapper.floor

    if (turn_obj_away_from_steep_floor(sObjFloor, floorY, objVelX, objVelZ) == 1) {
        const waterY = gLinker.SurfaceCollision.find_water_level(objX + objVelX, objZ + objVelZ)
        if (waterY > objY) {
            throw "implement object_step underwater"
        } else {
            calc_new_obj_vel_and_pos_y(sObjFloor, floorY, objVelX, objVelZ)
        }
    } else {
        // Treat any awkward floors similar to a wall.
        collisionFlags += ((collisionFlags & OBJ_COL_FLAG_HIT_WALL) ^ OBJ_COL_FLAG_HIT_WALL)
    }

    obj_update_pos_vel_xz()
    if (Math.floor(o.rawData[oPosY]) == Math.floor(floorY)) {
        collisionFlags += OBJ_COL_FLAG_GROUNDED
    }

    if (Math.floor(o.rawData[oVelY]) == 0) {
        collisionFlags += OBJ_COL_FLAG_NO_Y_VEL
    }

    // Generate a splash if in water.
    /// TODO obj_splash((s32) waterY, (s32) o->oPosY)
    return collisionFlags
}

export const obj_return_home_if_safe = (obj, homeX, y, homeZ, dist) => {
    const homeDistX = homeX - obj.rawData[oPosX]
    const homeDistZ = homeZ - obj.rawData[oPosZ]
    const angleTowardsHome = int16(atan2s(homeDistZ, homeDistX))

    if (is_point_within_radius_of_mario(homeX, y, homeZ, dist) == 1) {
        return true
    } else {
        obj.rawData[oMoveAngleYaw] = approach_symmetric(obj.rawData[oMoveAngleYaw], angleTowardsHome, 320)
    }

    return false
}

export const obj_check_if_facing_toward_angle = (base, goal, range) => {
    const dAngle = uint16(goal) - uint16(base)

    if ((sins(-range) < sins(dAngle)) && (sins(dAngle) < sins(range)) && (coss(dAngle) > 0)) {
        return true
    }

    return false
}

export const obj_check_floor_death = (collisionFlags, floor) => {
    const o = ObjectListProc.gCurrentObject
    
    if (floor == null) return

    if ((collisionFlags & OBJ_COL_FLAG_GROUNDED) == 1) {
        switch (floor.type) {
            case SURFACE_BURNING:
                o.rawData[oAction] = OBJ_ACT_LAVA_DEATH
                break
            //! @BUG Doesn't check for the vertical wind death floor.
            case SURFACE_DEATH_PLANE:
                o.rawData[oAction] = OBJ_ACT_DEATH_PLANE_DEATH
                break
            default:
                break
        }
    }
}

export const obj_lava_death = () => {
    const o = ObjectListProc.gCurrentObject

    let deathSmoke

    if (o.rawData[oTimer] > 30) {
        o.activeFlags = ACTIVE_FLAG_DEACTIVATED
        return true
    } else {
        // Sinking effect
        o.rawData[oPosY] -= 10.0
    }

    if ((o.rawData[oTimer] % 8) == 0) {
        cur_obj_play_sound_2(SOUND_OBJ_BULLY_EXPLODE_2)
        deathSmoke = spawn_object(o, MODEL_SMOKE, bhvBobombBullyDeathSmoke)
        deathSmoke.rawData[oPosX] += random_float() * 20.0
        deathSmoke.rawData[oPosY] += random_float() * 20.0
        deathSmoke.rawData[oPosZ] += random_float() * 20.0
        deathSmoke.rawData[oForwardVel] = random_float() * 10.0
    }

    return false
}

export const obj_spawn_yellow_coins = (obj, nCoins) => {
    for (let count = 0; count < nCoins; count++) {
        const coin = spawn_object(obj, MODEL_YELLOW_COIN, bhvMovingYellowCoin)
        coin.rawData[oForwardVel] = Math.random() * 20
        coin.rawData[oVelY] = Math.random() * 40 + 20
        coin.rawData[oMoveAngleYaw] = random_uint16()
    }
}

export const obj_flicker_and_disappear = (obj, lifeSpan) => {

    if (obj.rawData[oTimer] < lifeSpan) return false

    if (obj.rawData[oTimer] < lifeSpan + 40) {

        if (obj.rawData[oTimer] % 2 != 0) {
            obj.gfx.flags |= GRAPH_RENDER_INVISIBLE
        } else {
            obj.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
        }

    } else {
        obj.activeFlags = 0
        return true
    }

    return false
}
