import { PlatformDisplacementInstance as PlatformDisplacement } from "./PlatformDisplacement"
import { RESPAWN_INFO_DONT_RESPAWN, ACTIVE_FLAGS_DEACTIVATED, RESPAWN_INFO_TYPE_32, oPosX, oPosY, oPosZ, oFaceAnglePitch, oFaceAngleRoll, oFaceAngleYaw, oMoveAnglePitch, oMoveAngleRoll, oMoveAngleYaw, oVelX, oVelY, oVelZ, oAngleVelPitch, oAngleVelYaw, oAngleVelRoll, oBehParams, oBehParams2ndByte } from "../include/object_constants"
import { SpawnObjectInstance as Spawn } from "./SpawnObject"
import * as GraphNode from "../engine/graph_node"
import { BehaviorCommandsInstance as Behavior } from "../engine/BehaviorCommands"
import * as Mario from "./Mario"
import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { detect_object_collisions } from "./ObjectCollisions"



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

        this.gObjectCounter = 0
        this.gCCMEnteredSlide = 0
        this.gCheckingSurfaceCollisionsForCamera = 0
        this.gObjectLists = new Array(13).fill(0).map(() => { 

            const blankObj = { header: {} }
            blankObj.header.prev = blankObj
            blankObj.header.next = blankObj
            return blankObj

/*            const newObjectNode = { //ObjectNode
                next: null, prev: null,
                gfx: { //GraphObjectNode
                    node: { //GraphNode
                        type: null,
                        flags: null,
                        prev: null,
                        next: null,
                        children: null,
                        wrapper: null
                    }, 
                    sharedChild: { //GraphNode
                        type: null,
                        flags: null,
                        prev: null,
                        next: null,
                        children: null
                    },
                    wrapperObjectNode: null
                },
                wrapperObject: null
            }

            newObjectNode.gfx.wrapperObjectNode = newObjectNode
            newObjectNode.gfx.node.wrapper = newObjectNode.gfx

            const newObject = { header: newObjectNode, activeFlags: 0 }

            newObjectNode.wrapperObject = newObject

            return newObjectNode*/
        })

    }

    update_objects() {
        detect_object_collisions()
        this.update_non_terrain_objects()
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

    bhv_mario_update() {

        const marioIndex = this.gCurrentObject.OG ? 0 : 1

        Mario.execute_mario_action(marioIndex)
        this.copy_mario_state_to_object(marioIndex)
        
    }

    copy_mario_state_to_object(marioIndex) {

        this.gCurrentObject.rawData[oPosX] = LevelUpdate.gMarioState[marioIndex].pos[0]
        this.gCurrentObject.rawData[oPosY] = LevelUpdate.gMarioState[marioIndex].pos[1]
        this.gCurrentObject.rawData[oPosZ] = LevelUpdate.gMarioState[marioIndex].pos[2]

        this.gCurrentObject.rawData[oFaceAnglePitch] = this.gCurrentObject.header.gfx.angle[0]
        this.gCurrentObject.rawData[oFaceAngleYaw] = this.gCurrentObject.header.gfx.angle[1]
        this.gCurrentObject.rawData[oFaceAngleRoll] = this.gCurrentObject.header.gfx.angle[2]

        this.gCurrentObject.rawData[oMoveAnglePitch] = this.gCurrentObject.header.gfx.angle[0]
        this.gCurrentObject.rawData[oMoveAngleYaw] = this.gCurrentObject.header.gfx.angle[1]
        this.gCurrentObject.rawData[oMoveAngleRoll] = this.gCurrentObject.header.gfx.angle[2]

        this.gCurrentObject.rawData[oVelX] = LevelUpdate.gMarioState[marioIndex].vel[0]
        this.gCurrentObject.rawData[oVelY] = LevelUpdate.gMarioState[marioIndex].vel[1]
        this.gCurrentObject.rawData[oVelZ] = LevelUpdate.gMarioState[marioIndex].vel[2]

        this.gCurrentObject.rawData[oAngleVelPitch] = LevelUpdate.gMarioState[marioIndex].angleVel[0]
        this.gCurrentObject.rawData[oAngleVelYaw] = LevelUpdate.gMarioState[marioIndex].angleVel[1]
        this.gCurrentObject.rawData[oAngleVelRoll] = LevelUpdate.gMarioState[marioIndex].angleVel[2]
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
                    if (this.gMarioObject) { //2nd Mario
                        object.OG = false
                        this.gMarioObject.push(object)
                    } else {  ///OG Mario
                        object.OG = true
                        this.gMarioObject = [object]
                        GraphNode.geo_make_first_child(object.header.gfx.node)
                    }
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