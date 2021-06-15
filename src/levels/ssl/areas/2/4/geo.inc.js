// Ssl

import { geo_movtex_draw_colored_2_no_update } from "../../../../../game/MovingTexture"

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_RENDER_RANGE, GEO_ASM, GEO_CLOSE_NODE,
    GEO_DISPLAY_LIST, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { ssl_dl_pyramid_quicksand_pit_static } from "./model.inc"

// 0x0E0005D8
export const ssl_geo_0005D8 = () => {return [
    GEO_CULLING_RADIUS(2000),
    GEO_OPEN_NODE(),
        //GEO_RENDER_RANGE(-1000, 4000),
        /*GEO_OPEN_NODE(),
            GEO_ASM(0x802, geo_movtex_draw_colored_2_no_update),
        GEO_CLOSE_NODE(),*/
        //GEO_RENDER_RANGE(4000, 12800),
        GEO_OPEN_NODE(),
            GEO_DISPLAY_LIST(LAYER_OPAQUE, ssl_dl_pyramid_quicksand_pit_static), //Commented out render range in compensation for the so far unimplemented movtext here
        GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
