import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { MODEL_CHECKERBOARD_PLATFORM, MODEL_GOOMBA, MODEL_BLACK_BOBOMB } from "../include/model_ids"
import { checkerboard_platform_geo } from "../actors/checkerboard_platform/geo.inc"
import { goomba_geo } from "../actors/goomba/geo.inc"
import { black_bobomb_geo } from "../actors/bobomb/geo.inc"

export const script_func_global_1 = [
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CHECKERBOARD_PLATFORM, checkerboard_platform_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_GOOMBA, goomba_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BLACK_BOBOMB, black_bobomb_geo] },
    { command: LevelCommands.return }
]