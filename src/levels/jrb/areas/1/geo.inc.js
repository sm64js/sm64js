import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

import { jrb_seg7_dl_07002FD0 } from "./1/model.inc"
import { jrb_seg7_dl_07004940 } from "./2/model.inc"
import { jrb_seg7_dl_07004C78 } from "./3/model.inc"
import { jrb_seg7_dl_070058C8 } from "./4/model.inc"
import { jrb_seg7_dl_070069B0 } from "./5/model.inc"
import { jrb_seg7_dl_07007570 } from "./6/model.inc"
import { jrb_seg7_dl_07007718 } from "./7/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const jrb_geo_000A18 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_OCEAN_SKY/*BACKGROUND_ABOVE_CLOUDS*/, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 100, 25000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [16, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, jrb_seg7_dl_07002FD0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, jrb_seg7_dl_07004940] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, jrb_seg7_dl_07004C78] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, jrb_seg7_dl_070058C8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, jrb_seg7_dl_070069B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, jrb_seg7_dl_07007570] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, jrb_seg7_dl_07007718] },
//	{ command: Geo.node_generated, args: [   0, geo_movtex_pause_control]},
	{ command: Geo.node_generated, args: [0x1201, geo_movtex_draw_water_regions]},
	{ command: Geo.node_generated, args: [0x1205, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
//	{ command: Geo.node_generated, args: [  14, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
//	{ command: Geo.node_generated, args: [0, geo_cannon_circle_base]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
