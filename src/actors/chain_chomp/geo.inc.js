import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { chain_chomp_seg6_dl_06024940 } from "./model.inc"
import { chain_chomp_seg6_dl_06024FC0 } from "./model.inc"
import { chain_chomp_seg6_dl_06024240 } from "./model.inc"
import { chain_chomp_seg6_dl_06024D60 } from "./model.inc"
import { chain_chomp_seg6_dl_06024B00 } from "./model.inc"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"

export const chain_chomp_geo = [
	{ command: Geo.node_shadow, args: [SHADOW_CIRCLE_4_VERTS, 0x96, 200], },
	{ command: Geo.open_node },
	{ command: Geo.node_scale,args: [0x00, 16384],},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, null],},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024940],},
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024FC0],},
	{ command: Geo.close_node },
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, null],},
	{ command: Geo.open_node },
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024240],},
	{ command: Geo.node_animated_part,args: [Geo.LAYER_OPAQUE, 0, 0, 0, chain_chomp_seg6_dl_06024D60],},
	{ command: Geo.node_animated_part,args: [Geo.LAYER_ALPHA, 0, 0, 0, chain_chomp_seg6_dl_06024B00],},
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.close_node },
	{ command: Geo.node_end },
]
