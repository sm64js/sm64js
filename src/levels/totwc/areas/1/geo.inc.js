import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { totwc_seg7_dl_07005D28 } from "./1/model.inc"
import { totwc_seg7_dl_07007048 } from "./2/model.inc"
import { totwc_seg7_dl_070078B8 } from "./3/model.inc"
import { totwc_launchpad } from "./4/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const totwc_geo_000188 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_BELOW_CLOUDS, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 100, 25000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [16, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, totwc_seg7_dl_07005D28] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, totwc_launchpad] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, totwc_seg7_dl_07007048] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, totwc_seg7_dl_070078B8] },
	{ command: Geo.node_render_object_parent },
	// { command: Geo.node_generated, args: [0, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
