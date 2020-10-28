import { PlatformDisplacementInstance as PlatformDisplacement } from "./PlatformDisplacement"
import { RESPAWN_INFO_DONT_RESPAWN, ACTIVE_FLAGS_DEACTIVATED, RESPAWN_INFO_TYPE_32, oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oVelX, oVelY, oVelZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oBehParams, oBehParams2ndByte } from "../include/object_constants"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import * as GraphNode from "../engine/graph_node"
import { BehaviorCommandsInstance as Behavior } from "../engine/BehaviorCommands"
import * as Mario from "./Mario"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { detect_object_collisions } from "./ObjectCollisions"
import { networkData, gameData as socketGameData } from "../socket"
import { copyMarioUpdateToState } from "./MultiMarioManager"
import { vec3f_dif, vec3f_length } from "../engine/math_util"


class ObjectListProcessor {
    constructor() {

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
            const blankObj = { header: {} }
            blankObj.header.prev = blankObj
            blankObj.header.next = blankObj
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

        detect_object_collisions()
        this.update_non_terrain_objects()
    }

    update_non_terrain_objects() {
        this.sObjectListUpdateOrder.slice(2).forEach(listIndex => {
            this.gObjectCounter += this.update_objects_in_list(this.gObjectLists[listIndex])
        })

        ///Update Other Mario Behaviors  // removing old method
/*        getExtraMarios().forEach(extraMario => {
            this.gCurrentObject = {
                bhvScript: { commands: window.bhvExtraMario, index: 4 },
                rawData: [...this.marioPlayerObj.rawData],
                bhvStack: [4]
            }
            this.gCurrentObject.rawData[oPosX] = extraMario.pos[0]
            this.gCurrentObject.rawData[oPosY] = extraMario.pos[1]
            this.gCurrentObject.rawData[oPosZ] = extraMario.pos[2]

            Behavior.cur_obj_update()
        })*/
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

    bhv_mario_update() {

        const torsoDiff = [0, 0, 0]
        vec3f_dif(torsoDiff, LevelUpdate.gMarioState.pos, LevelUpdate.gMarioState.marioBodyState.torsoPos)
        if (vec3f_length(torsoDiff) > 300)
            LevelUpdate.gMarioState.marioBodyState.torsoPos = [ ...LevelUpdate.gMarioState.pos ]

        Mario.execute_mario_action(LevelUpdate.gMarioState)
        this.copy_mario_state_to_object(LevelUpdate.gMarioState)

        Object.values(networkData.remotePlayers).forEach(remotePlayer => {
            try { /// surpress bugs for now
                Mario.execute_mario_action(remotePlayer.marioState)
                this.copy_mario_state_to_object(remotePlayer.marioState)
                remotePlayer.crashCount = 0
            } catch (error) {
                console.log("unknown error in 'execute_mario_action' - please report this issue to sm64js devs  -- playerName: " + remotePlayer.marioState.playerName)
                console.log(error)
                remotePlayer.crashCount++
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
                    if (this.totalMarios != 0) throw "ERROR, only 1 mario should be initialized here"
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

    }
}

export const ObjectListProcessorInstance = new ObjectListProcessor()
