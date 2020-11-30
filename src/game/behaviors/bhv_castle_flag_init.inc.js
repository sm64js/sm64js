import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { oPosY, oPosX, oPosZ, oFaceAngleYaw } from "../../include/object_constants"

const flagObjects = []

export const bhv_castle_flag_init = () => {
    const o = ObjectListProc.gCurrentObject
    o.captureableFlagIndex = flagObjects.length
    o.header.gfx.unk38.animFrame = Math.floor(Math.random() * 28.0)

    flagObjects.push(o)
}

export const setInitFlagHeight = (initHeight, i) => {

    if (flagObjects[i] == undefined) return

    flagObjects[i].prevHeight = initHeight
}

export const updateFlagData = (pos, angle, i) => {
    if (flagObjects[i] == undefined) return

    let minHeight = ObjectListProc.SurfaceCollision.find_floor(pos[0], flagObjects[i].prevHeight, pos[2], {})

    if (isNaN(minHeight)) minHeight = -10000

    flagObjects[i].rawData[oPosX] = pos[0]
    flagObjects[i].rawData[oPosY] = Math.max(minHeight, pos[1])
    flagObjects[i].rawData[oPosZ] = pos[2]
    flagObjects[i].rawData[oFaceAngleYaw] = angle + 0x6000

    pos[1] = flagObjects[i].rawData[oPosY]
    flagObjects[i].prevHeight = flagObjects[i].rawData[oPosY]
}
