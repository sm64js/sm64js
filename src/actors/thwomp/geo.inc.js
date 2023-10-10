import { GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_OPEN_NODE, GEO_SHADOW, LAYER_OPAQUE } from "../../engine/GeoLayout";
import { SHADOW_SQUARE_SCALABLE } from "../../game/Shadow";
import { thwomp_seg5_dl_0500B750 } from "./model.inc";

export const thwomp_geo = () => {return [
    GEO_SHADOW(SHADOW_SQUARE_SCALABLE, 0xB4, 300),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, thwomp_seg5_dl_0500B750),
    GEO_CLOSE_NODE(),
    GEO_END(),
]}