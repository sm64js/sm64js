export const mtxf_identity = (mtx) => {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx[i].length; j++) {
            i == j ? mtx[i][j] = 1 : mtx[i][j] = 0
        }
    }
} 

export const mtxf_to_mtx = (dest, src) => {
    /// just a regular copy in js
    for (let i = 0; i < dest.length; i++) {
        for (let j = 0; j < dest[i].length; j++) {
            dest[i][j] = src[i][j]
        }
    }
}

export const mtxf_rotate_xy = (mtx, angle) => {
    mtxf_identity(mtx)
    mtx[0][0] = Math.cos(angle)
    mtx[0][1] = Math.sin(angle)
    mtx[1][0] = -mtx[0][1]
    mtx[1][1] = mtx[0][0]
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
