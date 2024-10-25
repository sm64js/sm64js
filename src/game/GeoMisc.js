import { LevelUpdateInstance as LevelUpdate } from "./LevelUpdate"
import { CALC_DXT, G_IM_SIZ_16b, G_IM_SIZ_16b_BYTES, G_TX_LOADTILE, G_TX_NOLOD, G_TX_NOMASK, G_TX_NOMIRROR, gDPLoadBlock, gDPLoadSync, gDPSetTextureImage, gDPSetTile, gDPTileSync, gSPDisplayList, gSPEndDisplayList } from "../include/gbi"

import {
    save_file_get_flags, SAVE_FLAG_HAVE_WING_CAP,
 } from "./SaveFile"

import {
    dl_castle_lobby_wing_cap_light
} from "../levels/castle_inside/areas/1/5/model.inc"

import { GEO_CONTEXT_RENDER } from "../engine/graph_node"

export const make_vertex = (vtx, n, x, y, z, tx, ty, r, g, b, a) => {

    vtx[n] = {
        pos: [x, y, z],
        flag: 0,
        tc: [tx, ty],
        color: [r, g, b, a]
    }

}

/**
 * Create a display list for the light in the castle lobby that shows the
 * player where to look to enter Tower of the Wing Cap.
 */
export const geo_exec_inside_castle_light = (callContext, node) => {
    let /*s32*/ flags
    const displayList = []

    if (callContext == GEO_CONTEXT_RENDER) {
        flags = save_file_get_flags()
        if (LevelUpdate.gHudDisplay.stars >= 10 && !(flags & SAVE_FLAG_HAVE_WING_CAP)) {
            node.flags = (node.flags & 0xFF) | 0x500

            gSPDisplayList(displayList, dl_castle_lobby_wing_cap_light)
            gSPEndDisplayList(displayList)
        }
    }

    return displayList
}

export const gLoadBlockTexture = (dl, width, height, format, image) => {
    gDPSetTextureImage(dl, format, G_IM_SIZ_16b, 1, image);
    gDPTileSync(dl);
    gDPSetTile(dl, format, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD);
    gDPLoadSync(dl);
    gDPLoadBlock(dl, G_TX_LOADTILE, 0, 0, width * height - 1);
}

