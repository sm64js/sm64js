import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { yellow_sphere_seg5_dl_050008C8 } from "./model.inc"

export const yellow_sphere_geo = [
	{ command: Geo.node_culling_radius, args: [800] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, yellow_sphere_seg5_dl_050008C8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end }
]
