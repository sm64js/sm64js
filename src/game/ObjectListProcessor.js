import { PlatformDisplacementInstance as PlatformDisplacement } from "./PlatformDisplacement"
import {
    RESPAWN_INFO_DONT_RESPAWN, ACTIVE_FLAGS_DEACTIVATED, RESPAWN_INFO_TYPE_32, oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oVelX, oVelY, oVelZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oBehParams, oBehParams2ndByte, ACTIVE_FLAG_ACTIVE, RESPAWN_INFO_TYPE_16, oFlags, OBJ_FLAG_PERSISTENT_RESPAWN, oMarioParticleFlags, oActiveParticleFlags,
    ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_H_STAR, ACTIVE_PARTICLE_SPARKLES, ACTIVE_PARTICLE_BUBBLE,
    ACTIVE_PARTICLE_WATER_SPLASH, ACTIVE_PARTICLE_IDLE_WATER_WAVE, ACTIVE_PARTICLE_PLUNGE_BUBBLE, ACTIVE_PARTICLE_WAVE_TRAIL,
    ACTIVE_PARTICLE_FIRE, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE, ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_LEAF,
    ACTIVE_PARTICLE_SNOW, ACTIVE_PARTICLE_BREATH, ACTIVE_PARTICLE_DIRT, ACTIVE_PARTICLE_MIST_CIRCLE, ACTIVE_PARTICLE_TRIANGLE
} from "../include/object_constants"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import * as GraphNode from "../engine/graph_node"
import { BehaviorCommandsInstance as Behavior } from "../engine/BehaviorCommands"
import * as Mario from "./Mario"
import { detect_object_collisions } from "./ObjectCollisions"
import { networkData, gameData as socketGameData, updateNetworkBeforeRender } from "../mmo/socket"
import { copyMarioUpdateToState } from "../mmo/MultiMarioManager"
import { vec3f_dif, vec3f_length } from "../engine/math_util"
import { uint32, uint16 } from "../utils"
import {
    MODEL_MIST, MODEL_NONE, MODEL_SPARKLES, MODEL_BUBBLE, MODEL_WATER_SPLASH, MODEL_IDLE_WATER_WAVE, MODEL_WHITE_PARTICLE_SMALL,
    MODEL_WAVE_TRAIL, MODEL_RED_FLAME
} from "../include/model_ids"
import {
    PARTICLE_DUST, PARTICLE_VERTICAL_STAR, PARTICLE_HORIZONTAL_STAR, PARTICLE_SPARKLES, PARTICLE_BUBBLE, PARTICLE_WATER_SPLASH,        
    PARTICLE_IDLE_WATER_WAVE, PARTICLE_PLUNGE_BUBBLE, PARTICLE_WAVE_TRAIL, PARTICLE_FIRE, PARTICLE_SHALLOW_WATER_WAVE,  
    PARTICLE_SHALLOW_WATER_SPLASH, PARTICLE_LEAF, PARTICLE_SNOW, PARTICLE_BREATH, PARTICLE_DIRT, PARTICLE_MIST_CIRCLE, PARTICLE_TRIANGLE
} from "../include/mario_constants"
import * as MarioConstants from "../include/mario_constants"
import { gLinker } from "./Linker"
import { spawn_object_at_origin, obj_copy_pos_and_angle, dist_between_objects } from "./ObjectHelpers"

class ObjectListProcessor {
    constructor() {
        PlatformDisplacement.ObjectListProc = this
        this.sParticleTypesInit = () => {
            return [
                {
                    particleFlag: PARTICLE_HORIZONTAL_STAR, activeParticleFlag: ACTIVE_PARTICLE_H_STAR, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvHorStarParticleSpawner
                },
                {
                    particleFlag: PARTICLE_VERTICAL_STAR, activeParticleFlag: ACTIVE_PARTICLE_V_STAR, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvVertStarParticleSpawner
                },
                {
                    particleFlag: PARTICLE_TRIANGLE, activeParticleFlag: ACTIVE_PARTICLE_TRIANGLE, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvTriangleParticleSpawner
                },
                {
                    particleFlag: PARTICLE_DUST, activeParticleFlag: ACTIVE_PARTICLE_DUST, model: MODEL_MIST,
                    behavior: gLinker.behaviors.bhvMistParticleSpawner
                },
                {
                    particleFlag: PARTICLE_MIST_CIRCLE, activeParticleFlag: ACTIVE_PARTICLE_MIST_CIRCLE, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvMistCircParticleSpawner
                },
                {
                    particleFlag: PARTICLE_BUBBLE, activeParticleFlag: ACTIVE_PARTICLE_BUBBLE, model: MODEL_BUBBLE,
                    behavior: gLinker.behaviors.bhvBubbleParticleSpawner
                },
                {
                    particleFlag: PARTICLE_WATER_SPLASH, activeParticleFlag: ACTIVE_PARTICLE_WATER_SPLASH, model: MODEL_WATER_SPLASH,
                    behavior: gLinker.behaviors.bhvWaterSplash
                },
                {
                    particleFlag: PARTICLE_IDLE_WATER_WAVE, activeParticleFlag: ACTIVE_PARTICLE_IDLE_WATER_WAVE, model: MODEL_IDLE_WATER_WAVE,
                    behavior: gLinker.behaviors.bhvIdleWaterWave
                },
                {
                    particleFlag: PARTICLE_PLUNGE_BUBBLE, activeParticleFlag: ACTIVE_PARTICLE_PLUNGE_BUBBLE, model: MODEL_WHITE_PARTICLE_SMALL,
                    behavior: gLinker.behaviors.bhvPlungeBubble
                },
                {
                    particleFlag: PARTICLE_WAVE_TRAIL, activeParticleFlag: ACTIVE_PARTICLE_WAVE_TRAIL, model: MODEL_WAVE_TRAIL,
                    behavior: gLinker.behaviors.bhvWaveTrail
                }
            ]
        }

        this.TIME_STOP_UNKNOWN_0 = (1 << 0)
        this.TIME_STOP_ENABLED = (1 << 1)
        this.TIME_STOP_DIALOG = (1 << 2)
        this.TIME_STOP_MARIO_AND_DOORS = (1 << 3)
        this.TIME_STOP_ALL_OBJECTS = (1 << 4)
        this.TIME_STOP_MARIO_OPENED_DOOR = (1 << 5)
        this.TIME_STOP_ACTIVE = (1 << 6)

        this.OBJECT_POOL_CAPACITY = 240
		
        this.OBJ_LIST_PLAYER = 0      //  (0) mario
        this.OBJ_LIST_UNUSED_1 = 1    //  (1) (unused)
        this.OBJ_LIST_DESTRUCTIVE = 2 //  (2) things that can be used to destroy other objects, like
                              //      bob-ombs and corkboxes
        this.OBJ_LIST_UNUSED_3 = 3    //  (3) (unused)
        this.OBJ_LIST_GENACTOR = 4    //  (4) general actors. most normal 'enemies' or actors are
                              //      on this list. (MIPS, bullet bill, bully, etc)
        this.OBJ_LIST_PUSHABLE = 5   //  (5) pushable actors. This is a group of objects which
                              //      can push each other around as well as their parent
                              //      objects. (goombas, koopas, spinies)
        this.OBJ_LIST_LEVEL = 6       //  (6) level objects. general level objects such as heart, star
        this.OBJ_LIST_UNUSED_7 = 7    //  (7) (unused)
        this.OBJ_LIST_DEFAULT = 8     //  (8) default objects. objects that didnt start with a 00
                              //      command are put here, so this is treated as a default.
        this.OBJ_LIST_SURFACE = 9     //  (9) surface objects. objects that specifically have surface
                              //      collision and not object collision. (thwomp, whomp, etc)
        this.OBJ_LIST_POLELIKE = 10    // (10) polelike objects. objects that attract or otherwise
                              //      "cling" mario similar to a pole action. (hoot,
                              //      whirlpool, trees/poles, etc)
        this.OBJ_LIST_SPAWNER = 11     // (11) spawners
        this.OBJ_LIST_UNIMPORTANT = 12 // (12) unimportant objects. objects that will not load
                              //      if there are not enough object slots: they will also
                              //      be manually unloaded to make room for slots if the list
                              //      gets exhausted.
        this.NUM_OBJ_LISTS = 13

        this.sObjectListUpdateOrder = [ 
            this.OBJ_LIST_SPAWNER,
            this.OBJ_LIST_SURFACE,
            this.OBJ_LIST_POLELIKE,
            this.OBJ_LIST_PLAYER,
            this.OBJ_LIST_PUSHABLE,
            this.OBJ_LIST_GENACTOR,
            this.OBJ_LIST_DESTRUCTIVE,
            this.OBJ_LIST_LEVEL,
            this.OBJ_LIST_DEFAULT,
            this.OBJ_LIST_UNIMPORTANT,
        ]

        this.gEnvironmentLevels = new Array(20)

        this.totalMarios = 0
        this.gObjectCounter = 0
        this.gCCMEnteredSlide = 0
        this.gCheckingSurfaceCollisionsForCamera = 0
        this.gMarioShotFromCannon = 0
        this.gObjectLists = new Array(13).fill(0).map(() => { 

            const blankObj = { gfx: {} }
            blankObj.prev = blankObj
            blankObj.next = blankObj
            return blankObj
        })

        this.spawnObjectsBySyncID = []
        socketGameData.spawnObjectsBySyncID = this.spawnObjectsBySyncID

    }

    update_objects() {

        Object.values(networkData.remotePlayers).forEach(remotePlayer => {
            if (remotePlayer.marioUpdate) {
                if (remotePlayer.marioState.ignoreUpdates > 0) {
                    remotePlayer.marioState.ignoreUpdates--
                } else {
                    copyMarioUpdateToState(remotePlayer)
                    this.copy_mario_state_to_object(remotePlayer.marioState)
                }
            }
        })

        this.gObjectCounter = 0  /// probaly not used and not needed

        Spawn.SurfaceLoad.clear_dynamic_surfaces()
        this.update_terrain_objects()

        PlatformDisplacement.apply_mario_platform_displacement()

        detect_object_collisions()
        this.update_non_terrain_objects()  /// includes local mario

        this.update_remote_marios()

        updateNetworkBeforeRender()

        this.unload_deactivated_objects()

        PlatformDisplacement.update_mario_platform()
    }

    update_remote_marios() {

        Object.values(networkData.remotePlayers).forEach(remotePlayer => {
            this.gCurrentObject = remotePlayer.marioState.marioObj
            this.gCurrentObject.header.gfx.node.flags |= GraphNode.GRAPH_RENDER_HAS_ANIMATION

            try { /// surpress bugs for now

                Behavior.cur_obj_update()

                remotePlayer.crashCount = 0

            } catch (error) {
                console.log("unknown error in 'execute_mario_action' - please report this issue to sm64js devs  -- playerName: " + this.gCurrentObject.marioState.playerName)
                console.log(error)
                remotePlayer.crashCount++
            }

            
        })
    }

    update_terrain_objects() {
        this.gObjectCounter += this.update_objects_in_list(this.gObjectLists[this.OBJ_LIST_SPAWNER])
        this.gObjectCounter += this.update_objects_in_list(this.gObjectLists[this.OBJ_LIST_SURFACE])
    }

    update_non_terrain_objects() {
        this.sObjectListUpdateOrder.slice(2).forEach(listIndex => {
            this.gObjectCounter += this.update_objects_in_list(this.gObjectLists[listIndex])
        })
    }

    update_objects_in_list(objList) {

        const firstObj = objList.next
        return this.update_objects_starting_at(objList, firstObj)
    }

    update_objects_starting_at(objList, firstObj) {
        let count = 0
        while (objList != firstObj) {
            this.gCurrentObject = firstObj.wrapperObject
            this.gCurrentObject.header.gfx.node.flags |= GraphNode.GRAPH_RENDER_HAS_ANIMATION
            Behavior.cur_obj_update()
            firstObj = firstObj.next
            count++
        }
        return count
    }

    unload_deactivated_objects_in_list(objList) {
        let obj = objList.next

        while (objList != obj) {
            this.gCurrentObject = obj.wrapperObject
            obj = obj.next

            if ((this.gCurrentObject.activeFlags & ACTIVE_FLAG_ACTIVE) != ACTIVE_FLAG_ACTIVE) {
                /// Prevent object from respawning after exiting and re-entering the area
                if (!(this.gCurrentObject.rawData[oFlags] & OBJ_FLAG_PERSISTENT_RESPAWN)) {
                    this.set_object_respawn_info_bits(this.gCurrentObject, RESPAWN_INFO_DONT_RESPAWN)
                }

                Spawn.unload_object(this.gCurrentObject)
            }

        }

        return 0
    }

    unload_deactivated_objects() {
        this.sObjectListUpdateOrder.forEach(listIndex => {
            this.unload_deactivated_objects_in_list(this.gObjectLists[listIndex])
        })
    }

    set_object_respawn_info_bits(obj, bits) {
        switch (obj.respawnInfoType) {
            case RESPAWN_INFO_TYPE_32:
                let info32 = uint32(obj.respawnInfo)
                info32 |= bits << 8
                obj.respawnInfo = info32
                break
            case RESPAWN_INFO_TYPE_16:
                let info16 = uint16(obj.respawnInfo)
                info16 |= bits << 8
                obj.respawnInfo = info16
                break
        }
    }

    spawn_particle(activeParticleFlag, model, behavior) {
        if (!(this.gCurrentObject.rawData[oActiveParticleFlags] & activeParticleFlag)) {
            this.gCurrentObject.rawData[oActiveParticleFlags] |= activeParticleFlag
            const particle = spawn_object_at_origin(this.gCurrentObject, model, behavior)
            obj_copy_pos_and_angle(particle, this.gCurrentObject)
        }
    }

    bhv_mario_update() {
        const torsoDiff = [0, 0, 0]
        vec3f_dif(torsoDiff, this.gCurrentObject.marioState.pos, this.gCurrentObject.marioState.marioBodyState.torsoPos)
        if (vec3f_length(torsoDiff) > 300)
            this.gCurrentObject.marioState.marioBodyState.torsoPos = [...this.gCurrentObject.marioState.pos]

        const particleFlags = Mario.execute_mario_action(this.gCurrentObject.marioState)
        this.gCurrentObject.rawData[oMarioParticleFlags] = particleFlags
        this.copy_mario_state_to_object(this.gCurrentObject.marioState)

        if (this.sParticleTypes == undefined) this.sParticleTypes = this.sParticleTypesInit()
        this.sParticleTypes.forEach(particleType => {
            if (particleFlags & particleType.particleFlag) {
                const distanceToLocalMario = dist_between_objects(this.gCurrentObject, this.gMarioObject)
                if (distanceToLocalMario < 1000.0) {
                    this.spawn_particle(particleType.activeParticleFlag, particleType.model, particleType.behavior)
                }
            }
        })
    }

    copy_mario_state_to_object(marioState) {
		
        marioState.marioObj.rawData[oPosX] = marioState.pos[0]
        marioState.marioObj.rawData[oPosY] = marioState.pos[1]
        marioState.marioObj.rawData[oPosZ] = marioState.pos[2]

        marioState.marioObj.rawData[oFaceAnglePitch] = marioState.marioObj.header.gfx.angle[0]
        marioState.marioObj.rawData[oFaceAngleYaw] = marioState.marioObj.header.gfx.angle[1]
        marioState.marioObj.rawData[oFaceAngleRoll] = marioState.marioObj.header.gfx.angle[2]

        marioState.marioObj.rawData[oMoveAnglePitch] = marioState.marioObj.header.gfx.angle[0]
        marioState.marioObj.rawData[oMoveAngleYaw] = marioState.marioObj.header.gfx.angle[1]
        marioState.marioObj.rawData[oMoveAngleRoll] = marioState.marioObj.header.gfx.angle[2]

        marioState.marioObj.rawData[oVelX] = marioState.vel[0]
        marioState.marioObj.rawData[oVelY] = marioState.vel[1]
        marioState.marioObj.rawData[oVelZ] = marioState.vel[2]

        marioState.marioObj.rawData[oAngleVelPitch] = marioState.angleVel[0]
        marioState.marioObj.rawData[oAngleVelYaw] = marioState.angleVel[1]
        marioState.marioObj.rawData[oAngleVelRoll] = marioState.angleVel[2]
    }

    spawn_objects_from_info(spawnInfo) {


        this.gTimeStopState = 0

        this.gWDWWaterLevelChanging = false;
        this.gMarioOnMerryGoRound = 0

        PlatformDisplacement.clear_mario_platform()

        this.gCCMEnteredSlide |= 1

        while (spawnInfo) {

            const script = spawnInfo.behaviorScript

            if ((spawnInfo.behaviorArg & (RESPAWN_INFO_DONT_RESPAWN << 8)) != (RESPAWN_INFO_DONT_RESPAWN << 8)) {

                const object = Spawn.create_object(script)

                object.rawData[oBehParams] = spawnInfo.behaviorArg

                object.rawData[oBehParams2ndByte] = ((spawnInfo.behaviorArg) >> 16) & 0xFF

                object.behavior = script

                // Record death/collection in the SpawnInfo
                object.respawnInfoType = RESPAWN_INFO_TYPE_32
                object.respawnInfo = spawnInfo.behaviorArg

                if (spawnInfo.behaviorArg & 0x01) { // Is mario
                    if (this.totalMarios != 0) console.log("ERROR, only 1 mario should be initialized here")
                    this.totalMarios++
                    this.gMarioObject = object
                    this.gMarioObject.localMario = true
                    GraphNode.geo_make_first_child(object.header.gfx.node)
                }

                GraphNode.geo_obj_init_spawninfo(object.header.gfx, spawnInfo)

                object.rawData[oPosX] = spawnInfo.startPos[0]
                object.rawData[oPosY] = spawnInfo.startPos[1]
                object.rawData[oPosZ] = spawnInfo.startPos[2]
    
                object.rawData[oFaceAnglePitch] = spawnInfo.startAngle[0]
                object.rawData[oFaceAngleYaw] = spawnInfo.startAngle[1]
                object.rawData[oFaceAngleRoll] = spawnInfo.startAngle[2]
    
                object.rawData[oMoveAnglePitch] = spawnInfo.startAngle[0]
                object.rawData[oMoveAngleYaw] = spawnInfo.startAngle[1]
                object.rawData[oMoveAngleRoll] = spawnInfo.startAngle[2]
                
            }

            spawnInfo = spawnInfo.next
        }

    }

    clear_objects() {

        Spawn.clear_object_lists()
        Spawn.SurfaceLoad.clear_dynamic_surfaces()
    }
}

export const ObjectListProcessorInstance = new ObjectListProcessor()
