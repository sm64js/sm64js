import { coss, sins } from "../utils"

/**
 * Unified version of approach_f32 and approach_s32 from the C version
 */
export const approach_number = (current, target, inc, dec) => {
    if (current < target) {
        current += inc
        if (current > target) {
            current = target
        }
    } else {
        current -= dec
        if (current < target) {
            current = target
        }
    }
    return current
}

// aliases
export const approach_f32 = approach_number
export const approach_s32 = approach_number

export const vec3f_get_dist_and_angle = (from, to, output) => {
    const x = to[0] - from[0]
    const y = to[1] - from[1]
    const z = to[2] - from[2]

    output.dist = Math.sqrt(x * x + y * y + z * z)
    output.pitch = atan2s(Math.sqrt(x * x + z * z), y)
    output.yaw = atan2s(z, x)
}

export const vec3f_set_dist_and_angle = (from, to, dist, pitch, yaw) => {
    to[0] = from[0] + dist * Math.cos(pitch / 0x8000 * Math.PI) * Math.sin(yaw / 0x8000 * Math.PI)
    to[1] = from[1] + dist * Math.sin(pitch / 0x8000 * Math.PI)
    to[2] = from[2] + dist * Math.cos(pitch / 0x8000 * Math.PI) * Math.cos(yaw / 0x8000 * Math.PI)
}

export const vec3f_copy = (dest, src) => {
    dest[0] = src[0]
    dest[1] = src[1]
    dest[2] = src[2]
}

export const vec3f_add = (dest, a) => {
    dest[0] += a[0]
    dest[1] += a[1]
    dest[2] += a[2]
}

export const vec3f_normalize = (dest) => {
    //! Possible division by zero
    const invsqrt = 1.0 / Math.sqrt(dest[0] * dest[0] + dest[1] * dest[1] + dest[2] * dest[2])

    dest[0] *= invsqrt
    dest[1] *= invsqrt
    dest[2] *= invsqrt
    return dest
}

export const vec3f_cross = (dest, a, b) => {
    dest[0] = a[1] * b[2] - b[1] * a[2]
    dest[1] = a[2] * b[0] - b[2] * a[0]
    dest[2] = a[0] * b[1] - b[0] * a[1]
    return dest 
}

export const vec3f_set = (dest, x, y, z) => {
    dest[0] = x
    dest[1] = y
    dest[2] = z
    return dest
}

export const vec3s_set = (dest, x, y, z) => {
    dest[0] = x
    dest[1] = y
    dest[2] = z
    return dest
}

/**
 * Convert float vector a to a short vector 'dest' by rounding the components
 * to the nearest integer.
 */
export const vec3f_to_vec3s = (dest, a) => {
    // add/subtract 0.5 in order to round to the nearest s32 instead of truncating
    dest[0] = s16(a[0] + ((a[0] > 0) ? 0.5 : -0.5))
    dest[1] = s16(a[1] + ((a[1] > 0) ? 0.5 : -0.5))
    dest[2] = s16(a[2] + ((a[2] > 0) ? 0.5 : -0.5))
}

export const mtxf_identity = (mtx) => {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx[i].length; j++) {
            i == j ? mtx[i][j] = 1 : mtx[i][j] = 0
        }
    }
    return mtx
}

export const mtxf_translate = (dest, b) => {
    mtxf_identity(dest)
    dest[3][0] = b[0]
    dest[3][1] = b[1]
    dest[3][2] = b[2]
}

export const mtxf_to_mtx = (dest, src) => {
    /// just a regular copy in js
    for (let i = 0; i < dest.length; i++) {
        for (let j = 0; j < dest[i].length; j++) {
            dest[i][j] = src[i][j]
        }
    }
}

export const mtxf_billboard = (dest, mtx, position, angle) => {
    dest[0][0] = coss(angle)
    dest[0][1] = sins(angle)
    dest[0][2] = 0
    dest[0][3] = 0

    dest[1][0] = -dest[0][1]
    dest[1][1] = dest[0][0]
    dest[1][2] = 0
    dest[1][3] = 0

    dest[2][0] = 0
    dest[2][1] = 0
    dest[2][2] = 1
    dest[2][3] = 0

    dest[3][0] =
        mtx[0][0] * position[0] + mtx[1][0] * position[1] + mtx[2][0] * position[2] + mtx[3][0]
    dest[3][1] =
        mtx[0][1] * position[0] + mtx[1][1] * position[1] + mtx[2][1] * position[2] + mtx[3][1]
    dest[3][2] =
        mtx[0][2] * position[0] + mtx[1][2] * position[1] + mtx[2][2] * position[2] + mtx[3][2]
    dest[3][3] = 1
}

export const mtxf_cylboard = (dest, mtx, position, angle) => {
    dest[0][0] = Math.cos(angle / 0x8000 * Math.PI)
    dest[0][1] = Math.sin(angle / 0x8000 * Math.PI)
    dest[0][2] = 0
    dest[0][3] = 0

    dest[1][0] = mtx[1][0]
    dest[1][1] = mtx[1][1]
    dest[1][2] = mtx[1][2]
    dest[1][3] = 0

    dest[2][0] = 0
    dest[2][1] = 0
    dest[2][2] = 1
    dest[2][3] = 0

    dest[3][0] = mtx[0][0] * position[0] + mtx[1][0] * position[1] + mtx[2][0] * position[2] + mtx[3][0]
    dest[3][1] = mtx[0][1] * position[0] + mtx[1][1] * position[1] + mtx[2][1] * position[2] + mtx[3][1]
    dest[3][2] = mtx[0][2] * position[0] + mtx[1][2] * position[1] + mtx[2][2] * position[2] + mtx[3][2]
    dest[3][3] = 1
}

export const mtxf_align_terrain_normal = (dest, upDir, pos, yaw) => {
    const leftDir = new Array(3)
    const forwardDir = new Array(3)

    const lateralDir = [sins(yaw), 0, coss(yaw)]
    vec3f_normalize(upDir)

    vec3f_cross(leftDir, upDir, lateralDir)
    vec3f_normalize(leftDir)

    vec3f_cross(forwardDir, leftDir, upDir)
    vec3f_normalize(forwardDir)

    dest[0][0] = leftDir[0]
    dest[0][1] = leftDir[1]
    dest[0][2] = leftDir[2]
    dest[3][0] = pos[0]

    dest[1][0] = upDir[0]
    dest[1][1] = upDir[1]
    dest[1][2] = upDir[2]
    dest[3][1] = pos[1]

    dest[2][0] = forwardDir[0]
    dest[2][1] = forwardDir[1]
    dest[2][2] = forwardDir[2]
    dest[3][2] = pos[2]

    dest[0][3] = 0.0
    dest[1][3] = 0.0
    dest[2][3] = 0.0
    dest[3][3] = 1.0
}

export const mtxf_rotate_xyz_and_translate = (dest, b, c) => {
    const sx = Math.sin(c[0] / 0x8000 * Math.PI)
    const cx = Math.cos(c[0] / 0x8000 * Math.PI)

    const sy = Math.sin(c[1] / 0x8000 * Math.PI)
    const cy = Math.cos(c[1] / 0x8000 * Math.PI)

    const sz = Math.sin(c[2] / 0x8000 * Math.PI)
    const cz = Math.cos(c[2] / 0x8000 * Math.PI)

    dest[0][0] = cy * cz
    dest[0][1] = cy * sz
    dest[0][2] = -sy
    dest[0][3] = 0

    dest[1][0] = sx * sy * cz - cx * sz
    dest[1][1] = sx * sy * sz + cx * cz
    dest[1][2] = sx * cy
    dest[1][3] = 0

    dest[2][0] = cx * sy * cz + sx * sz
    dest[2][1] = cx * sy * sz - sx * cz
    dest[2][2] = cx * cy
    dest[2][3] = 0

    dest[3][0] = b[0]
    dest[3][1] = b[1]
    dest[3][2] = b[2]
    dest[3][3] = 1
}

export const mtxf_rotate_zxy_and_translate = (dest, translate, rotate) => {
    const sx = Math.sin(rotate[0] / 0x8000 * Math.PI)
    const cx = Math.cos(rotate[0] / 0x8000 * Math.PI)

    const sy = Math.sin(rotate[1] / 0x8000 * Math.PI)
    const cy = Math.cos(rotate[1] / 0x8000 * Math.PI)

    const sz = Math.sin(rotate[2] / 0x8000 * Math.PI)
    const cz = Math.cos(rotate[2] / 0x8000 * Math.PI)

    dest[0][0] = cy * cz + sx * sy * sz
    dest[1][0] = -cy * sz + sx * sy * cz
    dest[2][0] = cx * sy
    dest[3][0] = translate[0]

    dest[0][1] = cx * sz
    dest[1][1] = cx * cz
    dest[2][1] = -sx
    dest[3][1] = translate[1]

    dest[0][2] = -sy * cz + sx * cy * sz
    dest[1][2] = sy * sz + sx * cy * cz
    dest[2][2] = cx * cy
    dest[3][2] = translate[2]

    dest[0][3] = 0.0
    dest[1][3] = 0.0
    dest[2][3] = 0.0
    dest[3][3] = 1.0
}

export const mtxf_rotate_xy = (mtx, angle) => {
    const temp = new Array(4).fill(0).map(() => new Array(4).fill(0))
    mtxf_identity(temp)
    temp[0][0] = coss(angle)
    temp[0][1] = sins(angle)
    temp[1][0] = -temp[0][1]
    temp[1][1] = temp[0][0]

    mtxf_to_mtx(mtx, temp)
}

export const mtxf_scale_vec3f = (dest, mtx, s) => {
    for (let i = 0; i < 4; i++) {
        dest[0][i] = mtx[0][i] * s[0]
        dest[1][i] = mtx[1][i] * s[1]
        dest[2][i] = mtx[2][i] * s[2]
        dest[3][i] = mtx[3][i]
    }
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

export const mtxf_lookat = (mtx, from, to, roll) => {
    let invLength, dx, dz, xColY, yColY, zColY, xColZ, yColZ, zColZ, xColX, yColX, zColX

    dx = to[0] - from[0]
    dz = to[2] - from[2]

    invLength = -1.0 / Math.sqrt(dx * dx + dz * dz)
    dx *= invLength
    dz *= invLength

    yColY = Math.cos(roll)
    xColY = Math.sin(roll) * dz
    zColY = -Math.sin(roll) * dx

    xColZ = to[0] - from[0]
    yColZ = to[1] - from[1]
    zColZ = to[2] - from[2]

    invLength = -1.0 / Math.sqrt(xColZ * xColZ + yColZ * yColZ + zColZ * zColZ)
    xColZ *= invLength
    yColZ *= invLength
    zColZ *= invLength

    xColX = yColY * zColZ - zColY * yColZ
    yColX = zColY * xColZ - xColY * zColZ
    zColX = xColY * yColZ - yColY * xColZ

    invLength = 1.0 / Math.sqrt(xColX * xColX + yColX * yColX + zColX * zColX)

    xColX *= invLength
    yColX *= invLength
    zColX *= invLength

    xColY = yColZ * zColX - zColZ * yColX
    yColY = zColZ * xColX - xColZ * zColX
    zColY = xColZ * yColX - yColZ * xColX

    invLength = 1.0 / Math.sqrt(xColY * xColY + yColY * yColY + zColY * zColY)
    xColY *= invLength
    yColY *= invLength
    zColY *= invLength

    mtx[0][0] = xColX
    mtx[1][0] = yColX
    mtx[2][0] = zColX
    mtx[3][0] = -(from[0] * xColX + from[1] * yColX + from[2] * zColX)

    mtx[0][1] = xColY
    mtx[1][1] = yColY
    mtx[2][1] = zColY
    mtx[3][1] = -(from[0] * xColY + from[1] * yColY + from[2] * zColY)

    mtx[0][2] = xColZ
    mtx[1][2] = yColZ
    mtx[2][2] = zColZ
    mtx[3][2] = -(from[0] * xColZ + from[1] * yColZ + from[2] * zColZ)

    mtx[0][3] = 0
    mtx[1][3] = 0
    mtx[2][3] = 0
    mtx[3][3] = 1

}

export const guPerspective = (m, perspNorm, fovy, aspect, near, far, scale) => {

    mtxf_identity(m)
    fovy *= Math.PI / 180.0
    const yscale = Math.cos(fovy / 2) / Math.sin(fovy / 2)

    m[0][0] = yscale / aspect
    m[1][1] = yscale
    m[2][2] = (near + far) / (near - far)
    m[2][3] = -1
    m[3][2] = 2 * near * far / (near - far)
    m[3][3] = 0.0

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            m[row][col] *= scale
        }
    }

    if (perspNorm) {
        if (near + far <= 2.0) {
            perspNorm.value = 65535
        } else {
            perspNorm.value = (1 << 17) / (near + far)
            if (perspNorm.value <= 0) perspNorm.value = 1
        }
    }
}

export const guNormalize = (x, y, z) => {
    const tmp = 1.0 / Math.sqrt((x * x) + (y * y) + (z * z))
    x = x * tmp
    y = y * tmp
    z = z * tmp
}

export const guRotate = (m, a, x, y, z) => {
    const degreesToRadians = Math.PI / 180

    guNormalize(x, y, z)

    a *= degreesToRadians

    let sin_a = Math.sin(a)
    let cos_a = Math.cos(a)

    let sp2c = x * y * (1 - cos_a)
    let sp28 = y * z * (1 - cos_a)
    let sp24 = z * x * (1 - cos_a)

    mtxf_identity(m)
    let xx = x * x
    m[0][0] = (1 - xx) * cos_a + xx
    m[2][1] = sp28 - x * sin_a
    m[1][2] = sp28 + x * sin_a
    let yy = y * y
    m[1][1] = (1 - yy) * cos_a + yy
    m[2][0] = sp24 + y * sin_a
    m[0][2] = sp24 - y * sin_a
    let zz = z * z
    m[2][2] = (1 - zz) * cos_a + zz
    m[1][0] = sp2c - z * sin_a
    m[0][1] = sp2c + z * sin_a;
}


export const guTranslate = (m, x, y, z) => {
    mtxf_identity(m)
    m[3][0] = x
    m[3][1] = y
    m[3][2] = z
}

export const guScale = (m, x, y, z) => {
    mtxf_identity(m)
    m[0][0] = x
    m[1][1] = y
    m[2][2] = z
    m[3][3] = 1.0
}

export const guOrtho = (m, left, right, bottom, top, near, far, scale) => {
    mtxf_identity(m)
    m[0][0] = 2 / (right - left)
    m[1][1] = 2 / (top - bottom)
    m[2][2] = -2 / (far - near)
    m[3][0] = -(right + left) / (right - left)
    m[3][1] = -(top + bottom) / (top - bottom)
    m[3][2] = -(far + near) / (far - near)
    m[3][3] = 1
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            m[row][col] *= scale
        }
    }
}

/*const customAtan = (angle) => {
    return (Math.atan(angle) + (Math.PI / 2)) * 2607.594
}
*/
/**
 * Compute the angle from (0, 0) to (x, y) as a s16. Given that terrain is in
 * the xz-plane, this is commonly called with (z, x) to get a yaw angle.
 */
export const atan2s = (y, x) => {

    return parseInt(Math.atan2(x, y) * 10430.5)

}

export const sqrtf = (x) => {
    return Math.sqrt(x)
}

export const Mat4 = () => {
    return new Array(4).fill(0).map(() => new Array(4).fill(0))
}
