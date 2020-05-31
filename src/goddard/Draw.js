class Draw {
    constructor() {

    }

    nop_obj_draw() { }

    draw_group() {
        throw "unimplemented draw group"
    }

    draw_face() {
        throw "unimplemented draw face"
    }
}

export const DrawInstance = new Draw()