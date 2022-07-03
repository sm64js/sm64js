import { GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_NODE_START, GEO_OPEN_NODE, GEO_SWITCH_CASE } from "../../engine/GeoLayout";
import { geo_switch_anim_state } from "../../game/ObjectHelpers";
import { flame_seg6_dl_0601C108, flame_seg6_dl_0601C1A8, flame_seg6_dl_0601C248, flame_seg6_dl_0601C2E8, flame_seg6_dl_0601C388, flame_seg6_dl_0601C428, flame_seg6_dl_0601C4C8, flame_seg6_dl_0601C568, flame_seg6_dl_0601C608, flame_seg6_dl_0601C6A8, flame_seg6_dl_0601C748, flame_seg6_dl_0601C7E8, flame_seg6_dl_0601C888, flame_seg6_dl_0601C928 } from "./model.inc";

// 0x0D000000
export const bowser_flames_geo = () => {return [
    GEO_NODE_START(),
    GEO_OPEN_NODE(),
       GEO_SWITCH_CASE(14, geo_switch_anim_state),
       GEO_OPEN_NODE(),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C108),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C1A8),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C248),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C2E8),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C388),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C428),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C4C8),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C568),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C608),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C6A8),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C748),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C7E8),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C888),
          GEO_DISPLAY_LIST(LAYER_TRANSPARENT, flame_seg6_dl_0601C928),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
 ]};