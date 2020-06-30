import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { AreaInstance as Area } from "./Area"
import { MarioMiscInstance as MarioMisc } from "./MarioMisc"
import { CameraInstance as Camera } from "./Camera"

class Mario {
    constructor() {

    }

    init_mario_from_save_file() {
        Object.assign(LevelUpdate.gMarioState, {
            unk00: 0, flags: 0, action: 0,
            spawnInfo: Area.gMarioSpawnInfo,
            statusForCamera: Camera.gPlayerCameraState,
            marioBodyState: MarioMisc.gBodyState,
            controller: null,
            animation: null,
            numCoins: 0, numStars: 0, numKeys: 0,
            numLives: 4, health: 0x880,
            unkB8: 0, unkB0: 0xBD
        })
    }
}

export const MarioInstance = new Mario()