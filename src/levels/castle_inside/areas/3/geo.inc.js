// Castle Inside

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_RETURN, GEO_ASM,
    GEO_NODE_SCREEN_AREA, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SWITCH_CASE, GEO_BRANCH, GEO_RENDER_OBJ,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT, PAINTING_ID
} from "../../../../engine/GeoLayout"

import { inside_castle_seg7_dl_0705E088 } from "./1/model.inc"

import { inside_castle_seg7_dl_0705E2A0 } from "./2/model.inc"

import { inside_castle_seg7_dl_0705E450 } from "./3/model.inc"

import { inside_castle_seg7_dl_070616E8 } from "./4/model.inc"

import { inside_castle_seg7_dl_07061C20 } from "./5/model.inc"

import {
    geo_painting_update, geo_painting_draw, geo_switch_area
} from "../../../../game/ObjectHelpers"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { inside_castle_seg7_dl_07064B78 } from "./6/model.inc"

import { inside_castle_seg7_dl_07064D58 } from "./7/model.inc"

import { inside_castle_seg7_dl_07066CE0 } from "./8/model.inc"

import { inside_castle_seg7_dl_07066E90 } from "./9/model.inc"

import { inside_castle_seg7_dl_07066FA0 } from "./10/model.inc"

import { inside_castle_seg7_dl_07068850 } from "./11/model.inc"

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E001958
export const castle_geo_001958 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0705E088),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001980
export const castle_geo_001980 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070616E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(4, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(5, 1), 'geo_painting_draw'),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0600, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0019C8
export const castle_geo_0019C8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07064B78),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07064D58),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(6, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0019F8
export const castle_geo_0019F8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07066FA0),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0612, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001A30
export const castle_geo_001A30 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07068850),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(7, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001A58
export const castle_geo_001A58 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0705E088),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070616E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(4, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(5, 1), 'geo_painting_draw'),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0600, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001AB8
export const castle_geo_001AB8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0705E088),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07068850),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(7, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001AF8
export const castle_geo_001AF8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0705E088),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07066FA0),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0612, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001B48
export const castle_geo_001B48 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070616E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07066FA0),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(4, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(5, 1), 'geo_painting_draw'),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0600, geo_movtex_draw_water_regions),
        GEO_ASM(0x0612, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001BB0
export const castle_geo_001BB0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070616E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07064B78),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07064D58),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(4, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(5, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(6, 1), 'geo_painting_draw'),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0600, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001C10
export const castle_geo_001C10 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND_COLOR(0x0001),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(64, 50, 6400, 'Camera.geo_camera_fov'),
            GEO_OPEN_NODE(),
                GEO_CAMERA(4, 0, 2000, 6000, 0, 0, 0, 'Camera.geo_camera_main'),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(10, geo_switch_area),
                    GEO_OPEN_NODE(),
                        GEO_BRANCH(1, castle_geo_001958), // 0x0E001958
                        GEO_BRANCH(1, castle_geo_001980), // 0x0E001980
                        GEO_BRANCH(1, castle_geo_0019C8), // 0x0E0019C8
                        GEO_BRANCH(1, castle_geo_0019F8), // 0x0E0019F8
                        GEO_BRANCH(1, castle_geo_001A30), // 0x0E001A30
                        GEO_BRANCH(1, castle_geo_001A58), // 0x0E001A58
                        GEO_BRANCH(1, castle_geo_001AB8), // 0x0E001AB8
                        GEO_BRANCH(1, castle_geo_001AF8), // 0x0E001AF8
                        GEO_BRANCH(1, castle_geo_001B48), // 0x0E001B48
                        GEO_BRANCH(1, castle_geo_001BB0), // 0x0E001BB0
                    GEO_CLOSE_NODE(),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 1621726940 - 2021-05-22 16:42:23 -0700
