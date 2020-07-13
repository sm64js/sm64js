import { CameraInstance } from "../game/Camera"
import { G_CC_DECALRGB } from "../include/gbi"

export const GRAPH_RENDER_ACTIVE = (1 << 0)
export const GRAPH_RENDER_CHILDREN_FIRST = (1 << 1)
export const GRAPH_RENDER_BILLBOARD = (1 << 2)
export const GRAPH_RENDER_Z_BUFFER = (1 << 3)
export const GRAPH_RENDER_INVISIBLE = (1 << 4)
export const GRAPH_RENDER_HAS_ANIMATION = (1 << 5)

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

export const GFX_NUM_MASTER_LISTS = 8

export const GEO_CONTEXT_CREATE        =   0 // called when node is created from a geo command
export const GEO_CONTEXT_RENDER        =   1 // called from rendering_graph_node.c
export const GEO_CONTEXT_AREA_UNLOAD   =   2 // called when unloading an area
export const GEO_CONTEXT_AREA_LOAD     =   3 // called when loading an area
export const GEO_CONTEXT_AREA_INIT     =   4 // called when initializing the 8 areas
export const GEO_CONTEXT_HELD_OBJ      =   5 // called when processing a GraphNodeHeldObj

const geo_add_child = (parent, childNode) => {

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

export const init_graph_node_generated = (pool, graphNode, gfxFunc, param) => {

    graphNode = {
        node: {},
        param,
        func: gfxFunc
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_GENERATED_LIST)

    if (gfxFunc) {
        gfxFunc(GEO_CONTEXT_CREATE,  graphNode.node, null)
    }

    return graphNode
}

export const init_graph_node_camera = (pool, graphNode, pos, focus, func, mode) => {

    graphNode = {
        node: {},
        roll: 0,
        rollScreen: 0,
        config: { mode: 0 },
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
        zero
    }

    init_scene_graph_node_links(graphNode, GRAPH_NODE_TYPE_BACKGROUND)

    //if (backgroundFunc) {
    //    backgroundFunc(.....)
    //}

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
