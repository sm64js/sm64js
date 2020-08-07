export const make_vertex = (vtx, n, x, y, z, tx, ty, r, g, b, a) => {

    vtx[n] = {
        pos: [x, y, z],
        flag: 0,
        tc: [tx, ty],
        color: [r, g, b, a]
    }

}