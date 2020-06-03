
export const StartList = () => {
    return { cmd: 0xD1D4 }
}

export const StopList = () => {
    return { cmd: 58 }
}

export const UseIntId = (x) => {
    return { cmd: 0, args: x }
}

export const StartGroup = (x) => {
    return { cmd: 16, args: x }
}

export const EndGroup = (x) => {
    return { cmd: 17, args: x }
}

export const MakeVertex = (x, y, z) => {
    return { cmd: 49, args: { vec: { x, y, z } } }
}

export const SetParamF = (w2, x) => {
    return { cmd: 44, args: { w2, vec: { x } } }
}

export const MakeDynObj = (w2, w1) => {
    return { cmd: 15, args: { w1, w2 } }
}

export const SetMaterial = (w1, w2) => {
    return { cmd: 36, args: { w1, w2 }}
}

export const SetParamPtr = (w2, w1) => {
    return { cmd: 45, args: { w1, w2 } }
}

export const UseObj = (w1) => {
    return { cmd: 30, args: { w1 } }
}

export const MapVertices = (w1) => {
    return { cmd: 38, args: { w1 } }
}

export const SetNodeGroup = (w1) => {
    return { cmd: 21, args: { w1 } }
}

export const SetPlaneGroup = (w1) => {
    return { cmd: 23, args: { w1 } }
}

export const JumpToList = (list) => {
    return { cmd: 12, args: { list } }
}

export const LinkWithPtr = (w1) => {
    return { cmd: 29, args: { w1 } }
}

export const SetId = (id) => {
    return { cmd: 35, args: { id } }
}

export const SetAmbient = (r, g, b) => {
    return { cmd: 33, args: { vec: { r, g, b } } }
}

export const SetDiffuse = (r, g, b) => {
    return { cmd: 34, args: { vec: { r, g, b } } }
}

export const SetMaterialGroup = (w1) => {
    return { cmd: 20, args:  { w1 } }
}
