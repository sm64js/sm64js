// Castle Inside

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_ASM, GEO_CLOSE_NODE, GEO_RETURN,
    GEO_NODE_SCREEN_AREA, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SWITCH_CASE, GEO_BRANCH, GEO_RENDER_OBJ,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT_DECAL, PAINTING_ID, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import {
    geo_switch_area
} from "../../../../game/ObjectHelpers"

import {
    geo_exec_inside_castle_light
} from "../../../../game/GeoMisc"


import { inside_castle_seg7_dl_070234C0, inside_castle_seg7_dl_07023520 } from "../../painting.inc"

import { inside_castle_seg7_dl_07028FD0 } from "./2/model.inc"

import { inside_castle_seg7_dl_07029578 } from "./3/model.inc"

import { inside_castle_seg7_dl_0702A650 } from "./4/model.inc"

import { inside_castle_seg7_dl_0702AA10 } from "./6/model.inc"

import { inside_castle_seg7_dl_0702AB20 } from "./7/model.inc"

import { inside_castle_seg7_dl_0702E408 } from "./8/model.inc"

import { inside_castle_seg7_dl_0702FD30 } from "./9/model.inc"

import { inside_castle_seg7_dl_07023DB0 } from "./1/model.inc"

import { inside_castle_seg7_dl_07031588 } from "./10/model.inc"

import { inside_castle_seg7_dl_07031720 } from "./11/model.inc"

import { inside_castle_seg7_dl_07031830 } from "./12/model.inc"

import { inside_castle_seg7_dl_07032FC0 } from "./13/model.inc"

import { inside_castle_seg7_dl_07033158 } from "./14/model.inc"

import { inside_castle_seg7_dl_07034D88 } from "./15/model.inc"

import { inside_castle_seg7_dl_07035178 } from "./16/model.inc"

import { inside_castle_seg7_dl_07035288 } from "./17/model.inc"

import { inside_castle_seg7_dl_07036D88 } from "./18/model.inc"

import { inside_castle_seg7_dl_07037988 } from "./19/model.inc"

import { inside_castle_seg7_dl_07037BF8 } from "./20/model.inc"

import { inside_castle_seg7_dl_07037DE8 } from "./21/model.inc"

import { dl_castle_aquarium_light } from "./22/model.inc"

import { inside_castle_seg7_dl_07038350 } from "./23/model.inc"

import { inside_castle_seg7_dl_0703A6C8 } from "./24/model.inc"

import { inside_castle_seg7_dl_0703A808 } from "./25/model.inc"

import { inside_castle_seg7_dl_0703BA08 } from "./26/model.inc"

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E000F30
export const castle_geo_000F30 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000F70
export const castle_geo_000F70 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702E408),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000F88
export const castle_geo_000F88 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702FD30),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07023DB0),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000FA8
export const castle_geo_000FA8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07031588),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07031720),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07031830),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000FD0
export const castle_geo_000FD0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07032FC0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07033158),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(0, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001000
export const castle_geo_001000 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07034D88),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07035178),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07035288),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(2, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001038
export const castle_geo_001038 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07036D88),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07037988),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07037BF8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07037DE8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, dl_castle_aquarium_light),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07038350),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(3, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001088
export const castle_geo_001088 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703A6C8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0703A808),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070234C0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07023520),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(1, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0010C8
export const castle_geo_0010C8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703BA08),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001110
export const castle_geo_001110 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702E408),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001158
export const castle_geo_001158 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702FD30),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07023DB0),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0011A8
export const castle_geo_0011A8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07031588),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07031720),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07031830),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001200
export const castle_geo_001200 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07032FC0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07033158),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(256, 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001260
export const castle_geo_001260 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07034D88),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07035178),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07035288),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(258, 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0012C8
export const castle_geo_0012C8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07036D88),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07037988),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07037BF8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07037DE8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, dl_castle_aquarium_light),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07038350),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(3, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001348
export const castle_geo_001348 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703A6C8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0703A808),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070234C0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07023520),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(1, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0013B8
export const castle_geo_0013B8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07029578),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0702A650),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_0702AB20),
        GEO_ASM(0, geo_exec_inside_castle_light),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703BA08),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001400
export const castle_geo_001400 = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(64, 50, 7000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(13, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(17, geo_switch_area),
                    GEO_OPEN_NODE(),
                        GEO_BRANCH(1, castle_geo_000F30), // 0x0E000F30
                        GEO_BRANCH(1, castle_geo_000F70), // 0x0E000F70
                        GEO_BRANCH(1, castle_geo_000F88), // 0x0E000F88
                        GEO_BRANCH(1, castle_geo_000FA8), // 0x0E000FA8
                        GEO_BRANCH(1, castle_geo_000FD0), // 0x0E000FD0
                        GEO_BRANCH(1, castle_geo_001000), // 0x0E001000
                        GEO_BRANCH(1, castle_geo_001038), // 0x0E001038
                        GEO_BRANCH(1, castle_geo_001088), // 0x0E001088
                        GEO_BRANCH(1, castle_geo_0010C8), // 0x0E0010C8
                        GEO_BRANCH(1, castle_geo_001110), // 0x0E001110
                        GEO_BRANCH(1, castle_geo_001158), // 0x0E001158
                        GEO_BRANCH(1, castle_geo_0011A8), // 0x0E0011A8
                        GEO_BRANCH(1, castle_geo_001200), // 0x0E001200
                        GEO_BRANCH(1, castle_geo_001260), // 0x0E001260
                        GEO_BRANCH(1, castle_geo_0012C8), // 0x0E0012C8
                        GEO_BRANCH(1, castle_geo_001348), // 0x0E001348
                        GEO_BRANCH(1, castle_geo_0013B8), // 0x0E0013B8
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
