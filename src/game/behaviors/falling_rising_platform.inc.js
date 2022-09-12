import { oBehParams2ndByte, oBitfsPlatformTimer, oPosY, oTimer } from "../../include/object_constants"
import { sins } from "../../utils"
import { obj_copy_pos_and_angle } from "../ObjectHelpers"

export const bhv_squishable_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    o.gfx.scale[1] = (sins(o.rawData[oBitfsPlatformTimer]) + 1.0) * 0.3 + 0.4
    o.rawData[oBitfsPlatformTimer] + 0x80
}

export const bhv_bitfs_sinking_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    //! f32 double conversion error accumulates on Wii VC causing the platform to rise up
    // aka funny pannenkoek moment
    o.rawData[oPosY] -= sins(o.rawData[oBitfsPlatformTimer]) * 0.58
    o.rawData[oBitfsPlatformTimer] += 0x100
}

// TODO: Named incorrectly. fix
export const bhv_ddd_moving_pole_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject
    obj_copy_pos_and_angle(o, o.parentObj);
}

export const bhv_bitfs_sinking_cage_platform_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject

    if (o.rawData[oBehParams2ndByte] != 0) {
        if (o.rawData[oTimer] == 0) {
            o.rawData[oPosY] -= 300.0
        }
        o.rawData[oPosY] += sins(o.rawData[oBitfsPlatformTimer]) * 7.0
    } else {
        o.rawData[oPosY] += sins(o.rawData[oBitfsPlatformTimer]) * 3.0
    }

    o.rawData[oBitfsPlatformTimer] += 0x100
}

gLinker.bhv_squishable_platform_loop = bhv_squishable_platform_loop
gLinker.bhv_bitfs_sinking_platform_loop = bhv_bitfs_sinking_platform_loop
gLinker.bhv_ddd_moving_pole_loop = bhv_ddd_moving_pole_loop
gLinker.bhv_bitfs_sinking_cage_platform_loop = bhv_bitfs_sinking_cage_platform_loop