import { DynlistProcInstance as Dynlist } from "./DynlistProc"
import { ObjectsInstance as Objects } from "./Objects"
import { DrawInstance as Draw } from "./Draw"
import { OBJ_TYPE_PARTICLES, OBJ_NOT_DRAWABLE } from "./gd_types"
import { gd_vec3f_magnitude } from "./gd_math"

export const make_particle = (a, b, x, y, z) => {

    return {
        header: Objects.make_object(OBJ_TYPE_PARTICLES),
        unk20: { x, y, z },
        animInfo: { x: 0, y: 0, z: 0 },
        unk58: b,
        unk54: a | 8,
        unk5C: -1,
        id: 0,  ///unused apparently
        unk1C: 0,
        unkB0: 1
    }
}

const func_80182A08 = (ptc, b) => {

    if (ptc.unk6C) {
        let link = ptc.unk6C.link1C
        while (link) {
            let sp20 = link.obj
            if (sp20.unk5C <= 0) {
                sp20.unk20.x = ptc.unk20.x
                sp20.unk20.y = ptc.unk20.y
                sp20.unk20.z = ptc.unk20.z
                sp20.unk5C = parseInt(12.0 - Math.random() * 5.0)
                do {
                    sp20.animInfo.x = Math.random() * 50.0 - 25.0
                    sp20.animInfo.y = Math.random() * 50.0 - 25.0
                    sp20.animInfo.z = Math.random() * 50.0 - 25.0
                } while (gd_vec3f_magnitude(sp20.animInfo) > 30.0)
                sp20.animInfo.x += b.x
                sp20.animInfo.y += b.y
                sp20.animInfo.z += b.z
                sp20.header.drawFlags &= ~OBJ_NOT_DRAWABLE
                sp20.unk54 |= 8
            }
            link = link.next
        }
    }
}

export const move_particle = (ptc) => {
    if (ptc.unk54 & 2) return
    if (!(ptc.unk54 & 8)) return

    let sp40, sp34

    if (ptc.unk60 == 3) {
        sp40 = {
            x: -Draw.gViewUpdateCamera.unkE8[2][0] * 50.0,
            y: -Draw.gViewUpdateCamera.unkE8[2][1] * 50.0,
            z: -Draw.gViewUpdateCamera.unkE8[2][1] * 50.0
        }
        sp34 = {
            x: -Draw.gViewUpdateCamera.unkE8[2][0] * -20.0,
            y: -Draw.gViewUpdateCamera.unkE8[2][1] * -20.0,
            z: -Draw.gViewUpdateCamera.unkE8[2][1] * -20.0
        }

    }

    if (ptc.unkBC && ptc.unkBC.type != 1) {
        Dynlist.set_cur_dynobj(ptc.unkBC.obj)
        if (ptc.unk60 == 3) {
            if (ptc.unk64 == 3) {
                const sp4C = ptc.unkBC.obj
                if (sp4C.unk18C.pickedObj) {
                    throw "picked Obj - move particle"
                    Dynlist.set_cur_dynobj(sp4C.unk18C.pickedObj)
                    ptc.unk54 |= 0x20
                } else {
                    ptc.unk58 &= ~0x10
                    ptc.unk58 &= ~0x20
                }
            }
        }
        Dynlist.d_get_world_pos(ptc.unk20)
    }
    const sp7C = -0.4
    ptc.unk20.x += ptc.animInfo.x
    ptc.unk20.y += ptc.animInfo.y
    ptc.unk20.z += ptc.animInfo.z
    if (ptc.unk54 & 1) {
        ptc.animInfo.y += sp7C
    }
    if (ptc.unkB0 == 1) {
        ptc.unkB0 = 2
        if (ptc.unk60 == 3) {
            switch (ptc.unk64) {
                case 1:
                    throw "case 1 - move particle"
/*                    ptc.unk6C = Objects.make_group(0)
                    ptc.unk6C.header.obj = ptc.unk6C
                    for (let i = 0; i < 50; i++) {
                        const sp60 = make_particle(1, -1, ptc.unk20.x, pt.unk20.y, ptc.unk20.z)
                        sp60.header.obj = sp60
                        sp60.unk1C = ptc.unk1C
                        Objects.addto_group(ptc.unk6C, sp60.header)
                        sp60.unk54 &= ~8
                    }
                    break*/
                case 2:
                case 3:
                    ptc.unk6C = Objects.make_group(0)
                    for (let i = 0; i < 30; i++) {
                        const sp60 = make_particle(1, -1, ptc.unk20.x, ptc.unk20.y, ptc.unk20.z)
                        sp60.header.obj = sp60
                        sp60.unk1C = ptc.unk1C
                        Objects.addto_group(ptc.unk6C, sp60.header)
                        sp60.unk54 &= ~8
                    }
                    break
            }
        }
    }

    ptc.animInfo.x *= 0.9
    ptc.animInfo.y *= 0.9
    ptc.animInfo.z *= 0.9

    if (ptc.unk60 == 3) {
        switch (ptc.unk64) {
            case 1:
                throw "case 1 - move particle"
                break
            case 3:
                if ((ptc.unk54 & 0x20) && !(ptc.unk54 & 0x10)) {
                    throw "case 3 - move particle"
                }
                break
            case 2:
                func_80182A08(ptc, sp34)
                break
        }
        Objects.apply_to_obj_types_in_group(OBJ_TYPE_PARTICLES, move_particle, ptc.unk6C, null)
    }

    if (ptc.unk5C >= 0) {
        if (ptc.unk5C-- <= 0) {
            ptc.header.drawFlags |= OBJ_NOT_DRAWABLE
            ptc.unk58 &= ~8
        }
    }

}