import { GEO_CONTEXT_RENDER } from "../engine/graph_node"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { castle_grounds_movtex_water, castle_grounds_movtex_tris_waterfall, castle_grounds_dl_waterfall } from "../levels/castle_grounds/areas/1/movtext.inc"
import { ccm_movtex_penguin_puddle_water } from "../levels/ccm/areas/1/movtext.inc"
import { wf_movtex_water } from "../levels/wf/areas/1/movtext.inc"
import { GeoLayoutInstance as GeoLayout } from "../engine/GeoLayout"
import * as Gbi from "../include/gbi"
import { dl_waterbox_rgba16_begin, dl_waterbox_end, dl_draw_quad_verts_0123, texture_waterbox_water, texture_waterbox_lava } from "../common_gfx/segment2"
import { ROTATE_CLOCKWISE, TEXTURE_MIST, TEXTURE_WATER } from "../include/moving_texture_macros"
import { make_vertex } from "./GeoMisc"

// Vertex colors for rectangles. Used to give mist a tint
const MOVTEX_VTX_COLOR_DEFAULT = 0 // no tint (white vertex colors)
const MOVTEX_VTX_COLOR_YELLOW = 1  // used for Hazy Maze Cave toxic haze
const MOVTEX_VTX_COLOR_RED = 2     // used for Shifting Sand Land around the Tox box maze


// First entry in array is texture movement speed for both layouts
const MOVTEX_ATTR_SPEED = 0

// Different layouts for vertices
const MOVTEX_LAYOUT_NOCOLOR = 0
const MOVTEX_LAYOUT_COLORED = 1

// Attributes for movtex vertices
const MOVTEX_ATTR_X = 1
const MOVTEX_ATTR_Y = 2
const MOVTEX_ATTR_Z = 3

// For MOVTEX_LAYOUT_NOCOLOR only
const MOVTEX_ATTR_NOCOLOR_S = 4
const MOVTEX_ATTR_NOCOLOR_T = 5

// For MOVTEX_LAYOUT_COLORED only
const MOVTEX_ATTR_COLORED_R = 4
const MOVTEX_ATTR_COLORED_G = 5
const MOVTEX_ATTR_COLORED_B = 6
const MOVTEX_ATTR_COLORED_S = 7
const MOVTEX_ATTR_COLORED_T = 8

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

// Non-colored, unique movtex meshes (drawn in level geo)
const MOVTEX_PYRAMID_SAND_PATHWAY_FRONT = (1 | MOVTEX_AREA_SSL)
const MOVTEX_PYRAMID_SAND_PATHWAY_FLOOR = (2 | MOVTEX_AREA_SSL)
const MOVTEX_PYRAMID_SAND_PATHWAY_SIDE = (3 | MOVTEX_AREA_SSL)
const MOVTEX_CASTLE_WATERFALL = (1 | MOVTEX_AREA_CASTLE_GROUNDS)
const MOVTEX_BITFS_LAVA_FIRST = (1 | MOVTEX_AREA_BITFS)
const MOVTEX_BITFS_LAVA_SECOND = (2 | MOVTEX_AREA_BITFS)
const MOVTEX_BITFS_LAVA_FLOOR = (3 | MOVTEX_AREA_BITFS)
const MOVTEX_LLL_LAVA_FLOOR = (1 | MOVTEX_AREA_LLL)
const MOVTEX_VOLCANO_LAVA_FALL = (2 | MOVTEX_AREA_LLL)
const MOVTEX_COTMC_WATER = (1 | MOVTEX_AREA_COTMC)
const MOVTEX_TTM_BEGIN_WATERFALL = (1 | MOVTEX_AREA_TTM)
const MOVTEX_TTM_END_WATERFALL = (2 | MOVTEX_AREA_TTM)
const MOVTEX_TTM_BEGIN_PUDDLE_WATERFALL = (3 | MOVTEX_AREA_TTM)
const MOVTEX_TTM_END_PUDDLE_WATERFALL = (4 | MOVTEX_AREA_TTM)
const MOVTEX_TTM_PUDDLE_WATERFALL = (5 | MOVTEX_AREA_TTM)

const gMovtexIdToTexture = [
    texture_waterbox_water, null, null, null, texture_waterbox_lava
]

const gMovtexNonColored = [
    { geoId: MOVTEX_CASTLE_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 15, movtexVerts: castle_grounds_movtex_tris_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: castle_grounds_dl_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: GeoLayout.LAYER_TRANSPARENT_INTER }
]

let gMovtexVtxColor = MOVTEX_VTX_COLOR_DEFAULT
let gMovetexLastTextureId = 0

let gMovtexCounter = 1
let gMovtexCounterPrev = 0


const get_quad_collection_from_id = (id) => {
    switch (id) {
        case CASTLE_GROUNDS_MOVTEX_WATER:
            return castle_grounds_movtex_water
        case CCM_MOVTEX_PENGUIN_PUDDLE_WATER:
            return ccm_movtex_penguin_puddle_water
        case WF_MOVTEX_WATER:
            return wf_movtex_water
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
    else make_vertex(verts, index, x, y, z, s, t, 255, 255, 255, alpha)
}

const movtex_gen_from_quad = (y, quad) => {
    let rot = quad.get(0)
    const rotspeed = quad.get(1)
    const scale = quad.get(2)
    const x1 = quad.get(3)
    const z1 = quad.get(4)
    const x2 = quad.get(5)
    const z2 = quad.get(6)
    const x3 = quad.get(7)
    const z3 = quad.get(8)
    const x4 = quad.get(9)
    const z4 = quad.get(10)
    const rotDir = quad.get(11)
    const alpha = quad.get(12)
    const textureId = quad.get(13)

    const verts = [], gfx = []

    if (gMovtexCounter != gMovtexCounterPrev) quad.set(0, rot + rotspeed)
    rot = quad.get(0) // access again after increment

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

const make_subarray = (array, from, to) => {
    return {
        get: (i) => {
            return array[i + from]
        },
        set: (i, newValue) => {
            array[i + from] = newValue
        },
        length: to - from
    }
}

const movtex_gen_from_quad_array = (y, quadArr) => {
    const gfx = []

    let numLists = quadArr[0]

    for (let i = 0; i < numLists; i++) {
        /// take a slice out of quadArr without making a copy
        const subarr = make_subarray(quadArr, i * 14 + 1, (i + 1) * 14 + 1)
        const subList = movtex_gen_from_quad(y, subarr)
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

const update_moving_texture_offset = (movtexVerts, attr) => {
    const movSpeed = movtexVerts[MOVTEX_ATTR_SPEED]
    //const curOffset = movtexVerts[attr]

    if (gMovtexCounter != gMovtexCounterPrev) {
        movtexVerts[attr] += movSpeed

        // note that texture coordinates are 6.10 fixed point, so this does modulo 1 ????
        if (movtexVerts[attr] >= 1024) {
            movtexVerts[attr] -= 1024
        }
        if (movtexVerts[attr] <= -1024) {
            movtexVerts[attr] +=  1024
        }
    }
}

const movtex_write_vertex_first = (vtx, movtexVerts, c, attrLayout) => {
    const x = movtexVerts[MOVTEX_ATTR_X]
    const y = movtexVerts[MOVTEX_ATTR_Y]
    const z = movtexVerts[MOVTEX_ATTR_Z]
    const alpha = c.a

    switch (attrLayout) {
        case MOVTEX_LAYOUT_NOCOLOR:
            const r1 = c.r
            const g1 = c.g
            const b1 = c.b
            const s = movtexVerts[MOVTEX_ATTR_NOCOLOR_S]
            const t = movtexVerts[MOVTEX_ATTR_NOCOLOR_T]
            make_vertex(vtx, 0, x, y, z, s, t, r1, g1, b1, alpha)
            break
        default: throw "unimplemented attrLayout in movtex_write_vertex_first"
    }
}

const movtex_write_vertex_index = (verts, index, movtexVerts, d, attrLayout) => {
    const alpha = d.a

    switch (attrLayout) {
        case MOVTEX_LAYOUT_NOCOLOR: 
            const x = movtexVerts[index * 5 + MOVTEX_ATTR_X]
            const y = movtexVerts[index * 5 + MOVTEX_ATTR_Y]
            const z = movtexVerts[index * 5 + MOVTEX_ATTR_Z]
            const baseS = movtexVerts[MOVTEX_ATTR_NOCOLOR_S]
            const baseT = movtexVerts[MOVTEX_ATTR_NOCOLOR_T]
            const offS = movtexVerts[index * 5 + MOVTEX_ATTR_NOCOLOR_S]
            const offT = movtexVerts[index * 5 + MOVTEX_ATTR_NOCOLOR_T]
            const s = baseS + ((offS * 32) * 32)
            const t = baseT + ((offT * 32) * 32)
            const r1 = d.r
            const g1 = d.g
            const b1 = d.b
            make_vertex(verts, index, x, y, z, s, t, r1, g1, b1, alpha)
            break
        default: throw "unimplemented attrLayout in movtex_write_vertex_index"
    }
}

const movtex_gen_list = (movtexVerts, movtexList, attrLayout) => {
    const verts = new Array(movtexList.vtx_count)
    const gfx = []

    movtex_write_vertex_first(verts, movtexVerts, movtexList, attrLayout)
    for (let i = 1; i < movtexList.vtx_count; i++) {
        movtex_write_vertex_index(verts, i, movtexVerts, movtexList, attrLayout)
    }

    Gbi.gSPDisplayList(gfx, movtexList.beginDl)
    Gbi.gDPLoadBlockTexture(gfx, 32, 32, Gbi.G_IM_FMT_RGBA, gMovtexIdToTexture[movtexList.textureId])
    Gbi.gSPVertex(gfx, verts, movtexList.vtx_count, 0)
    Gbi.gSPDisplayList(gfx, movtexList.triDl)
    Gbi.gSPDisplayList(gfx, movtexList.endDl)
    Gbi.gSPEndDisplayList(gfx)

    return gfx
}

export const geo_movtex_draw_nocolor = (callContext, node) => {

    const asGenerated = node.wrapper
    let gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        let i = 0
        while (gMovtexNonColored[i].movtexVerts != 0) {
            if (gMovtexNonColored[i].geoId == asGenerated.param) {
                node.flags = (node.flags & 0xFF) | (gMovtexNonColored[i].layer << 8)
                const movtexVerts = gMovtexNonColored[i].movtexVerts
                update_moving_texture_offset(movtexVerts, MOVTEX_ATTR_NOCOLOR_S)
                gfx = movtex_gen_list(movtexVerts, gMovtexNonColored[i], MOVTEX_LAYOUT_NOCOLOR)
                break
            }
            i++
        }
    }


    return gfx
}