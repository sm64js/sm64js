import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { geo_switch_anim_state } from "../../game/ObjectHelpers"

import {
	dirt_seg3_dl_0302C378,
	dirt_seg3_dl_0302C3B0,
	dirt_seg3_dl_0302C3E8,
	dirt_seg3_dl_0302C028,
	dirt_seg3_dl_0302C420,
	dirt_seg3_dl_0302C458,
	dirt_seg3_dl_0302C298,
	dirt_seg3_dl_0302C2B8,
	dirt_seg3_dl_0302C2D8,
	dirt_seg3_dl_0302C2F8,
	dirt_seg3_dl_0302C318,
} from "./model.inc"

export const dirt_animation_geo = [
	{ command: Geo.node_culling_radius, args: [300] },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [6, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C378] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C3B0] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C3E8] },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, dirt_seg3_dl_0302C028] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C420] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C458] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]

export const cartoon_star_geo = [
	{ command: Geo.node_culling_radius, args: [300] },
	{ command: Geo.open_node },
	{ command: Geo.node_switch_case, args: [5, geo_switch_anim_state]},
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C298] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C2B8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C2D8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C2F8] },
	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, dirt_seg3_dl_0302C318] },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
