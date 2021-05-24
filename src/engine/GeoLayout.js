import * as GraphNode from "./graph_node"

const copy3argsToObject = (pos, argIndex, args) => {
    for (let i = argIndex; i < argIndex + 3; i++) {
        pos.push(args[i])
    }
    return 3
}

class GeoLayout {
    constructor() {
        this.sCurrentLayout = {}
        this.gGeoLayoutStack = []

        // Layers
        this.LAYER_FORCE             = 0
        this.LAYER_OPAQUE            = 1
        this.LAYER_OPAQUE_DECAL      = 2
        this.LAYER_OPAQUE_INTER      = 3
        this.LAYER_ALPHA             = 4
        this.LAYER_TRANSPARENT       = 5
        this.LAYER_TRANSPARENT_DECAL = 6
        this.LAYER_TRANSPARENT_INTER = 7

        // sky background params
        this.BACKGROUND_OCEAN_SKY       = 0
        this.BACKGROUND_FLAMING_SKY     = 1
        this.BACKGROUND_UNDERWATER_CITY = 2
        this.BACKGROUND_BELOW_CLOUDS    = 3
        this.BACKGROUND_SNOW_MOUNTAINS  = 4
        this.BACKGROUND_DESERT          = 5
        this.BACKGROUND_HAUNTED         = 6
        this.BACKGROUND_GREEN_SKY       = 7
        this.BACKGROUND_ABOVE_CLOUDS    = 8
        this.BACKGROUND_PURPLE_SKY      = 9

        // Use to properly set a GraphNodeGenerated's parameter to point to the right painting
        this.PAINTING_ID = (id, grp) => {
            return id | (grp << 8)
        }
    }

    GEO_ANIMATED_PART(args) {this.node_animated_part(args)}
    GEO_BRANCH_AND_LINK(args) {this.branch_and_link(args)}
    GEO_CLOSE_NODE(args) {this.close_node(args)}
    GEO_CULLING_RADIUS(args) {this.node_culling_radius(args)}
    GEO_DISPLAY_LIST(args) {this.display_list(args)}
    GEO_END(args) {this.node_end(args)}
    GEO_NODE_START(args) {this.node_start(args)}
    GEO_OPEN_NODE(args) {this.open_node(args)}
    GEO_SCALE(args) {this.node_scale(args)}
    GEO_SHADOW(args) {this.node_shadow(args)}
    GEO_SWITCH_CASE(args) {this.node_switch_case(args)}

    branch_and_link(args) {
        // this may be buggy
        this.gGeoLayoutStack.push = this.sCurrentLayout
        this.gGeoLayoutStack.push = this.gCurGraphNodeIndex
        this.gGeoLayoutReturnIndex = this.gGeoLayoutStackIndex
        this.start_new_layout(args[0])
    }

    branch(args) {
        if (args[0] == 1) {
            this.sCurrentLayout.index++
            this.gGeoLayoutStack.push(this.sCurrentLayout)
        }

        this.start_new_layout(args[1])
    }
    
    return(args) {
        this.sCurrentLayout = this.gGeoLayoutStack.pop()
    }

    node_screen_area(args) {  /// node_root
        const x = args[1], y = args[2], width = args[3], height = args[4]
        let i = 0

        this.gGeoNumViews = args[0] + 2

        const graphNode = GraphNode.init_graph_node_root(null, null, 0, x, y, width, height)

        //this.gGeoViews = []

        graphNode.numViews = this.gGeoNumViews

        this.gGeoViews = Array(this.gGeoNumViews).fill(null)
        graphNode.views = this.gGeoViews

        GraphNode.register_scene_graph_node(this, graphNode)

        this.sCurrentLayout.index++
    }

    open_node(args) {
        this.gCurGraphNodeList.push(this.gCurGraphNodeList[this.gCurGraphNodeIndex++])
        this.sCurrentLayout.index++
    }

    close_node(args) {
        this.gCurGraphNodeIndex--
        this.sCurrentLayout.index++
    }

    node_master_list(args) { //zbuffer?
        const graphNode = GraphNode.init_graph_node_master_list(null, null, args[0])
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    display_list(args) {
        const drawingLayer = args[0]
        const displaylist = args[1]

        const graphNode = GraphNode.init_graph_node_display_list(drawingLayer, displaylist)

        GraphNode.register_scene_graph_node(this, graphNode)

        this.sCurrentLayout.index++
    }

    node_render_object_parent(args) {

        const graphNode = GraphNode.init_graph_node_object_parent(this.gObjParentGraphNode)

        GraphNode.register_scene_graph_node(this, graphNode)

        this.sCurrentLayout.index++
    }

    node_animated_part(args) {
        const drawingLayer = args[0]
        const translation = [ args[1], args[2], args[3] ]
        const displayList = args[4]

        const graphNode = GraphNode.init_graph_node_animated_part(drawingLayer, displayList, translation)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_ortho(args) {
        const scale = args[0] / 100.0

        const graphNode = GraphNode.init_graph_node_ortho(null, null, scale)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_perspective(args) {
        if (args[3]) { //optional 4th function argument

        }
        const graphNode = GraphNode.init_graph_node_perspective(null, null, args[0], args[1], args[2], args[3], 0)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_camera(args) {
        const cameraType = args[0]
        const func = args[7]
        let argIndex = 1
        const pos = [], focus = []

        argIndex += copy3argsToObject(pos, argIndex, args)
        argIndex += copy3argsToObject(focus, argIndex, args)

        const graphNode = GraphNode.init_graph_node_camera(null, null, pos, focus, func, cameraType)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.gGeoViews[0] = graphNode
        this.sCurrentLayout.index++
    }

    node_generated(args) {
        let param = args[0], theFunc = args[1], funcClass = args[2]

        // allow deferred linking:
        // GEO_ASM(0, 'MarioMisc.geo_mario_head_rotation')
        if (typeof theFunc == "string") {
            let func
            let parts = theFunc.split('.')
            if (parts.length == 1) {
                func = gLinker[theFunc]
                funcClass = null
            } else {
                funcClass = gLinker[parts[0]]
                func = funcClass[parts[1]]
            }
            if (!func) {
                throw "deferred node_generated function not found: " + theFunc
            }
            theFunc = func
        }
        if (!theFunc) {
            console.log("node_generated: skipping", theFunc)
        }

        const graphNode = GraphNode.init_graph_node_generated(null, null, theFunc, param, funcClass)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_background(args) {
        const graphNode = GraphNode.init_graph_node_background(null, null, args[0], args[1], 0)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_switch_case(args) {
        const graphNode = GraphNode.init_graph_node_switch_case(args[0], 0, args[1], args[2])
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_culling_radius(args) {
        const graphNode = GraphNode.init_graph_node_culling_radius(args[0])
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_render_range(args) {
        const graphNode = GraphNode.init_graph_node_render_range(args[0], args[1])
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_shadow(args) {
        const shadowType = args[0]
        const shadowSolidity = args[1]
        const shadowScale = args[2]

        const graphNode = GraphNode.init_graph_node_shadow(shadowScale, shadowSolidity, shadowType)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_billboard(args) {
        let drawingLayer = 0
        let params
        let translation
        let displaylist

        if (args && args.length > 0) {
            params = args[0]
            translation = [args[1], args[2], args[3]]
        } else {
            params = 0
            translation = [0, 0, 0]           
        }

        if (params & 0x80) {
            throw "more implementation needed in geo node billboard"
        }

        const graphNode = GraphNode.init_graph_node_billboard(drawingLayer, displaylist, translation)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    node_scale(args) {
        let drawingLayer = 0
        const params = args[0]
        const scale = args[1] / 65536.0
        let displaylist

        if (params & 0x80) {
            throw "more implementation needed in geo scale"
        }

        const graphNode = GraphNode.init_graph_node_scale(drawingLayer, displaylist, scale)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }


    // layer, rx, ry, rz <, dl>
    node_rotation(args) {
        const drawingLayer = args[0]
        const rot = [ args[1], args[2], args[3] ]
        const displayList = args[4]

        // if (params & 0x80) {
        //     throw "unimplemented feature in node rotation"
        // }

        const graphNode = GraphNode.init_graph_node_rotation(drawingLayer, displayList, rot)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }


    // layer, tx, ty, tz <, dl>
    node_translate(args) {
        const drawingLayer = args[0]
        const trans = [ args[1], args[2], args[3] ]
        const displayList = args[4]

        const graphNode = GraphNode.init_graph_node_translation(drawingLayer, displayList, trans)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }


    // layer, tx, ty, tz, rx, ry, rz <, dl>
    node_translate_rotate(args) {
        const drawingLayer = args[0]
        const trans = [ args[1], args[2], args[3] ]
        const rot   = [ args[4], args[5], args[6] ]
        const displayList = args[7]

        const graphNode = GraphNode.init_graph_node_translation_rotation(drawingLayer, displayList, trans, rot)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }


    node_start(args) {
        const graphNode = GraphNode.init_graph_node_start()
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }


    node_end(args) {
        this.gGeoLayoutStackIndex = this.gGeoLayoutReturnIndex
        this.gGeoLayoutReturnIndex = this.gGeoLayoutStack[--this.gGeoLayoutStackIndex] /// ??
        this.gCurGraphNodeIndex = this.gGeoLayoutStack[this.gGeoLayoutStackIndex] // ?
        this.gGeoLayoutCommand = this.gGeoLayoutStack[--this.gGeoLayoutStackIndex]
        this.sCurrentLayout.index++
    }


    // param, ux, uy, uz, nodeFunc
    node_held_object(args) {
        const offset = [ args[1], args[2], args[3] ]
        const nodeFunc = args[4]

        const graphNode = GraphNode.init_graph_node_held_object(null, null, offset, nodeFunc)
        GraphNode.register_scene_graph_node(this, graphNode)
        this.sCurrentLayout.index++
    }

    start_new_layout(layout) {
        if (typeof layout == "function") {
            layout = layout()
        }
        this.sCurrentLayout = {layout: layout, index: 0}
    }

    process_geo_layout(geoLayout) {
        this.start_new_layout(geoLayout)

        /// set a bunch of other initial globals
        this.gCurRootGraphNode = null
        this.gGeoNumViews = 0

        this.gCurGraphNodeList = [0]
        this.gCurGraphNodeIndex = 0

        this.gGeoLayoutStackIndex = 2
        this.gGeoLayoutReturnIndex = 2 // stack index is often copied here?

        this.gGeoLayoutStack = [0, 0]

        //console.log("proccesing geo layout")

        while (this.sCurrentLayout.index < this.sCurrentLayout.layout.length) {
            const cmd = this.sCurrentLayout.layout[this.sCurrentLayout.index]
            if (Array.isArray(cmd)) {
                if (!this[cmd[0]]) {
                    throw "undefined level command: " + cmd[0]
                }
                // new style of command: ['name', args, ...]
                this[cmd[0]].call(this, cmd.slice(1))
            } else if (cmd.call) {
                throw "huh"
            } else {
                //console.log("processing layout command: " + cmd.command.name)
                cmd.command.call(this, cmd.args)
            }
        }

        //console.log("finshed processing geo layout")
        //console.log(this.gCurRootGraphNode)
        return this.gCurRootGraphNode
    }
}

export const GeoLayoutInstance = new GeoLayout()
gLinker.GeoLayout = GeoLayoutInstance

const Geo = GeoLayoutInstance;
export const GEO_ANIMATED_PART = (...args)            => {return {command: Geo.node_animated_part, args: args}}
export const GEO_ASM = (...args)                      => {return {command: Geo.node_generated, args: args}}
export const GEO_BACKGROUND = (...args)               => {return {command: Geo.node_background, args: args}}
export const GEO_BACKGROUND_COLOR = (...args)         => {return {command: Geo.node_background, args: args}}
export const GEO_BILLBOARD = (...args)                => {return {command: Geo.node_billboard, args: args}}
export const GEO_BRANCH = (...args)                   => {return {command: Geo.branch, args: args}}
export const GEO_BRANCH_AND_LINK = (...args)          => {return {command: Geo.branch_and_link, args: args}}
export const GEO_CAMERA = (...args)                   => {return {command: Geo.node_camera, args: args}}
export const GEO_CAMERA_FRUSTUM = (...args)           => {return {command: Geo.node_perspective, args: args}}
export const GEO_CAMERA_FRUSTUM_WITH_FUNC = (...args) => {return {command: Geo.node_perspective, args: args}}
export const GEO_CLOSE_NODE = (...args)               => {return {command: Geo.close_node, args: args}}
export const GEO_CULLING_RADIUS = (...args)           => {return {command: Geo.node_culling_radius, args: args}}
export const GEO_DISPLAY_LIST = (...args)             => {return {command: Geo.display_list, args: args}}
export const GEO_END = (...args)                      => {return {command: Geo.node_end, args: args}}
export const GEO_HELD_OBJECT = (...args)              => {return {command: Geo.node_held_object, args: args}}
export const GEO_NODE_SCREEN_AREA = (...args)         => {return {command: Geo.node_screen_area, args: args}}
export const GEO_NODE_ORTHO = (...args)               => {return {command: Geo.node_ortho, args: args}}
export const GEO_NODE_START = (...args)               => {return {command: Geo.node_start, args: args}}
export const GEO_OPEN_NODE = (...args)                => {return {command: Geo.open_node, args: args}}
export const GEO_RENDER_OBJ = (...args)               => {return {command: Geo.node_render_object_parent, args: args}}
export const GEO_RENDER_RANGE = (...args)             => {return {command: Geo.node_render_range, args: args}}
export const GEO_RETURN = (...args)                   => {return {command: Geo.return, args: args}}
export const GEO_ROTATION_NODE = (...args)            => {return {command: Geo.node_rotation, args: args}}
export const GEO_SCALE = (...args)                    => {return {command: Geo.node_scale, args: args}}
export const GEO_SHADOW = (...args)                   => {return {command: Geo.node_shadow, args: args}}
export const GEO_SWITCH_CASE = (...args)              => {return {command: Geo.node_switch_case, args: args}}
export const GEO_TRANSLATE_NODE = (...args)           => {return {command: Geo.node_translate, args: args}}
export const GEO_TRANSLATE_NODE_WITH_DL = (...args)   => {return {command: Geo.node_translate, args: args}}
export const GEO_TRANSLATE_ROTATE = (...args)         => {return {command: Geo.node_translate_rotate, args: args}}
export const GEO_ZBUFFER = (...args)                  => {return {command: Geo.node_master_list, args: args}}

export const LAYER_FORCE                = Geo.LAYER_FORCE
export const LAYER_OPAQUE               = Geo.LAYER_OPAQUE
export const LAYER_OPAQUE_DECAL         = Geo.LAYER_OPAQUE_DECAL
export const LAYER_OPAQUE_INTER         = Geo.LAYER_OPAQUE_INTER
export const LAYER_ALPHA                = Geo.LAYER_ALPHA
export const LAYER_TRANSPARENT          = Geo.LAYER_TRANSPARENT
export const LAYER_TRANSPARENT_DECAL    = Geo.LAYER_TRANSPARENT_DECAL
export const LAYER_TRANSPARENT_INTER    = Geo.LAYER_TRANSPARENT_INTER

export const BACKGROUND_OCEAN_SKY       = Geo.BACKGROUND_OCEAN_SKY
export const BACKGROUND_FLAMING_SKY     = Geo.BACKGROUND_FLAMING_SKY
export const BACKGROUND_UNDERWATER_CITY = Geo.BACKGROUND_UNDERWATER_CITY
export const BACKGROUND_BELOW_CLOUDS    = Geo.BACKGROUND_BELOW_CLOUDS
export const BACKGROUND_SNOW_MOUNTAINS  = Geo.BACKGROUND_SNOW_MOUNTAINS
export const BACKGROUND_DESERT          = Geo.BACKGROUND_DESERT
export const BACKGROUND_HAUNTED         = Geo.BACKGROUND_HAUNTED
export const BACKGROUND_GREEN_SKY       = Geo.BACKGROUND_GREEN_SKY
export const BACKGROUND_ABOVE_CLOUDS    = Geo.BACKGROUND_ABOVE_CLOUDS
export const BACKGROUND_PURPLE_SKY      = Geo.BACKGROUND_PURPLE_SKY

export const PAINTING_ID                = Geo.PAINTING_ID
