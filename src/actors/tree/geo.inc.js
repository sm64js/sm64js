// Tree

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_ALPHA
} from "../../engine/GeoLayout"

import {
    tree_seg3_dl_0302FEE8, tree_seg3_dl_03030FA0, tree_seg3_dl_03032088, tree_seg3_dl_03032170,
    tree_seg3_dl_03033258
} from "./model.inc"


// 0x16000FE8
export const bubbly_tree_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, tree_seg3_dl_0302FEE8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16001000
export const spiky_tree_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, tree_seg3_dl_03030FA0),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16001018
export const snow_tree_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, tree_seg3_dl_03032088),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16001030
export const spiky_tree1_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, tree_seg3_dl_03032170),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 0x16001048
export const palm_tree_geo = () => {return [
    GEO_CULLING_RADIUS(800),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_ALPHA, tree_seg3_dl_03033258),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621736686 - 2021-05-23 21:27:03 -0700
