// Ssl

import { geo_movtex_draw_colored_2_no_update } from "../../../../../game/MovingTexture"

import { GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_ASM, GEO_CLOSE_NODE, GEO_END } from "../../../../../engine/GeoLayout"

// 0x0E0005C0
export const ssl_geo_0005C0 = () => {return [
    GEO_CULLING_RADIUS(2000),
    /*GEO_OPEN_NODE(),
        GEO_ASM(0x801, geo_movtex_draw_colored_2_no_update),
    GEO_CLOSE_NODE(),*/
    GEO_END(),
]};

// 2021-06-14 09:53:10 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
