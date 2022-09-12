import * as _Linker from "../../game/Linker"
import { spawn_object_abs_with_rot, spawn_object, cur_obj_scale } from "../ObjectHelpers"
import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { MODEL_NONE } from "../../include/model_ids"
import { oHomeX, oHomeY, oHomeZ, oBehParams, oRespawnerModelToRespawn, oRespawnerMinSpawnDist, oRespawnerBehaviorToRespawn, oPosX, oPosY, oPosZ, ACTIVE_FLAGS_DEACTIVATED } from "../../include/object_constants"
import { is_point_within_radius_of_mario } from "../ObjBehaviors"
import { bhvRespawner } from "../BehaviorData"

export const bhv_bobomb_bully_death_smoke_init = () => {
    const o = ObjectListProc.gCurrentObject

    o.rawData[oPosY] -= 300
    cur_obj_scale(10.0)
}

export const bhv_respawner_loop = () => {
    const o = ObjectListProc.gCurrentObject

    if (!is_point_within_radius_of_mario(o.rawData[oPosX], o.rawData[oPosY], o.rawData[oPosZ], o.rawData[oRespawnerMinSpawnDist])) {
        const spawnedObject = spawn_object(o, o.rawData[oRespawnerModelToRespawn], o.rawData[oRespawnerBehaviorToRespawn])
        spawnedObject.rawData[oBehParams] = o.rawData[oBehParams]
        o.activeFlags = ACTIVE_FLAGS_DEACTIVATED
    }
}

export const create_respawner = (model, behToSpawn, minSpawnDist) => {
    const o = ObjectListProc.gCurrentObject
    const respawner = spawn_object_abs_with_rot(o, MODEL_NONE, bhvRespawner, o.rawData[oHomeX], o.rawData[oHomeY], o.rawData[oHomeZ], 0, 0, 0)

    respawner.rawData[oBehParams] = o.rawData[oBehParams]
    respawner.rawData[oRespawnerModelToRespawn] = model
    respawner.rawData[oRespawnerMinSpawnDist] = minSpawnDist
    respawner.rawData[oRespawnerBehaviorToRespawn] = behToSpawn
}

gLinker.bhv_bobomb_bully_death_smoke_init = bhv_bobomb_bully_death_smoke_init
gLinker.bhv_respawner_loop = bhv_respawner_loop
