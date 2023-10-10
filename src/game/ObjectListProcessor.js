import * as _Linker from "./Linker"
import * as _PlatformDisplacement from "./PlatformDisplacement"
import * as _BehaviorCommands from "../engine/BehaviorCommands"
import * as _LevelUpdate from "./LevelUpdate"
import * as _Spawn from "./SpawnObject"

import * as GraphNode from "../engine/graph_node"
import * as Mario from "./Mario"

import {
    RESPAWN_INFO_DONT_RESPAWN, ACTIVE_FLAGS_DEACTIVATED, RESPAWN_INFO_TYPE_32, oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oVelX, oVelY, oVelZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oBehParams, oBehParams2ndByte, ACTIVE_FLAG_ACTIVE, RESPAWN_INFO_TYPE_16, oFlags, OBJ_FLAG_PERSISTENT_RESPAWN, oMarioParticleFlags, oActiveParticleFlags,
    ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_H_STAR, ACTIVE_PARTICLE_SPARKLES, ACTIVE_PARTICLE_BUBBLE,
    ACTIVE_PARTICLE_WATER_SPLASH, ACTIVE_PARTICLE_IDLE_WATER_WAVE, ACTIVE_PARTICLE_PLUNGE_BUBBLE, ACTIVE_PARTICLE_WAVE_TRAIL,
    ACTIVE_PARTICLE_FIRE, ACTIVE_PARTICLE_SHALLOW_WATER_WAVE, ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_LEAF,
    ACTIVE_PARTICLE_SNOW, ACTIVE_PARTICLE_BREATH, ACTIVE_PARTICLE_DIRT, ACTIVE_PARTICLE_MIST_CIRCLE, ACTIVE_PARTICLE_TRIANGLE, oInteractType, ACTIVE_FLAG_UNIMPORTANT, ACTIVE_FLAG_INITIATED_TIME_STOP
} from "../include/object_constants"
import { detect_object_collisions } from "./ObjectCollisions"
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
import { spawn_object_at_origin, obj_copy_pos_and_angle } from "./ObjectHelpers"
import { INTERACT_DOOR, INTERACT_WARP_DOOR } from "./Interaction"

export const gDebugInfo = new Array(16).fill(0).map(() => new Array(8).fill(0))

export const TIME_STOP_UNKNOWN_0 = (1 << 0)
export const TIME_STOP_ENABLED = (1 << 1)
export const TIME_STOP_DIALOG = (1 << 2)
export const TIME_STOP_MARIO_AND_DOORS = (1 << 3)
export const TIME_STOP_ALL_OBJECTS = (1 << 4)
export const TIME_STOP_MARIO_OPENED_DOOR = (1 << 5)
export const TIME_STOP_ACTIVE = (1 << 6)

export const OBJ_LIST_PLAYER = 0        //  (0) mario
export const OBJ_LIST_UNUSED_1 = 1      //  (1) (unused)
export const OBJ_LIST_DESTRUCTIVE = 2   //  (2) things that can be used to destroy other objects, like
                                        //      bob-ombs and corkboxes
export const OBJ_LIST_UNUSED_3 = 3      //  (3) (unused)
export const OBJ_LIST_GENACTOR = 4      //  (4) general actors. most normal 'enemies' or actors are
                                        //      on this list. (MIPS, bullet bill, bully, etc)
export const OBJ_LIST_PUSHABLE = 5      //  (5) pushable actors. This is a group of objects which
                                        //      can push each other around as well as their parent
                                        //      objects. (goombas, koopas, spinies)
export const OBJ_LIST_LEVEL = 6         //  (6) level objects. general level objects such as heart, star
export const OBJ_LIST_UNUSED_7 = 7      //  (7) (unused)
export const OBJ_LIST_DEFAULT = 8       //  (8) default objects. objects that didnt start with a 00
                                        //      command are put here, so this is treated as a default.
export const OBJ_LIST_SURFACE = 9       //  (9) surface objects. objects that specifically have surface
                                        //      collision and not object collision. (thwomp, whomp, etc)
export const OBJ_LIST_POLELIKE = 10     // (10) polelike objects. objects that attract or otherwise
                                        //      "cling" mario similar to a pole action. (hoot,
                                        //      whirlpool, trees/poles, etc)
export const OBJ_LIST_SPAWNER = 11      // (11) spawners
export const OBJ_LIST_UNIMPORTANT = 12  // (12) unimportant objects. objects that will not load
                                        //      if there are not enough object slots: they will also
                                        //      be manually unloaded to make room for slots if the list
                                        //      gets exhausted.
export const NUM_OBJ_LISTS = 13

class ObjectListProcessor {
    constructor() {
        this.sParticleTypesInit = () => {
            this.sParticleTypes = [];
            [
                [PARTICLE_DUST,                 ACTIVE_PARTICLE_DUST,                 MODEL_MIST,                 'bhvMistParticleSpawner'],
                [PARTICLE_VERTICAL_STAR,        ACTIVE_PARTICLE_V_STAR,               MODEL_NONE,                 'bhvVertStarParticleSpawner'],
                [PARTICLE_HORIZONTAL_STAR,      ACTIVE_PARTICLE_H_STAR,               MODEL_NONE,                 'bhvHorStarParticleSpawner'],
                [PARTICLE_SPARKLES,             ACTIVE_PARTICLE_SPARKLES,             MODEL_SPARKLES,             'bhvSparkleParticleSpawner'],
                [PARTICLE_BUBBLE,               ACTIVE_PARTICLE_BUBBLE,               MODEL_BUBBLE,               'bhvBubbleParticleSpawner'],
                [PARTICLE_WATER_SPLASH,         ACTIVE_PARTICLE_WATER_SPLASH,         MODEL_WATER_SPLASH,         'bhvWaterSplash'],
                [PARTICLE_IDLE_WATER_WAVE,      ACTIVE_PARTICLE_IDLE_WATER_WAVE,      MODEL_IDLE_WATER_WAVE,      'bhvIdleWaterWave'],
                [PARTICLE_PLUNGE_BUBBLE,        ACTIVE_PARTICLE_PLUNGE_BUBBLE,        MODEL_WHITE_PARTICLE_SMALL, 'bhvPlungeBubble'],
                [PARTICLE_WAVE_TRAIL,           ACTIVE_PARTICLE_WAVE_TRAIL,           MODEL_WAVE_TRAIL,           'bhvWaveTrail'],
                [PARTICLE_FIRE,                 ACTIVE_PARTICLE_FIRE,                 MODEL_RED_FLAME,            'bhvFireParticleSpawner'],
                [PARTICLE_SHALLOW_WATER_WAVE,   ACTIVE_PARTICLE_SHALLOW_WATER_WAVE,   MODEL_NONE,                 'bhvShallowWaterWave'],
                [PARTICLE_SHALLOW_WATER_SPLASH, ACTIVE_PARTICLE_SHALLOW_WATER_SPLASH, MODEL_NONE,                 'bhvShallowWaterSplash'],
                [PARTICLE_LEAF,                 ACTIVE_PARTICLE_LEAF,                 MODEL_NONE,                 'bhvLeafParticleSpawner'],
                [PARTICLE_SNOW,                 ACTIVE_PARTICLE_SNOW,                 MODEL_NONE,                 'bhvSnowParticleSpawner'],
                [PARTICLE_BREATH,               ACTIVE_PARTICLE_BREATH,               MODEL_NONE,                 'bhvBreathParticleSpawner'],
                [PARTICLE_DIRT,                 ACTIVE_PARTICLE_DIRT,                 MODEL_NONE,                 'bhvDirtParticleSpawner'],
                [PARTICLE_MIST_CIRCLE,          ACTIVE_PARTICLE_MIST_CIRCLE,          MODEL_NONE,                 'bhvMistCircParticleSpawner'],
                [PARTICLE_TRIANGLE,             ACTIVE_PARTICLE_TRIANGLE,             MODEL_NONE,                 'bhvTriangleParticleSpawner']

            ].forEach(p => {
                this.sParticleTypes.push({particleFlag: p[0], activeParticleFlag: p[1], model: p[2], behavior: gLinker.behaviors[p[3]]})
            })
        }

        // this.OBJECT_POOL_CAPACITY = 240

        this.OBJ_LIST_PLAYER       = OBJ_LIST_PLAYER
        this.OBJ_LIST_UNUSED_1     = OBJ_LIST_UNUSED_1
        this.OBJ_LIST_DESTRUCTIVE  = OBJ_LIST_DESTRUCTIVE
        this.OBJ_LIST_UNUSED_3     = OBJ_LIST_UNUSED_3
        this.OBJ_LIST_GENACTOR     = OBJ_LIST_GENACTOR
        this.OBJ_LIST_PUSHABLE     = OBJ_LIST_PUSHABLE
        this.OBJ_LIST_LEVEL        = OBJ_LIST_LEVEL
        this.OBJ_LIST_UNUSED_7     = OBJ_LIST_UNUSED_7
        this.OBJ_LIST_DEFAULT      = OBJ_LIST_DEFAULT
        this.OBJ_LIST_SURFACE      = OBJ_LIST_SURFACE
        this.OBJ_LIST_POLELIKE     = OBJ_LIST_POLELIKE
        this.OBJ_LIST_SPAWNER      = OBJ_LIST_SPAWNER
        this.OBJ_LIST_UNIMPORTANT  = OBJ_LIST_UNIMPORTANT
        this.NUM_OBJ_LISTS         = NUM_OBJ_LISTS

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

        this.gTHIWaterDrained = false;
        this.gTimeStopState = 0
        this.gMarioObject = null
        this.gEnvironmentLevels = new Array(20)
        this.gDoorAdjacentRooms = new Array(60).fill(0).map(() => new Array(2).fill(0))
        this.gMarioCurrentRoom = 0

        this.totalMarios = 0
        this.gObjectCounter = 0
        this.gCheckingSurfaceCollisionsForCamera = false;
        this.gMarioShotFromCannon = false;
        this.gFindFloorIncludeSurfaceIntangible = false;
        this.gNumFindFloorMisses = 0
        this.gNumRoomedObjectsInMarioRoom = 0;
        this.gNumRoomedObjectsNotInMarioRoom = 0;
        this.gWDWWaterLevelChanging = false;
        this.gCCMEnteredSlide = false;
        this.gMarioOnMerryGoRound = false;
        this.gNumCalls = {
            floor: 0,
            ceil: 0,
            wall: 0,
        }
        this.gObjectLists = new Array(13).fill(0).map((e, i) => { 
            const headObj = {}
            headObj.name = i
            headObj.prev = headObj
            headObj.next = headObj
            return headObj
        })
    }

    copy_mario_state_to_object() {
        const gMarioState = gLinker.LevelUpdate.gMarioState
        this.gCurrentObject.rawData[oPosX] = gMarioState.pos[0]
        this.gCurrentObject.rawData[oPosY] = gMarioState.pos[1]
        this.gCurrentObject.rawData[oPosZ] = gMarioState.pos[2]

        this.gCurrentObject.rawData[oFaceAnglePitch] = this.gCurrentObject.gfx.angle[0]
        this.gCurrentObject.rawData[oFaceAngleYaw]   = this.gCurrentObject.gfx.angle[1]
        this.gCurrentObject.rawData[oFaceAngleRoll]  = this.gCurrentObject.gfx.angle[2]

        this.gCurrentObject.rawData[oMoveAnglePitch] = this.gCurrentObject.gfx.angle[0]
        this.gCurrentObject.rawData[oMoveAngleYaw]   = this.gCurrentObject.gfx.angle[1]
        this.gCurrentObject.rawData[oMoveAngleRoll]  = this.gCurrentObject.gfx.angle[2]

        this.gCurrentObject.rawData[oVelX] = gMarioState.vel[0]
        this.gCurrentObject.rawData[oVelY] = gMarioState.vel[1]
        this.gCurrentObject.rawData[oVelZ] = gMarioState.vel[2]

        this.gCurrentObject.rawData[oAngleVelPitch] = gMarioState.angleVel[0]
        this.gCurrentObject.rawData[oAngleVelYaw]   = gMarioState.angleVel[1]
        this.gCurrentObject.rawData[oAngleVelRoll]  = gMarioState.angleVel[2]
    }

    spawn_particle(activeParticleFlag, model, behavior) {
        if (!(this.gCurrentObject.rawData[oActiveParticleFlags] & activeParticleFlag)) {
            this.gCurrentObject.rawData[oActiveParticleFlags] |= activeParticleFlag
            let particle = spawn_object_at_origin(this.gCurrentObject, model, behavior)
            obj_copy_pos_and_angle(particle, this.gCurrentObject)
        }
    }

    bhv_mario_update() {
        const particleFlags = Mario.execute_mario_action()
        this.gCurrentObject.rawData[oMarioParticleFlags] = particleFlags
        this.copy_mario_state_to_object()

        if (this.sParticleTypes == undefined) {
            this.sParticleTypesInit()
        }
        this.sParticleTypes.forEach(particleType => {
            if (particleFlags & particleType.particleFlag) {
                this.spawn_particle(particleType.activeParticleFlag, particleType.model, particleType.behavior)
            }
        })
    }

    update_objects_starting_at(objList, firstObj) {
        let count = 0
        while (objList != firstObj) {
            this.gCurrentObject = firstObj
            this.gCurrentObject.gfx.flags |= GraphNode.GRAPH_RENDER_HAS_ANIMATION
            gLinker.BehaviorCommands.cur_obj_update()
            firstObj = firstObj.next
            count++
        }
        return count
    }

    update_objects_during_time_stop(objList, firstObj) {
        let count = 0;
        let unfrozen;

        while (objList != firstObj) {
            this.gCurrentObject = firstObj;
            unfrozen = false;

            // Selectively unfreeze certain objects
            if (!(this.gTimeStopState & TIME_STOP_ALL_OBJECTS)) {
                if (this.gCurrentObject == this.gMarioObject && !(this.gTimeStopState & TIME_STOP_MARIO_AND_DOORS))
                    unfrozen = true;

                if (this.gCurrentObject.rawData[oInteractType] & (INTERACT_DOOR | INTERACT_WARP_DOOR) && !(this.gTimeStopState & TIME_STOP_MARIO_AND_DOORS))
                    unfrozen = true;

                if (this.gCurrentObject.activeFlags & (ACTIVE_FLAG_UNIMPORTANT | ACTIVE_FLAG_INITIATED_TIME_STOP))
                    unfrozen = true;
            }

            // Only update if unfrozen
            if (unfrozen) {
                this.gCurrentObject.gfx.flags |= GraphNode.GRAPH_RENDER_HAS_ANIMATION;
                gLinker.BehaviorCommands.cur_obj_update();
            } else {
                this.gCurrentObject.gfx.flags &= ~GraphNode.GRAPH_RENDER_HAS_ANIMATION;
            }

            firstObj = firstObj.next;
            count++;
        }

        return count;
    }

    update_objects_in_list(objList) {

        const firstObj = objList.next
        if (!(this.gTimeStopState & TIME_STOP_ACTIVE))
            return this.update_objects_starting_at(objList, firstObj)
        else
            return this.update_objects_during_time_stop(objList, firstObj)
    }

    unload_deactivated_objects_in_list(objList) {
        let obj = objList.next

        while (objList != obj) {
            this.gCurrentObject = obj
            obj = obj.next

            if ((this.gCurrentObject.activeFlags & ACTIVE_FLAG_ACTIVE) != ACTIVE_FLAG_ACTIVE) {
                /// Prevent object from respawning after exiting and re-entering the area
                if (!(this.gCurrentObject.rawData[oFlags] & OBJ_FLAG_PERSISTENT_RESPAWN)) {
                    this.set_object_respawn_info_bits(this.gCurrentObject, RESPAWN_INFO_DONT_RESPAWN)
                }

                gLinker.Spawn.unload_object(this.gCurrentObject)
            }

        }

        return false
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

    /**
     * Unload all objects whose activeAreaIndex is areaIndex.
     */
    unload_objects_from_area(areaIndex) {
        for (let i = 0; i < this.NUM_OBJ_LISTS; i++) {
            let listHead = this.gObjectLists[i]
            let obj = listHead.next
            while (obj != listHead) {
                if (obj.gfx.activeAreaIndex == areaIndex) {
                    gLinker.Spawn.unload_object(obj)
                }
                obj = obj.next
            }
        }
    }

    spawn_objects_from_info(spawnInfo) {
        this.gTimeStopState = 0

        this.gWDWWaterLevelChanging = false;
        this.gMarioOnMerryGoRound = 0

        gLinker.PlatformDisplacement.clear_mario_platform()

        this.gCCMEnteredSlide |= 1

        while (spawnInfo) {
            const script = gLinker.Spawn.get_bhv_script(spawnInfo.behaviorScript)

            if ((spawnInfo.behaviorArg & (RESPAWN_INFO_DONT_RESPAWN << 8)) != (RESPAWN_INFO_DONT_RESPAWN << 8)) {
                const object = gLinker.Spawn.create_object(script)

                object.rawData[oBehParams] = spawnInfo.behaviorArg
                object.rawData[oBehParams2ndByte] = ((spawnInfo.behaviorArg) >> 16) & 0xFF
                object.behavior = script

                // Record death/collection in the SpawnInfo
                object.respawnInfoType = RESPAWN_INFO_TYPE_32
                object.respawnInfo = spawnInfo.behaviorArg

                if (spawnInfo.behaviorArg & 0x01) { // Is mario
                    // if (this.totalMarios != 0) {
                    //     throw "ERROR, only 1 mario should be initialized here, and this is vanilla anyways"
                    // }
                    // this.totalMarios++
                    this.gMarioObject = object
                    GraphNode.geo_make_first_child(object.gfx)
                }

                GraphNode.geo_obj_init_spawninfo(object.gfx, spawnInfo)

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
        let i

        this.gTHIWaterDrained = 0
        this.gTimeStopState = 0
        this.gMarioObject = null
        this.gMarioCurrentRoom = 0
        this.totalMarios = 0

        for (i = 0; i < 60; i++) {
            this.gDoorAdjacentRooms[i][0] = 0
            this.gDoorAdjacentRooms[i][1] = 0
        }

        gLinker.Spawn.clear_object_lists()
        gLinker.SurfaceLoad.clear_dynamic_surfaces()
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

    unload_deactivated_objects() {
        this.sObjectListUpdateOrder.forEach(listIndex => {
            this.unload_deactivated_objects_in_list(this.gObjectLists[listIndex])
        })
    }

    update_objects() {
        this.gObjectCounter = 0  /// probaly not used and not needed

        gLinker.SurfaceLoad.clear_dynamic_surfaces()
        this.update_terrain_objects()

        gLinker.PlatformDisplacement.apply_mario_platform_displacement()

        detect_object_collisions()
        this.update_non_terrain_objects()

        this.unload_deactivated_objects()

        gLinker.PlatformDisplacement.update_mario_platform()

        if (this.gTimeStopState & TIME_STOP_ENABLED) this.gTimeStopState |= TIME_STOP_ACTIVE;
        else this.gTimeStopState &= ~TIME_STOP_ACTIVE;

        this.gPrevFrameObjectCount = this.gObjectCounter
    }
}

export const ObjectListProcessorInstance = new ObjectListProcessor()
gLinker.ObjectListProcessor = ObjectListProcessorInstance
