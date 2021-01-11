import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"

export const is_point_within_radius_of_mario = (x, y, z, dist) => {
    const mGfxX = ObjectListProc.gMarioObject.header.gfx.pos[0]
    const mGfxY = ObjectListProc.gMarioObject.header.gfx.pos[1]
    const mGfxZ = ObjectListProc.gMarioObject.header.gfx.pos[2]

    if ((x - mGfxX) * (x - mGfxX) + (y - mGfxY) * (y - mGfxY) + (z - mGfxZ) * (z - mGfxZ) < dist * dist) {
        return 1
    }

    return 0

}