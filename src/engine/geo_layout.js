import { init_graph_node_root, register_scene_graph_node } from  "./graph_node"

class GeoLayout {
    constructor() {
        this.sCurrentLayout = {}
    }

    node_screen_area(args) {  /// node_root
        console.log("node screen area")

        const x = args[1], y = args[2], width = args[3], height = args[4]
        let i = 0

        this.gGeoNumViews = args[0] + 2

        const graphNode = init_graph_node_root(null, null, 0, x, y, width, height)

        //this.gGeoViews = null
        //graphNode.views = this.gGeoViews

        graphNode.numViews = this.gGeoNumViews

        this.gGeoViews = Array(this.gGeoNumViews).fill(null)

        register_scene_graph_node(this, graphNode.node)

        this.sCurrentLayout.index++
    }


    process_geo_layout(geoLayout) {
        this.sCurrentLayout.layout = geoLayout
        this.sCurrentLayout.index = 0

        /// set a bunch of other initial globals
        this.gCurRootGraphNode = null
        this.gGeoNumViews = 0

        this.gCurGraphNodeList = [0]
        this.gCurGraphNodeIndex = 0

        this.gGeoLayoutStackIndex = 2
        this.gGeoLayoutReturnIndex = 2 // stack index is often copied here?

        //this.gGraphNodePool = {}

        this.gGeoLayoutStack = [0, 0]

        console.log("proccesing geo layout")

        while (this.sCurrentLayout.index < geoLayout.length) {
            const cmd = this.sCurrentLayout.layout[this.sCurrentLayout.index]
            console.log("processing layout command: " + cmd.command.name)
            cmd.command.call(this, cmd.args)
        }

        return {}

    }
}

export const GeoLayoutInstance = new GeoLayout()
