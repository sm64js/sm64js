import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { cannon_barrel_seg8_dl_08006660 } from "./model.inc"

// 0x0F0001C0
export const cannon_barrel_geo = [
   ['GEO_NODE_START'],
   ['GEO_OPEN_NODE'],
       ['GEO_DISPLAY_LIST', Geo.LAYER_OPAQUE, cannon_barrel_seg8_dl_08006660],
   ['GEO_CLOSE_NODE'],
   ['GEO_END'],
]
