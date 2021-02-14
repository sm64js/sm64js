import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

import { sl_seg7_dl_07005478 } from "./1/model.inc"
import { sl_seg7_dl_070056B0 } from "./2/model.inc"
import { sl_seg7_dl_070073D0 } from "./3/model.inc"
import { sl_seg7_dl_07007880 } from "./4/model.inc"
import { sl_seg7_dl_070088B0 } from "./5/model.inc"
import { sl_seg7_dl_07008D58 } from "./6/model.inc"
import { sl_seg7_dl_0700A5A0 } from "./7/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const sl_geo_0003A8 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_SNOW_MOUNTAINS, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [16, 0, 2000, 6000, 0, 4400, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, sl_seg7_dl_07005478] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, sl_seg7_dl_070056B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, sl_seg7_dl_070073D0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, sl_seg7_dl_07007880] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, sl_seg7_dl_070088B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, sl_seg7_dl_07008D58] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, sl_seg7_dl_0700A5A0] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x1001, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
//	{ command: Geo.node_generated, args: [   1, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
