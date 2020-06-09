import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"

export const WARP_TRANSITION_FADE_FROM_COLOR   = 0x00
export const WARP_TRANSITION_FADE_INTO_COLOR   = 0x01
export const WARP_TRANSITION_FADE_FROM_STAR    = 0x08
export const WARP_TRANSITION_FADE_INTO_STAR    = 0x09
export const WARP_TRANSITION_FADE_FROM_CIRCLE  = 0x0A
export const WARP_TRANSITION_FADE_INTO_CIRCLE  = 0x0B
export const WARP_TRANSITION_FADE_INTO_MARIO   = 0x11
export const WARP_TRANSITION_FADE_FROM_BOWSER  = 0x12
export const WARP_TRANSITION_FADE_INTO_BOWSER  = 0x13

class Area {

    constructor() {

        this.gCurrentArea = null
        this.gAreas = Array(8).fill({ index: 0 })
        this.gCurAreaIndex = 0

    }

    load_area(index) {

        if (!this.gCurrentArea && this.gAreas[index]) {
            this.gCurrentArea = this.gAreas[index]
            this.gCurAreaIndex = this.gCurrentArea.index
        }

    }

    play_transition() {
        /// TODO
    }

    clear_areas() {
        this.gCurrentArea = null

        this.gAreas.forEach((areaData, i) => {
            Object.assign(areaData, {
                index: i,
                flags: 0,
                terrainType: 0,
                geometryLayoutData: null,
                terrainData: null,
                surfaceRooms: null,
                macroObjects: null,
                warpNodes: null,
                paintingWarpNodes: null,
                instantWarps: null,
                objectSpawnInfos: null,
                camera: null,
                unused28: null,
                whirlpools: [ null, null ],
                dialog: [null, null],
                musicParam: 0,
                musicParam2: 0
            })
        })
    }

    render_game() {
        if (this.gCurrentArea) {
            GeoRenderer.geo_process_root(this.gCurrentArea.geometryLayoutData, null, null, null)
        } else {
            console.log("GeoArea is NULL")
        }
    }

}

export const AreaInstance = new Area()