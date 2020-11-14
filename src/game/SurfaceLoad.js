import * as Surfaces from "../include/surface_terrains"
import { spawn_special_objects } from "./MacroSpecialObjects"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"

class SurfaceLoad {
    constructor() {

        this.SPATIAL_PARTITION_FLOORS = 0
        this.SPATIAL_PARTITION_CEILS = 1
        this.SPATIAL_PARTITION_WALLS = 2

        this.gStaticSurfacePartition = new Array(32).fill(0).map(() => new Array(32).fill(0).map(() => new Array(3).fill(0).map(() => new Object())))
        this.gDynamicSurfacePartition = new Array(32).fill(0).map(() => new Array(32).fill(0).map(() => new Array(3).fill(0).map(() => new Object())))

    }

    read_vertex_data(data, dataIndex, vertexDataIndex) {
        const numVertices = data[dataIndex++]
        vertexDataIndex = dataIndex
        dataIndex += 3 * numVertices

        return { dataIndex, vertexDataIndex }
    }

    surface_has_force(surfaceType) {
        return [Surfaces.SURFACE_FLOWING_WATER, Surfaces.SURFACE_DEEP_MOVING_QUICKSAND, Surfaces.SURFACE_SHALLOW_MOVING_QUICKSAND, Surfaces.SURFACE_MOVING_QUICKSAND, Surfaces.SURFACE_HORIZONTAL_WIND,
        Surfaces.SURFACE_INSTANT_MOVING_QUICKSAND].includes(surfaceType)
    }

    surf_has_no_cam_collision(surfaceType) {
        if (surfaceType == Surfaces.SURFACE_NO_CAM_COLLISION || surfaceType == Surfaces.SURFACE_NO_CAM_COL_VERY_SLIPPERY || surfaceType == Surfaces.SURFACE_SWITCH) {
            return Surfaces.SURFACE_FLAG_NO_CAM_COLLISION
        } else return 0
    }

    read_surface_data(vertexData, vertexIndices) {

        const offset1 = 3 * vertexIndices[0]
        const offset2 = 3 * vertexIndices[1]
        const offset3 = 3 * vertexIndices[2]

        const x1 = vertexData[offset1 + 0]
        const y1 = vertexData[offset1 + 1]
        const z1 = vertexData[offset1 + 2]

        const x2 = vertexData[offset2 + 0]
        const y2 = vertexData[offset2 + 1]
        const z2 = vertexData[offset2 + 2]

        const x3 = vertexData[offset3 + 0]
        const y3 = vertexData[offset3 + 1]
        const z3 = vertexData[offset3 + 2]

        let nx = (y2 - y1) * (z3 - z2) - (z2 - z1) * (y3 - y2)
        let ny = (z2 - z1) * (x3 - x2) - (x2 - x1) * (z3 - z2)
        let nz = (x2 - x1) * (y3 - y2) - (y2 - y1) * (x3 - x2)

        let mag = Math.sqrt(nx * nx + ny * ny + nz * nz)

        // Could have used min_3 and max_3 for this...
        const minY = Math.min(y1, y2, y3)
        const maxY = Math.max(y1, y2, y3)

        // Checking to make sure no DIV/0
        if (mag < 0.0001) {
            return null
        }
        mag = 1.0 / mag
        nx *= mag
        ny *= mag
        nz *= mag

        this.gSurfacesAllocated++

        return {
            vertex1: [x1, y1, z1],
            vertex2: [x2, y2, z2],
            vertex3: [x3, y3, z3],
            normal: { x: nx, y: ny, z: nz },
            originOffset: -(nx * x1 + ny * y1 + nz * z1),
            lowerY: minY - 5,
            upperY: maxY + 5
        }

    }

    lower_cell_index(coord) {
        // Move from range [-0x2000, 0x2000) to [0, 0x4000)

        // Move from range [-0x4000, 0x4000) to [0, 0x8000)
        coord += Surfaces.LEVEL_BOUNDARY_MAX
        if (coord < 0) { coord = 0 }

        // [0, 16)
        let index = Math.floor(coord / Surfaces.CELL_SIZE)

        // Include extra cell if close to boundary
        //! Some wall checks are larger than the buffer, meaning wall checks can
        //  miss walls that are near a cell border.
        if (coord % Surfaces.CELL_SIZE < 50) { index -= 1 }

        if (index < 0) { index = 0 }

        // Potentially > 15, but since the upper index is <= 15, not exploitable
        return index
    }

    upper_cell_index(coord) {
        // Move from range [-0x2000, 0x2000) to [0, 0x4000)
        coord += Surfaces.LEVEL_BOUNDARY_MAX
        if (coord < 0) { coord = 0 }

        // [0, 16)
        let index = Math.floor(coord / Surfaces.CELL_SIZE)

        // Include extra cell if close to boundary
        //! Some wall checks are larger than the buffer, meaning wall checks can
        //  miss walls that are near a cell border.
        if (coord % Surfaces.CELL_SIZE > Surfaces.CELL_SIZE - 50) { index += 1 }

        if (index > 31) { index = 31 }

        // Potentially < 0, but since lower index is >= 0, not exploitable
        return index
    }

    add_surface_to_cell(dynamic, cellX, cellZ, surface) {
        this.gSurfaceNodesAllocated++

        let listIndex, sortDir, list

        if (surface.normal.y > 0.01) {
            listIndex = this.SPATIAL_PARTITION_FLOORS
            sortDir = 1 // highest to lowest, then insertion order
        } else if (surface.normal.y < -0.01) {
            listIndex = this.SPATIAL_PARTITION_CEILS
            sortDir = -1 // lowest to highest, then insertion order
        } else {
            listIndex = this.SPATIAL_PARTITION_WALLS
            sortDir = 0 // insertion order

            if (surface.normal.x < -0.707 || surface.normal.x > 0.707) {
                surface.flags |= Surfaces.SURFACE_FLAG_X_PROJECTION
            }
        }

        let surfacePriority = surface.vertex1[1] * sortDir

        const newNode = { surface }

        if (dynamic) list = this.gDynamicSurfacePartition[cellZ][cellX][listIndex]
        else list = this.gStaticSurfacePartition[cellZ][cellX][listIndex]

        while (list.next) {
            const priority = list.next.surface.vertex1[1] * sortDir

            if (surfacePriority > priority) break

            list = list.next
        }

        newNode.next = list.next
        list.next = newNode

    }

    add_surface(surface, dynamic) {

        const minX = Math.min(surface.vertex1[0], surface.vertex2[0], surface.vertex3[0])
        const minZ = Math.min(surface.vertex1[2], surface.vertex2[2], surface.vertex3[2])
        const maxX = Math.max(surface.vertex1[0], surface.vertex2[0], surface.vertex3[0])
        const maxZ = Math.max(surface.vertex1[2], surface.vertex2[2], surface.vertex3[2])

        const minCellX = this.lower_cell_index(minX)
        const maxCellX = this.upper_cell_index(maxX)
        const minCellZ = this.lower_cell_index(minZ)
        const maxCellZ = this.upper_cell_index(maxZ)

        for (let cellZ = minCellZ; cellZ <= maxCellZ; cellZ++) {
            for (let cellX = minCellX; cellX <= maxCellX; cellX++) {
                this.add_surface_to_cell(dynamic, cellX, cellZ, surface)
            }
        }

    }

    load_static_surfaces(data, dataIndex, vertexDataIndex, surfaceType, surfaceRooms) {
        let room = 0

        const hasForce = this.surface_has_force(surfaceType)
        const flags = this.surf_has_no_cam_collision(surfaceType)

        const numSurfaces = data[dataIndex++]

        for (let i = 0; i < numSurfaces; i++) {
            if (surfaceRooms) throw "surfaceRooms - load static surfaces"

            const surface = this.read_surface_data(data.slice(vertexDataIndex, dataIndex), data.slice(dataIndex, dataIndex + 3))
            if (surface) {
                surface.room = room
                surface.type = surfaceType
                surface.flags = flags

                if (hasForce) surface.force = data[dataIndex + 3]
                else surface.force = 0

                this.add_surface(surface, false)
            }

            dataIndex += 3
            if (hasForce) dataIndex++

        }

        return dataIndex
    }

    load_environmental_regions(dataIndex) {

        ObjectListProc.gEnvironmentRegionsIndex = dataIndex
        ObjectListProc.gEnvironmentRegions = this.gTerrainData.slice(dataIndex)
        const numRegions = this.gTerrainData[dataIndex++]

        for (let i = 0; i < numRegions; i++) {
            let loX, loZ, hiX, hiZ
            dataIndex++
            loX = this.gTerrainData[dataIndex++]
            hiX = this.gTerrainData[dataIndex++]
            loZ = this.gTerrainData[dataIndex++]
            hiZ = this.gTerrainData[dataIndex++]

            let height = loX = this.gTerrainData[dataIndex++]

            ObjectListProc.gEnvironmentLevels[i] = height

        }

        return dataIndex
    }

    load_area_terrain(index, data, surfaceRooms, macroObjects) {

        this.gTerrainData = data  /// TODO refactor our function args to data, because we are storing it as a class variable

        let dataIndex = 0
        let vertexDataIndex = 0

        this.gSurfaceNodesAllocated = 0
        this.gSurfacesAllocated = 0

        while (dataIndex < data.length) {

            const terrainLoadType = data[dataIndex]
            dataIndex++

            if (terrainLoadType < 0x40) { //TERRAIN_LOAD_IS_SURFACE_TYPE_LOW
                dataIndex = this.load_static_surfaces(data, dataIndex, vertexDataIndex, terrainLoadType, surfaceRooms)
            } else if (terrainLoadType == Surfaces.TERRAIN_LOAD_VERTICES) {
                const newIdx = this.read_vertex_data(data, dataIndex, vertexDataIndex)
                dataIndex = newIdx.dataIndex
                vertexDataIndex = newIdx.vertexDataIndex
            }
            else if (terrainLoadType == Surfaces.TERRAIN_LOAD_OBJECTS) {
                dataIndex = spawn_special_objects(index, data, dataIndex)
            }
            else if (terrainLoadType == Surfaces.TERRAIN_LOAD_ENVIRONMENT) {
                dataIndex = this.load_environmental_regions(dataIndex)
            }
            else if (terrainLoadType == Surfaces.TERRAIN_LOAD_CONTINUE) continue
            else if (terrainLoadType == Surfaces.TERRAIN_LOAD_END) break
            else if (terrainLoadType > 0x65) { //TERRAIN_LOAD_IS_SURFACE_TYPE_HIGH
                dataIndex = this.load_static_surfaces(data, dataIndex, vertexDataIndex, terrainLoadType, surfaceRooms)
                continue
            }
        }

        this.gNumStaticSurfaceNodes = this.gSurfaceNodesAllocated
        this.gNumStaticSurfaces = this.gSurfacesAllocated

    }
}

export const SurfaceLoadInstance = new SurfaceLoad()
