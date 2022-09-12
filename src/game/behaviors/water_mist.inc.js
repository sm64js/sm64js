import * as _Linker from "../../game/Linker"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { SurfaceCollisionInstance as SurfaceCollision  } from "../../engine/SurfaceCollision"

import { oPosX, oPosY, oPosZ, oHomeX, oHomeZ, oOpacity } from "../../include/object_constants"
import { random_f32_around_zero                        } from "../ObjectHelpers"
import { random_float, s32                             } from "../../utils"


export const bhv_water_mist_2_loop = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oPosY] = SurfaceCollision.find_water_level(o.rawData[oHomeX], o.rawData[oHomeZ]) + 20
    o.rawData[oPosX] = o.rawData[oHomeX] + random_f32_around_zero(150)
    o.rawData[oPosZ] = o.rawData[oHomeZ] + random_f32_around_zero(150)
    o.rawData[oOpacity] = s32(random_float() * 50 + 200)
}

gLinker.bhv_water_mist_2_loop = bhv_water_mist_2_loop
