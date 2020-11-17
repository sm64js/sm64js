import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oPosX, oPosZ, oFaceAngleYaw } from "../../include/object_constants"

const flagObjects = { }

export const bhv_castle_flag_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.header.gfx.unk38.animFrame = Math.floor(Math.random() * 28.0)

    flagObject = o /// TODO
}

export const updateFlagData = (pos, angle) => {
    if (flagObject == undefined) return

    let minHeight = ObjectListProc.SurfaceCollision.find_floor(pos[0], flagObject.rawData[oPosY], pos[2], {})

    if (isNaN(minHeight)) minHeight = -10000

    flagObject.rawData[oPosX] = pos[0]
    flagObject.rawData[oPosY] = Math.max(minHeight, pos[1])
    flagObject.rawData[oPosZ] = pos[2]
    flagObject.rawData[oFaceAngleYaw] = angle + 0x6000

    pos[1] = flagObject.rawData[oPosY]
}
