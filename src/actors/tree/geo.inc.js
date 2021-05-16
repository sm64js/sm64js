import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { tree_seg3_dl_0302FEE8, tree_seg3_dl_03032088, tree_seg3_dl_03033258, tree_seg3_dl_03030FA0, tree_seg3_dl_03032170 } from "./model.inc"

export const bubbly_tree_geo = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, tree_seg3_dl_0302FEE8] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]

export const snow_tree_geo = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, tree_seg3_dl_03032088] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]

export const spiky_tree_geo = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, tree_seg3_dl_03030FA0] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]

export const spiky_tree1_geo = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, tree_seg3_dl_03032170] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]

export const palm_tree_geo = [
    { command: Geo.node_culling_radius, args: [800] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_ALPHA, tree_seg3_dl_03033258] },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
