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

export const spawn_object = (parent, model, behavior) => {
    const obj = spawn_object_at_origin(parent, model, behavior)
    obj_copy_pos_and_angle(obj, parent)
    return obj
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
    const marioRelX = ObjectListProc.gMarioObject[0].rawData[oPosX] - o.rawData[oPosX]
    const marioRelZ = ObjectListProc.gMarioObject[0].rawData[oPosZ] - o.rawData[oPosZ]
    const marioDist = Math.sqrt(Math.pow(marioRelX, 2) + Math.pow(marioRelZ, 2))

    if (marioDist < radius) {
        LevelUpdate.gMarioState[0].pos[0] += (radius - marioDist) / radius * marioRelX
        LevelUpdate.gMarioState[0].pos[2] += (radius - marioDist) / radius * marioRelZ
    }
}

