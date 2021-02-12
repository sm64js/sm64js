import { PlatformDisplacementInstance as PlatformDisplacement } from "./PlatformDisplacement"
import { RESPAWN_INFO_DONT_RESPAWN, ACTIVE_FLAGS_DEACTIVATED, RESPAWN_INFO_TYPE_32, oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oVelX, oVelY, oVelZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oBehParams, oBehParams2ndByte, ACTIVE_FLAG_ACTIVE, RESPAWN_INFO_TYPE_16, oFlags, OBJ_FLAG_PERSISTENT_RESPAWN, oMarioParticleFlags, ACTIVE_PARTICLE_H_STAR, oActiveParticleFlags, ACTIVE_PARTICLE_V_STAR, ACTIVE_PARTICLE_TRIANGLE, ACTIVE_PARTICLE_DUST, ACTIVE_PARTICLE_MIST_CIRCLE, ACTIVE_PARTICLE_BUBBLE } from "../include/object_constants"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import * as GraphNode from "../engine/graph_node"
import { BehaviorCommandsInstance as Behavior } from "../engine/BehaviorCommands"
import * as Mario from "./Mario"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { detect_object_collisions } from "./ObjectCollisions"
import { uint32, uint16 } from "../utils"
import { MODEL_NONE, MODEL_MIST, MODEL_BUBBLE } from "../include/model_ids"
import * as MarioConstants from "../include/mario_constants"
import { gLinker } from "./Linker"
import { spawn_object_at_origin, obj_copy_pos_and_angle } from "./ObjectHelpers"

class ObjectListProcessor {
    constructor() {

        PlatformDisplacement.ObjectListProc = this
        this.sParticleTypesInit = () => {
            return [
                {
                    particleFlag: MarioConstants.PARTICLE_HORIZONTAL_STAR, activeParticleFlag: ACTIVE_PARTICLE_H_STAR, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvHorStarParticleSpawner
                },
                {
                    particleFlag: MarioConstants.PARTICLE_VERTICAL_STAR, activeParticleFlag: ACTIVE_PARTICLE_V_STAR, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvVertStarParticleSpawner
                },
                {
                    particleFlag: MarioConstants.PARTICLE_TRIANGLE, activeParticleFlag: ACTIVE_PARTICLE_TRIANGLE, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvTriangleParticleSpawner
                },
                {
                    particleFlag: MarioConstants.PARTICLE_DUST, activeParticleFlag: ACTIVE_PARTICLE_DUST, model: MODEL_MIST,
                    behavior: gLinker.behaviors.bhvMistParticleSpawner
                },
                {
                    particleFlag: MarioConstants.PARTICLE_MIST_CIRCLE, activeParticleFlag: ACTIVE_PARTICLE_MIST_CIRCLE, model: MODEL_NONE,
                    behavior: gLinker.behaviors.bhvMistCircParticleSpawner
                },
                {
                    particleFlag: MarioConstants.PARTICLE_BUBBLE, activeParticleFlag: ACTIVE_PARTICLE_BUBBLE, model: MODEL_BUBBLE,
                    behavior: gLinker.behaviors.bhvBubbleParticleSpawner
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
        this.gObjectLists = new Array(13).fill(0).map(() => { 

            const blankObj = { gfx: {} }
            blankObj.prev = blankObj
            blankObj.next = blankObj
            return blankObj

        })

    }

    update_objects() {
        this.gObjectCounter = 0  /// probaly not used and not needed

        Spawn.SurfaceLoad.clear_dynamic_surfaces()
        this.update_terrain_objects()

        PlatformDisplacement.apply_mario_platform_displacement()

        detect_object_collisions()
        this.update_non_terrain_objects()

        this.unload_deactivated_objects()

        PlatformDisplacement.update_mario_platform()
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

        const particleFlags = Mario.execute_mario_action()
        this.gCurrentObject.rawData[oMarioParticleFlags] = particleFlags
        this.copy_mario_state_to_object()

        if (this.sParticleTypes == undefined) this.sParticleTypes = this.sParticleTypesInit()
        this.sParticleTypes.forEach(particleType => {
            if (particleFlags & particleType.particleFlag) {
                this.spawn_particle(particleType.activeParticleFlag, particleType.model, particleType.behavior)
            }
        })
        
    }

    copy_mario_state_to_object() {

        this.gCurrentObject.rawData[oPosX] = LevelUpdate.gMarioState.pos[0]
        this.gCurrentObject.rawData[oPosY] = LevelUpdate.gMarioState.pos[1]
        this.gCurrentObject.rawData[oPosZ] = LevelUpdate.gMarioState.pos[2]

        this.gCurrentObject.rawData[oFaceAnglePitch] = this.gCurrentObject.header.gfx.angle[0]
        this.gCurrentObject.rawData[oFaceAngleYaw] = this.gCurrentObject.header.gfx.angle[1]
        this.gCurrentObject.rawData[oFaceAngleRoll] = this.gCurrentObject.header.gfx.angle[2]

        this.gCurrentObject.rawData[oMoveAnglePitch] = this.gCurrentObject.header.gfx.angle[0]
        this.gCurrentObject.rawData[oMoveAngleYaw] = this.gCurrentObject.header.gfx.angle[1]
        this.gCurrentObject.rawData[oMoveAngleRoll] = this.gCurrentObject.header.gfx.angle[2]

        this.gCurrentObject.rawData[oVelX] = LevelUpdate.gMarioState.vel[0]
        this.gCurrentObject.rawData[oVelY] = LevelUpdate.gMarioState.vel[1]
        this.gCurrentObject.rawData[oVelZ] = LevelUpdate.gMarioState.vel[2]

        this.gCurrentObject.rawData[oAngleVelPitch] = LevelUpdate.gMarioState.angleVel[0]
        this.gCurrentObject.rawData[oAngleVelYaw] = LevelUpdate.gMarioState.angleVel[1]
        this.gCurrentObject.rawData[oAngleVelRoll] = LevelUpdate.gMarioState.angleVel[2]
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
                    if (this.totalMarios != 0) throw "ERROR, only 1 mario should be initialized here, and this is vanilla anyways"
                    this.totalMarios++
                    this.gMarioObject = object
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
