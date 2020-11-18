import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oPosX, oPosZ, oFaceAngleYaw } from "../../include/object_constants"

const flagObjects = []

export const bhv_castle_flag_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.header.gfx.unk38.animFrame = Math.floor(Math.random() * 28.0)

    flagObjects.push(o)
}

export const updateFlagData = (pos, angle) => {
    if (flagObjects[0] == undefined) return

    let minHeight = ObjectListProc.SurfaceCollision.find_floor(pos[0], flagObjects[0].rawData[oPosY], pos[2], {})

    if (isNaN(minHeight)) minHeight = -10000

    flagObjects[0].rawData[oPosX] = pos[0]
    flagObjects[0].rawData[oPosY] = Math.max(minHeight, pos[1])
    flagObjects[0].rawData[oPosZ] = pos[2]
    flagObjects[0].rawData[oFaceAngleYaw] = angle + 0x6000

    pos[1] = flagObjects[0].rawData[oPosY]
}
