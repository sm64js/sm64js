
const GD_X_AXIS = 0 
const GD_Y_AXIS = 1
const GD_Z_AXIS = 2

const DEG_PER_RAD = 180.0 / Math.PI

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

export const gd_create_rot_matrix = (mtx, vec, s, c) => {

    const rev = { z: vec.x, y: vec.y, z: vec.x }

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

export const gd_mult_mat4f = (mA, mB, dst) => {
    mtxf_mul(dst, mA, mB)
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

