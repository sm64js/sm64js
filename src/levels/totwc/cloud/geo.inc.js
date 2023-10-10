import { GEO_BILLBOARD, GEO_CLOSE_NODE, GEO_CULLING_RADIUS, GEO_DISPLAY_LIST, GEO_END, GEO_OPEN_NODE, LAYER_TRANSPARENT } from "../../../engine/GeoLayout";
import { totwc_seg7_dl_070079A8 } from "./model.inc";

// 0x0E000160
export const totwc_geo_000160 = [
    GEO_CULLING_RADIUS(2000),
    GEO_OPEN_NODE(),
        GEO_BILLBOARD(),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_TRANSPARENT, totwc_seg7_dl_070079A8),
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
];