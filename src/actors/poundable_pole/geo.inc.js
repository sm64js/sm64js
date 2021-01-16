import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { poundable_pole_seg6_dl_06002410 } from "./model.inc"

export const wooden_post_geo = [
	{ command: Geo.node_culling_radius, args: [450] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, poundable_pole_seg6_dl_06002410] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
