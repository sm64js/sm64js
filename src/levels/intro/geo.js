import { GeoLayoutInstance as GeoLayout } from "../../engine/GeoLayout"
import { geo_title_screen, geo_fade_transition, geo_intro_backdrop, geo_intro_gameover_backdrop } from "./gfx"
import { MarioMiscInstance as MarioMisc } from "../../game/MarioMisc"
import {
    debug_level_select_dl_07000858, debug_level_select_dl_07001100, debug_level_select_dl_07001BA0,
    debug_level_select_dl_070025F0, debug_level_select_dl_07003258, debug_level_select_dl_07003DB8,
    debug_level_select_dl_070048C8, debug_level_select_dl_07005558, debug_level_select_dl_070059F8,
    debug_level_select_dl_070063B0
} from "../../bin/debug_level_select"

import {
    GEO_NODE_SCREEN_AREA, GEO_OPEN_NODE, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CLOSE_NODE, GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_DISPLAY_LIST, GEO_RENDER_OBJ,
    GEO_ASM, GEO_END, GEO_CAMERA_FRUSTUM, GEO_TRANSLATE_NODE_WITH_DL,
    LAYER_OPAQUE
} from "../../engine/GeoLayout"

import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../include/config"

const canvas = document.querySelector('#gameCanvas')

export const intro_geo_0002D0 = [
    {
        command: GeoLayout.node_screen_area,
        args: [ 0, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2 ]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_ortho, args: [100] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_background, args: [0x0001] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [1] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_perspective, args: [45, 128, 16384] },
    { command: GeoLayout.open_node },
    {
        command: GeoLayout.node_camera,
        args: [ 0, 0, 0, 3200, 0, 0, 0, 0x00000000 ]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [ 0, geo_title_screen ] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [ 0, geo_fade_transition ] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]

export const intro_geo_mario_head_regular = [
    {
        command: GeoLayout.node_screen_area,
        args: [0, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2]
    },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_master_list, args: [0] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_ortho, args: [100] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [0, geo_intro_backdrop] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_master_list, args: [1] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_perspective, args: [45, 128, 16384] },
    { command: GeoLayout.open_node },
    { command: GeoLayout.node_generated, args: [2, MarioMisc.geo_draw_mario_head_goddard] },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.close_node },
    { command: GeoLayout.node_end }
]

// 0x0E0003B8
export const intro_geo_mario_head_dizzy = [
   GEO_NODE_SCREEN_AREA(0, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
   GEO_OPEN_NODE(),
      GEO_ZBUFFER(0),
      GEO_OPEN_NODE(),
         GEO_NODE_ORTHO(100),
         GEO_OPEN_NODE(),
            GEO_ASM(0, geo_intro_gameover_backdrop),
         GEO_CLOSE_NODE(),
      GEO_CLOSE_NODE(),
      GEO_ZBUFFER(1),
      GEO_OPEN_NODE(),
         GEO_CAMERA_FRUSTUM(45, 128, 16384),
         GEO_OPEN_NODE(),
            GEO_ASM(3, MarioMisc.geo_draw_mario_head_goddard),
         GEO_CLOSE_NODE(),
      GEO_CLOSE_NODE(),
   GEO_CLOSE_NODE(),
   GEO_END(),
]

// 0x0E000414
export const intro_geo_000414 = [
   GEO_NODE_SCREEN_AREA(0, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
   GEO_OPEN_NODE(),
      GEO_ZBUFFER(0),
      GEO_OPEN_NODE(),
         GEO_NODE_ORTHO(100),
         GEO_OPEN_NODE(),
            GEO_ASM(0, geo_intro_backdrop),
         GEO_CLOSE_NODE(),
      GEO_CLOSE_NODE(),
      GEO_ZBUFFER(1),
      GEO_OPEN_NODE(),
         GEO_CAMERA_FRUSTUM(45, 128, 16384),
         GEO_OPEN_NODE(),
            GEO_CAMERA(0, 0, 0, 1200, 0, 0, 0, 0x00000000),
            GEO_OPEN_NODE(),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE, -230, 300, 0, debug_level_select_dl_07000858),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE, -120, 300, 0, debug_level_select_dl_07001100),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  -20, 300, 0, debug_level_select_dl_07001BA0),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  100, 300, 0, debug_level_select_dl_070025F0),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  250, 300, 0, debug_level_select_dl_07003258),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE, -310, 100, 0, debug_level_select_dl_07003DB8),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  -90, 100, 0, debug_level_select_dl_070048C8),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,   60, 100, 0, debug_level_select_dl_07005558),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  180, 100, 0, debug_level_select_dl_070059F8),
               GEO_TRANSLATE_NODE_WITH_DL(LAYER_OPAQUE,  300, 100, 0, debug_level_select_dl_070063B0),
            GEO_CLOSE_NODE(),
         GEO_CLOSE_NODE(),
      GEO_CLOSE_NODE(),
   GEO_CLOSE_NODE(),
   GEO_END(),
]
