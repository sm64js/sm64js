import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

import { ccs_seg7_dl_0701CE30 } from "./1/model.inc"
import { ccs_seg7_dl_0701E558 } from "./2/model.inc"
import { ccs_seg7_dl_0701E6B0 } from "./3/model.inc"
import { ccs_seg7_dl_0701FC78 } from "./4/model.inc"
import { ccs_seg7_dl_0701FD78 } from "./5/model.inc"
import { ccs_seg7_dl_0701FE60 } from "./6/model.inc"
import { ccs_seg7_dl_070207F0 } from "./7/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const ccs_geo_0005E8 = [
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
	{ command: Geo.node_perspective, args: [45, 100, 12800, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [9, 0, 2000, 6000, 0, 0, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccs_seg7_dl_0701CE30] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, ccs_seg7_dl_0701E558] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE_DECAL, ccs_seg7_dl_0701E6B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ccs_seg7_dl_0701FC78] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, ccs_seg7_dl_0701FD78] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ccs_seg7_dl_0701FE60] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, ccs_seg7_dl_070207F0] },
	{ command: Geo.node_render_object_parent },
	{ command: Geo.node_generated, args: [0, Camera.geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
