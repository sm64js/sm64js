import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { chain_ball_seg6_dl_060212E8 } from "./model.inc"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

export const metallic_ball_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0x96, 60], },
	{ command: Geo.open_node },
	{ command: Geo.display_list, args: [Geo.LAYER_ALPHA, chain_ball_seg6_dl_060212E8] },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
