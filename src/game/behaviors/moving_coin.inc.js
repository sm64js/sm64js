import { ObjectListProcessorInstance as ObjectListProc } from "../ObjectListProcessor"
import { spawn_object } from "../ObjectHelpers"
import { MODEL_SPARKLES } from "../../include/model_ids"
import { bhvGoldenCoinSparkles } from "../BehaviorData"

export const coin_collected = () => {
    const o = ObjectListProc.gCurrentObject
    spawn_object(o, MODEL_SPARKLES, bhvGoldenCoinSparkles)
    o.activeFlags = 0
}