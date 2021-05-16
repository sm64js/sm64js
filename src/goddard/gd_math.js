import { inv } from "mathjs"

const GD_X_AXIS = 0 
const GD_Y_AXIS = 1
const GD_Z_AXIS = 2

const DEG_PER_RAD = 180.0 / Math.PI
const RAD_PER_DEG = Math.PI / 180.0

export const gd_mat4f_lookat = (mtx, xFrom, yFrom, zFrom, xTo, yTo, zTo, zColY, yColY, xColY) => {

    const d = { x: 0.0, y: 0.0, z: 0.0 }
    const colX = { x: 0.0, y: 0.0, z: 0.0 }
    const norm = { x: 0.0, y: 0.0, z: 0.0 }

    // No reason to do this? mtx is set lower.
    gd_set_identity_mat4(mtx)

    d.z = xTo - xFrom
    d.y = yTo - yFrom
    d.x = zTo - zFrom

    let invLength = Math.abs(d.z) + Math.abs(d.y) + Math.abs(d.x)

    // Scales 'd' if smaller than 10 or larger than 10,000 to be
    // of a magnitude of 10,000.
    if (invLength > 10000.0 || invLength < 10.0) {
        norm.x = d.z
        norm.y = d.y
        norm.z = d.x
        gd_normalize_vec3f(norm)
        norm.x *= 10000.0
        norm.y *= 10000.0
        norm.z *= 10000.0

        d.z = norm.x
        d.y = norm.y
        d.x = norm.z
    }

    invLength = -1.0 / Math.sqrt(Math.pow(d.z, 2) + Math.pow(d.y, 2) + Math.pow(d.x, 2))
    d.z *= invLength
    d.y *= invLength
    d.x *= invLength

    colX.z = yColY * d.x - xColY * d.y
    colX.y = xColY * d.z - zColY * d.x
    colX.x = zColY * d.y - yColY * d.z

    invLength = 1.0 / Math.sqrt(Math.pow(colX.z, 2) + Math.pow(colX.y, 2) + Math.pow(colX.x, 2))

    colX.z *= invLength
    colX.y *= invLength
    colX.x *= invLength

    zColY = d.y * colX.x - d.x * colX.y
    yColY = d.x * colX.z - d.z * colX.x
    xColY = d.z * colX.y - d.y * colX.z

    invLength = 1.0 / Math.sqrt(Math.pow(zColY, 2) + Math.pow(yColY, 2) + Math.pow(xColY, 2))

    zColY *= invLength
    yColY *= invLength
    xColY *= invLength

    mtx[0][0] = colX.z
    mtx[1][0] = colX.y
    mtx[2][0] = colX.x
    mtx[3][0] = -(xFrom * colX.z + yFrom * colX.y + zFrom * colX.x)

    mtx[0][1] = zColY
    mtx[1][1] = yColY
    mtx[2][1] = xColY
    mtx[3][1] = -(xFrom * zColY + yFrom * yColY + zFrom * xColY)

    mtx[0][2] = d.z
    mtx[1][2] = d.y
    mtx[2][2] = d.x
    mtx[3][2] = -(xFrom * d.z + yFrom * d.y + zFrom * d.x)

    mtx[0][3] = 0.0
    mtx[1][3] = 0.0
    mtx[2][3] = 0.0
    mtx[3][3] = 1.0
}

export const gd_inverse_mat4f = (src, dst) => {
    gd_copy_mat4f(inv(src), dst)
}

export const gd_normalize_vec3f = (vec) => {
    let mag = Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2)
    if (mag == 0.0) return false

    mag = Math.sqrt(mag)

    if (mag == 0.0) {
        vec.x = 0.0
        vec.y = 0.0
        vec.x = 0.0
        return false
    }

    vec.x /= mag
    vec.y /= mag
    vec.z /= mag

    return true
}

export const gd_scale_mat4f_by_vec3f = (mtx, vec) => {
    mtx[0][0] *= vec.x
    mtx[0][1] *= vec.x
    mtx[0][2] *= vec.x
    mtx[1][0] *= vec.y
    mtx[1][1] *= vec.y
    mtx[1][2] *= vec.y
    mtx[2][0] *= vec.z
    mtx[2][1] *= vec.z
    mtx[2][2] *= vec.z
}

export const gd_vec3f_magnitude = (vec) => {
    return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2))
}

export const gd_create_origin_lookat = (mtx, vec, roll) => {
    const unit = { ...vec }

    gd_normalize_vec3f(unit)
    const hMag = Math.sqrt(Math.pow(unit.x, 2) + Math.pow(unit.z, 2))

    roll *= RAD_PER_DEG

    const s = Math.sin(roll)
    const c = Math.cos(roll)

    gd_set_identity_mat4(mtx)

    if (hMag != 0.0) {
        const invertedHMag = 1.0 / hMag
        mtx[0][0] = ((-unit.z * c) - (s * unit.y * unit.x)) * invertedHMag
        mtx[1][0] = ((unit.z * s) - (c * unit.y * unit.x)) * invertedHMag
        mtx[2][0] = -unit.x
        mtx[3][0] = 0.0

        mtx[0][1] = s * hMag
        mtx[1][1] = c * hMag
        mtx[2][1] = -unit.y
        mtx[3][1] = 0.0

        mtx[0][2] = ((c * unit.x) - (s * unit.y * unit.z)) * invertedHMag
        mtx[1][2] = ((-s * unit.x) - (c * unit.y * unit.z)) * invertedHMag
        mtx[2][2] = -unit.z
        mtx[3][2] = 0.0

        mtx[0][3] = 0.0
        mtx[1][3] = 0.0
        mtx[2][3] = 0.0
        mtx[3][3] = 1.0
    } else {
        mtx[0][0] = 0.0
        mtx[1][0] = 1.0
        mtx[2][0] = 0.0
        mtx[3][0] = 0.0

        mtx[0][1] = 0.0
        mtx[1][1] = 0.0
        mtx[2][1] = 1.0
        mtx[3][1] = 0.0

        mtx[0][2] = 1.0
        mtx[1][2] = 0.0
        mtx[2][2] = 0.0
        mtx[3][2] = 0.0

        mtx[0][3] = 0.0
        mtx[1][3] = 0.0
        mtx[2][3] = 0.0
        mtx[3][3] = 1.0
    }
}

export const gd_create_rot_matrix = (mtx, vec, s, c) => {

    const rev = { z: vec.x, y: vec.y, x: vec.z }

    const oneMinusCos = 1.0 - c

    mtx[0][0] = oneMinusCos * rev.z * rev.z + c
    mtx[0][1] = oneMinusCos * rev.z * rev.y + s * rev.x
    mtx[0][2] = oneMinusCos * rev.z * rev.x - s * rev.y
    mtx[0][3] = 0.0

    mtx[1][0] = oneMinusCos * rev.z * rev.y - s * rev.x
    mtx[1][1] = oneMinusCos * rev.y * rev.y + c
    mtx[1][2] = oneMinusCos * rev.y * rev.x + s * rev.z
    mtx[1][3] = 0.0

    mtx[2][0] = oneMinusCos * rev.z * rev.x + s * rev.y
    mtx[2][1] = oneMinusCos * rev.y * rev.x - s * rev.z
    mtx[2][2] = oneMinusCos * rev.x * rev.x + c
    mtx[2][3] = 0.0

    mtx[3][0] = 0.0
    mtx[3][1] = 0.0
    mtx[3][2] = 0.0
    mtx[3][3] = 1.0
}

export const gd_create_rot_mat_angular = (mtx, vec, ang) => {

    let s = Math.sin(ang / (DEG_PER_RAD / 2.0))
    let c = Math.cos(ang / (DEG_PER_RAD / 2.0))

    gd_create_rot_matrix(mtx, vec, s, c)

}

export const mtxf_mul = (dest, a, b) => {

    let entry0, entry1, entry2

    // column 0
    entry0 = a[0][0]
    entry1 = a[0][1]
    entry2 = a[0][2]
    dest[0][0] = entry0 * b[0][0] + entry1 * b[1][0] + entry2 * b[2][0]
    dest[0][1] = entry0 * b[0][1] + entry1 * b[1][1] + entry2 * b[2][1]
    dest[0][2] = entry0 * b[0][2] + entry1 * b[1][2] + entry2 * b[2][2]

    // column 1
    entry0 = a[1][0]
    entry1 = a[1][1]
    entry2 = a[1][2]
    dest[1][0] = entry0 * b[0][0] + entry1 * b[1][0] + entry2 * b[2][0]
    dest[1][1] = entry0 * b[0][1] + entry1 * b[1][1] + entry2 * b[2][1]
    dest[1][2] = entry0 * b[0][2] + entry1 * b[1][2] + entry2 * b[2][2]

    // column 2
    entry0 = a[2][0]
    entry1 = a[2][1]
    entry2 = a[2][2]
    dest[2][0] = entry0 * b[0][0] + entry1 * b[1][0] + entry2 * b[2][0]
    dest[2][1] = entry0 * b[0][1] + entry1 * b[1][1] + entry2 * b[2][1]
    dest[2][2] = entry0 * b[0][2] + entry1 * b[1][2] + entry2 * b[2][2]

    // column 3
    entry0 = a[3][0]
    entry1 = a[3][1]
    entry2 = a[3][2]
    dest[3][0] = entry0 * b[0][0] + entry1 * b[1][0] + entry2 * b[2][0] + b[3][0]
    dest[3][1] = entry0 * b[0][1] + entry1 * b[1][1] + entry2 * b[2][1] + b[3][1]
    dest[3][2] = entry0 * b[0][2] + entry1 * b[1][2] + entry2 * b[2][2] + b[3][2]

    dest[0][3] = dest[1][3] = dest[2][3] = 0
    dest[3][3] = 1
}

export const mat4_dot_prod = (a, b, res, row, col) => {
    res[row][col] = a[row][0] * b[0][col] + a[row][1] * b[1][col] +
                    a[row][2] * b[2][col] + a[row][3] * b[3][col]
}

export const gd_mult_mat4f = (mA, mB, dst) => {
    const result = new Array(4).fill(0).map(() => new Array(4).fill(0))

    mat4_dot_prod(mA, mB, result, 0, 0)
    mat4_dot_prod(mA, mB, result, 0, 1)
    mat4_dot_prod(mA, mB, result, 0, 2)
    mat4_dot_prod(mA, mB, result, 0, 3)
    mat4_dot_prod(mA, mB, result, 1, 0)
    mat4_dot_prod(mA, mB, result, 1, 1)
    mat4_dot_prod(mA, mB, result, 1, 2)
    mat4_dot_prod(mA, mB, result, 1, 3)
    mat4_dot_prod(mA, mB, result, 2, 0)
    mat4_dot_prod(mA, mB, result, 2, 1)
    mat4_dot_prod(mA, mB, result, 2, 2)
    mat4_dot_prod(mA, mB, result, 2, 3)
    mat4_dot_prod(mA, mB, result, 3, 0)
    mat4_dot_prod(mA, mB, result, 3, 1)
    mat4_dot_prod(mA, mB, result, 3, 2)
    mat4_dot_prod(mA, mB, result, 3, 3)

    gd_copy_mat4f(result, dst)
}

export const gd_mat4f_mult_vec3f = (vec, mtx) => {
    const out = {}

    out.x = mtx[0][0] * vec.x + mtx[1][0] * vec.y + mtx[2][0] * vec.z
    out.y = mtx[0][1] * vec.x + mtx[1][1] * vec.y + mtx[2][1] * vec.z
    out.z = mtx[0][2] * vec.x + mtx[1][2] * vec.y + mtx[2][2] * vec.z

    vec.x = out.x
    vec.y = out.y
    vec.z = out.z
}

export const gd_absrot_mat4 = (mtx, axisnum, ang) => {

    let rot = {}
    const rMat = new Array(4).fill(0).map(() => new Array(4).fill(0))

    switch (axisnum) {
        case GD_X_AXIS:
            rot = { x: 1.0, y: 0.0, z: 0.0 }
            break
        case GD_Y_AXIS:
            rot = { x: 0.0, y: 1.0, z: 0.0 }
            break
        case GD_Z_AXIS:
            rot = { x: 0.0, y: 0.0, z: 1.0 }
            break
        default:
            throw "uhhh.... should not be here"
    }
    gd_create_rot_mat_angular(rMat, rot, ang / 2.0)
    gd_mult_mat4f(mtx, rMat, mtx)

}

export const gd_rot_mat_about_vec = (mtx, vec) => {
    if (vec.x != 0.0) {
        gd_absrot_mat4(mtx, GD_X_AXIS, vec.x)
    }
    if (vec.y != 0.0) {
        gd_absrot_mat4(mtx, GD_Y_AXIS, vec.y)
    }
    if (vec.z != 0.0) {
        gd_absrot_mat4(mtx, GD_Z_AXIS, vec.z)
    }
}

export const gd_add_vec3f_to_mat4f_offset = (mtx, vec) => {
    mtx[3][0] += vec.x
    mtx[3][1] += vec.y
    mtx[3][2] += vec.z
}

export const gd_rotate_and_translate_vec3f = (vec, mtx) => {

    const out = {}

    out.x = mtx[0][0] * vec.x + mtx[1][0] * vec.y + mtx[2][0] * vec.z
    out.y = mtx[0][1] * vec.x + mtx[1][1] * vec.y + mtx[2][1] * vec.z
    out.z = mtx[0][2] * vec.x + mtx[1][2] * vec.y + mtx[2][2] * vec.z
    out.x += mtx[3][0]
    out.y += mtx[3][1]
    out.z += mtx[3][2]

    Object.assign(vec, out)
}

export const gd_copy_mat4f = (src, dst) => {
    for (let i = 0; i < dst.length; i++) {
        for (let j = 0; j < dst[i].length; j++) {
            dst[i][j] = src[i][j]
        }
    }
}

export const gd_set_identity_mat4 = (mtx) => {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx[i].length; j++) {
            i == j ? mtx[i][j] = 1 : mtx[i][j] = 0
        }
    }
    return mtx
} 

