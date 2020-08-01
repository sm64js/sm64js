import { SpawnObjectInstance as Spawn } from "./SpawnObject"

const spawn_object_at_origin = (parent, model, behavior) => {

    const obj = Spawn.create_object(behavior)

    obj.parentObj = parent
    obj.header.gfx.unk18 = parent.header.gfx.unk18
    obj.header.gfx.unk19 = parent.header.gfx.unk18

    geo_obj_init()

    return obj

}

export const spawn_object_abs_with_rot = (parent, model, behavior, x, y, z, rx, ry, rz) => {
    const newObj = spawn_object_at_origin(parent, model, behavior)
    obj_set_pos(newObj, x, y, z)
    obj_set_angle(newObj, rz, ry, rz)
    return newObj
}

export const obj_set_pos = (obj, x, y, z) => {
    obj.oPosX = x
    obj.oPosY = y
    obj.oPosZ = z
}

export const obj_set_angle = (obj, pitch, yaw, roll) => {
    obj.oFaceAnglePitch = pitch
    obj.oFaceAngleYaw = yaw
    obj.oFaceAngleRoll = roll

    obj.oMoveAnglePitch = pitch
    obj.oMoveAngleYaw = yaw
    obj.oMoveAngleRoll = roll
}

