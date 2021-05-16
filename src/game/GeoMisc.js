export const make_vertex = (vtx, n, x, y, z, tx, ty, r, g, b, a) => {

    vtx[n] = {
        pos: [x, y, z],
        flag: 0,
        tc: [tx, ty],
        color: [r, g, b, a]
    }

}

export const round_float = (num) => {
    if (num >= 0.0) {
        return Math.floor(num + 0.5)
    } else {
        return Math.floor(num - 0.5)
    }
}
