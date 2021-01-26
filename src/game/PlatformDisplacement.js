import { oPosX, oPosY, oPosZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oVelX, oVelZ, oFaceAnglePitch, oFaceAngleYaw, oFaceAngleRoll } from "../include/object_constants"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { mtxf_rotate_zxy_and_translate } from "../engine/math_util"
import { linear_mtxf_transpose_mul_vec3f, linear_mtxf_mul_vec3f } from "./ObjectHelpers"

class PlatformDisplacement {
    constructor() {
        this.gMarioPlatform = null
    }

    set_mario_pos(x, y, z) {
        LevelUpdate.gMarioState.pos[0] = x
        LevelUpdate.gMarioState.pos[1] = y
        LevelUpdate.gMarioState.pos[2] = z
    }

    apply_platform_displacement(isMario, platform) {
        const displaceMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const rotation = [
            platform.rawData[oAngleVelPitch],
            platform.rawData[oAngleVelYaw],
            platform.rawData[oAngleVelRoll]
        ]

        let x, y, z

        if (isMario) {
            x = LevelUpdate.gMarioState.pos[0]
            y = LevelUpdate.gMarioState.pos[1]
            z = LevelUpdate.gMarioState.pos[2]
        } else {
            x = this.ObjectListProc.gCurrentObject.rawData[oPosX]
            y = this.ObjectListProc.gCurrentObject.rawData[oPosY]
            z = this.ObjectListProc.gCurrentObject.rawData[oPosZ]
        }

        x += platform.rawData[oVelX]
        z += platform.rawData[oVelZ]

        if (rotation[0] != 0 || rotation[1] != 0 || rotation[2] != 0) {

            if (isMario) LevelUpdate.gMarioState.faceAngle[1] += rotation[1]

            const platformPosX = platform.rawData[oPosX]
            const platformPosY = platform.rawData[oPosY]
            const platformPosZ = platform.rawData[oPosZ]

            const currentObjectOffset = [
                x - platformPosX,
                y - platformPosY,
                z - platformPosZ
            ]

            rotation[0] = platform.rawData[oFaceAnglePitch] - platform.rawData[oAngleVelPitch]
            rotation[1] = platform.rawData[oFaceAngleYaw] - platform.rawData[oAngleVelYaw]
            rotation[2] = platform.rawData[oFaceAngleRoll] - platform.rawData[oAngleVelRoll]

            mtxf_rotate_zxy_and_translate(displaceMatrix, currentObjectOffset, rotation)
            const relativeOffset = new Array(3)
            linear_mtxf_transpose_mul_vec3f(displaceMatrix, relativeOffset, currentObjectOffset)

            rotation[0] = platform.rawData[oFaceAnglePitch]
            rotation[1] = platform.rawData[oFaceAngleYaw]
            rotation[2] = platform.rawData[oFaceAngleRoll]

            mtxf_rotate_zxy_and_translate(displaceMatrix, currentObjectOffset, rotation)
            const newObjectOffset = new Array(3)
            linear_mtxf_mul_vec3f(displaceMatrix, newObjectOffset, relativeOffset)

            x = platformPosX + newObjectOffset[0]
            y = platformPosY + newObjectOffset[1]
            z = platformPosZ + newObjectOffset[2]
        }

        if (isMario) {
            this.set_mario_pos(x, y, z)
        } else {
            this.ObjectListProc.gCurrentObject.rawData[oPosX] = x
            this.ObjectListProc.gCurrentObject.rawData[oPosY] = y
            this.ObjectListProc.gCurrentObject.rawData[oPosZ] = z
        }
    }

    apply_mario_platform_displacement() {
        if (!(this.ObjectListProc.gTimeStopState & this.ObjectListProc.TIME_STOP_ACTIVE) &&
            this.ObjectListProc.gMarioObject && this.gMarioPlatform) {

            this.apply_platform_displacement(1, this.gMarioPlatform)
        }
    }

    update_mario_platform() {

        if (this.ObjectListProc.gMarioObject == undefined) return

        const marioX = this.ObjectListProc.gMarioObject.rawData[oPosX]
        const marioY = this.ObjectListProc.gMarioObject.rawData[oPosY]
        const marioZ = this.ObjectListProc.gMarioObject.rawData[oPosZ]

        const floorWrapper = {}
        const floorHeight = Spawn.SurfaceCollision.find_floor(marioX, marioY, marioZ, floorWrapper)

        const awayFromFloor = Math.abs(marioY - floorHeight) < 4.0 ? 0 : 1

        switch (awayFromFloor) {
            case 1:
                this.gMarioPlatform = null
                this.ObjectListProc.gMarioObject.platform = null
                break

            case 0:
                if (floorWrapper.floor && floorWrapper.floor.object) {
                    this.gMarioPlatform = floorWrapper.floor.object
                    this.ObjectListProc.gMarioObject.platform = floorWrapper.floor.object
                } else {
                    this.gMarioPlatform = null
                    this.ObjectListProc.gMarioObject.platform = null
                }
                break
        }

    }

    clear_mario_platform() { this.gMarioPlatform = null }
}

export const PlatformDisplacementInstance = new PlatformDisplacement()