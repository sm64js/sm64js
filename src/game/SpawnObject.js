import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { BehaviorCommandsInstance as BhvCmds } from "../engine/BehaviorCommands"
import { init_graph_node, geo_add_child, GRAPH_RENDER_INVISIBLE, GRAPH_NODE_TYPE_OBJECT, geo_remove_child, GRAPH_RENDER_BILLBOARD, GRAPH_RENDER_ACTIVE } from "../engine/graph_node"
import { ACTIVE_FLAG_ACTIVE, ACTIVE_FLAG_UNK8, RESPAWN_INFO_TYPE_NULL, ACTIVE_FLAG_UNIMPORTANT, OBJ_MOVE_ON_GROUND, oIntangibleTimer, oDamageOrCoinValue, oHealth, oCollisionDistance, oDrawingDistance, oDistanceToMario, oRoom, oFloorHeight, oPosX, oPosY, oPosZ, ACTIVE_FLAGS_DEACTIVATED, ACTIVE_FLAG_DEACTIVATED } from "../include/object_constants"
import { mtxf_identity } from "../engine/math_util"
import * as _Linker from "./Linker"

class SpawnObject {
    constructor() {
    }

    try_allocate_object(destList) {
        const obj = {
            gfx: {},
            next: null, prev: null,
            activeFlags: 0,
            rawData: new Array(0x50).fill(0),
            ptrData: new Array(0x50).fill(0)
        }
        init_graph_node(obj.gfx, GRAPH_NODE_TYPE_OBJECT)
        obj.gfx.object = obj

        obj.prev = destList.prev
        obj.next = destList
        destList.prev.next = obj
        destList.prev = obj

        geo_add_child(gLinker.GeoLayout.gObjParentGraphNode, obj.gfx)
        return obj
    }

    deallocate_object(obj) {
        // Remove from object list
        obj.next.prev = obj.prev
        obj.prev.next = obj.next
    }

    clear_object_lists() {
        const gObjectLists = ObjectListProc.gObjectLists
        for (let i = 0; i < ObjectListProc.NUM_OBJ_LISTS; i++) {
            gObjectLists[i].next = gObjectLists[i]
            gObjectLists[i].prev = gObjectLists[i]
        }
    }
    
    unload_object(obj) {
        obj.activeFlags = ACTIVE_FLAGS_DEACTIVATED
        obj.prevObj = null

        obj.gfx.throwMatrix = null

        //func_803206F8 TODO
        geo_remove_child(obj.gfx)

        obj.gfx.flags &= ~GRAPH_RENDER_BILLBOARD
        obj.gfx.flags &= ~GRAPH_RENDER_ACTIVE

        this.deallocate_object(obj)
    }

    allocate_object(objList) {
        const obj = this.try_allocate_object(objList)

        obj.activeFlags = ACTIVE_FLAG_ACTIVE | ACTIVE_FLAG_UNK8
        obj.parentObj = obj
        obj.prevObj = null
        obj.collidedObjInteractTypes = 0
        obj.numCollidedObjs = 0 /// possibly unnecessary
        obj.collidedObjs = []

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
        obj.rawData[oIntangibleTimer] = -1
        obj.rawData[oDamageOrCoinValue] = 0
        obj.rawData[oHealth] = 2048

        obj.rawData[oCollisionDistance] = 1000.0
        obj.rawData[oDrawingDistance] = 4000.0

        obj.transform = new Array(4).fill(0).map(() => new Array(4).fill(0))
        mtxf_identity(obj.transform)

        obj.respawnInfoType = RESPAWN_INFO_TYPE_NULL
        obj.respawnInfo = null

        obj.rawData[oDistanceToMario] = 19000.0
        obj.rawData[oRoom] = -1
    
        obj.gfx.flags &= ~GRAPH_RENDER_INVISIBLE
        obj.gfx.pos = [ -10000.0, -10000.0, -10000.0 ]
        obj.gfx.throwMatrix = null

        return obj
    }

    snap_object_to_floor(obj) {
        obj.rawData[oFloorHeight] = gLinker.SurfaceCollision.find_floor(obj.rawData[oPosX], obj.rawData[oPosY], obj.rawData[oPosZ], {})

        if (obj.rawData[oFloorHeight] + 2.0 > obj.oPosY && obj.oPosY > obj.oFloorHeight - 10.0) {
            obj.oPosY = obj.oFloorHeight
            obj.oMoveFlags |= OBJ_MOVE_ON_GROUND
        }
    }

    create_object(bhvScript) {
        bhvScript = this.get_bhv_script(bhvScript)
        if (!bhvScript) {
            return null
        }
        let objListIndex = this.get_bhv_object_list(bhvScript)
        const objList = ObjectListProc.gObjectLists[objListIndex]
        const obj = this.allocate_object(objList)

        obj.bhvScript = { commands: bhvScript, index: 0, name: this.get_bhv_object_name(bhvScript) }
        obj.behavior = bhvScript
    
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


    // Some behvior scripts cannot be initialized due to circular dependancies,
    // so are left as functions to be initialized when they are needed
    get_bhv_script(behavior) {
        let bhv = behavior
        if (typeof bhv == "function") {
            bhv = bhv()
        } else if (typeof bhv == "string") {
            bhv = gLinker.behaviors[bhv]
            if (!bhv) {
                console.log("missing gLinker behavior: " + behavior)
                bhv = gLinker.behaviors.bhvCarrySomething6
            }
        }

        return bhv
    }

    get_bhv_object_list(bhvScript) {
        bhvScript = this.get_bhv_script(bhvScript)

        // peek at first command
        if (Array.isArray(bhvScript[0]) && bhvScript[0][0] == 'BEGIN') {
            return bhvScript[0][1]
        } else if (bhvScript[0].command == BhvCmds.begin) {
            return bhvScript[0].args.objListIndex
        } else {
            return ObjectListProc.OBJ_LIST_DEFAULT
        }
    }

    get_bhv_object_name(bhvScript) {
        bhvScript = this.get_bhv_script(bhvScript)

        // peek at first command
        if (Array.isArray(bhvScript[0]) && bhvScript[0][0] == 'BEGIN') {
            return bhvScript[0][2]
        }else if (bhvScript[0].command == BhvCmds.begin) {
            return bhvScript[0].args.name
        } else {
            return null
        }
    }

    mark_obj_for_deletion(obj) {
        obj.activeFlags = ACTIVE_FLAG_DEACTIVATED;
    }
}

export const SpawnObjectInstance = new SpawnObject()
gLinker.Spawn = SpawnObjectInstance
