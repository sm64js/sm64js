import { GeoLayoutInstance as Geo } from "../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"
import { geo_movtex_draw_water_regions } from "../../../../game/MovingTexture"

import { dolphin_dl_launch_mesh, dolphin_dl_launch2_mesh, dolphin_dl_launch3_mesh,
	dolphin_dl_sm64jslogo_mesh_layer_1, dolphin_dl_town_mesh_layer_1,
	dolphin_dl_vines_mesh_layer_4, dolphin_dl_volcano_mesh_layer_1
} from "./1/model.inc"

const canvas = document.querySelector('#gameCanvas')

export const dolphin_area_1_geo = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, canvas.width/2, canvas.height/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100.0000]},
	{ command: Geo.open_node },
	{ command: Geo.node_background, args: [Geo.BACKGROUND_BELOW_CLOUDS, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45.0000, 100, 30000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [1, 0, 2000, 6000, 0, -2200, 0, Camera.geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_launch_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_launch2_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_launch3_mesh] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_sm64jslogo_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_town_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dolphin_dl_volcano_mesh_layer_1] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, dolphin_dl_vines_mesh_layer_4] },
	{ command: Geo.node_generated, args: [0x3801, geo_movtex_draw_water_regions]},
	{ command: Geo.node_render_object_parent },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
