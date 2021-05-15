import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_switch_area } from "../../../../game/ObjectHelpers"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

import { inside_castle_seg7_dl_0705E088 } from "./1/model.inc"
import { inside_castle_seg7_dl_0705E2A0 } from "./2/model.inc"
import { inside_castle_seg7_dl_0705E450 } from "./3/model.inc"
import { inside_castle_seg7_dl_070616E8 } from "./4/model.inc"
import { inside_castle_seg7_dl_07061C20 } from "./5/model.inc"
import { inside_castle_seg7_dl_07064B78 } from "./6/model.inc"
import { inside_castle_seg7_dl_07064D58 } from "./7/model.inc"
import { inside_castle_seg7_dl_07066CE0 } from "./8/model.inc"
import { inside_castle_seg7_dl_07066E90 } from "./9/model.inc"
import { inside_castle_seg7_dl_07066FA0 } from "./10/model.inc"
import { inside_castle_seg7_dl_07068850 } from "./11/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const castle_geo_001958 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0705E088] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450] },
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001980 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070616E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20] },
	/*{ command: Geo.node_generated, args: [   0, geo_painting_update]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(4, 1]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(5, 1]},
	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},*/
	//{ command: Geo.node_generated, args: [0x0600, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0019C8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07064B78] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07064D58] },
	/*{ command: Geo.node_generated, args: [0, geo_painting_update]},
	{ command: Geo.node_generated, args: [PAINTING_ID(6, 1]},*/
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_0019F8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07066FA0] },
	//{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
	{ command: Geo.node_generated, args: [0x0612, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001A30 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07068850] },
	/*{ command: Geo.node_generated, args: [  0, geo_painting_update]},
	{ command: Geo.node_generated, args: [PAINTING_ID(7, 1]},*/
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001A58 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0705E088] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070616E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20] },
	/*{ command: Geo.node_generated, args: [   0, geo_painting_update]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(4, 1]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(5, 1]},
	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},*/
	//{ command: Geo.node_generated, args: [0x0600, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001AB8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0705E088] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07068850] },
	/*{ command: Geo.node_generated, args: [  0, geo_painting_update]},
	{ command: Geo.node_generated, args: [PAINTING_ID(7, 1]},*/
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001AF8 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0705E088] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_0705E2A0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_0705E450] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07066FA0] },
	//{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
	{ command: Geo.node_generated, args: [0x0612, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001B48 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070616E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07066CE0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07066E90] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07066FA0] },
	/*{ command: Geo.node_generated, args: [   0, geo_painting_update]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(4, 1]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(5, 1]},
	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},*/
	//{ command: Geo.node_generated, args: [0x0600, geo_movtex_draw_water_regions]},
	{ command: Geo.node_generated, args: [0x0612, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001BB0 = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_070616E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, inside_castle_seg7_dl_07061C20] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_07064B78] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, inside_castle_seg7_dl_07064D58] },
	/*{ command: Geo.node_generated, args: [   0, geo_painting_update]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(4, 1]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(5, 1]},
	{ command: Geo.node_generated, args: [ PAINTING_ID(6, 1]},
	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},*/
	//{ command: Geo.node_generated, args: [0x0600, geo_movtex_draw_water_regions]},
	{ command: Geo.close_node },
	{ command: Geo.return },
]

export const castle_geo_001C10 = [
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
	{ command: Geo.node_perspective, args: [64, 50, 6400, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [4, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [10, geo_switch_area]},
	{ command: Geo.open_node },
	{ command: Geo.branch, args: [1,castle_geo_001958]},
	{ command: Geo.branch, args: [1,castle_geo_001980]},
	{ command: Geo.branch, args: [1,castle_geo_0019C8]},
	{ command: Geo.branch, args: [1,castle_geo_0019F8]},
	{ command: Geo.branch, args: [1,castle_geo_001A30]},
	{ command: Geo.branch, args: [1,castle_geo_001A58]},
	{ command: Geo.branch, args: [1,castle_geo_001AB8]},
	{ command: Geo.branch, args: [1,castle_geo_001AF8]},
	{ command: Geo.branch, args: [1,castle_geo_001B48]},
	{ command: Geo.branch, args: [1,castle_geo_001BB0]},
	{ command: Geo.close_node },
	{ command: Geo.node_render_object_parent },
	//{ command: Geo.node_generated, args: [0, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
