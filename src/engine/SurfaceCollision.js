import { LEVEL_BOUNDARY_MAX, CELL_SIZE, SURFACE_FLAG_NO_CAM_COLLISION, SURFACE_CAMERA_BOUNDARY } from "../include/surface_terrains"
import { SurfaceLoadInstance as SurfaceLoad } from "../game/SurfaceLoad"
import { ObjectListProcessorInstance as ObjectListProcessor } from "../game/ObjectListProcessor"

class SurfaceCollision {
    constructor() {

    }

    find_floor(xPos, yPos, zPos, floorWrapper) {
        let height = -11000.0

        const x = parseInt(xPos)
        const y = parseInt(yPos)
        const z = parseInt(zPos)

        floorWrapper.floor = null

        if (x <= -LEVEL_BOUNDARY_MAX || x >= LEVEL_BOUNDARY_MAX) { 
            return height
        }
        if (z <= -LEVEL_BOUNDARY_MAX || z >= LEVEL_BOUNDARY_MAX) {
            return height
        }

        // Each level is split into cells to limit load, find the appropriate cell.
        const cellX = parseInt((x + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0xF
        const cellZ = parseInt((z + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0xF

        const surfaceList = SurfaceLoad.gStaticSurfacePartition[cellZ][cellX][SurfaceLoad.SPATIAL_PARTITION_FLOORS].next
        const heightWrapper = { height: 0 }
        floorWrapper.floor = this.find_floor_from_list(surfaceList, x, y, z, heightWrapper)

        return heightWrapper.height

    }

    find_floor_from_list(surfaceNode, x, y, z, pheightWrapper) {
        let floor

        while (surfaceNode) {
            const surf = surfaceNode.surface
            surfaceNode = surfaceNode.next

            const x1 = surf.vertex1[0]
            const z1 = surf.vertex1[2]
            const x2 = surf.vertex2[0]
            const z2 = surf.vertex2[2]

            // Check that the point is within the triangle bounds.
            if ((z1 - z) * (x2 - x1) - (x1 - x) * (z2 - z1) < 0) { continue }
    
            // To slightly save on computation time, set this later.
            const x3 = surf.vertex3[0]
            const z3 = surf.vertex3[2]
    
            if ((z2 - z) * (x3 - x2) - (x2 - x) * (z3 - z2) < 0) { continue }
            if ((z3 - z) * (x1 - x3) - (x3 - x) * (z1 - z3) < 0) { continue }

            // Determine if we are checking for the camera or not.
            if (ObjectListProcessor.gCheckingSurfaceCollisionsForCamera != 0) {
                throw "find floor from list check to see if seem right"
                if (surf.flags & SURFACE_FLAG_NO_CAM_COLLISION) { continue }
            }
            // If we are not checking for the camera, ignore camera only floors.
            else if (surf.type == SURFACE_CAMERA_BOUNDARY) { continue }

            const nx = surf.normal.x
            const ny = surf.normal.y
            const nz = surf.normal.z
            const oo = surf.originOffset

            // If a wall, ignore it. Likely a remnant, should never occur.
            if (ny == 0.0) {
                throw "never occur?"
                continue
            }

            // Find the height of the floor at a given location.
            const height = -(x * nx + nz * z + oo) / ny
            // Checks for floor interaction with a 78 unit buffer.
            if (y - (height + -78.0) < 0.0) { continue }

            pheightWrapper.height = height
            floor = surf
            break
        }

        return floor
    }


}

export const SurfaceCollisionInstance = new SurfaceCollision()