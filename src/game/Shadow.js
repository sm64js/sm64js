import * as _Linker from "./Linker"
import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import { GeoRendererInstance as GeoRenderer } from "../engine/GeoRenderer"
import * as Mario from "./Mario"
import { atan2s } from "../engine/math_util"
import { coss, sins } from "../utils"
import { make_vertex, round_float } from "./GeoMisc"
import * as Gbi from "../include/gbi"
import { dl_shadow_circle, dl_shadow_square, dl_shadow_9_verts, dl_shadow_end, dl_shadow_4_verts } from "../bin/segment2"
import { FLOOR_LOWER_LIMIT_SHADOW } from "../include/surface_terrains"
import { oFaceAngleYaw } from "../include/object_constants"

export const SHADOW_CIRCLE_9_VERTS = 0
export const SHADOW_CIRCLE_4_VERTS = 1
export const SHADOW_CIRCLE_4_VERTS_FLAT_UNUSED = 2
export const SHADOW_SQUARE_PERMANENT = 10
export const SHADOW_SQUARE_SCALABLE = 11
export const SHADOW_SQUARE_TOGGLABLE = 12
/**
    * This defines an offset after which rectangular shadows with custom
    * widths and heights can be defined.
    */
export const SHADOW_RECTANGLE_HARDCODED_OFFSET = 50
export const SHADOW_CIRCLE_PLAYER = 99

export const SHADOW_WITH_9_VERTS = 0
export const SHADOW_WITH_4_VERTS = 1


/**
 * Constant to indicate any sort of circular shadow.
 */
export const SHADOW_SHAPE_CIRCLE = 10
/**
 * Constant to indicate any sort of rectangular shadow.
 */
export const SHADOW_SHAPE_SQUARE = 20

/**
 * Constant to indicate that a shadow should not be drawn.
 * This is used to disable shadows during specific frames of Mario's
 * animations.
 */
export const SHADOW_SOLIDITY_NO_SHADOW = 0
/**
 * Constant to indicate that a shadow's solidity has been pre-set by a previous
 * function and should not be overwritten.
 */
export const SHADOW_SOILDITY_ALREADY_SET = 1
/**
 * Constant to indicate that a shadow's solidity has not yet been set.
 */
export const SHADOW_SOLIDITY_NOT_YET_SET = 2

let sSurfaceTypeBelowShadow
export let gShadowAboveWaterOrLava = false
export let gMarioOnIceOrCarpet = false
export let sMarioOnFlyingCarpet = false

const atan2_deg = (a, b) => {
    return atan2s(a, b) / 65535.0 * 360.0
}

const correct_shadow_solidity_for_animations = (isLuigi, initialSolidity, shadow) => {
    if (ObjectListProc.gMarioObject.length > 1) throw "not implemented multiple mario shadow"
    const player = ObjectListProc.gMarioObject
    const animFrame = player.gfx.animInfo.animFrame
    switch (player.gfx.animInfo.animID) {
        default: return SHADOW_SOLIDITY_NOT_YET_SET
    }
}

const dim_shadow_with_distance = (solidity, distFromFloor) => {
    if (solidity < 121) {
        return solidity
    } else if (distFromFloor <= 0.0) {
        return solidity
    } else if (distFromFloor >= 600.0) {
        return 120
    } else {
        return ((120 - solidity) * distFromFloor) / 600.0 + solidity
    }
}

/**
 * Return the water level below a shadow, or 0 if the water level is below
 * -10,000.
 */
const get_water_level_below_shadow = (s) => {
    let waterLevel = SurfaceCollision.find_water_level(s.parentX, s.parentZ)
    if (waterLevel < FLOOR_LOWER_LIMIT_SHADOW) {
        return false
    } else if (s.parentY >= waterLevel && s.floorHeight <= waterLevel) {
        gShadowAboveWaterOrLava = true
        return waterLevel
    }
    //! @bug Missing return statement. This compiles to return `waterLevel`
    //! incidentally.
    return waterLevel
}

const scale_shadow_with_distance = (initial, distFromFloor) => {
    if (distFromFloor <= 0.0) {
        return initial
    } else if (distFromFloor >= 600.0) {
        return initial * 0.5
    } else {
        return initial * (1.0 - (0.5 * distFromFloor / 600.0))
    }
}

const init_shadow = (s, xPos, yPos, zPos, shadowScale, overwriteSolidity) => {
    s.parentX = xPos
    s.parentY = yPos
    s.parentZ = zPos

    const floorGeometry = {}
    s.floorHeight = SurfaceCollision.find_floor_height_and_data(s.parentX, s.parentY, s.parentZ, floorGeometry)

    if (gLinker.Area.gEnvironmentRegions) {
        let waterLevel = get_water_level_below_shadow(s)
    }

    if (gShadowAboveWaterOrLava) {
        s.floorHeight = waterLevel

        // Assume that the water is flat.
        s.floorNormalX = 0
        s.floorNormalY = 1.0
        s.floorNormalZ = 0
        s.floorOriginOffset = -waterLevel
    } else {
        if (s.floorHeight < -10000.0 || floorGeometry.normalY <= 0.0) return true

        s.floorNormalX = floorGeometry.normalX
        s.floorNormalY = floorGeometry.normalY
        s.floorNormalZ = floorGeometry.normalZ
        s.floorOriginOffset = floorGeometry.originOffset
    }

    if (overwriteSolidity) {
        s.solidity = dim_shadow_with_distance(overwriteSolidity, yPos - s.floorHeight)
    }

    s.shadowScale = scale_shadow_with_distance(shadowScale, yPos - s.floorHeight)

    s.floorDownwardAngle = atan2_deg(s.floorNormalZ, s.floorNormalX)

    const floorSteepness = Math.sqrt(s.floorNormalX * s.floorNormalX + s.floorNormalZ * s.floorNormalZ)

    if (floorSteepness == 0.0) {
        s.floorTilt = 0
    } else {
        s.floorTilt = 90.0 - atan2_deg(floorSteepness, s.floorNormalY)
    }

    return false
}

const get_vertex_coords = (index, shadowVertexType, coords) => {
    coords.x = Math.floor(index % (3 - shadowVertexType) - 1)
    coords.z = Math.floor(index / (3 - shadowVertexType) - 1)

    // This just corrects the 4-vertex case to have consistent results with the
    // 9-vertex case.
    if (shadowVertexType == SHADOW_WITH_4_VERTS) {
        if (coords.x == 0) {
            coords.x = 1
        }
        if (coords.z == 0) {
            coords.z = 1
        }
    }
}

const calculate_vertex_xyz = (index, s, posVtx, shadowVertexType) => {
    const tiltedScale = Math.cos(s.floorTilt * Math.PI / 180.0) * s.shadowScale
    const downwardAngle = s.floorDownwardAngle * Math.PI / 180.0

    const coords = {}
    get_vertex_coords(index, shadowVertexType, coords)

    const halfScale = (coords.x * s.shadowScale) / 2.0
    const halfTiltedScale = (coords.z * tiltedScale) / 2.0

    posVtx[0] = (halfTiltedScale * Math.sin(downwardAngle)) + (halfScale * Math.cos(downwardAngle)) + s.parentX
    posVtx[2] = (halfTiltedScale * Math.cos(downwardAngle)) - (halfScale * Math.sin(downwardAngle)) + s.parentZ


    if (gShadowAboveWaterOrLava) {
        posVtx[1] = s.floorHeight
    } else {
        switch (shadowVertexType) {
            case SHADOW_WITH_9_VERTS:
                posVtx[1] = SurfaceCollision.find_floor_height_and_data(posVtx[0], s.parentY, posVtx[2], {})
                break
            case SHADOW_WITH_4_VERTS:
                posVtx[1] = extrapolate_vertex_y_position(s, posVtx[0], posVtx[2])
                break
            default: throw "unimplemented shadow vertex type"
        }
    }

}

const get_texture_coords_9_vertices = (vertexNum, textures) => {
    textures.X = vertexNum % 3 * 15 - 15
    textures.Y = Math.floor(vertexNum / 3) * 15 - 15
}

const get_texture_coords_4_vertices = (vertexNum, textures) => {
    textures.X = (vertexNum % 2) * 2 * 15 - 15
    textures.Y = Math.floor(vertexNum / 2) * 2 * 15 - 15
}

const make_shadow_vertex_at_xyz = (vertices, index, relX, relY, relZ, alpha, shadowVertexType) => {

    const vtxX = round_float(relX)
    const vtxY = round_float(relY)
    const vtxZ = round_float(relZ)

    const textures = {}

    switch (shadowVertexType) {
        case SHADOW_WITH_9_VERTS:
            get_texture_coords_9_vertices(index, textures)
            break
        case SHADOW_WITH_4_VERTS:
            get_texture_coords_4_vertices(index, textures)
            break
        default: throw "unimplmented shadow vertex type"
    }

    make_vertex(vertices, index, vtxX, vtxY, vtxZ, textures.X << 5, textures.Y << 5, 255, 255, 255, alpha)

}

const extrapolate_vertex_y_position = (s, vtxX, vtxZ) => {
    return -(s.floorNormalX * vtxX + s.floorNormalZ * vtxZ + s.floorOriginOffset) / s.floorNormalY
} 

const make_shadow_vertex = (vertices, index, s, shadowVertexType) => {
    const posVtx = new Array(3)

    calculate_vertex_xyz(index, s, posVtx, shadowVertexType)

    posVtx[1] = extrapolate_vertex_y_position(s, posVtx[0], posVtx[2])

    const relX = posVtx[0] - s.parentX
    const relY = posVtx[1] - s.parentY
    const relZ = posVtx[2] - s.parentZ

    make_shadow_vertex_at_xyz(vertices, index, relX, relY, relZ, s.solidity, shadowVertexType)

}

const add_shadow_to_display_list = (displayList, verts, shadowVertexType, shadowShape) => {
    switch (shadowShape) {
        case SHADOW_SHAPE_CIRCLE:
            Gbi.gSPDisplayList(displayList, dl_shadow_circle)
            break
        case SHADOW_SHAPE_SQUARE:
            Gbi.gSPDisplayList(displayList, dl_shadow_square)
            break
    }
    switch (shadowVertexType) {
        case SHADOW_WITH_9_VERTS:
            Gbi.gSPVertex(displayList, verts, 9, 0)
            Gbi.gSPDisplayList(displayList, dl_shadow_9_verts)
            break
        case SHADOW_WITH_4_VERTS:
            Gbi.gSPVertex(displayList, verts, 4, 0)
            Gbi.gSPDisplayList(displayList, dl_shadow_4_verts)
            break
    }
    Gbi.gSPDisplayList(displayList, dl_shadow_end)
    Gbi.gSPEndDisplayList(displayList)
}

const create_shadow_player = (xPos, yPos, zPos, shadowScale, solidity, isLuigi) => {
    const shadow = {}
    let ret
    switch (correct_shadow_solidity_for_animations(isLuigi, solidity, shadow)) {
        case SHADOW_SOLIDITY_NOT_YET_SET:
            ret = init_shadow(shadow, xPos, yPos, zPos, shadowScale, solidity)
            break
        default: throw "shadow solidity case not implemented"
    }

    if (ret != 0) return null

    const verts = new Array(9)
    const displayList = []

    for (let i = 0; i < 9; i++) {
        make_shadow_vertex(verts, i, shadow, SHADOW_WITH_9_VERTS)
    }
    add_shadow_to_display_list(displayList, verts, SHADOW_WITH_9_VERTS, SHADOW_SHAPE_CIRCLE)
    return displayList
}

/**
 * Create a circular shadow composed of 9 vertices.
 */
const create_shadow_circle_9_verts = (xPos, yPos, zPos, shadowScale, solidity) => {
    const shadow = {}

    if (init_shadow(shadow, xPos, yPos, zPos, shadowScale, solidity) != 0) {
        return
    }

    const verts = new Array(9)
    const displayList = []

    for (let i = 0; i < 9; i++) {
        make_shadow_vertex(verts, i, shadow, SHADOW_WITH_9_VERTS)
    }
    add_shadow_to_display_list(displayList, verts, SHADOW_WITH_9_VERTS, SHADOW_SHAPE_CIRCLE)
    return displayList
}

/**
 * Create a circular shadow composed of 4 vertices.
 */
const create_shadow_circle_4_verts = (xPos, yPos, zPos, shadowScale, solidity) => {
    const shadow = {}

    if (init_shadow(shadow, xPos, yPos, zPos, shadowScale, solidity) != 0) {
        return
    }

    const verts = new Array(4)
    const displayList = []

    for (let i = 0; i < 4; i++) {
        make_shadow_vertex(verts, i, shadow, SHADOW_WITH_4_VERTS)
    }
    add_shadow_to_display_list(displayList, verts, SHADOW_WITH_4_VERTS, SHADOW_SHAPE_CIRCLE)
    return displayList
}


const frontLeftX  = 0
const frontLeftZ  = 1
const frontRightX = 2
const frontRightZ = 3
const backLeftX   = 4
const backLeftZ   = 5
const backRightX  = 6
const backRightZ  = 7

/**
 * Let (oldZ, oldX) be the relative coordinates of a point on a rectangle,
 * assumed to be centered at the origin on the standard SM64 X-Z plane. This
 * function will update (newZ, newX) to equal the new coordinates of that point
 * after a rotation equal to the yaw of the current graph node object.
 */
const rotate_rectangle = (c, newZ, newX, oldZ, oldX) => {
    let obj = GeoRenderer.gCurGraphNodeObject.object
    c[newZ] = oldZ * coss(obj.rawData[oFaceAngleYaw]) - oldX * sins(obj.rawData[oFaceAngleYaw]);
    c[newX] = oldZ * sins(obj.rawData[oFaceAngleYaw]) + oldX * coss(obj.rawData[oFaceAngleYaw]);
}

/**
 * Create a rectangular shadow composed of 4 vertices. This assumes the ground
 * underneath the shadow is totally flat.
 */
const create_shadow_rectangle = (halfWidth, halfLength, relY, solidity) => {
    const verts = new Array(4)
    const displayList = []
    const c = new Array(8)

    if (verts == null || displayList == null) {
        return null
    }

    // Rotate the shadow based on the parent object's face angle.
    rotate_rectangle(c, frontLeftZ,  frontLeftX,  -halfLength, -halfWidth)
    rotate_rectangle(c, frontRightZ, frontRightX, -halfLength,  halfWidth)
    rotate_rectangle(c, backLeftZ,   backLeftX,    halfLength, -halfWidth)
    rotate_rectangle(c, backRightZ,  backRightX,   halfLength,  halfWidth)

    make_shadow_vertex_at_xyz(verts, 0, c[frontLeftX],  relY, c[frontLeftZ],  solidity, 1)
    make_shadow_vertex_at_xyz(verts, 1, c[frontRightX], relY, c[frontRightZ], solidity, 1)
    make_shadow_vertex_at_xyz(verts, 2, c[backLeftX],   relY, c[backLeftZ],   solidity, 1)
    make_shadow_vertex_at_xyz(verts, 3, c[backRightX],  relY, c[backRightZ],  solidity, 1)

    add_shadow_to_display_list(displayList, verts, SHADOW_WITH_4_VERTS, SHADOW_SHAPE_SQUARE)
    return displayList
}

/**
 * Populate `shadowHeight` and `solidity` appropriately; the default solidity
 * value is 200. Return 0 if a shadow should be drawn, 1 if not.
 */
const get_shadow_height_solidity = (xPos, yPos, zPos, p) => {  // *shadowHeight, u8 *solidity
    let waterLevel

    p.shadowHeight = SurfaceCollision.find_floor_height_and_data(xPos, yPos, zPos, {})

    if (p.shadowHeight < FLOOR_LOWER_LIMIT_SHADOW) {
        return true
    } else {
        waterLevel = SurfaceCollision.find_water_level(xPos, zPos)

        if (yPos >= waterLevel && waterLevel >= p.shadowHeight) {
            gShadowAboveWaterOrLava = true
            p.shadowHeight = waterLevel
            p.solidity = 200
        }
    }
    return false
}

/**
 * Create a square shadow composed of 4 vertices.
 */
const create_shadow_square = (xPos, yPos, zPos, shadowScale, solidity, shadowType) => {
    let distFromShadow
    let shadowRadius
    const p = {}

    p.solidity = solidity
    if (get_shadow_height_solidity(xPos, yPos, zPos, p) != 0) {
        return null
    }

    distFromShadow = yPos - p.shadowHeight
    switch (shadowType) {
        case SHADOW_SQUARE_PERMANENT:
            shadowRadius = shadowScale / 2
            break
        case SHADOW_SQUARE_SCALABLE:
            shadowRadius = scale_shadow_with_distance(shadowScale, distFromShadow) / 2.0
            break
        case SHADOW_SQUARE_TOGGLABLE:
            shadowRadius = disable_shadow_with_distance(shadowScale, distFromShadow) / 2.0
            break
        default:
            return null
    }

    return create_shadow_rectangle(shadowRadius, shadowRadius, -distFromShadow, p.solidity)
}

const rectangles = [
    /* Shadow for Spindels. */
    { halfWidth: 360.0, halfLength: 230.0, scaleWithDistance: true },
    /* Shadow for Whomps. */
    { halfWidth: 200.0, halfLength: 180.0, scaleWithDistance: true },
]

/**
 * Create a rectangular shadow whose parameters have been hardcoded in the
 * `rectangles` array.
 */
const create_shadow_hardcoded_rectangle = (xPos, yPos, zPos, shadowScale, solidity, shadowType) => {
    let distFromShadow
    let halfWidth
    let halfLength
    let idx = shadowType - SHADOW_RECTANGLE_HARDCODED_OFFSET

    p.solidity = solidity
    if (get_shadow_height_solidity(xPos, yPos, zPos, p) != 0) {
        return null
    }

    distFromShadow = yPos - p.shadowHeight
    /**
     * Note that idx could be negative or otherwise out of the bounds of
     * the `rectangles` array. In practice, it never is, because this was
     * only used twice.
     */
    if (rectangles[idx].scaleWithDistance) {
        halfWidth  = scale_shadow_with_distance(rectangles[idx].halfWidth, distFromShadow)
        halfLength = scale_shadow_with_distance(rectangles[idx].halfLength, distFromShadow)
    } else {
        // This code is never used because the third element of the rectangle
        // struct is always TRUE.
        halfWidth  = rectangles[idx].halfWidth
        halfLength = rectangles[idx].halfLength
    }
    return create_shadow_rectangle(halfWidth, halfLength, -distFromShadow, p.solidity)
}

/**
 * Create a shadow at the absolute position given, with the given parameters.
 * Return a pointer to the display list representing the shadow.
 */
export const create_shadow_below_xyz = (xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType) => {
    const floorWrapper = {}
    SurfaceCollision.find_floor(xPos, yPos, zPos, floorWrapper)

    if (floorWrapper.floor) {
        sSurfaceTypeBelowShadow = floorWrapper.floor.type
    }

    switch (shadowType) {
        case SHADOW_CIRCLE_9_VERTS:
            return create_shadow_circle_9_verts(xPos, yPos, zPos, shadowScale, shadowSolidity)

        case SHADOW_CIRCLE_4_VERTS:
            return create_shadow_circle_4_verts(xPos, yPos, zPos, shadowScale, shadowSolidity)

        case SHADOW_CIRCLE_4_VERTS_FLAT_UNUSED: // unused shadow type
            return create_shadow_circle_assuming_flat_ground(xPos, yPos, zPos, shadowScale, shadowSolidity)

        case SHADOW_SQUARE_PERMANENT:
            return create_shadow_square(xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType)

        case SHADOW_SQUARE_SCALABLE:
            return create_shadow_square(xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType)

        case SHADOW_SQUARE_TOGGLABLE:
            return create_shadow_square(xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType)
            break;

        case SHADOW_CIRCLE_PLAYER:
            return create_shadow_player(xPos, yPos, zPos, shadowScale, shadowSolidity, false)

        default:
            return create_shadow_hardcoded_rectangle(xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType)
    }
}
