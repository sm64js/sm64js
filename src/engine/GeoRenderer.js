import * as GraphNode from "./graph_node"
import * as MathUtil from "./math_util"
import { GameInstance as Game } from "../game/Game"


class GeoRenderer {

    constructor() {

        this.gMatStack = new Array(32).fill(0).map(() => new Array(4).fill(0).map(() => new Array(4).fill(0)))
        this.gMatStackIndex = 0
    }

    geo_process_master_list_sub(node) {
        const enableZBuffer = (node.flags & GraphNode.GRAPH_RENDER_Z_BUFFER) != 0

        if (enableZBuffer) {
            gSPSetGeometryMode(Game.gDisplayList, G_ZBUFFER)
        }
    }

    geo_process_master_list(node) {

        if (!this.gCurGraphNodeMasterList && node.children) {
            this.gCurGraphNodeMasterList = [ node ]
            node.wrapper.listHeads.fill(null)
            this.geo_process_node_and_siblings(node.children)
            this.geo_process_master_list_sub(node)
            this.gCurGraphNodeMasterList = null
        }

    }

    geo_process_node_and_siblings(children) {

        for (const child of children) {
            switch (child.type) {

                case GraphNode.GRAPH_NODE_TYPE_PERSPECTIVE:
                    break

                case GraphNode.GRAPH_NODE_TYPE_MASTER_LIST:
                    this.geo_process_master_list(child); break

                default: break

            }
        }

    }

    geo_process_root(root, b, c, clearColor) {
        console.log("processing root")
        if (root.node.flags & GraphNode.GRAPH_RENDER_ACTIVE) {

            ///this.gDisplayListHeap = alloc_only_pool_init(...)
            //const initialMatrix = new Array(4).fill(0).map(() => new Array(4).fill(0))

            MathUtil.mtxf_identity(this.gMatStack[this.gMatStackIndex])
            // MathUtil.mtxf_to_mtx(initialMatrix, this.gMatStack[this.gMatStackIndex])

            this.gCurGraphNodeRoot = root

            if (root.node.children[0]) { ///atleast one child
                console.log("processing children")
                this.geo_process_node_and_siblings(root.node.children)
            }

            this.gCurGraphNodeRoot = null
        }
    }
}

export const GeoRendererInstance = new GeoRenderer()
