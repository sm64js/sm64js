// Castle Inside

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_RETURN, GEO_ASM,
    GEO_NODE_SCREEN_AREA, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND_COLOR,
    GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SWITCH_CASE, GEO_BRANCH, GEO_RENDER_OBJ,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, PAINTING_ID, LAYER_TRANSPARENT
} from "../../../../engine/GeoLayout"

import { inside_castle_seg7_dl_0703E6F0 } from "./1/model.inc"

import { inside_castle_seg7_dl_07043028 } from "./2/model.inc"

import { inside_castle_seg7_dl_07043B48 } from "./3/model.inc"

import { inside_castle_seg7_dl_07043CD8 } from "./4/model.inc"

import {
    geo_painting_update, geo_painting_draw, geo_switch_area
} from "../../../../game/ObjectHelpers"
import {
    geo_render_mirror_mario
} from "../../../../game/MarioMisc"

import { inside_castle_seg7_dl_0704A0E8 } from "./5/model.inc"

import { inside_castle_seg7_dl_0704A2E0 } from "./6/model.inc"

import { inside_castle_seg7_dl_0704AA98 } from "./7/model.inc"

import { inside_castle_seg7_dl_0704C7D8 } from "./8/model.inc"

import { inside_castle_seg7_dl_07050938 } from "./9/model.inc"

import { inside_castle_seg7_dl_07051678 } from "./10/model.inc"

import { inside_castle_seg7_dl_070519C8 } from "./11/model.inc"

import { inside_castle_seg7_dl_07051B60 } from "./12/model.inc"

import { inside_castle_seg7_dl_070558D0 } from "./13/model.inc"

import { inside_castle_seg7_dl_070572A0 } from "./14/model.inc"

import { inside_castle_seg7_dl_07057F00 } from "./15/model.inc"

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import { geo_envfx_main } from "../../../../game/LevelGeo"


// 0x0E001560
export const castle_geo_001560 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703E6F0),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001578
export const castle_geo_001578 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043028),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043B48),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07043CD8),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(8, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(10, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0015B8
export const castle_geo_0015B8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704A0E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0704A2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704AA98),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(12, 1), 'geo_painting_draw'),
        GEO_ASM(0, 'MarioMisc.geo_render_mirror_mario'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0015F8
export const castle_geo_0015F8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704C7D8),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(9, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(13, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001628
export const castle_geo_001628 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07050938),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07051678),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(11, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001668
export const castle_geo_001668 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070558D0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070572A0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07057F00),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001690
export const castle_geo_001690 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0703E6F0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043028),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043B48),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07043CD8),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(8, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(10, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0016D8
export const castle_geo_0016D8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043028),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043B48),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07043CD8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704A0E8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_0704A2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704AA98),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(8, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(10, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(12, 1), 'geo_painting_draw'),
        GEO_ASM(0, 'MarioMisc.geo_render_mirror_mario'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001740
export const castle_geo_001740 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043028),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043B48),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07043CD8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_0704C7D8),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(8, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(9, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(10, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(13, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001798
export const castle_geo_001798 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043028),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07043B48),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07043CD8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07050938),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07051678),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(8, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(10, 1), 'geo_painting_draw'),
        GEO_ASM(PAINTING_ID(11, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001800
export const castle_geo_001800 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07050938),
        GEO_DISPLAY_LIST(LAYER_ALPHA, inside_castle_seg7_dl_07051678),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_070519C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, inside_castle_seg7_dl_07051B60),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070558D0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_070572A0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, inside_castle_seg7_dl_07057F00),
        GEO_ASM(0, 'geo_painting_update'),
        GEO_ASM(PAINTING_ID(11, 1), 'geo_painting_draw'),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E001858
export const castle_geo_001858 = () => {return [
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
            GEO_CAMERA_FRUSTUM_WITH_FUNC(64, 50, 8000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(4, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(11, geo_switch_area),
                    GEO_OPEN_NODE(),
                        GEO_BRANCH(1, castle_geo_001560), // 0x0E001560
                        GEO_BRANCH(1, castle_geo_001578), // 0x0E001578
                        GEO_BRANCH(1, castle_geo_0015B8), // 0x0E0015B8
                        GEO_BRANCH(1, castle_geo_0015F8), // 0x0E0015F8
                        GEO_BRANCH(1, castle_geo_001628), // 0x0E001628
                        GEO_BRANCH(1, castle_geo_001668), // 0x0E001668
                        GEO_BRANCH(1, castle_geo_001690), // 0x0E001690
                        GEO_BRANCH(1, castle_geo_0016D8), // 0x0E0016D8
                        GEO_BRANCH(1, castle_geo_001740), // 0x0E001740
                        GEO_BRANCH(1, castle_geo_001798), // 0x0E001798
                        GEO_BRANCH(1, castle_geo_001800), // 0x0E001800
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
