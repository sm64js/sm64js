import { GEO_CONTEXT_RENDER } from "../engine/graph_node"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { castle_grounds_movtex_water, castle_grounds_movtex_tris_waterfall, castle_grounds_dl_waterfall } from "../levels/castle_grounds/areas/1/movtext.inc"
import { ccm_movtex_penguin_puddle_water } from "../levels/ccm/areas/1/movtext.inc"
import { jrb_movtex_water } from "../levels/jrb/areas/1/movtext.inc"
import { wf_movtex_water } from "../levels/wf/areas/1/movtext.inc"
import { bbh_movtex_merry_go_round_water_entrance, bbh_movtex_merry_go_round_water_side } from "../levels/bbh/areas/1/movtext.inc"
import { ttm_movtex_puddle, ttm_movtex_tris_begin_waterfall, ttm_movtex_tris_begin_puddle_waterfall, ttm_movtex_tris_end_waterfall, ttm_movtex_tris_end_puddle_waterfall, ttm_movtex_tris_puddle_waterfall, ttm_dl_waterfall, ttm_dl_bottom_waterfall, ttm_dl_puddle_waterfall } from "../levels/ttm/areas/1/movtext.inc"
import { ssl_movtex_puddle_water, ssl_movtex_toxbox_quicksand_mist, /*ssl_dl_quicksand_begin,*/ ssl_dl_quicksand_end, ssl_movtex_tris_pyramid_quicksand, ssl_dl_pyramid_quicksand, ssl_movtex_tris_pyramid_corners_quicksand, ssl_movtex_tris_sides_quicksand, ssl_dl_sides_quicksand } from "../levels/ssl/areas/1/movtext.inc"
//import { ssl_dl_pyramid_sand_pathway_floor_begin, /*ssl_dl_pyramid_sand_pathway_floor_end,*/ ssl_dl_pyramid_sand_pathway_begin, /*ssl_dl_pyramid_sand_pathway_end,*/ ssl_movtex_tris_pyramid_sand_pathway_front, ssl_dl_pyramid_sand_pathway_front_end, ssl_movtex_tris_pyramid_sand_pathway_floor, ssl_movtex_tris_pyramid_sand_pathway_side, ssl_dl_pyramid_sand_pathway_side_end } from "../levels/ssl/areas/2/movtext.inc"
import { ssl_movtex_tris_quicksand_pit, ssl_movtex_tris_pyramid_quicksand_pit, ssl_dl_quicksand_pit_begin, ssl_dl_quicksand_pit_end, ssl_dl_pyramid_quicksand_pit_begin, ssl_dl_pyramid_quicksand_pit_end, ssl_dl_quicksand_pit } from "../levels/ssl/areas/2/4/model.inc"
import { castle_courtyard_movtex_star_statue_water } from "../levels/castle_courtyard/areas/1/movtext.inc"
import { sl_movtex_water } from "../levels/sl/areas/1/movtext.inc"
import { hmc_movtex_dorrie_pool_water, hmc_movtex_toxic_maze_mist } from "../levels/hmc/areas/1/movtext.inc"
import { thi_movtex_area1_water } from "../levels/thi/areas/1/movtext.inc"
import { thi_movtex_area2_water } from "../levels/thi/areas/2/movtext.inc"
import { inside_castle_movtex_green_room_water, inside_castle_movtex_moat_water } from "../levels/castle_inside/areas/3/movtext.inc"
import { ddd_movtex_area1_water } from "../levels/ddd/areas/1/movtext.inc"
import { ddd_movtex_area2_water } from "../levels/ddd/areas/2/movtext.inc"
import { wdw_movtex_area1_water } from "../levels/wdw/areas/1/movtext.inc"
import { wdw_movtex_area2_water } from "../levels/wdw/areas/2/movtext.inc"
//import { cotmc_dl_water_begin, cotmc_dl_water_end, cotmc_movtex_tris_water, cotmc_dl_water } from "../levels/cotmc/movtext.inc"
import { lll_movtex_tris_lava_floor, lll_dl_lava_floor, lll_movtex_volcano_floor_lava, lll_movtex_tris_lavafall_volcano, lll_dl_lavafall_volcano } from "../levels/lll/areas/2/movtext.inc"
import { bitfs_movtex_tris_lava_first_section, bitfs_movtex_tris_lava_second_section, bitfs_movtex_tris_lava_floor, bitfs_dl_lava_sections, bitfs_dl_lava_floor } from "../levels/bitfs/areas/1/movtext.inc"

import { COURSE_NUM_TO_INDEX, COURSE_JRB } from "../levels/course_defines"
import { GeoLayoutInstance as GeoLayout, LAYER_TRANSPARENT_INTER, LAYER_OPAQUE, LAYER_TRANSPARENT } from "../engine/GeoLayout"
import { CameraInstance as Camera } from "./Camera"
import { save_file_get_star_flags } from "./SaveFile"
import * as Gbi from "../include/gbi"
import { dl_waterbox_rgba16_begin, dl_waterbox_end, dl_draw_quad_verts_0123, texture_waterbox_water, texture_waterbox_lava, texture_waterbox_jrb_water, texture_waterbox_unknown_water, texture_waterbox_mist, dl_waterbox_ia16_begin } from "../bin/segment2"
import { ROTATE_CLOCKWISE, TEXTURE_MIST, TEXTURE_WATER, TEXTURE_JRB_WATER, TEX_QUICKSAND_SSL, TEX_PYRAMID_SAND_SSL, TEXTURE_LAVA } from "../include/moving_texture_macros"
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
const JRB_MOVTEX_INITIAL_MIST = (5 | MOVTEX_AREA_JRB)
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

// Colored, unique movtex meshes (drawn in level geo)
const MOVTEX_SSL_PYRAMID_SIDE = (1 | MOVTEX_AREA_SSL)
const MOVTEX_SSL_PYRAMID_CORNER = (2 | MOVTEX_AREA_SSL)
const MOVTEX_SSL_COURSE_EDGE = (3 | MOVTEX_AREA_SSL)

// Shared movtex meshes (drawn in object geo)
const MOVTEX_SSL_SAND_PIT_OUTSIDE = (1 | MOVTEX_AREA_SSL)
const MOVTEX_SSL_SAND_PIT_PYRAMID = (2 | MOVTEX_AREA_SSL)

const gMovtexIdToTexture = [
    texture_waterbox_water, texture_waterbox_mist, texture_waterbox_jrb_water, texture_waterbox_unknown_water, texture_waterbox_lava/*, ssl_quicksand, ssl_pyramid_sand*/
]

const gMovtexNonColored = [
    { geoId: MOVTEX_CASTLE_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 15, movtexVerts: castle_grounds_movtex_tris_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: castle_grounds_dl_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: GeoLayout.LAYER_TRANSPARENT_INTER },

    //commented out due to renderMode error with gbi
    //{ geoId: MOVTEX_COTMC_WATER, textureId: TEXTURE_WATER, vtx_count: 14, movtexVerts: cotmc_movtex_tris_water, beginDl: cotmc_dl_water_begin, endDl: cotmc_dl_water_end, triDl: cotmc_dl_water, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER },

    { geoId: MOVTEX_TTM_BEGIN_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 6, movtexVerts: ttm_movtex_tris_begin_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: ttm_dl_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER }, //originally LAYER_TRANSPARENT
    { geoId: MOVTEX_TTM_END_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 6, movtexVerts: ttm_movtex_tris_end_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: ttm_dl_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER }, //originally LAYER_TRANSPARENT
    { geoId: MOVTEX_TTM_BEGIN_PUDDLE_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 4, movtexVerts: ttm_movtex_tris_begin_puddle_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: ttm_dl_bottom_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER },
    { geoId: MOVTEX_TTM_END_PUDDLE_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 4, movtexVerts: ttm_movtex_tris_end_puddle_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: ttm_dl_bottom_waterfall, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER },
    { geoId: MOVTEX_TTM_PUDDLE_WATERFALL, textureId: TEXTURE_WATER, vtx_count: 8, movtexVerts: ttm_movtex_tris_puddle_waterfall, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: ttm_dl_puddle_waterfall, r: 0xff, g: 0xff, b: 0xff, a:0xb4, layer: LAYER_TRANSPARENT_INTER },

    //commented out due to renderMode error with gbi
    //{ geoId: MOVTEX_PYRAMID_SAND_PATHWAY_FRONT, textureId: TEX_PYRAMID_SAND_SSL, vtx_count: 8, movtexVerts: ssl_movtex_tris_pyramid_sand_pathway_front, beginDl: ssl_dl_pyramid_sand_pathway_begin, endDl: ssl_dl_pyramid_sand_pathway_end, triDl: ssl_dl_pyramid_sand_pathway_front_end, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_TRANSPARENT_INTER },
    //{ geoId: MOVTEX_PYRAMID_SAND_PATHWAY_FLOOR, textureId: TEX_PYRAMID_SAND_SSL, vtx_count: 8, movtexVerts: ssl_movtex_tris_pyramid_sand_pathway_floor, beginDl: ssl_dl_pyramid_sand_pathway_floor_begin, endDl: ssl_dl_pyramid_sand_pathway_floor_end, triDl: ssl_dl_pyramid_sand_pathway_front_end, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE_INTER },
    //{ geoId: MOVTEX_PYRAMID_SAND_PATHWAY_SIDE, textureId: TEX_PYRAMID_SAND_SSL, vtx_count: 6, movtexVerts: ssl_movtex_tris_pyramid_sand_pathway_side, beginDl: ssl_dl_pyramid_sand_pathway_begin, endDl: ssl_dl_pyramid_sand_pathway_end, triDl: ssl_dl_pyramid_sand_pathway_side_end, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_TRANSPARENT_INTER },

    { geoId: MOVTEX_BITFS_LAVA_FIRST, textureId: TEXTURE_LAVA, vtx_count: 4, movtexVerts: bitfs_movtex_tris_lava_first_section, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: bitfs_dl_lava_sections, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
    { geoId: MOVTEX_BITFS_LAVA_SECOND, textureId: TEXTURE_LAVA, vtx_count: 4, movtexVerts: bitfs_movtex_tris_lava_second_section, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: bitfs_dl_lava_sections, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT },
    { geoId: MOVTEX_BITFS_LAVA_FLOOR, textureId: TEXTURE_LAVA, vtx_count: 9, movtexVerts: bitfs_movtex_tris_lava_floor, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: bitfs_dl_lava_floor, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT },

    { geoId: MOVTEX_LLL_LAVA_FLOOR, textureId: TEXTURE_LAVA, vtx_count: 9, movtexVerts: lll_movtex_tris_lava_floor, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: lll_dl_lava_floor, r: 0xff, g: 0xff, b: 0xff, a: 0xc8, layer: LAYER_TRANSPARENT },
    { geoId: MOVTEX_VOLCANO_LAVA_FALL, textureId: TEXTURE_LAVA, vtx_count: 16, movtexVerts: lll_movtex_tris_lavafall_volcano, beginDl: dl_waterbox_rgba16_begin, endDl: dl_waterbox_end, triDl: lll_dl_lavafall_volcano, r: 0xff, g: 0xff, b: 0xff, a: 0xb4, layer: LAYER_TRANSPARENT_INTER },
]

const gMovtexColored = [
    //{ geoId: MOVTEX_SSL_PYRAMID_SIDE, textureId: TEX_QUICKSAND_SSL, vtx_count: 12, movtexVerts: ssl_movtex_tris_pyramid_quicksand, beginDl: ssl_dl_quicksand_begin, endDl: ssl_dl_quicksand_end, triDl: ssl_dl_pyramid_quicksand, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
    //{ geoId: MOVTEX_SSL_PYRAMID_CORNER, textureId: TEX_QUICKSAND_SSL, vtx_count: 16, movtexVerts: ssl_movtex_tris_pyramid_corners_quicksand, beginDl: ssl_dl_quicksand_begin, endDl: ssl_dl_quicksand_end, triDl: ssl_dl_pyramid_corners_quicksand, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
    //{ geoId: MOVTEX_SSL_COURSE_EDGE, textureId: TEX_QUICKSAND_SSL, vtx_count: 15, movtexVerts: ssl_movtex_tris_sides_quicksand, beginDl: ssl_dl_quicksand_begin, endDl: ssl_dl_quicksand_end, triDl: ssl_dl_sides_quicksand, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
]

const gMovtexColored2 = [
    //{ geoId: MOVTEX_SSL_SAND_PIT_OUTSIDE, textureId: TEX_QUICKSAND_SSL, vtx_count: 8, movtexVerts: ssl_movtex_tris_quicksand_pit, beginDl: ssl_dl_quicksand_pit_begin, endDl: ssl_dl_quicksand_pit_end, triDl: ssl_dl_quicksand_pit, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
    //{ geoId: MOVTEX_SSL_SAND_PIT_PYRAMID, textureId: TEX_PYRAMID_SAND_SSL, vtx_count: 8, movtexVerts: ssl_movtex_tris_pyramid_quicksand_pit, beginDl: ssl_dl_pyramid_quicksand_pit_begin, endDl: ssl_dl_pyramid_quicksand_pit_end, triDl: ssl_dl_quicksand_pit, r: 0xff, g: 0xff, b: 0xff, a: 0xff, layer: LAYER_OPAQUE },
    //{ geoId: 0x00000000, textureId: 0x00000000, vtx_count: 0, movtexVerts: null, beginDl: null, endDl: null, triDl: null, r: 0x00, g: 0x00, b: 0x00, a: 0x00, layer: 0x00000000 },
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
        case BBH_MOVTEX_MERRY_GO_ROUND_WATER_ENTRANCE:
            return bbh_movtex_merry_go_round_water_entrance
        case BBH_MOVTEX_MERRY_GO_ROUND_WATER_SIDE:
            return bbh_movtex_merry_go_round_water_side
        case SSL_MOVTEX_PUDDLE_WATER:
            return ssl_movtex_puddle_water
        case TTM_MOVTEX_PUDDLE:
            return ttm_movtex_puddle
        case CASTLE_COURTYARD_MOVTEX_STAR_STATUE_WATER:
            return castle_courtyard_movtex_star_statue_water
        case SL_MOVTEX_WATER:
            return sl_movtex_water
        case HMC_MOVTEX_DORRIE_POOL_WATER:
            return hmc_movtex_dorrie_pool_water
        case HMC_MOVTEX_TOXIC_MAZE_MIST:
            return hmc_movtex_toxic_maze_mist
        case THI_MOVTEX_AREA1_WATER:
            return thi_movtex_area1_water
        case THI_MOVTEX_AREA2_WATER:
            return thi_movtex_area2_water
        case INSIDE_CASTLE_MOVTEX_GREEN_ROOM_WATER:
            return inside_castle_movtex_green_room_water
        case INSIDE_CASTLE_MOVTEX_MOAT_WATER:
            return inside_castle_movtex_moat_water
        case DDD_MOVTEX_AREA1_WATER:
            return ddd_movtex_area1_water
        case DDD_MOVTEX_AREA2_WATER:
            return ddd_movtex_area2_water
        case JRB_MOVTEX_WATER:
            return jrb_movtex_water
        case WDW_MOVTEX_AREA1_WATER:
            return wdw_movtex_area1_water
        case WDW_MOVTEX_AREA2_WATER:
            return wdw_movtex_area2_water
        case LLL_MOVTEX_VOLCANO_FLOOR_LAVA:
            return lll_movtex_volcano_floor_lava
        case MOVTEX_BITFS_LAVA_FLOOR:
            return bitfs_movtex_tris_lava_floor
        case MOVTEX_BITFS_LAVA_FIRST:
            return bitfs_movtex_tris_lava_first_section
        case MOVTEX_BITFS_LAVA_SECOND:
            return bitfs_movtex_tris_lava_second_section
        default:
            throw "unknown case - get quad collection from id:" + id
            return null

    }
}

const movtex_change_texture_format = (quadCollectionId, gfx) => {
    switch (quadCollectionId) {
        case HMC_MOVTEX_TOXIC_MAZE_MIST:
            Gbi.gSPDisplayList(gfx, dl_waterbox_ia16_begin)
            break
        case SSL_MOVTEX_TOXBOX_QUICKSAND_MIST:
            Gbi.gSPDisplayList(gfx, dl_waterbox_ia16_begin)
            break
        case JRB_MOVTEX_INITIAL_MIST:
            Gbi.gSPDisplayList(gfx, dl_waterbox_ia16_begin)
            break
        default:
            Gbi.gSPDisplayList(gfx, dl_waterbox_rgba16_begin)
            break
    }
}


/**
 * Update moving texture counters that determine when to update the coordinates.
 * Textures update when gMovtexCounterPrev != gMovtexCounter.
 * This ensures water / sand flow stops when the game pauses.
 */
export const geo_movtex_pause_control = (callContext, node, mtx) => {
    if (callContext != GEO_CONTEXT_RENDER) {
        gMovtexCounterPrev = GeoRenderer.gAreaUpdateCounter - 1
        gMovtexCounter = GeoRenderer.gAreaUpdateCounter
    } else {
        gMovtexCounterPrev = gMovtexCounter
        gMovtexCounter = GeoRenderer.gAreaUpdateCounter
    }
    return null
}


const movtex_make_quad_vertex = (verts, index, x, y, z, rot, rotOffset, scale, alpha) => {
    const s = 32.0 * (32.0 * scale - 1.0) * Math.sin((rot + rotOffset) / 0x8000 * Math.PI)
    const t = 32.0 * (32.0 * scale - 1.0) * Math.cos((rot + rotOffset) / 0x8000 * Math.PI)

    if (gMovtexVtxColor == MOVTEX_VTX_COLOR_YELLOW) {
        make_vertex(verts, index, x, y, z, s, t, 255, 255, 0, alpha)
    } else if (gMovtexVtxColor == MOVTEX_VTX_COLOR_RED) {
        make_vertex(verts, index, x, y, z, s, t, 255, 0, 0, alpha)
    } else {
        make_vertex(verts, index, x, y, z, s, t, 255, 255, 255, alpha)
    }
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
    if (textureId != gMovetexLastTextureId) {
        if (textureId == TEXTURE_MIST) {  // an ia16 texture
            Gbi.gDPLoadBlockTexture(gfx, 32, 32, Gbi.G_IM_FMT_IA, gMovtexIdToTexture[textureId])
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

/**
 * Geo script responsible for drawing quads with a moving texture at the height
 * of the corresponding water region. The node's parameter determines which quad
 * collection is drawn, see moving_texture.h.
 */
export const geo_movtex_draw_water_regions = (callContext, node) => {
    const gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        gMovtexVtxColor = MOVTEX_VTX_COLOR_DEFAULT
        if (!ObjectListProc.gEnvironmentRegions) {
            return gfx
        }
        const numWaterBoxes = ObjectListProc.gEnvironmentRegions[0]

        if (node.parameter == JRB_MOVTEX_INITIAL_MIST) {
            if (Camera.gLakituState.goalPos[1] < 1024.0) { // if camera under water
                return null
            }
            if (save_file_get_star_flags(gCurrSaveFileNum - 1, COURSE_NUM_TO_INDEX(COURSE_JRB))
            & (1 << 0)) { // the "Plunder in the Sunken Ship" star in JRB is collected
                return null
            }
        } else if (node.parameter == HMC_MOVTEX_TOXIC_MAZE_MIST) {
            gMovtexVtxColor = MOVTEX_VTX_COLOR_YELLOW
        } else if (node.parameter == SSL_MOVTEX_TOXBOX_QUICKSAND_MIST) {
            gMovtexVtxColor = MOVTEX_VTX_COLOR_RED
        }
        const quadCollection = get_quad_collection_from_id(node.parameter)
        if (quadCollection == null) return gfx

        node.flags = (node.flags & 0xFF) | (GeoLayout.LAYER_TRANSPARENT_INTER << 8)

        movtex_change_texture_format(node.parameter, gfx)
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
    let gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        let i = 0
        while (gMovtexNonColored[i].movtexVerts != 0) {
            if (gMovtexNonColored[i].geoId == node.parameter) {
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

export const geo_movtex_draw_colored = (callContext, node) => {
    let gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        let i = 0
        while (gMovtexColored[i].movtexVerts != 0) {
            if (gMovtexColored[i].geoId == node.parameter) {
                node.flags = (node.flags & 0xFF) | (gMovtexColored[i].layer << 8)
                const movtexVerts = gMovtexColored[i].movtexVerts
                update_moving_texture_offset(movtexVerts, MOVTEX_ATTR_COLORED_S)
                gfx = movtex_gen_list(movtexVerts, gMovtexColored[i], MOVTEX_LAYOUT_COLORED)
                break
            }
            i++
        }
    }
    return gfx
}
export const geo_movtex_draw_colored_2_no_update = (callContext, node) => {
    let gfx = []

    if (callContext == GEO_CONTEXT_RENDER) {
        let i = 0
        while (gMovtexColored2[i].movtexVerts != 0) {
            if (gMovtexColored2[i].geoId == node.parameter) {
                node.flags = (node.flags & 0xFF) | (gMovtexColored2[i].layer << 8)
                const movtexVerts = gMovtexColored2[i].movtexVerts
                gfx = movtex_gen_list(movtexVerts, gMovtexColored2[i], MOVTEX_LAYOUT_COLORED)
                break
            }
            i++
        }
    }
    return gfx
}

export const geo_movtex_update_horizontal = (callContext, node) => {
    if (callContext == GEO_CONTEXT_RENDER) {
        switch (node.parameter) {
            case MOVTEX_SSL_SAND_PIT_OUTSIDE:
                movtexVerts = ssl_movtex_tris_quicksand_pit
                break
            case MOVTEX_SSL_SAND_PIT_PYRAMID:
                movtexVerts = ssl_movtex_tris_pyramid_quicksand_pit
                break
            /*case MOVTEX_TREADMILL_BIG:
                movtexVerts = ttc_movtex_tris_big_surface_treadmill
                break
            case MOVTEX_TREADMILL_SMALL:
                movtexVerts = ttc_movtex_tris_small_surface_treadmill
                break*/
        }
        update_moving_texture_offset(movtexVerts, MOVTEX_ATTR_COLORED_S)
    }
    //return null
}
