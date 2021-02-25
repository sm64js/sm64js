import { SurfaceLoadInstance as SurfaceLoad } from "./SurfaceLoad"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"

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