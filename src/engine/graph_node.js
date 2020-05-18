
const GRAPH_RENDER_ACTIVE = (1 << 0)
const GRAPH_RENDER_CHILDREN_FIRST = (1 << 1)
const GRAPH_RENDER_BILLBOARD = (1 << 2)
const GRAPH_RENDER_Z_BUFFER = (1 << 3)
const GRAPH_RENDER_INVISIBLE = (1 << 4)
const GRAPH_RENDER_HAS_ANIMATION = (1 << 5)

// Whether the node type has a function pointer of type GraphNodeFunc
const GRAPH_NODE_TYPE_FUNCTIONAL =             0x100

// Type used for Bowser and an unused geo function in obj_behaviors.c
const GRAPH_NODE_TYPE_400    =                 0x400

// The discriminant for different types of geo nodes
const GRAPH_NODE_TYPE_ROOT   =                 0x001
const GRAPH_NODE_TYPE_ORTHO_PROJECTION  =      0x002
const GRAPH_NODE_TYPE_MASTER_LIST   =          0x004
const GRAPH_NODE_TYPE_START    =               0x00A
const GRAPH_NODE_TYPE_LEVEL_OF_DETAIL  =       0x00B
const GRAPH_NODE_TYPE_TRANSLATION_ROTATION =   0x015
const GRAPH_NODE_TYPE_TRANSLATION =            0x016
const GRAPH_NODE_TYPE_ROTATION  =              0x017
const GRAPH_NODE_TYPE_OBJECT   =               0x018
const GRAPH_NODE_TYPE_ANIMATED_PART  =         0x019
const GRAPH_NODE_TYPE_BILLBOARD    =           0x01A
const GRAPH_NODE_TYPE_DISPLAY_LIST  =          0x01B
const GRAPH_NODE_TYPE_SCALE      =             0x01C
const GRAPH_NODE_TYPE_SHADOW    =              0x028
const GRAPH_NODE_TYPE_OBJECT_PARENT  =         0x029
const GRAPH_NODE_TYPE_CULLING_RADIUS = 0x02F

const GFX_NUM_MASTER_LISTS = 8

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
            childNode.prev = parentLastChild
            childNode.next = parentFirstChild
            parentFirstChild.prev = childNode
            parentLastChild.next = childNode
        }
    }

    return childNode

}

const init_scene_graph_node_links = (graphNode, type) => {
    graphNode.node.type = type
    graphNode.node.flags = GRAPH_RENDER_ACTIVE
    graphNode.node.prev = graphNode
    graphNode.node.next = graphNode
    graphNode.node.parent = null
    graphNode.node.children = []
    graphNode.node.wrapper = graphNode
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

export const init_graph_node_background = (pool, graphNode, background, backgroundFunc, zero) => {

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
        listTails: Array(GFX_NUM_MASTER_LISTS)
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
