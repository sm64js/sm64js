import { INIT_LEVEL, MARIO, AREA, OBJECT, TERRAIN, SET_BACKGROUND_MUSIC,
         TERRAIN_TYPE, END_AREA, MARIO_POS, CALL, CALL_LOOP } from "../../engine/LevelCommands"
import { TERRAIN_GRASS } from "../../include/surface_terrains"
import { SEQ_EVENT_MERRY_GO_ROUND } from "../../include/seq_ids"
import { bhvMario, bhvCastleFlagWaving } from "../../game/BehaviorData"
import { LevelUpdateInstance as LevelUpdate } from "../../game/LevelUpdate"
import { gj_area_1_geo } from "./areas/1/geo.inc"
import { gj_area_1_collision } from "./areas/1/collision.inc"
import { MODEL_MARIO, MODEL_STAR } from "../../include/model_ids"

export const level_gj_entry = [
    INIT_LEVEL(),
    MARIO(MODEL_MARIO, 1, bhvMario),
    AREA(1, gj_area_1_geo),
        OBJECT(/*model*/ MODEL_STAR, /*pos*/ 0, 0, 0, /*angle*/ 0, 0, 0, /*behParam*/ 0x00000000, /*beh*/ bhvCastleFlagWaving),
        TERRAIN(gj_area_1_collision),
        SET_BACKGROUND_MUSIC(/*settingsPreset*/ 0x0000, /*seq*/ SEQ_EVENT_MERRY_GO_ROUND),
        TERRAIN_TYPE(/*terrainType*/ TERRAIN_GRASS),
    END_AREA(),
	MARIO_POS(0x01, 0, 6121, 3139, 3, true),
    CALL(0, LevelUpdate.lvl_init_or_update, LevelUpdate),
    CALL_LOOP(1, LevelUpdate.lvl_init_or_update, LevelUpdate),
]
