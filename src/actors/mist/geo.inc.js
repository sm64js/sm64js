import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { mist_seg3_dl_03000880 } from "./model.inc"
import { mist_seg3_dl_03000920 } from "./model.inc"
import { geo_update_layer_transparency } from "../../game/ObjectHelpers"

export const mist_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_generated, args: [0, geo_update_layer_transparency] },
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, mist_seg3_dl_03000880] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const white_puff_geo = [
	{ command: Geo.node_start },
	{ command: Geo.open_node },
	{ command: Geo.node_generated, args: [0, geo_update_layer_transparency]},
	{ command: Geo.display_list, args: [Geo.LAYER_TRANSPARENT, mist_seg3_dl_03000920] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
