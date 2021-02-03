import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

import { castle_courtyard_seg7_dl_070048B8 } from "./1/model.inc"
import { castle_courtyard_seg7_dl_07005698 } from "./2/model.inc"
import { castle_courtyard_seg7_dl_07005938 } from "./3/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const castle_courtyard_geo_000218 = [
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
	{ command: Geo.node_camera, args: [16, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, castle_courtyard_seg7_dl_070048B8] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT_DECAL, castle_courtyard_seg7_dl_07005698] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, castle_courtyard_seg7_dl_07005938] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
//	{ command: Geo.node_generated, args: [0x2601, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
