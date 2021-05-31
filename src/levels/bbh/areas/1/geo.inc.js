// Bbh

import {
    GEO_NODE_START, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_RETURN, GEO_ASM,
    GEO_NODE_SCREEN_AREA, GEO_ZBUFFER, GEO_NODE_ORTHO, GEO_BACKGROUND,
    GEO_CAMERA_FRUSTUM_WITH_FUNC, GEO_CAMERA, GEO_SWITCH_CASE, GEO_BRANCH, GEO_RENDER_OBJ,
    GEO_END,
    LAYER_OPAQUE, LAYER_ALPHA, LAYER_TRANSPARENT, BACKGROUND_HAUNTED
} from "../../../../engine/GeoLayout"

import { bbh_seg7_dl_070075A8 } from "./1/model.inc"

import { bbh_seg7_dl_07007940 } from "./2/model.inc"

import { bbh_seg7_dl_07007B90 } from "./3/model.inc"

import { bbh_seg7_dl_07007FD0 } from "./4/model.inc"

import { bbh_seg7_dl_07008B58 } from "./5/model.inc"

import { bbh_seg7_dl_07008EA8 } from "./6/model.inc"

import { bbh_seg7_dl_0700AFF0 } from "./7/model.inc"

import { bbh_seg7_dl_0700B1C8 } from "./8/model.inc"

import { bbh_seg7_dl_0700B418 } from "./9/model.inc"

import { bbh_seg7_dl_0700B9E0 } from "./10/model.inc"

import { bbh_seg7_dl_0700BBF8 } from "./11/model.inc"

import { bbh_seg7_dl_0700D080 } from "./12/model.inc"

import { bbh_seg7_dl_0700D2E0 } from "./13/model.inc"

import { bbh_seg7_dl_0700D490 } from "./14/model.inc"

import { bbh_seg7_dl_0700D7E0 } from "./15/model.inc"

import { bbh_seg7_dl_07012220 } from "./19/model.inc"

import { bbh_seg7_dl_07012510 } from "./20/model.inc"

import { bbh_seg7_dl_070126E8 } from "./21/model.inc"

import { bbh_seg7_dl_0700F510 } from "./16/model.inc"

import { bbh_seg7_dl_0700F848 } from "./17/model.inc"

import { bbh_seg7_dl_07011120 } from "./18/model.inc"

import { bbh_seg7_dl_070139A8 } from "./22/model.inc"

import { bbh_seg7_dl_07013BE8 } from "./23/model.inc"

import { bbh_seg7_dl_07014FD8 } from "./24/model.inc"

import { bbh_seg7_dl_07015398 } from "./25/model.inc"

import { bbh_seg7_dl_070156E0 } from "./26/model.inc"

import { bbh_seg7_dl_07015A20 } from "./27/model.inc"

import { bbh_seg7_dl_07017378 } from "./28/model.inc"

import { bbh_seg7_dl_07017570 } from "./29/model.inc"

import { bbh_seg7_dl_07017788 } from "./30/model.inc"

import { bbh_seg7_dl_07019EF8 } from "./31/model.inc"

import { bbh_seg7_dl_0701A080 } from "./32/model.inc"

import {
    geo_movtex_pause_control, geo_movtex_draw_water_regions
} from "../../../../game/MovingTexture"

import { bbh_seg7_dl_0701A850 } from "./33/model.inc"

import { bbh_seg7_dl_0701B6D0 } from "./34/model.inc"

import { bbh_seg7_dl_0701E4E0 } from "./35/model.inc"

import { bbh_seg7_dl_0701E8D8 } from "./36/model.inc"

import { bbh_seg7_dl_0701ED18 } from "./37/model.inc"

import { bbh_seg7_dl_0701EEC8 } from "./38/model.inc"

import { bbh_seg7_dl_0701F070 } from "./39/model.inc"

import {
    SCREEN_WIDTH, SCREEN_HEIGHT
} from "../../../../game/Skybox"

import {
    geo_skybox_main, geo_envfx_main
} from "../../../../game/LevelGeo"

import {
    geo_camera_fov, geo_camera_main
} from "../../../../game/Camera"

import {
    geo_switch_area/*, geo_bbh_000670, geo_bbh_0006B0, geo_bbh_0006E8, geo_bbh_000730,
    geo_bbh_000750, geo_bbh_000768, geo_bbh_0007B0, geo_bbh_0007D0, geo_bbh_000800,
    geo_bbh_000828, geo_bbh_000860, geo_bbh_000888, geo_bbh_0008B0, geo_bbh_0008E8,
    geo_bbh_000950, geo_bbh_0009C8, geo_bbh_000A18, geo_bbh_000A60, geo_bbh_000AD8,
    geo_bbh_000B28, geo_bbh_000B88, geo_bbh_000BF0, geo_bbh_000C38, geo_bbh_000C88,
    geo_bbh_000CE8, geo_bbh_000D20, geo_bbh_000D68, geo_bbh_000DB0, geo_bbh_000DF0,
    geo_bbh_000E40, geo_bbh_000E80, geo_bbh_000EB0*/
} from "../../../../game/ObjectHelpers"


// 0x0E000670
export const geo_bbh_000670 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0006B0
export const geo_bbh_0006B0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700AFF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B1C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700B418),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B9E0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0006E8
export const geo_bbh_0006E8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012220),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012510),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070126E8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000730
export const geo_bbh_000730 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700F510),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700F848),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000750
export const geo_bbh_000750 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07011120),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000768
export const geo_bbh_000768 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012220),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012510),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070126E8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0007B0
export const geo_bbh_0007B0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070139A8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07013BE8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0007D0
export const geo_bbh_0007D0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07014FD8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07015398),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070156E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07015A20),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000800
export const geo_bbh_000800 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017378),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017570),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07017788),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000828
export const geo_bbh_000828 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07019EF8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701A080),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
        GEO_ASM(0x0401, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000860
export const geo_bbh_000860 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701A850),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000888
export const geo_bbh_000888 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701B6D0),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0008B0
export const geo_bbh_0008B0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701E4E0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701E8D8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701ED18),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0008E8
export const geo_bbh_0008E8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700AFF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B1C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700B418),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B9E0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000950
export const geo_bbh_000950 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012220),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012510),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070126E8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E0009C8
export const geo_bbh_0009C8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700F510),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700F848),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000A18
export const geo_bbh_000A18 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07011120),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000A60
export const geo_bbh_000A60 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012220),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012510),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070126E8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000AD8
export const geo_bbh_000AD8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070139A8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07013BE8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000B28
export const geo_bbh_000B28 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07014FD8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07015398),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070156E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07015A20),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000B88
export const geo_bbh_000B88 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_070075A8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_07007940),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07007B90),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07007FD0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07008B58),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07008EA8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701E4E0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701E8D8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701ED18),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000BF0
export const geo_bbh_000BF0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700AFF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B1C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700B418),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B9E0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700F510),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700F848),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000C38
export const geo_bbh_000C38 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700AFF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B1C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700B418),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B9E0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017378),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017570),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07017788),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000C88
export const geo_bbh_000C88 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700AFF0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B1C8),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700B418),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700B9E0),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700BBF8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07019EF8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701A080),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
        GEO_ASM(0x0401, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000CE8
export const geo_bbh_000CE8 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07011120),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000D20
export const geo_bbh_000D20 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D080),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700D2E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700D490),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0700D7E0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012220),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07012510),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_070126E8),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000D68
export const geo_bbh_000D68 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0700F510),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0700F848),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07019EF8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701A080),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
        GEO_ASM(0x0401, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000DB0
export const geo_bbh_000DB0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07011120),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701E4E0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701E8D8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701ED18),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000DF0
export const geo_bbh_000DF0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017378),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07017570),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_07017788),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701E4E0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701E8D8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701ED18),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F070),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000E40
export const geo_bbh_000E40 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_07019EF8),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701A080),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701A850),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
        GEO_ASM(0x0401, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000E80
export const geo_bbh_000E80 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701A850),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701B6D0),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000EB0
export const geo_bbh_000EB0 = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701B6D0),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701E4E0),
        GEO_DISPLAY_LIST(LAYER_ALPHA, bbh_seg7_dl_0701E8D8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701ED18),
        GEO_DISPLAY_LIST(LAYER_TRANSPARENT, bbh_seg7_dl_0701EEC8),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bbh_seg7_dl_0701F070),
        GEO_ASM(0, geo_movtex_pause_control),
        GEO_ASM(0x0400, geo_movtex_draw_water_regions),
    GEO_CLOSE_NODE(),
    GEO_RETURN(),
]};

// 0x0E000F00
export const geo_bbh_000F00 = () => {return [
    GEO_NODE_SCREEN_AREA(10, SCREEN_WIDTH/2, SCREEN_HEIGHT/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2),
    GEO_OPEN_NODE(),
        GEO_ZBUFFER(0),
        GEO_OPEN_NODE(),
            GEO_NODE_ORTHO(100),
            GEO_OPEN_NODE(),
                GEO_BACKGROUND(BACKGROUND_HAUNTED, geo_skybox_main),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
        GEO_ZBUFFER(1),
        GEO_OPEN_NODE(),
            GEO_CAMERA_FRUSTUM_WITH_FUNC(45, 50, 10000, geo_camera_fov),
            GEO_OPEN_NODE(),
                GEO_CAMERA(4, 0, 2000, 6000, 0, 0, 0, geo_camera_main),
                GEO_OPEN_NODE(),
                    GEO_SWITCH_CASE(32, geo_switch_area),
                    GEO_OPEN_NODE(),
                        GEO_BRANCH(1, geo_bbh_000670), // 0x0E000670
                        GEO_BRANCH(1, geo_bbh_0006B0), // 0x0E0006B0
                        GEO_BRANCH(1, geo_bbh_0006E8), // 0x0E0006E8
                        GEO_BRANCH(1, geo_bbh_000730), // 0x0E000730
                        GEO_BRANCH(1, geo_bbh_000750), // 0x0E000750
                        GEO_BRANCH(1, geo_bbh_000768), // 0x0E000768
                        GEO_BRANCH(1, geo_bbh_0007B0), // 0x0E0007B0
                        GEO_BRANCH(1, geo_bbh_0007D0), // 0x0E0007D0
                        GEO_BRANCH(1, geo_bbh_000800), // 0x0E000800
                        GEO_BRANCH(1, geo_bbh_000828), // 0x0E000828
                        GEO_BRANCH(1, geo_bbh_000860), // 0x0E000860
                        GEO_BRANCH(1, geo_bbh_000888), // 0x0E000888
                        GEO_BRANCH(1, geo_bbh_0008B0), // 0x0E0008B0
                        GEO_BRANCH(1, geo_bbh_0008E8), // 0x0E0008E8
                        GEO_BRANCH(1, geo_bbh_000950), // 0x0E000950
                        GEO_BRANCH(1, geo_bbh_0009C8), // 0x0E0009C8
                        GEO_BRANCH(1, geo_bbh_000A18), // 0x0E000A18
                        GEO_BRANCH(1, geo_bbh_000A60), // 0x0E000A60
                        GEO_BRANCH(1, geo_bbh_000AD8), // 0x0E000AD8
                        GEO_BRANCH(1, geo_bbh_000B28), // 0x0E000B28
                        GEO_BRANCH(1, geo_bbh_000B88), // 0x0E000B88
                        GEO_BRANCH(1, geo_bbh_000BF0), // 0x0E000BF0
                        GEO_BRANCH(1, geo_bbh_000C38), // 0x0E000C38
                        GEO_BRANCH(1, geo_bbh_000C88), // 0x0E000C88
                        GEO_BRANCH(1, geo_bbh_000CE8), // 0x0E000CE8
                        GEO_BRANCH(1, geo_bbh_000D20), // 0x0E000D20
                        GEO_BRANCH(1, geo_bbh_000D68), // 0x0E000D68
                        GEO_BRANCH(1, geo_bbh_000DB0), // 0x0E000DB0
                        GEO_BRANCH(1, geo_bbh_000DF0), // 0x0E000DF0
                        GEO_BRANCH(1, geo_bbh_000E40), // 0x0E000E40
                        GEO_BRANCH(1, geo_bbh_000E80), // 0x0E000E80
                        GEO_BRANCH(1, geo_bbh_000EB0), // 0x0E000EB0
                    GEO_CLOSE_NODE(),
                    GEO_RENDER_OBJ(),
                    GEO_ASM(0, geo_envfx_main),
                GEO_CLOSE_NODE(),
            GEO_CLOSE_NODE(),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
