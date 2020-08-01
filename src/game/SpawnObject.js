import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"
import { geo_add_child, GRAPH_RENDER_INVISIBLE, GRAPH_NODE_TYPE_OBJECT } from "../engine/graph_node"
import { GeoLayoutInstance } from "../engine/GeoLayout"
import { ACTIVE_FLAG_ACTIVE, ACTIVE_FLAG_UNK8, RESPAWN_INFO_TYPE_NULL, ACTIVE_FLAG_UNIMPORTANT, OBJ_MOVE_ON_GROUND } from "../include/object_constants"
import { mtxf_identity } from "../engine/math_util"
//import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"

class SpawnObject {
    constructor() {

    }

    clear_object_lists() {
        for (let i = 0; i < ObjectListProc.NUM_OBJ_LISTS; i++) {
            ObjectListProc.gObjectLists[i].next = ObjectListProc.gObjectLists[i]
            ObjectListProc.gObjectLists[i].prev = ObjectListProc.gObjectLists[i]
        }
    }

    try_allocate_object(destList) {
        const nextObj = { //ObjectNode
            next: null, prev: null,
            gfx: { //GraphObjectNode
                node: { //GraphNode
                    type: GRAPH_NODE_TYPE_OBJECT,
                    flags: null,
                    prev: null,
                    next: null,
                    children: [],
                    wrapper: null
                }, 
                sharedChild: { //GraphNode
                    type: null,
                    flags: null,
                    prev: null,
                    next: null,
                    children: []
                },
                wrapperObjectNode: null
            },
            wrapperObject: null
        }

        nextObj.gfx.wrapperObjectNode = nextObj
        nextObj.gfx.node.wrapper = nextObj.gfx
        const newObject = { header: nextObj, activeFlags: 0 }
        nextObj.wrapperObject = newObject

        nextObj.prev = destList.prev
        nextObj.next = destList
        destList.prev.next = nextObj
        destList.prev = nextObj

        geo_add_child(GeoLayoutInstance.gObjParentGraphNode.node, nextObj.gfx.node)
        return nextObj.wrapperObject
    }

    allocate_object(objList) {
        const obj = this.try_allocate_object(objList)

        obj.activeFlags = ACTIVE_FLAG_ACTIVE | ACTIVE_FLAG_UNK8
        obj.parentObj = obj
        obj.prevObj = null
        obj.collidedObjInteractTypes = 0
        obj.numCollidedObjs = 0

        obj.unused1 = 0;
        obj.bhvStackIndex = 0
        obj.bhvDelayTimer = 0
    
        obj.hitboxRadius = 50.0
        obj.hitboxHeight = 100.0
        obj.hurtboxRadius = 0.0
        obj.hurtboxHeight = 0.0
        obj.hitboxDownOffset = 0.0
        obj.unused2 = 0
    
        obj.platform = null
        obj.collisionData = null
        obj.oIntangibleTimer = -1
        obj.oDamageOrCoinValue = 0
        obj.oHealth = 2048

        obj.oCollisionDistance = 1000.0
        obj.oDrawingDistance = 4000.0

        obj.transform = new Array(4).fill(0).map(() => new Array(4).fill(0))
        mtxf_identity(obj.transform)

        obj.respawnInfoType = RESPAWN_INFO_TYPE_NULL
        obj.respawnInfo = null
    
        obj.oDistanceToMario = 19000.0
        obj.oRoom = -1
    
        obj.header.gfx.node.flags &= ~GRAPH_RENDER_INVISIBLE
        obj.header.gfx.pos = [ -10000.0, -10000.0, -10000.0 ]
        obj.header.gfx.throwMatrix = null

        return obj
    }

    snap_object_to_floor(obj) {
        obj.oFloorHeight = this.SurfaceCollisionInstance.find_floor(obj.oPosX, obj.oPosY, obj.oPosZ, {})

        if (obj.oFloorHeight + 2.0 > obj.oPosY && obj.oPosY > obj.oFloorHeight - 10.0) {
            obj.oPosY = obj.oFloorHeight
            obj.oMoveFlags |= OBJ_MOVE_ON_GROUND
        }
    }

    create_object(bhvScript) {

        let objListIndex

        if (bhvScript[0].command == BhvCmds.begin) {
            objListIndex = bhvScript[0].args.objListIndex
        } else {
            objListIndex =  ObjectListProc.OBJ_LIST_DEFAULT
        }

        const objList = ObjectListProc.gObjectLists[objListIndex]

        const obj = this.allocate_object(objList)

        obj.bhvScript = { commands: bhvScript, index: 0 }

        if (objListIndex == ObjectListProc.OBJ_LIST_UNIMPORTANT) {
            obj.activeFlags |= ACTIVE_FLAG_UNIMPORTANT
        }

        if (objListIndex == ObjectListProc.OBJ_LIST_POLELIKE || 
            objListIndex == ObjectListProc.OBJ_LIST_GENACTOR ||
            objListIndex == ObjectListProc.OBJ_LIST_PUSHABLE) {
                this.snap_object_to_floor(obj)
            }

        return obj
    }
}

export const SpawnObjectInstance = new SpawnObject()