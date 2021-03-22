import { GeoLayoutInstance as Geo } from "../../../engine/GeoLayout"
import { 
	inside_castle_seg7_dl_0703BEC0,
	inside_castle_seg7_dl_0703BF38,
	inside_castle_seg7_dl_0703BF70,
	inside_castle_seg7_dl_0703BFA8,
	inside_castle_seg7_texture_07005800,
	inside_castle_seg7_texture_07003800
} from "./model.inc"

export const castle_geo_000F00 = [
	{ command: Geo.node_culling_radius, args: [400] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, inside_castle_seg7_dl_0703BFA8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
