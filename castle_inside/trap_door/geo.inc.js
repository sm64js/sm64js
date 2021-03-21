import { GeoLayoutInstance as Geo } from "../../../engine/GeoLayout"
import {
	inside_castle_seg7_dl_0703BC28,
	inside_castle_seg7_dl_0703BCB8
} from "./model.inc"

export const castle_geo_000F18 = [
	{ command: Geo.node_culling_radius, args: [600] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703BCB8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
