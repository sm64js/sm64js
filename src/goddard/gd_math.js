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

export const gd_set_identity_mat4 = (mtx) => {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx[i].length; j++) {
            i == j ? mtx[i][j] = 1 : mtx[i][j] = 0
        }
    }
    return mtx
} 

