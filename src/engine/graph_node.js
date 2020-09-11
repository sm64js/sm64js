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
export const GRAPH_NODE_TYPE_ROOT   =                 0x001
export const GRAPH_NODE_TYPE_ORTHO_PROJECTION  =      0x002
export const GRAPH_NODE_TYPE_PERSPECTIVE     =        0x003 | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_MASTER_LIST   =          0x004
export const GRAPH_NODE_TYPE_START    =               0x00A
export const GRAPH_NODE_TYPE_LEVEL_OF_DETAIL = 0x00B
export const GRAPH_NODE_TYPE_CAMERA   =               0x014 | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_TRANSLATION_ROTATION =   0x015
export const GRAPH_NODE_TYPE_TRANSLATION =            0x016
export const GRAPH_NODE_TYPE_ROTATION  =              0x017
export const GRAPH_NODE_TYPE_OBJECT   =               0x018
export const GRAPH_NODE_TYPE_ANIMATED_PART  =         0x019
export const GRAPH_NODE_TYPE_BILLBOARD    =           0x01A
export const GRAPH_NODE_TYPE_DISPLAY_LIST  =          0x01B
export const GRAPH_NODE_TYPE_SCALE      =             0x01C
export const GRAPH_NODE_TYPE_SHADOW    =              0x028
export const GRAPH_NODE_TYPE_OBJECT_PARENT     =      0x029
export const GRAPH_NODE_TYPE_GENERATED_LIST =         0x02A | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_BACKGROUND =             0x02C | GRAPH_NODE_TYPE_FUNCTIONAL
export const GRAPH_NODE_TYPE_CULLING_RADIUS =         0x02F
export const GRAPH_NODE_TYPE_SWITCH_CASE         =    0x00C | GRAPH_NODE_TYPE_FUNCTIONAL

export const GFX_NUM_MASTER_LISTS = 8

export const GEO_CONTEXT_CREATE        =   0 // called when node is created from a geo command
export const GEO_CONTEXT_RENDER        =   1 // called from rendering_graph_node.c
export const GEO_CONTEXT_AREA_UNLOAD   =   2 // called when unloading an area
export const GEO_CONTEXT_AREA_LOAD     =   3 // called when loading an area
export const GEO_CONTEXT_AREA_INIT     =   4 // called when initializing the 8 areas
export const GEO_CONTEXT_HELD_OBJ      =   5 // called when processing a GraphNodeHeldObj


const init_graph_node_object = (graphNode, sharedChild, pos, angle, scale) => {
    graphNode = {
        node: { },
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
    graphNode.node.flags |= GRAPH_RENDER_HAS_ANIMATION

    return graphNode

}

export const geo_obj_init_spawninfo = (graphNode, spawn) => {

    graphNode.scale = [1,1,1]
    graphNode.angle = [ ...spawn.startAngle ]
    graphNode.pos = [ ...spawn.startPos ]

    graphNode.unk18 = spawn.areaIndex
    graphNode.unk19 = spawn.activeAreaIndex
    graphNode.sharedChild = spawn.unk18
    graphNode.unk4C = spawn
    graphNode.throwMatrix = null
    graphNode.unk38 = { curAnim: 0 }

    graphNode.node.flags |= GRAPH_RENDER_ACTIVE
    graphNode.node.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.node.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.node.flags &= ~GRAPH_RENDER_BILLBOARD
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

    graphNode.node.flags |= GRAPH_RENDER_ACTIVE
    graphNode.node.flags &= ~GRAPH_RENDER_INVISIBLE
    graphNode.node.flags |= GRAPH_RENDER_HAS_ANIMATION
    graphNode.node.flags &= ~GRAPH_RENDER_BILLBOARD

}

export const geo_obj_init_animation = (graphNode, anim) => {

    if (graphNode.unk38.curAnim != anim) {
        graphNode.unk38.curAnim = anim
        graphNode.unk38.animFrame = anim.unk04 + ((anim.flags & Mario.ANIM_FLAG_FORWARD) ? 1 : -1)
        graphNode.unk38.animAccel = 0
        graphNode.unk38.animYTrans = 0
    }

}

export const geo_reset_object_node = (graphNode) =>  {
    const zeroVec = [0, 0, 0]
    const oneVec = [1, 1, 1]

    graphNode = init_graph_node_object(graphNode, 0, zeroVec, zeroVec, oneVec)
    
    geo_add_child(GeoLayout.gObjParentGraphNode.node, graphNode.node)
    graphNode.node.flags &= ~GRAPH_RENDER_ACTIVE
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

export const geo_add_child = (parent, childNode) => {

    if (childNode) {
        childNode.parent = parent

        const parentFirstChild = parent.children[0]

        if (!parentFirstChild) {  /// first child == null
            parent.children = [childNode]
            childNode.prev = childNode
            childNode.next = childNode
        } else {  /// first child != null or children is not empty
            const parentLastChild = parent.children[parent.children.length - 1]
            const parentLastChild2 = parentFirstChild.prev
            if (parentLastChild !== parentLastChild2) throw "error 2 last child methods don't match"
            childNode.prev = parentLastChild
            childNode.next = parentFirstChild
            parentFirstChild.prev = childNode
            parentLastChild.next = childNode
            parent.children.push(childNode)
        }
    }

    return childNode

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

const init_scene_graph_node_links = (graphNode, type) => {
    graphNode.node.type = type
    graphNode.node.flags = GRAPH_RENDER_ACTIVE
    graphNode.node.prev = graphNode.node
    graphNode.node.next = graphNode.node
    graphNode.node.parent = null
    graphNode.node.children = []
    graphNode.node.wrapper = graphNode
}

export const init_graph_node_start = (pool, graphNode) => {
    graphNode = { node: {} }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_START)

    return graphNode
}


export const init_graph_node_root = (pool, graphNode, areaIndex, x, y, width, height) => {

    graphNode = {
        node: {},
        areaIndex, x, y, width, height,
        unk15: 0,
        views: null,
        numViews: 0
    }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ROOT)

    return graphNode
}

export const init_graph_node_culling_radius = (radius) => {
    const graphNode = { node: {}, radius }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_CULLING_RADIUS)

    return graphNode
}

export const init_graph_node_render_range = (minDistance, maxDistance) => {
    const graphNode = { node: {}, minDistance, maxDistance }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_LEVEL_OF_DETAIL)

    return graphNode
}

export const init_graph_node_switch_case = (numCases, selectedCase, nodeFunc, funcClass) => {
    const graphNode = {
        node: {},
        numCases, selectedCase,
        fnNode: { func: nodeFunc, funcClass }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SWITCH_CASE)

    if (nodeFunc) {
        nodeFunc.call(funcClass, GEO_CONTEXT_CREATE, graphNode)
    }

    return graphNode
}

export const init_graph_node_perspective = (pool, graphNode, fov, near, far, nodeFunc, unused) => {

    graphNode = {
        node: {},
        fov,
        near,
        far,
        fnNode: { func: nodeFunc }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_PERSPECTIVE)

    if (nodeFunc) {
        if (nodeFunc != CameraInstance.geo_camera_fov) throw "check to make sure the function apart of the Camera Class"
        nodeFunc.call(CameraInstance, GEO_CONTEXT_CREATE, graphNode)
    }

  return graphNode

}

export const init_graph_node_generated = (pool, graphNode, gfxFunc, param, funcClass) => {

    graphNode = {
        node: {},
        param,
        fnNode: { func: gfxFunc, funcClass }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_GENERATED_LIST)

    if (gfxFunc) {
        gfxFunc.call(funcClass, GEO_CONTEXT_CREATE, graphNode.node)
    }

    return graphNode
}

export const init_graph_node_object_parent = (sharedChild) => {

    const graphNode = {
        node: {},
        sharedChild: sharedChild.node
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_OBJECT_PARENT)

    return graphNode

}

export const init_graph_node_animated_part = (drawingLayer, displayList, translation) => {
    const graphNode = {
        node: {},
        translation: [ ...translation ],
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ANIMATED_PART)

    graphNode.node.flags = (drawingLayer << 8) | (graphNode.node.flags & 0xFF)

    return graphNode

}

export const init_graph_node_camera = (pool, graphNode, pos, focus, func, mode) => {

    graphNode = {
        node: {},
        roll: 0,
        rollScreen: 0,
        config: { mode: 0, camera: null },
        pos,
        focus,
        fnNode: { func }
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_CAMERA)

    if (func) {
        if (func != CameraInstance.geo_camera_main) throw "check to make sure the function apart of the Camera Class"
        func.call(CameraInstance, GEO_CONTEXT_CREATE, graphNode)
    }

    return graphNode

}

export const init_graph_node_display_list = (drawingLayer, displayList) => {
    const graphNode = {
        node: {},
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_DISPLAY_LIST)

    graphNode.node.flags = drawingLayer << 8 | graphNode.node.flags & 0xFF

    return graphNode
}

export const init_graph_node_background = (pool, graphNode, background, backgroundFunc, zero) => {

    graphNode = {
        node: {},
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
        node: {},
        shadowType,
        shadowScale,
        shadowSolidity
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SHADOW)

    return graphNode
}

export const init_graph_node_scale = (drawingLayer, displayList, scale) => {
    const graphNode = {
        node: {},
        scale,
        displayList
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_SCALE)

    graphNode.node.flags = (drawingLayer << 8) | (graphNode.node.flags & 0xFF)

    return graphNode
}

export const init_graph_node_rotation = (drawingLayer, displayList, rotation) => {
    const graphNode = {
        node: {},
        displayList,
        rotation
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ROTATION)

    graphNode.node.flags = (drawingLayer << 8) | (graphNode.node.flags & 0xFF)

    return graphNode

}

export const init_graph_node_ortho = (pool, graphNode, scale) => {
    graphNode = {
        node: {},
        scale
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_ORTHO_PROJECTION)

    return graphNode
}

export const init_graph_node_master_list = (pool, graphNode, on) => {

    graphNode = {
        node: {},
        listHeads: Array(GFX_NUM_MASTER_LISTS),
    }
    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_MASTER_LIST)

    if (on) graphNode.node.flags |= GRAPH_RENDER_Z_BUFFER

    return graphNode

}

export const register_scene_graph_node = (g, graphNode) => {
    if (graphNode) {
        g.gCurGraphNodeList[g.gCurGraphNodeIndex] = graphNode

        if (g.gCurGraphNodeIndex == 0) {
            if (g.gCurRootGraphNode == null) g.gCurRootGraphNode = graphNode
        } else {
            if (g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1].type == GRAPH_NODE_TYPE_OBJECT_PARENT) {
                g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1].sharedChild = graphNode
            } else {
                geo_add_child(g.gCurGraphNodeList[g.gCurGraphNodeIndex - 1].node, graphNode.node)
            }
        }
    }
}
