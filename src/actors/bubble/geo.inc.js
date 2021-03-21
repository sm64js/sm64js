import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { bubble_seg4_dl_0401DD60 } from "./model.inc"
import { bubble_seg4_dl_0401DDE0 } from "./model.inc"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"

export const bubble_geo = [
	{ command: Geo.node_switch_case, args: [1, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bubble_seg4_dl_0401DD60] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const purple_marble_geo = [
	{ command: Geo.node_switch_case, args: [1, geo_switch_anim_state] },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, bubble_seg4_dl_0401DDE0] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
