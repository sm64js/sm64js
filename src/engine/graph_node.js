import { CameraInstance } from "../game/Camera"
import { G_CC_DECALRGB } from "../include/gbi"
import { GeoLayoutInstance as GeoLayout } from "./GeoLayout"
import { GeoRendererInstance as GeoRenderer } from "./GeoRenderer"
import * as Mario from "../game/Mario"

export const GRAPH_RENDER_ACTIVE = (1 << 0)
export const GRAPH_RENDER_CHILDREN_FIRST = (1 << 1)
export const GRAPH_RENDER_BILLBOARD = (1 << 2)
export const GRAPH_RENDER_Z_BUFFER = (1 << 3)
export const GRAPH_RENDER_INVISIBLE = (1 << 4)
export const GRAPH_RENDER_HAS_ANIMATION = (1 << 5)
export const GRAPH_RENDER_CYLBOARD      = (1 << 6)

// Whether the node type has a function pointer of type GraphNodeFunc
export const GRAPH_NODE_TYPE_FUNCTIONAL =             0x100

// Type used for Bowser and an unused geo function in obj_behaviors.c
export const GRAPH_NODE_TYPE_400    =                 0x400

// The discriminant for different types of geo nodes
export const GRAPH_NODE_TYPE_ROOT                   = 0x001
export const GRAPH_NODE_TYPE_ORTHO_PROJECTION       = 0x002
export const GRAPH_NODE_TYPE_PERSPECTIVE            = 0x003 | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_MASTER_LIST            = 0x004
export const GRAPH_NODE_TYPE_START                  = 0x00A
export const GRAPH_NODE_TYPE_LEVEL_OF_DETAIL        = 0x00B
export const GRAPH_NODE_TYPE_CAMERA                 = 0x014 | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_TRANSLATION_ROTATION   = 0x015
export const GRAPH_NODE_TYPE_TRANSLATION            = 0x016
export const GRAPH_NODE_TYPE_ROTATION               = 0x017
export const GRAPH_NODE_TYPE_OBJECT                 = 0x018
export const GRAPH_NODE_TYPE_ANIMATED_PART          = 0x019
export const GRAPH_NODE_TYPE_BILLBOARD              = 0x01A
export const GRAPH_NODE_TYPE_DISPLAY_LIST           = 0x01B
export const GRAPH_NODE_TYPE_SCALE                  = 0x01C
export const GRAPH_NODE_TYPE_SHADOW                 = 0x028
export const GRAPH_NODE_TYPE_OBJECT_PARENT          = 0x029
export const GRAPH_NODE_TYPE_GENERATED_LIST         = 0x02A | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_BACKGROUND             = 0x02C | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_HELD_OBJ               = 0x02E | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_CULLING_RADIUS         = 0x02F
export const GRAPH_NODE_TYPE_SWITCH_CASE            = 0x00C | GRAPH_NODE_TYPE_FUNCTIONAL

// DEBUG
const gGraphNodeTypeNames = {}
gGraphNodeTypeNames[GRAPH_NODE_TYPE_ROOT]                  = 'ROOT'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_ORTHO_PROJECTION]      = 'ORTHO_PROJECTION'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_PERSPECTIVE]           = 'PERSPECTIVE'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_MASTER_LIST]           = 'MASTER_LIST'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_START]                 = 'START'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_LEVEL_OF_DETAIL]       = 'LEVEL_OF_DETAIL'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_CAMERA]                = 'CAMERA'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_TRANSLATION_ROTATION]  = 'TRANSLATION_ROTATION'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_TRANSLATION]           = 'TRANSLATION'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_ROTATION]              = 'ROTATION'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_OBJECT]                = 'OBJECT'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_ANIMATED_PART]         = 'ANIMATED_PART'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_BILLBOARD]             = 'BILLBOARD'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_DISPLAY_LIST]          = 'DISPLAY_LIST'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_SCALE]                 = 'SCALE'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_SHADOW]                = 'SHADOW'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_OBJECT_PARENT]         = 'OBJECT_PARENT'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_GENERATED_LIST]        = 'GENERATED_LIST'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_BACKGROUND]            = 'BACKGROUND'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_HELD_OBJ]              = 'HELD_OBJ'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_CULLING_RADIUS]        = 'CULLING_RADIUS'
gGraphNodeTypeNames[GRAPH_NODE_TYPE_SWITCH_CASE]           = 'SWITCH_CASE'


export const GFX_NUM_MASTER_LISTS = 8

export const GEO_CONTEXT_CREATE        =   0 // called when node is created from a geo command
export const GEO_CONTEXT_RENDER        =   1 // called from rendering_graph_node.c
export const GEO_CONTEXT_AREA_UNLOAD   =   2 // called when unloading an area
export const GEO_CONTEXT_AREA_LOAD     =   3 // called when loading an area
export const GEO_CONTEXT_AREA_INIT     =   4 // called when initializing the 8 areas
export const GEO_CONTEXT_HELD_OBJ      =   5 // called when processing a GraphNodeHeldObj


export const gVec3fZero = [ 0.0, 0.0, 0.0 ]
export const gVec3sZero = gVec3fZero
export const gVec3fOne = [ 1.0, 1.0, 1.0 ]

// GraphNode 
const init_graph_node_object = (graphNode, sharedChild, pos, angle, scale) => {
    graphNode = {
        // node: -1,
        pos: [...pos],
        angle: [...angle],
        scale: [...scale],
        sharedChild,
        unk38: {
            animID: 0,
            animFrame: 0,
            animFrameAccelAssist: 0,
            animAccel: 0x10000,
            animTimer: 0
        }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_OBJECT)
    graphNode.flags |= GRAPH_RENDER_HAS_ANIMATION

    return graphNode
}

export const geo_obj_init_spawninfo = (graphNode, spawn) => {
    graphNode.scale = [1,1,1]
    graphNode.angle = [ ...spawn.startAngle ]
    graphNode.pos = [ ...spawn.startPos ]

    graphNode.areaIndex = spawn.areaIndex
    graphNode.activeAreaIndex = spawn.activeAreaIndex
    graphNode.sharedChild = spawn.unk18
    graphNode.unk4C = spawn
    graphNode.throwMatrix = null
    graphNode.unk38 = { curAnim: 0 }

    graphNode.flags |= GRAPH_RENDER_ACTIVE
    graphNode.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.flags &= ~GRAPH_RENDER_BILLBOARD
} 

export const geo_obj_init = (graphNode, sharedChild, pos, angle) => {

    Object.assign(graphNode, {
        pos: [...pos],
        angle: [...angle],
        scale: [1.0, 1.0, 1.0],
        sharedChild,
        throwMatrix: null,
        unk38: { curAnim: null }
    })

    graphNode.flags |= GRAPH_RENDER_ACTIVE
    graphNode.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.flags &= ~GRAPH_RENDER_BILLBOARD

}

export const geo_obj_init_animation = (graphNode, anim) => {

    if (graphNode.unk38.curAnim != anim) {
        graphNode.unk38.curAnim = anim
        graphNode.unk38.animFrame = anim.unk04 + ((anim.flags & Mario.ANIM_FLAG_FORWARD) ? 1 : -1)
        graphNode.unk38.animAccel = 0
        graphNode.unk38.animYTrans = 0
    }

}

export const geo_obj_init_animation_accel = (graphNode, anim, animAccel) => {

    if (graphNode.unk38.curAnim != anim) {
        graphNode.unk38.curAnim = anim
        graphNode.unk38.animFrameAccelAssist = (anim.unk04 << 16) + ((anim.flags & Mario.ANIM_FLAG_FORWARD) ? animAccel : -animAccel)
        graphNode.unk38.animFrame = graphNode.unk38.animFrameAccelAssist >> 16
        graphNode.unk38.animYTrans = 0
    }

    graphNode.unk38.animAccel = animAccel

}

export const geo_reset_object_node = (graphNode) =>  {
    const zeroVec = [0, 0, 0]
    const oneVec = [1, 1, 1]

    graphNode = init_graph_node_object(graphNode, 0, zeroVec, zeroVec, oneVec)
    
    geo_add_child(GeoLayout.gObjParentGraphNode, graphNode)
    graphNode.flags &= ~GRAPH_RENDER_ACTIVE
    return graphNode
}

export const geo_make_first_child = (newFirstChild) => {
    const parent = newFirstChild.parent
    let firstChild = parent.children[0]

    let numRotations = parent.children.length - parent.children.indexOf(newFirstChild)
    
    if (firstChild != newFirstChild) {
        if (firstChild.prev != newFirstChild) {
            newFirstChild.prev.next = newFirstChild.next
            newFirstChild.next.prev = newFirstChild.prev
            const lastSibling = firstChild.prev
            newFirstChild.prev = lastSibling
            newFirstChild.next = firstChild
            firstChild.prev = newFirstChild
            lastSibling.next = newFirstChild
        }
        //rotate children n times
        for (let i = 0; i < numRotations; i++) {
            parent.children.unshift(parent.children.pop())
        }
        // parent.children[0] = newFirstChild
    }

    return parent
}


/**
 * Helper function for geo_call_global_function_nodes that recursively
 * traverses the scene graph and calls the functions of global nodes.
 */
export const geo_call_global_function_nodes_helper = (children, callContext) => {
    for (const curNode of children) {
        if (curNode.type & GRAPH_NODE_TYPE_FUNCTIONAL) {
            let f = curNode.func
            if (f && f.func) {
                f.func.call(f.funcClass, callContext, curNode, null)
            }
        }

        let gCur = null
        switch (curNode.type) {
            case GRAPH_NODE_TYPE_MASTER_LIST: gCur = 'gCurGraphNodeMasterList';  break
            case GRAPH_NODE_TYPE_PERSPECTIVE: gCur = 'gCurGraphNodeCamFrustum';  break
            case GRAPH_NODE_TYPE_CAMERA:      gCur = 'gCurGraphNodeCamera';      break
            case GRAPH_NODE_TYPE_OBJECT:      gCur = 'gCurGraphNodeObject';      break
        }

        if (gCur) {
            GeoRenderer[gCur] = curNode
        }

        geo_call_global_function_nodes_helper(curNode.children, callContext)

        if (gCur) {
            GeoRenderer[gCur] = null
        }
    }
}

/**
 * Call the update functions of geo nodes that are stored in global variables.
 * These variables include gCurGraphNodeMasterList, gCurGraphNodeCamFrustum,
 * gCurGraphNodeCamera and gCurGraphNodeObject.
 * callContext is one of the GEO_CONTEXT_ defines.
 * The graphNode argument should be of type GraphNodeRoot.
 */
export const geo_call_global_function_nodes = (graphNodeRoot, callContext) => {
    if (graphNodeRoot.flags & GRAPH_RENDER_ACTIVE) {
        GeoRenderer.gCurGraphNodeRoot = graphNodeRoot
        geo_call_global_function_nodes_helper(graphNodeRoot.children, callContext)
        GeoRenderer.gCurGraphNodeRoot = null
    }
}


const get_func = (func, funcClass) => {
    // allow deferred linking:
    // GEO_ASM(0, 'MarioMisc.geo_mario_head_rotation')
    if (typeof func == "string") {
        let f
        let parts = func.split('.')
        if (parts.length == 1) {
            f = gLinker[func]
            funcClass = null
        } else {
            funcClass = gLinker[parts[0]]
            f = funcClass[parts[1]]
        }
        if (!f) {
            throw "deferred func not found: " + func
        }
        func = f
    }

    return [func, funcClass]
}


/**
 * Allocates and returns a newly created held object node
 */
export const init_graph_node_held_object = (graphNode, object, translation, func) => {
    let funcClass
    [func, funcClass] = get_func(func)

    graphNode = {
        object,
        translation: [...translation],
        func: { func, funcClass }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_HELD_OBJ)
    if (func) {
        func.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }

    return graphNode
}

export const geo_add_child = (parent, graphNode) => {
    let firstChild, parentLastChild

    graphNode.parent = parent
    firstChild = parent.children[0]

    if (!firstChild) {
        graphNode.prev = graphNode
        graphNode.next = graphNode
    } else {
        graphNode.prev = firstChild.prev
        graphNode.next = firstChild
        firstChild.prev.next = graphNode
        firstChild.prev = graphNode

    }
    parent.children.push(graphNode)  // also store in children array

    return graphNode
}

export const geo_remove_child = (graphNode) => {
    const parent = graphNode.parent

    // Remove link with siblings
    graphNode.prev.next = graphNode.next
    graphNode.next.prev = graphNode.prev

    parent.children = parent.children.filter(child => child != graphNode)

    return parent
}

const getTopBits = (number) => {
    number = number >>> 16
    return number > 32767 ? number - 65536 : number
}

const setTopBits = (number32, number16) => { return (number16 << 16) | (number32 & 0xFFFF) }

export const retrieve_animation_index = (curFrame, attributes) => {

    let result

    if (curFrame < attributes.indices[attributes.indexToIndices]) {
        result = attributes.indices[attributes.indexToIndices + 1] + curFrame
    } else {
        result = attributes.indices[attributes.indexToIndices + 1] + attributes.indices[attributes.indexToIndices] - 1
    }

    attributes.indexToIndices += 2

    return result
}

export const geo_update_animation_frame = (obj, accelAssist) => {

    const anim = obj.curAnim

    if (obj.animTimer == GeoRenderer.gAreaUpdateCounter || anim.flags & Mario.ANIM_FLAG_2) {
/*        if (accelAssist) {
            accelAssist = obj.animFrameAccelAssist
        }*/

        return obj.animFrame
    }


    let result

    if (anim.flags & Mario.ANIM_FLAG_FORWARD) {

        if (obj.animAccel) {
            result = parseInt(obj.animFrameAccelAssist - obj.animAccel)
        } else {
            result = (obj.animFrame - 1) << 16
        }

        if (getTopBits(result) < anim.unk06) {
            if (anim.flags & Mario.ANIM_FLAG_NOLOOP) {
                result = setTopBits(result, anim.unk06)
            } else {
                result = setTopBits(result, anim.unk08 - 1)
            }
        }
    } else {
        if (obj.animAccel != 0) {
            result = parseInt(obj.animFrameAccelAssist + obj.animAccel)
        } else {
            result = (obj.animFrame + 1) << 16
        }

        if (getTopBits(result) >= anim.unk08) {
            if (anim.flags & Mario.ANIM_FLAG_NOLOOP) {
                result = setTopBits(result, anim.unk08 - 1)
            } else {
                result = setTopBits(result, anim.unk06)
            }
        }
    }

    obj.animFrameAccelAssist = result

    return getTopBits(result)
}

let gGraphNodeNextID = 1

export const init_graph_node = (graphNode, type) => {
    graphNode.type = type
    graphNode.flags = 0
    graphNode.prev = null
    graphNode.next = null
    graphNode.parent = null
    graphNode.children = []

    graphNode.debug = {}
    graphNode.debug.id = gGraphNodeNextID++
    graphNode.debug.type = gGraphNodeTypeNames[type]
}

export const init_scene_graph_node_links = (graphNode, type) => {
    init_graph_node(graphNode, type)
    graphNode.flags = GRAPH_RENDER_ACTIVE
    graphNode.prev = graphNode
    graphNode.next = graphNode
}

export const init_graph_node_start = (pool, graphNode) => {
    graphNode = { node: -1 }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_START)
    return graphNode
}


export const init_graph_node_root = (pool, graphNode, areaIndex, x, y, width, height) => {
    graphNode = {
        areaIndex, x, y, width, height,
        unk15: 0,
        views: null,
        numViews: 0
    }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ROOT)
    return graphNode
}

export const init_graph_node_culling_radius = (radius) => {
    const graphNode = { node: -1, radius }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_CULLING_RADIUS)
    return graphNode
}

export const init_graph_node_render_range = (minDistance, maxDistance) => {
    const graphNode = { node: -1, minDistance, maxDistance }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_LEVEL_OF_DETAIL)
    return graphNode
}

export const init_graph_node_switch_case = (numCases, selectedCase, func, funcClass) => {
    [func, funcClass] = get_func(func, funcClass)
    const graphNode = { node: -1, numCases, selectedCase, func: { func, funcClass } }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SWITCH_CASE)
    if (func) {
        func.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }
    return graphNode
}

export const init_graph_node_perspective = (pool, graphNode, fov, near, far, func) => {
    let funcClass
    [func, funcClass] = get_func(func, CameraInstance)
    graphNode = { node: -1, fov, near, far, func: { func, funcClass } }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_PERSPECTIVE)
    if (func) {
        if (func != CameraInstance.geo_camera_fov) throw "check to make sure the function apart of the Camera Class"
        func.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }
  return graphNode

}

export const init_graph_node_generated = (pool, graphNode, gfxFunc, parameter, funcClass) => {
    [gfxFunc, funcClass] = get_func(gfxFunc, funcClass)
    graphNode = { node: -1, parameter,
        func: { func: gfxFunc, funcClass } }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_GENERATED_LIST)
    if (gfxFunc) {
        gfxFunc.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }
    return graphNode
}

export const init_graph_node_object_parent = (sharedChild) => {
    const graphNode = {
        sharedChild: sharedChild
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_OBJECT_PARENT)
    return graphNode
}

export const init_graph_node_animated_part = (drawingLayer, displayList, translation) => {
    const graphNode = {
        translation: [ ...translation ],
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ANIMATED_PART)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_billboard = (drawingLayer, displayList, translation) => {
    const graphNode = {
        translation: [...translation],
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_BILLBOARD)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_camera = (pool, graphNode, pos, focus, func, mode) => {
    let funcClass
    [func, funcClass] = get_func(func, CameraInstance)
    graphNode = {
        roll: 0,
        rollScreen: 0,
        config: { mode: 0, camera: null },
        pos,
        focus,
        func: { func, funcClass }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_CAMERA)

    if (func) {
        if (func != CameraInstance.geo_camera_main) throw "check to make sure the function apart of the Camera Class"
        func.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }

    return graphNode
}

export const init_graph_node_display_list = (drawingLayer, displayList) => {
    const graphNode = {
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_DISPLAY_LIST)

    graphNode.flags = drawingLayer << 8 | graphNode.flags & 0xFF

    return graphNode
}

export const init_graph_node_background = (pool, graphNode, background, backgroundFunc, zero) => {
    graphNode = {
        background,
        backgroundFunc,
        zero
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_BACKGROUND)

    if (backgroundFunc) {
        backgroundFunc(GEO_CONTEXT_CREATE, graphNode)
    }

    return graphNode
}

export const init_graph_node_shadow = (shadowScale, shadowSolidity, shadowType) => {
    const graphNode = {
        shadowType,
        shadowScale,
        shadowSolidity
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SHADOW)

    return graphNode
}

export const init_graph_node_scale = (drawingLayer, displayList, scale) => {
    const graphNode = {
        displayList,
        scale
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SCALE)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_rotation = (drawingLayer, displayList, rotation) => {
    const graphNode = {
        displayList,
        rotation
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ROTATION)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_translation = (drawingLayer, displayList, translation) => {
    const graphNode = {
        displayList,
        translation: [...translation]
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_TRANSLATION)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_translation_rotation = (drawingLayer, displayList, translation, rotation) => {
    const graphNode = {
        displayList,
        translation: [...translation],
        rotation: [...rotation]
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_TRANSLATION_ROTATION)
    graphNode.flags = (drawingLayer << 8) | (graphNode.flags & 0xFF)
    return graphNode
}

export const init_graph_node_ortho = (pool, graphNode, scale) => {
    graphNode = {
        scale
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ORTHO_PROJECTION)
    return graphNode
}

export const init_graph_node_master_list = (pool, graphNode, on) => {
    graphNode = {
        listHeads: Array(GFX_NUM_MASTER_LISTS),
    }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_MASTER_LIST)

    if (on) {
        graphNode.flags |= GRAPH_RENDER_Z_BUFFER
    }

    return graphNode
}

export const register_scene_graph_node = (g, graphNode) => {
    if (graphNode) {
        g.gCurGraphNodeList[g.gCurGraphNodeIndex] = graphNode

        if (g.gCurGraphNodeIndex == 0) {
            if (!g.gCurRootGraphNode) {
                g.gCurRootGraphNode = graphNode
            }
        } else {
            if (g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1].type == GRAPH_NODE_TYPE_OBJECT_PARENT) {
                g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1].sharedChild = graphNode
            } else {
                geo_add_child(g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1], graphNode)
            }
        }
    }
}
