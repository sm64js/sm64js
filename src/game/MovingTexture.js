import { GEO_CONTEXT_RENDER } from "../engine/graph_node"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { castle_grounds_movtex_water } from "../levels/castle_grounds/areas/1/movtext.inc"
import { GeoLayoutInstance as GeoLayout } from "../engine/GeoLayout"
import * as Gbi from "../include/gbi"
import { dl_waterbox_rgba16_begin, dl_waterbox_end, dl_draw_quad_verts_0123, texture_waterbox_water, texture_waterbox_lava } from "../common_gfx/segment2"
import { ROTATE_CLOCKWISE, TEXTURE_MIST } from "../include/moving_texture_macros"
import { make_vertex } from "./GeoMisc"

// Vertex colors for rectangles. Used to give mist a tint
const MOVTEX_VTX_COLOR_DEFAULT = 0 // no tint (white vertex colors)
const MOVTEX_VTX_COLOR_YELLOW = 1  // used for Hazy Maze Cave toxic haze
const MOVTEX_VTX_COLOR_RED = 2     // used for Shifting Sand Land around the Tox box maze

const MOVTEX_AREA_BBH = (0x04 << 8)
const MOVTEX_AREA_CCM = (0x05 << 8)
const MOVTEX_AREA_INSIDE_CASTLE = (0x06 << 8)
const MOVTEX_AREA_HMC = (0x07 << 8)
const MOVTEX_AREA_SSL = (0x08 << 8)
const MOVTEX_AREA_SL = (0x10 << 8)
const MOVTEX_AREA_WDW = (0x11 << 8)
const MOVTEX_AREA_JRB = (0x12 << 8)
const MOVTEX_AREA_THI = (0x13 << 8)
const MOVTEX_AREA_TTC = (0x14 << 8)
const MOVTEX_AREA_CASTLE_GROUNDS = (0x16 << 8)
const MOVTEX_AREA_BITFS = (0x19 << 8)
const MOVTEX_AREA_LLL = (0x22 << 8)
const MOVTEX_AREA_DDD = (0x23 << 8)
const MOVTEX_AREA_WF = (0x24 << 8)
const MOVTEX_AREA_CASTLE_COURTYARD = (0x26 << 8)
const MOVTEX_AREA_COTMC = (0x28 << 8)
const MOVTEX_AREA_TTM = (0x36 << 8)

// Quad collections
const BBH_MOVTEX_MERRY_GO_ROUND_WATER_ENTRANCE = (0 | MOVTEX_AREA_BBH)
const BBH_MOVTEX_MERRY_GO_ROUND_WATER_SIDE = (1 | MOVTEX_AREA_BBH)
const CCM_MOVTEX_PENGUIN_PUDDLE_WATER = (1 | MOVTEX_AREA_CCM)
const INSIDE_CASTLE_MOVTEX_GREEN_ROOM_WATER = (0 | MOVTEX_AREA_INSIDE_CASTLE)
const INSIDE_CASTLE_MOVTEX_MOAT_WATER = (0x12 | MOVTEX_AREA_INSIDE_CASTLE)
const HMC_MOVTEX_DORRIE_POOL_WATER = (1 | MOVTEX_AREA_HMC)
const HMC_MOVTEX_TOXIC_MAZE_MIST = (2 | MOVTEX_AREA_HMC)
const SSL_MOVTEX_PUDDLE_WATER = (1 | MOVTEX_AREA_SSL)
const SSL_MOVTEX_TOXBOX_QUICKSAND_MIST = (0x51 | MOVTEX_AREA_SSL)
const SL_MOVTEX_WATER = (1 | MOVTEX_AREA_SL)
const WDW_MOVTEX_AREA1_WATER = (1 | MOVTEX_AREA_WDW)
const WDW_MOVTEX_AREA2_WATER = (2 | MOVTEX_AREA_WDW)
const JRB_MOVTEX_WATER = (1 | MOVTEX_AREA_JRB)
const JRB_MOVTEX_INTIAL_MIST = (5 | MOVTEX_AREA_JRB)
const JRB_MOVTEX_SINKED_BOAT_WATER = (2 | MOVTEX_AREA_JRB)
const THI_MOVTEX_AREA1_WATER = (1 | MOVTEX_AREA_THI)
const THI_MOVTEX_AREA2_WATER = (2 | MOVTEX_AREA_THI)
const CASTLE_GROUNDS_MOVTEX_WATER = (1 | MOVTEX_AREA_CASTLE_GROUNDS)
const LLL_MOVTEX_VOLCANO_FLOOR_LAVA = (2 | MOVTEX_AREA_LLL)
const DDD_MOVTEX_AREA1_WATER = (1 | MOVTEX_AREA_DDD)
const DDD_MOVTEX_AREA2_WATER = (2 | MOVTEX_AREA_DDD)
const WF_MOVTEX_WATER = (1 | MOVTEX_AREA_WF)
const CASTLE_COURTYARD_MOVTEX_STAR_STATUE_WATER = (1 | MOVTEX_AREA_CASTLE_COURTYARD)
const TTM_MOVTEX_PUDDLE = (1 | MOVTEX_AREA_TTM)

const gMovtexIdToTexture = [
    texture_waterbox_water, null, null, null, texture_waterbox_lava
]

let gMovtexVtxColor = MOVTEX_VTX_COLOR_DEFAULT
let gMovetexLastTextureId = 0

let gMovtexCounter = 1
let gMovtexCounterPrev = 0


const get_quad_collection_from_id = (id) => {
    switch (id) {
        case CASTLE_GROUNDS_MOVTEX_WATER:
            return castle_grounds_movtex_water
        default: throw "unknown case - get quad collection from id"
    }
}

const movtex_change_texture_format = (quadCollectionId, gfx) => {
    switch (quadCollectionId) {
        default: Gbi.gSPDisplayList(gfx, dl_waterbox_rgba16_begin)
    }
}

const movtex_make_quad_vertex = (verts, index, x, y, z, rot, rotOffset, scale, alpha) => {
    const s = 32.0 * (32.0 * scale - 1.0) * Math.sin((rot + rotOffset) / 0x8000 * Math.PI)
    const t = 32.0 * (32.0 * scale - 1.0) * Math.cos((rot + rotOffset) / 0x8000 * Math.PI)

    if (gMovtexVtxColor == MOVTEX_VTX_COLOR_YELLOW) throw "not implemented water color yellow"
    else if (gMovtexVtxColor == MOVTEX_VTX_COLOR_RED) throw "not implemented water color red"
    else {
        make_vertex(verts, index, x, y, z, s, t, 255, 255, 255, alpha)
    }
}

const movtex_gen_from_quad = (y, quad) => {
    let rot = quad[0]
    const rotspeed = quad[1]
    const scale = quad[2]
    const x1 = quad[3]
    const z1 = quad[4]
    const x2 = quad[5]
    const z2 = quad[6]
    const x3 = quad[7]
    const z3 = quad[8]
    const x4 = quad[9]
    const z4 = quad[10]
    const rotDir = quad[11]
    const alpha = quad[12]
    const textureId = quad[13]

    const verts = [], gfx = []

    if (gMovtexCounter != gMovtexCounterPrev) quad[0] += rotspeed
    rot = quad[0]

    if (rotDir == ROTATE_CLOCKWISE) {
        movtex_make_quad_vertex(verts, 0, x1, y, z1, rot, 0, scale, alpha)
        movtex_make_quad_vertex(verts, 1, x2, y, z2, rot, 16384, scale, alpha)
        movtex_make_quad_vertex(verts, 2, x3, y, z3, rot, -32768, scale, alpha)
        movtex_make_quad_vertex(verts, 3, x4, y, z4, rot, -16384, scale, alpha)
    } else { // ROTATE_COUNTER_CLOCKWISE
        movtex_make_quad_vertex(verts, 0, x1, y, z1, rot, 0, scale, alpha)
        movtex_make_quad_vertex(verts, 1, x2, y, z2, rot, -16384, scale, alpha)
        movtex_make_quad_vertex(verts, 2, x3, y, z3, rot, -32768, scale, alpha)
        movtex_make_quad_vertex(verts, 3, x4, y, z4, rot, 16384, scale, alpha)
    }

    // Only add commands to change the texture when necessary
    if (textureId != gMovetexLastTextureId) { // an ia16 texture
        if (textureId == TEXTURE_MIST) {
            throw "texture mist"
        } else { // any rgba16 texture
            Gbi.gDPLoadBlockTexture(gfx, 32, 32, Gbi.G_IM_FMT_RGBA, gMovtexIdToTexture[textureId])
        }
        gMovetexLastTextureId = textureId
    }

    Gbi.gSPVertex(gfx, verts, 4, 0)
    Gbi.gSPDisplayList(gfx, dl_draw_quad_verts_0123)
    Gbi.gSPEndDisplayList(gfx)
    return gfx
}

const movtex_gen_from_quad_array = (y, quadArr) => {
    const gfx = []

    let numLists = quadArr[0]

    for (let i = 0; i < numLists; i++) {
        const subList = movtex_gen_from_quad(y, quadArr.slice(i * 14 + 1, (i+1) * 14 + 1))
        if (subList) Gbi.gSPDisplayList(gfx, subList)
    }

    Gbi.gSPEndDisplayList(gfx)
    return gfx
}

const movtex_gen_quads_id = (id, y, movetexQuadsSegmented) => {
    const collection = movetexQuadsSegmented
    let i = 0
    while (collection[i].id != -1) {
        if (collection[i].id == id) {
            return movtex_gen_from_quad_array(y, collection[i].movtex)
        }
        i++
    }
}

export const geo_movtex_draw_water_regions = (callContext, node) => {

    const asGenerated = node.wrapper
    const gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        gMovtexVtxColor = MOVTEX_VTX_COLOR_DEFAULT
        if (ObjectListProc.gEnvironmentRegions == undefined) return gfx
        const numWaterBoxes = ObjectListProc.gEnvironmentRegions[0]

        if (asGenerated.param == JRB_MOVTEX_INTIAL_MIST) {
            throw "not implemented"
        } else if (asGenerated.param == HMC_MOVTEX_TOXIC_MAZE_MIST) {
            gMovtexVtxColor = MOVTEX_VTX_COLOR_YELLOW
        } else if (asGenerated.param == SSL_MOVTEX_TOXBOX_QUICKSAND_MIST) {
            gMovtexVtxColor = MOVTEX_VTX_COLOR_RED
        }
        const quadCollection = get_quad_collection_from_id(asGenerated.param)
        if (quadCollection == null) return gfx

        node.flags = (node.flags & 0xFF) | (GeoLayout.LAYER_TRANSPARENT_INTER << 8)

        movtex_change_texture_format(asGenerated.param, gfx)
        gMovetexLastTextureId = -1

        for (let i = 0; i < numWaterBoxes; i++) {
            let waterId = ObjectListProc.gEnvironmentRegions[i * 6 + 1]
            let waterY = ObjectListProc.gEnvironmentRegions[i * 6 + 6]
            let subList = movtex_gen_quads_id(waterId, waterY, quadCollection)
            if (subList) Gbi.gSPDisplayList(gfx, subList)
        }
        Gbi.gSPDisplayList(gfx, dl_waterbox_end)
        Gbi.gSPEndDisplayList(gfx)
    }

    return gfx
}