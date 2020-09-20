import { SurfaceCollisionInstance as SurfaceCollision } from "../engine/SurfaceCollision"
import { ObjectListProcessorInstance as ObjectListProc } from "./ObjectListProcessor"
import * as Mario from "./Mario"
import { atan2s } from "../engine/math_util"
import { make_vertex, round_float } from "./GeoMisc"
import * as Gbi from "../include/gbi"
import { dl_shadow_circle, dl_shadow_9_verts, dl_shadow_end } from "../common_gfx/segment2"

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
let gShadowAboveWaterOrLava = false
let gMarioOnIceOrCarpet = false
let sMarioOnFlyingCarpet = false

const atan2_deg = (a, b) => {
    return atan2s(a, b) / 65535.0 * 360.0
}

const correct_shadow_solidity_for_animations = (isLuigi, initialSolidity, shadow) => {
    const player = ObjectListProc.gMarioObject
    const animFrame = player.header.gfx.unk38.animFrame
    switch (player.header.gfx.unk38.animID) {
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

    if (gShadowAboveWaterOrLava) {
        throw "shadow above water or lava not implemented"
    } else {
        if (s.floorHeight < -10000.0 || floorGeometry.normalY <= 0.0) return 1

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

    return 0
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
            default: throw "unimplemented shadow vertex type"
        }
    }

}

const get_texture_coords_9_vertices = (vertexNum, textures) => {
    textures.X = vertexNum % 3 * 15 - 15
    textures.Y = Math.floor(vertexNum / 3) * 15 - 15
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
            throw "need to add shadow square"
    }
    switch (shadowVertexType) {
        case SHADOW_WITH_9_VERTS:
            Gbi.gSPVertex(displayList, verts, 9, 0)
            Gbi.gSPDisplayList(displayList, dl_shadow_9_verts)
            break
        case SHADOW_WITH_4_VERTS:
            throw "need to add 4 verts shadow"
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

export const create_shadow_below_xyz = (xPos, yPos, zPos, shadowScale, shadowSolidity, shadowType) => {

    const floorWrapper = {}
    SurfaceCollision.find_floor(xPos, yPos, zPos, floorWrapper)

    if (floorWrapper.floor) {
        sSurfaceTypeBelowShadow = floorWrapper.floor.type
    }

    switch (shadowType) {
        case SHADOW_CIRCLE_PLAYER:
            return create_shadow_player(xPos, yPos, zPos, shadowScale, shadowSolidity, false)
        default: throw "unimplemented shadow type - create_shadow_below_xyz"
    }

}