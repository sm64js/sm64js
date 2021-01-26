import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import { MODEL_CHECKERBOARD_PLATFORM, MODEL_GOOMBA, MODEL_BLACK_BOBOMB, MODEL_EXPLOSION, MODEL_METALLIC_BALL, MODEL_CHAIN_CHOMP, MODEL_WOODEN_POST } from "../include/model_ids"
import { checkerboard_platform_geo } from "../actors/checkerboard_platform/geo.inc"
import { goomba_geo } from "../actors/goomba/geo.inc"
import { black_bobomb_geo } from "../actors/bobomb/geo.inc"
import { explosion_geo } from "../actors/explosion/geo.inc"
import { metallic_ball_geo } from "../actors/chain_ball/geo.inc"
import { chain_chomp_geo } from "../actors/chain_chomp/geo.inc"
import { wooden_post_geo } from "../actors/poundable_pole/geo.inc"

export const script_func_global_1 = [
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CHECKERBOARD_PLATFORM, checkerboard_platform_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_GOOMBA, goomba_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_BLACK_BOBOMB, black_bobomb_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_EXPLOSION, explosion_geo] },
    { command: LevelCommands.return }
]

export const script_func_global_15 = [
    { command: LevelCommands.load_model_from_geo, args: [MODEL_METALLIC_BALL, metallic_ball_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_CHAIN_CHOMP, chain_chomp_geo] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_WOODEN_POST, wooden_post_geo] },
    { command: LevelCommands.return }
]