import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import { AreaInstance as Area } from "./Area"
import { geo_obj_init } from "../engine/graph_node"
import { oPosX, oPosY, oPosZ, oFaceAngleRoll, oFaceAnglePitch, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw } from "../include/object_constants"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"

const spawn_object_at_origin = (parent, model, behavior) => {

    const obj = Spawn.create_object(behavior)

    obj.parentObj = parent
    obj.header.gfx.unk18 = parent.header.gfx.unk18
    obj.header.gfx.unk19 = parent.header.gfx.unk18

    geo_obj_init(obj.header.gfx, Area.gLoadedGraphNodes[model], [0,0,0], [0,0,0])

    return obj

}

export const spawn_object_abs_with_rot = (parent, model, behavior, x, y, z, rx, ry, rz) => {
    const newObj = spawn_object_at_origin(parent, model, behavior)
    obj_set_pos(newObj, x, y, z)
    obj_set_angle(newObj, rz, ry, rz)
    return newObj
}

export const obj_set_pos = (obj, x, y, z) => {

    obj.rawData[oPosX] = x
    obj.rawData[oPosY] = y
    obj.rawData[oPosZ] = z
}

export const obj_set_angle = (obj, pitch, yaw, roll) => {

    obj.rawData[oFaceAnglePitch] = pitch
    obj.rawData[oFaceAngleYaw] = yaw
    obj.rawData[oFaceAngleRoll] = roll

    obj.rawData[oMoveAnglePitch] = pitch
    obj.rawData[oMoveAngleYaw] = yaw
    obj.rawData[oMoveAngleRoll] = roll
}

export const cur_obj_push_mario_away = (radius) => {
    const o = ObjectListProc.gCurrentObject
    const marioRelX = ObjectListProc.gMarioObject.rawData[oPosX] - o.rawData[oPosX]
    const marioRelZ = ObjectListProc.gMarioObject.rawData[oPosZ] - o.rawData[oPosZ]
    const marioDist = Math.sqrt(Math.pow(marioRelX, 2) + Math.pow(marioRelZ, 2))

    if (marioDist < radius) {
        const newPos = [
            LevelUpdate.gMarioState.pos[0] + (radius - marioDist) / radius * marioRelX,
            LevelUpdate.gMarioState.pos[1],
            LevelUpdate.gMarioState.pos[2] + (radius - marioDist) / radius * marioRelZ
        ]
        const floorWrapper = {}
        const floorHeight = ObjectListProc.SurfaceCollision.find_floor(newPos[0], newPos[1], newPos[2], floorWrapper)

        if (floorWrapper.floor == null || floorHeight == -11000) return

        LevelUpdate.gMarioState.pos[0] = newPos[0]
        LevelUpdate.gMarioState.pos[1] = floorHeight
        LevelUpdate.gMarioState.pos[2] = newPos[2]
        LevelUpdate.gMarioState.floor = floorWrapper.floor
        LevelUpdate.gMarioState.floorHeight = floorHeight
    }
}

