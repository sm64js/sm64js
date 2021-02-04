import { GeoLayoutInstance as Geo } from "../../../../../engine/GeoLayout"
import { CameraInstance as Camera } from "../../../../game/Camera"
import { geo_skybox_main } from "../../../../game/LevelGeo"

export const bits_geo_000718 = [
	{ command: Geo.node_screen_area, args: [10, canvas.width/2, canvas.height/2, SCREEN_WIDTH/2, SCREEN_HEIGHT/2]},
	{ command: Geo.open_node },
	{ command: Geo.node_master_list, args: [0]},
	{ command: Geo.open_node },
	{ command: Geo.node_ortho, args: [100]},
	{ command: Geo.open_node },
	{ command: GeoLayout.node_background, args: [GeoLayout.BACKGROUND_PURPLE_SKY, geo_skybox_main] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_master_list, args: [1]},
	{ command: Geo.open_node },
	{ command: Geo.node_perspective, args: [45, 100, 20000, Camera.geo_camera_fov] },
	{ command: Geo.open_node },
	{ command: Geo.node_camera, args: [14, 0, 2000, 6000, 0, -4500, -8000, geo_camera_main]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bits_seg7_dl_07002918] },
	{ command: Geo.node_render_object_parent },
	{ command: Geo.node_generated, args: [0, geo_envfx_main]},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
