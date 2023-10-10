import { oMoveAngleYaw, oTimer } from "../../include/object_constants";
import { SOUND_GENERAL_WALL_EXPLOSION } from "../../include/sounds";
import { obj_explode_and_spawn_coins } from "../ObjectHelpers";
import { create_sound_spawner } from "../SpawnSound";
import { check_mario_attacking } from "./kickable_board.inc";

const bhv_tower_door_loop = () => {
    const o = gLinker.ObjectListProcessor.gCurrentObject;
    
    if (o.rawData[oTimer] == 0) o.rawData[oMoveAngleYaw] -= 0x4000;

    if (check_mario_attacking() != 0) {
        obj_explode_and_spawn_coins(80.0, 0);
        create_sound_spawner(SOUND_GENERAL_WALL_EXPLOSION);
    }
}

gLinker.bhv_tower_door_loop = bhv_tower_door_loop;