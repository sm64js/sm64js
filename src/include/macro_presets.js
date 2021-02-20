import { MODEL_GOOMBA, MODEL_NONE, MODEL_BLACK_BOBOMB, MODEL_CHAIN_CHOMP, MODEL_YELLOW_COIN, COIN_FORMATION_FLAG_RING, MODEL_RED_COIN, COIN_FORMATION_FLAG_VERTICAL, COIN_FORMATION_FLAG_FLYING } from "./model_ids"
import { bhvGoomba, bhvGoombaTripletSpawner, bhvBobomb, bhvChainChomp, bhvCoinFormation, bhvYellowCoin, bhvRedCoin } from "../game/BehaviorData"

export const MACRO_YELLOW_COIN = 0
export const MACRO_YELLOW_COIN_2 = 1
export const MACRO_RED_COIN = 4
export const MACRO_COIN_LINE_HORIZONTAL = 6
export const MACRO_COIN_RING_HORIZONTAL = 7
export const MACRO_COIN_RING_VERTICAL = 12
export const MACRO_GOOMBA_TRIPLET_SPAWNER = 32
export const MACRO_GOOMBA = 37
export const MACRO_BOBOMB = 111
export const MACRO_CHAIN_CHOMP = 256

export const MacroObjectPresets = new Array(366)

MacroObjectPresets[MACRO_YELLOW_COIN] = { model: MODEL_YELLOW_COIN, behavior: bhvYellowCoin, param: 0 }
//MacroObjectPresets[MACRO_YELLOW_COIN_2] = { model: MODEL_YELLOW_COIN, behavior: bhvOneCoin, param: 0}
MacroObjectPresets[MACRO_RED_COIN] = { model: MODEL_RED_COIN, behavior: bhvRedCoin, param: 0 }
MacroObjectPresets[MACRO_COIN_LINE_HORIZONTAL] = { model: MODEL_NONE, behavior: bhvCoinFormation, param: 0 }
MacroObjectPresets[MACRO_COIN_RING_HORIZONTAL] = { model: MODEL_NONE, behavior: bhvCoinFormation, param: COIN_FORMATION_FLAG_RING }
MacroObjectPresets[MACRO_COIN_RING_VERTICAL] = { model: MODEL_NONE, behavior: bhvCoinFormation, param: COIN_FORMATION_FLAG_FLYING | COIN_FORMATION_FLAG_RING | COIN_FORMATION_FLAG_VERTICAL }

MacroObjectPresets[MACRO_GOOMBA] = { model: MODEL_GOOMBA, behavior: bhvGoomba, param: 0 }
MacroObjectPresets[MACRO_GOOMBA_TRIPLET_SPAWNER] = { model: MODEL_NONE, behavior: bhvGoombaTripletSpawner, param: 0 }
MacroObjectPresets[MACRO_BOBOMB] = { model: MODEL_BLACK_BOBOMB, behavior: bhvBobomb, param: 0 }
MacroObjectPresets[MACRO_CHAIN_CHOMP] = { model: MODEL_CHAIN_CHOMP, behavior: bhvChainChomp, param: 0 }