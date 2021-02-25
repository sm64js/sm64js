import { SurfaceLoadInstance as SurfaceLoad } from "./SurfaceLoad"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"

export const WARP_TRANSITION_FADE_FROM_COLOR   = 0x00
export const WARP_TRANSITION_FADE_INTO_COLOR   = 0x01
export const WARP_TRANSITION_FADE_FROM_STAR    = 0x08
export const WARP_TRANSITION_FADE_INTO_STAR    = 0x09
export const WARP_TRANSITION_FADE_FROM_CIRCLE  = 0x0A
export const WARP_TRANSITION_FADE_INTO_CIRCLE  = 0x0B
export const WARP_TRANSITION_FADE_INTO_MARIO   = 0x11
export const WARP_TRANSITION_FADE_FROM_BOWSER  = 0x12
export const WARP_TRANSITION_FADE_INTO_BOWSER = 0x13

class Area {

    constructor() {

        this.gCurrentArea = null
        this.gAreas = Array(8).fill(0).map(() => { return { index: 0 } })
        this.gCurAreaIndex = 0
        this.gCurrLevelNum = 0
        //this.gLoadedGraphNodes = new Array(256)

        this.gAreaUpdateCounter = 0

        this.gMarioSpawnInfo = {
            startPos: [0, 0, 0],
            startAngle: [0, 0, 0],
            areaIndex: 0, activeAreaIndex: 0,
            behaviorArg: 0, behaviorScript: null,
            unk18: null, next: null
        }

        this.gWarpTransition = {
            data: {}
        }
        this.gWarpTransDelay = 0
        this.gWarpTransRed = 0
        this.gWarpTransGreen = 0
        this.gWarpTransBlue = 0

    }

    load_area(index) {

        if (!this.gCurrentArea && this.gAreas[index]) {
            this.gCurrentArea = this.gAreas[index]
            this.gCurAreaIndex = this.gCurrentArea.index

            if (this.gCurrentArea.terrainData) {
                SurfaceLoad.load_area_terrain(index, this.gCurrentArea.terrainData, this.gCurrentArea.surfaceRooms, this.gCurrentArea.macroObjects)
            }

            if (this.gCurrentArea.objectSpawnInfos) {
                ObjectListProc.spawn_objects_from_info(this.gCurrentArea.objectSpawnInfos)
            }
        }

    }

    load_mario_area() {
        this.load_area(this.gMarioSpawnInfo.areaIndex)

        if (this.gCurrentArea.index == this.gMarioSpawnInfo.areaIndex) {
            this.gCurrentArea.flags |= 0x01
            ObjectListProc.spawn_objects_from_info(this.gMarioSpawnInfo)

        }
    }

    area_update_objects() {
        this.gAreaUpdateCounter++
        ObjectListProc.update_objects()
    }

    clear_areas() {
        this.gCurrentArea = null
        this.gMarioSpawnInfo.areaIndex = -1

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

}

export const AreaInstance = new Area()