import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_switch_area } from "../../../../game/ObjectHelpers"
import { inside_castle_seg7_dl_07028FD0 } from "./2/model.inc" // v
import { inside_castle_seg7_dl_07029578 } from "./3/model.inc" // v
import { inside_castle_seg7_dl_0702A650 } from "./4/model.inc" // v
import { inside_castle_seg7_dl_0702AA10 } from "./6/model.inc" // v
import { inside_castle_seg7_dl_0702AB20 } from "./7/model.inc" // v
import { inside_castle_seg7_dl_0702E408 } from "./8/model.inc" // v
import { inside_castle_seg7_dl_0702FD30 } from "./9/model.inc" // v
import { inside_castle_seg7_dl_07023DB0 } from "./1/model.inc" // v
import { inside_castle_seg7_dl_07031588 } from "./10/model.inc" // v
import { inside_castle_seg7_dl_07031720 } from "./11/model.inc" // v
import { inside_castle_seg7_dl_07031830 } from "./12/model.inc" // v
import { inside_castle_seg7_dl_07032FC0 } from "./13/model.inc" // v
import { inside_castle_seg7_dl_07033158 } from "./14/model.inc" // v
import { inside_castle_seg7_dl_07034D88 } from "./15/model.inc" // v
import { inside_castle_seg7_dl_07035178 } from "./16/model.inc" // v
import { inside_castle_seg7_dl_07035288 } from "./17/model.inc" // v
import { inside_castle_seg7_dl_07036D88 } from "./18/model.inc" // v
import { inside_castle_seg7_dl_07037988 } from "./19/model.inc" // v
import { inside_castle_seg7_dl_07037BF8 } from "./20/model.inc" // v
import { inside_castle_seg7_dl_07037DE8 } from "./21/model.inc" // v
import { inside_castle_seg7_dl_07038350 } from "./23/model.inc" // v
import { inside_castle_seg7_dl_0703A6C8 } from "./24/model.inc" // v
import { inside_castle_seg7_dl_0703A808 } from "./25/model.inc" // v
import { inside_castle_seg7_dl_0703BA08 } from "./26/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const castle_geo_000F30 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_000F70 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702E408] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_000F88 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702FD30] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07023DB0] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_000FA8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07031588] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07031720] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07031830] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_000FD0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07032FC0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07033158] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(0, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001000 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07034D88] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07035178] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07035288] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(2, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001038 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07036D88] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07037988] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07037BF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07037DE8] },
//	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, dl_castle_aquarium_light] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07038350] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(3, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001088 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703A6C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0703A808] },
//	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070234C0] },
//	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07023520] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(1, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0010C8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
//	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703BA08] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001110 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702E408] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001158 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702FD30] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07023DB0] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0011A8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07031588] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07031720] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07031830] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001200 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [  0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07032FC0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07033158] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [256, geo_painting_draw]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001260 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [  0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07034D88] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07035178] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07035288] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [258, geo_painting_draw]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0012C8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [  0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07036D88] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07037988] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07037BF8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07037DE8] },
//	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, dl_castle_aquarium_light] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07038350] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(3, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001348 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [  0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703A6C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0703A808] },
//	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070234C0] },
//	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07023520] },
//	{ command: Geo.node_generated, args: [  0, geo_painting_update]},
//	{ command: Geo.node_generated, args: [PAINTING_ID(1, 1]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0013B8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07028FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07029578] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0702A650] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, inside_castle_seg7_dl_0702AA10] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0702AB20] },
//	{ command: Geo.node_generated, args: [0, geo_exec_inside_castle_light]},
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703BA08] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001400 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
// TODO GEO_BACKGROUND_COLOR(0x0001),
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [64, 50, 7000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [13, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [17, geo_switch_area]},
	{ command: Geo.open_node },
	{ command: Geo.branch, args: [1, castle_geo_000F30]},
	{ command: Geo.branch, args: [1, castle_geo_000F70]},
	{ command: Geo.branch, args: [1, castle_geo_000F88]},
	{ command: Geo.branch, args: [1, castle_geo_000FA8]},
	{ command: Geo.branch, args: [1, castle_geo_000FD0]},
	{ command: Geo.branch, args: [1, castle_geo_001000]},
	{ command: Geo.branch, args: [1, castle_geo_001038]},
	{ command: Geo.branch, args: [1, castle_geo_001088]},
	{ command: Geo.branch, args: [1, castle_geo_0010C8]},
	{ command: Geo.branch, args: [1, castle_geo_001110]},
	{ command: Geo.branch, args: [1, castle_geo_001158]},
	{ command: Geo.branch, args: [1, castle_geo_0011A8]},
	{ command: Geo.branch, args: [1, castle_geo_001200]},
	{ command: Geo.branch, args: [1, castle_geo_001260]},
	{ command: Geo.branch, args: [1, castle_geo_0012C8]},
	{ command: Geo.branch, args: [1, castle_geo_001348]},
	{ command: Geo.branch, args: [1, castle_geo_0013B8]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_object_parent },
//	{ command: Geo.node_generated, args: [0, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
