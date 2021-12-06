import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

import { gj_dl_fountain_mesh_layer_1, gj_dl_hut_mesh_layer_1, gj_dl_jungle_mesh_layer_1,
	gj_dl_ice_mesh_layer_1, gj_dl_trees_mesh_layer_1, gj_dl_launch2_mesh, gj_dl_launch3_mesh,
	gj_dl_launch4_mesh, gj_dl_launch5_mesh
} from "./1/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const gj_area_1_geo = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100.0000]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_SNOW_MOUNTAINS, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45.0000, 100, 30000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [1, 0, 2000, 6000, 0, -2200, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_fountain_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_hut_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_jungle_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_ice_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_trees_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_launch2_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_launch3_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_launch4_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, gj_dl_launch5_mesh] },
	// { command: Geo.node_generated, args: [0x3701, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
