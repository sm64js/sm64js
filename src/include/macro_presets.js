import { MODEL_GOOMBA, MODEL_NONE, MODEL_BLACK_BOBOMB, MODEL_CHAIN_CHOMP } from "./model_ids"
import { bhvGoomba, bhvGoombaTripletSpawner, bhvBobomb, bhvChainChomp } from "../game/BehaviorData"

export const MACRO_GOOMBA_TRIPLET_SPAWNER = 32
export const MACRO_GOOMBA = 37
export const MACRO_BOBOMB = 111
export const MACRO_CHAIN_CHOMP = 256

export const MacroObjectPresets = new Array(366)

MacroObjectPresets[37] = { model: MODEL_GOOMBA, behavior: bhvGoomba, param: 0 }
MacroObjectPresets[32] = { model: MODEL_NONE, behavior: bhvGoombaTripletSpawner, param: 0 }
MacroObjectPresets[111] = { model: MODEL_BLACK_BOBOMB, behavior: bhvBobomb, param: 0 }
MacroObjectPresets[256] = { model: MODEL_CHAIN_CHOMP, behavior: bhvChainChomp, param: 0 }