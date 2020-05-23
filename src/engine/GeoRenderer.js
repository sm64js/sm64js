import * as GraphNode from "./graph_node"
import * as MathUtil from "./math_util"
import { GameInstance as Game } from "../game/Game"
import * as Gbi from "../include/gbi"

const canvas = document.querySelector('#gameCanvas')

class GeoRenderer {

    constructor() {

        this.gMatStack = new Array(32).fill(0).map(() => new Array(4).fill(0).map(() => new Array(4).fill(0)))
        this.gMatStackIndex = 0
    }

    geo_process_master_list_sub(node) {
        const enableZBuffer = (node.flags & GraphNode.GRAPH_RENDER_Z_BUFFER) != 0

        if (enableZBuffer) {
            Gbi.gSPSetGeometryMode(Game.gDisplayList, Gbi.G_ZBUFFER)
        }

        for (let i = 0; i < GraphNode.GFX_NUM_MASTER_LISTS; i++) {
            if (node.wrapper.listHeads[i].length > 0) {
                for (const displayNode of node.wrapper.listHeads[i]) {
                    Gbi.gSPMatrix(Game.gDisplayList, displayNode.transform, Gbi.G_MTX_MODELVIEW | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)
                    Gbi.gSPDisplayList(Game.gDisplayList, displayNode.displayList)

                }
            }

        }
    }

    geo_process_master_list(node) {

        if (!this.gCurGraphNodeMasterList && node.children[0]) {
            this.gCurGraphNodeMasterList = node
            node.wrapper.listHeads.fill([])
            this.geo_process_node_and_siblings(node.children)
            this.geo_process_master_list_sub(node)
            this.gCurGraphNodeMasterList = null
        }

    }

    geo_process_perspective(node) {
        //if (node.wrapper.func) {
        //    node.wrapper.func()
        //}

        if (node.children[0]) {
            const aspect = canvas.width / canvas.height
            const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
            const perspNorm = {}

            MathUtil.guPerspective(mtx, perspNorm,
                node.wrapper.fov, aspect, node.wrapper.near, node.wrapper.far, 1.0)

            //Gbi.gSPPerspNormalize(Game.gDisplayList, perspNorm.value)
            Gbi.gSPMatrix(Game.gDisplayList, mtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_LOAD | Gbi.G_MTX_NOPUSH)

            this.gCurGraphNodeCamFrustum = node
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamFrustum = null
        }
    }

    geo_process_camera(node) {

        //if (node.wrapper.func) {
        //    node.wrapper.func()
        //}

        const rollMtx = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const cameraTransform = new Array(4).fill(0).map(() => new Array(4).fill(0))
        const mtx = new Array(4).fill(0).map(() => new Array(4).fill(0))

        MathUtil.mtxf_rotate_xy(rollMtx, node.wrapper.rollScreen)

        Gbi.gSPMatrix(Game.gDisplayList, rollMtx, Gbi.G_MTX_PROJECTION | Gbi.G_MTX_MUL | Gbi.G_MTX_NOPUSH)

        MathUtil.mtxf_lookat(cameraTransform, node.wrapper.pos, node.wrapper.focus, node.wrapper.roll)
        MathUtil.mtxf_mul(this.gMatStack[this.gMatStackIndex + 1], cameraTransform, this.gMatStack[this.gMatStackIndex])
        this.gMatStackIndex++
        if (node.children[0]) {
            this.gCurGraphNodeCamera = node
            node.wrapper.matrixPtr = this.gMatStack[this.gMatStackIndex]
            this.geo_process_node_and_siblings(node.children)
            this.gCurGraphNodeCamera = null
        }
        this.gMatStackIndex--

    }

    geo_process_background(node) {

        //if (node.wrapper.func) {
        //    node.wrapper.func()
        //    if (list != 0) geo_append_display_list(...)
        //} else {

        if (this.gCurGraphNodeMasterList) {
            ////.....
        }

        if (node.children[0]) {
            this.geo_process_node_and_siblings(node.children)
        }

    }

    geo_process_generated_list(node) {
        if (node.wrapper.func) {
            console.log("processing function from generated_list\n")

            const list = node.wrapper.func(GraphNode.GEO_CONTEXT_RENDER, node, this.gMatStack[this.gMatStackIndex])
            if (list) {
                this.geo_append_display_list(list, node.flags >> 8)
            }
        }
        
    }

    geo_append_display_list(displayList, layer) {

        if (this.gCurGraphNodeMasterList) {
            const listNode = {
                transform: this.gMatStack[this.gMatStackIndex],
                displayList
            }

            //console.log(this.gCurGraphNodeMasterList)

            this.gCurGraphNodeMasterList.wrapper.listHeads[layer].push(listNode)
        }

    }

    geo_process_node_and_siblings(children) {

        for (const child of children) {
            switch (child.type) {

                case GraphNode.GRAPH_NODE_TYPE_PERSPECTIVE:
                    this.geo_process_perspective(child); break

                case GraphNode.GRAPH_NODE_TYPE_MASTER_LIST:
                    this.geo_process_master_list(child); break

                case GraphNode.GRAPH_NODE_TYPE_CAMERA:
                    this.geo_process_camera(child); break

                case GraphNode.GRAPH_NODE_TYPE_BACKGROUND:
                    this.geo_process_background(child); break

                case GraphNode.GRAPH_NODE_TYPE_GENERATED_LIST:
                    this.geo_process_generated_list(child); break

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
