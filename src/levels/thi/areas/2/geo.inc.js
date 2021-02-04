import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

import {thi_seg7_dl_07005260,thi_seg7_dl_07006968,thi_seg7_dl_07007008,thi_seg7_dl_070072E8,thi_seg7_dl_07007538} from "./1/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const thi_geo_0006D4 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_OCEAN_SKY, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [1, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.node_scale, args: [0x00, 19660]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, thi_seg7_dl_07005260] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, thi_seg7_dl_07006968] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, thi_seg7_dl_07007008] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, thi_seg7_dl_070072E8] },
	{ command: Geo.close_node },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, thi_seg7_dl_07007538] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x1302, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
