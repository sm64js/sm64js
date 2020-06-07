import { ObjectsInstance as Objects } from "./Objects"
import { OBJ_TYPE_PARTICLES } from "./gd_types"

export const make_particle = (a, b, x, y, z) => {

    return {
        header: Objects.make_object(OBJ_TYPE_PARTICLES),
        unk20: { x, y, z },
        unk38: { x: 0, y: 0, z: 0 },
        unk58: b,
        unk54: a | 8,
        unk5C: -1,
        id: 0,  ///unused apparently
        unk1C: 0,
        unkB0: 1
    }
}