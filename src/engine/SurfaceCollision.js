import { LEVEL_BOUNDARY_MAX, CELL_SIZE, SURFACE_FLAG_NO_CAM_COLLISION, SURFACE_CAMERA_BOUNDARY, SURFACE_FLAG_X_PROJECTION } from "../include/surface_terrains"
import { SurfaceLoadInstance as SurfaceLoad } from "../game/SurfaceLoad"
import { ObjectListProcessorInstance as ObjectListProcessor } from "../game/ObjectListProcessor"
import { SpawnObjectInstance as Spawn } from "../game/SpawnObject"


class SurfaceCollision {
    constructor() {
        Spawn.SurfaceCollision = this
    }

    find_floor_height_and_data(xPos, yPos, zPos, floorGeo) {
        const floorWrapper = {}
        const floorHeight = this.find_floor(xPos, yPos, zPos, floorWrapper)

        if (floorWrapper.floor) {
            floorGeo.normalX = floorWrapper.floor.normal.x
            floorGeo.normalY = floorWrapper.floor.normal.y
            floorGeo.normalZ = floorWrapper.floor.normal.z
            floorGeo.originOffset = floorWrapper.floor.originOffset
        }

        return floorHeight
    }

    find_wall_collisions(colData) {

        let numCollisions = 0

        const x = parseInt(colData.x)
        const z = parseInt(colData.z)

        colData.numWalls = 0

        if (x <= -LEVEL_BOUNDARY_MAX || x >= LEVEL_BOUNDARY_MAX) {
            return numCollisions
        }
        if (z <= -LEVEL_BOUNDARY_MAX || z >= LEVEL_BOUNDARY_MAX) {
            return numCollisions
        }

        // World (level) consists of a 16x16 (upgraded to 32x32) grid. Find where the collision is on
        // the grid (round toward -inf)
        const cellX = parseInt((x + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F
        const cellZ = parseInt((z + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F

        const node = SurfaceLoad.gStaticSurfacePartition[cellZ][cellX][SurfaceLoad.SPATIAL_PARTITION_WALLS].next
        numCollisions += this.find_wall_collisions_from_list(node, colData)

        return numCollisions
    }

    /**
     * Find the lowest ceiling above a given position and return the height.
     */
    find_ceil(posX, posY, posZ, ceilWrapper) {
        let height = 20000.0

        const x = parseInt(posX)
        const y = parseInt(posY)
        const z = parseInt(posZ)

        ceilWrapper.ceil = null

        if (x <= -LEVEL_BOUNDARY_MAX || x >= LEVEL_BOUNDARY_MAX) {
            return height
        }
        if (z <= -LEVEL_BOUNDARY_MAX || z >= LEVEL_BOUNDARY_MAX) {
            return height
        }

        // Each level is split into cells to limit load, find the appropriate cell
        const cellX = parseInt((x + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F
        const cellZ = parseInt((z + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F

        const surfaceList = SurfaceLoad.gStaticSurfacePartition[cellZ][cellX][SurfaceLoad.SPATIAL_PARTITION_CEILS].next
        const heightWrapper = { height }
        ceilWrapper.ceil = this.find_ceil_from_list(surfaceList, x, y, z, heightWrapper)

        return heightWrapper.height
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
        const cellX = parseInt((x + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F
        const cellZ = parseInt((z + LEVEL_BOUNDARY_MAX) / CELL_SIZE) & 0x1F

        const surfaceList = SurfaceLoad.gStaticSurfacePartition[cellZ][cellX][SurfaceLoad.SPATIAL_PARTITION_FLOORS].next
        const heightWrapper = { height }
        floorWrapper.floor = this.find_floor_from_list(surfaceList, x, y, z, heightWrapper)

        return heightWrapper.height

    }

    find_wall_collisions_from_list(surfaceNode, data) {

        let radius = data.radius
        let numCols = 0
        const x = data.x, y = data.y + data.offsetY, z = data.z
        data.walls = []

        if (radius > 200.0) radius = 200.0

        while (surfaceNode) {
            const surf = surfaceNode.surface
            surfaceNode = surfaceNode.next

            // Exclude a large number of walls immediately to optimize.
            if (y < surf.lowerY || y > surf.upperY) continue

            const offset = surf.normal.x * x + surf.normal.y * y + surf.normal.z * z + surf.originOffset

            if (offset < -radius || offset > radius) continue

            const px = x, pz = z

            if (surf.flags & SURFACE_FLAG_X_PROJECTION) {
                const w1 = -surf.vertex1[2]; const w2 = -surf.vertex2[2]; const w3 = -surf.vertex3[2]
                const y1 = surf.vertex1[1]; const y2 = surf.vertex2[1]; const y3 = surf.vertex3[1]

                if (surf.normal.x > 0.0) {
                    if ((y1 - y) * (w2 - w1) - (w1 - -pz) * (y2 - y1) > 0.0) continue 
                    if ((y2 - y) * (w3 - w2) - (w2 - -pz) * (y3 - y2) > 0.0) continue 
                    if ((y3 - y) * (w1 - w3) - (w3 - -pz) * (y1 - y3) > 0.0) continue 
                } else {
                    if ((y1 - y) * (w2 - w1) - (w1 - -pz) * (y2 - y1) < 0.0) continue 
                    if ((y2 - y) * (w3 - w2) - (w2 - -pz) * (y3 - y2) < 0.0) continue 
                    if ((y3 - y) * (w1 - w3) - (w3 - -pz) * (y1 - y3) < 0.0) continue 
                }

            } else {
                const w1 = surf.vertex1[0]; const w2 = surf.vertex2[0]; const w3 = surf.vertex3[0]
                const y1 = surf.vertex1[1]; const y2 = surf.vertex2[1]; const y3 = surf.vertex3[1]

                if (surf.normal.z > 0.0) {
                    if ((y1 - y) * (w2 - w1) - (w1 - px) * (y2 - y1) > 0.0) continue 
                    if ((y2 - y) * (w3 - w2) - (w2 - px) * (y3 - y2) > 0.0) continue 
                    if ((y3 - y) * (w1 - w3) - (w3 - px) * (y1 - y3) > 0.0) continue 
                } else {
                    if ((y1 - y) * (w2 - w1) - (w1 - px) * (y2 - y1) < 0.0) continue 
                    if ((y2 - y) * (w3 - w2) - (w2 - px) * (y3 - y2) < 0.0) continue 
                    if ((y3 - y) * (w1 - w3) - (w3 - px) * (y1 - y3) < 0.0) continue 
                }

            }


            // Determine if we are checking for the camera or not.
            if (ObjectListProcessor.gCheckingSurfaceCollisionsForCamera != 0) {
                if (surf.flags & SURFACE_FLAG_NO_CAM_COLLISION) continue 
            }
            // If we are not checking for the camera, ignore camera only floors.
            else {
                if (surf.type == SURFACE_CAMERA_BOUNDARY) continue 

                //// More Vanish Cap Stuff -- walk through walls
            }

            //! (Wall Overlaps) Because this doesn't update the x and z local variables,
            //  multiple walls can push mario more than is required.
            data.x += surf.normal.x * (radius - offset)
            data.z += surf.normal.z * (radius - offset)

            //! (Unreferenced Walls) Since this only returns the first four walls,
            //  this can lead to wall interaction being missed. Typically unreferenced walls
            //  come from only using one wall, however.
            if (data.numWalls < 4) {
                data.walls.push(surf)
                data.numWalls++
            }

            numCols++
        }

        return numCols
    }

    find_ceil_from_list(surfaceNode, x, y, z, pheightWrapper) {
        let ceil

        while (surfaceNode) {
            const surf = surfaceNode.surface
            surfaceNode = surfaceNode.next

            const x1 = surf.vertex1[0]
            const z1 = surf.vertex1[2]
            const x2 = surf.vertex2[0]
            const z2 = surf.vertex2[2]

            // Check that the point is within the triangle bounds.
            if ((z1 - z) * (x2 - x1) - (x1 - x) * (z2 - z1) > 0) { continue }

            // To slightly save on computation time, set this later.
            const x3 = surf.vertex3[0]
            const z3 = surf.vertex3[2]

            if ((z2 - z) * (x3 - x2) - (x2 - x) * (z3 - z2) > 0) { continue }
            if ((z3 - z) * (x1 - x3) - (x3 - x) * (z1 - z3) > 0) { continue }

            // Determine if we are checking for the camera or not.
            if (ObjectListProcessor.gCheckingSurfaceCollisionsForCamera != 0) {
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

            // Find the ceil height at the specific point.
            const height = -(x * nx + nz * z + oo) / ny

            // Checks for ceiling interaction with a 78 unit buffer.
            //! (Exposed Ceilings) Because any point above a ceiling counts
            //  as interacting with a ceiling, ceilings far below can cause
            // "invisible walls" that are really just exposed ceilings.
            if (y - (height - -78.0) > 0.0) { continue }

            pheightWrapper.height = height
            ceil = surf
            break
        }

        return ceil
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