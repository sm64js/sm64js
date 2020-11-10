import { LevelCommandsInstance as LevelCommands } from "../../engine/LevelCommands"
import { bhvMario } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { ttm_geo_000A70 } from "./areas/1/geo.inc"
import { ttm_geo_000880 } from "./areas/1/10/geo.inc"
import { ttm_geo_0008A8 } from "./areas/1/11/geo.inc"
import { ttm_geo_0008D0 } from "./areas/1/12/geo.inc"
import { ttm_geo_0008F8 } from "./areas/1/13/geo.inc"
import { ttm_geo_000920 } from "./areas/1/14/geo.inc"
import { ttm_geo_000948 } from "./areas/1/15/geo.inc"
import { ttm_geo_000970 } from "./areas/1/16/geo.inc"
import { ttm_geo_000990 } from "./areas/1/17/geo.inc"
import { ttm_geo_0009C0 } from "./areas/1/18/geo.inc"
import { ttm_geo_0009F0 } from "./areas/1/19/geo.inc"
import { ttm_geo_000A18 } from "./areas/1/20/geo.inc"
import { ttm_geo_000A40 } from "./areas/1/21/geo.inc"
import { ttm_geo_000748 } from "./areas/1/3/geo.inc"
import { ttm_geo_000778 } from "./areas/1/4/geo.inc"
import { ttm_geo_0007A8 } from "./areas/1/5/geo.inc"
import { ttm_geo_0007D8 } from "./areas/1/6/geo.inc"
import { ttm_geo_000808 } from "./areas/1/7/geo.inc"
import { ttm_geo_000830 } from "./areas/1/8/geo.inc"
import { ttm_geo_000858 } from "./areas/1/9/geo.inc"
import { ttm_seg7_area_1_collision } from "./areas/1/collision.inc"

import {
    MODEL_LEVEL_GEOMETRY_00,
    MODEL_LEVEL_GEOMETRY_01,
    MODEL_LEVEL_GEOMETRY_02,
    MODEL_LEVEL_GEOMETRY_03,
    MODEL_LEVEL_GEOMETRY_04,
    MODEL_LEVEL_GEOMETRY_05,
    MODEL_LEVEL_GEOMETRY_06,
    MODEL_LEVEL_GEOMETRY_07,
    MODEL_LEVEL_GEOMETRY_08,
    MODEL_LEVEL_GEOMETRY_09,
    MODEL_LEVEL_GEOMETRY_0A,
    MODEL_LEVEL_GEOMETRY_0B,
    MODEL_LEVEL_GEOMETRY_0C,
    MODEL_LEVEL_GEOMETRY_0D,
    MODEL_LEVEL_GEOMETRY_0E,
    MODEL_LEVEL_GEOMETRY_0F,
    MODEL_LEVEL_GEOMETRY_10,
    MODEL_LEVEL_GEOMETRY_11,
    MODEL_LEVEL_GEOMETRY_12,
    MODEL_LEVEL_GEOMETRY_13,
    MODEL_LEVEL_GEOMETRY_14,
    MODEL_LEVEL_GEOMETRY_15,
    MODEL_LEVEL_GEOMETRY_16,
} from "../../include/model_ids"

export const level_ttm_entry = [
    { command: LevelCommands.init_level },
    { command: LevelCommands.init_mario, args: [1, 1, bhvMario] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_03, ttm_geo_000748] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_04, ttm_geo_000778] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_05, ttm_geo_0007A8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_06, ttm_geo_0007D8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_07, ttm_geo_000808] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_08, ttm_geo_000830] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_09, ttm_geo_000858] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0A, ttm_geo_000880] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0B, ttm_geo_0008A8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0C, ttm_geo_0008D0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0D, ttm_geo_0008F8] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_0F, ttm_geo_000920] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_10, ttm_geo_000948] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_11, ttm_geo_000970] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_12, ttm_geo_000990] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_13, ttm_geo_0009C0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_14, ttm_geo_0009F0] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_15, ttm_geo_000A18] },
    { command: LevelCommands.load_model_from_geo, args: [MODEL_LEVEL_GEOMETRY_16, ttm_geo_000A40] },
    { command: LevelCommands.begin_area, args: [1, ttm_geo_000A70] },
    { command: LevelCommands.terrain, args: [ttm_seg7_area_1_collision] },
    { command: LevelCommands.end_area },
    { command: LevelCommands.set_mario_pos, args: [1, 45, 102, -4332, 5734] },
    { command: LevelCommands.call, args: [0, LevelUpdate.lvl_init_or_update, LevelUpdate] },
    { command: LevelCommands.call_loop, args: [1, LevelUpdate.lvl_init_or_update, LevelUpdate] },
]
