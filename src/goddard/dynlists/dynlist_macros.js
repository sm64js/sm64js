
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

export const SetFlag = (w2) => {
    return { cmd: 8, args: { w2 } }
}

export const SetShapePtrPtr = (w1) => {
    return { cmd: 24, args: { w1 } }
}

export const SetShapePtr = (w1) => {
    return { cmd: 25, args: { w1 } }
}

export const SetType = (w2) => {
    return { cmd: 19, args: { w2 } }
}

export const SetScale = (x, y, z) => {
    return { cmd: 5, args: { vec: { x, y, z } } }
}

export const SetRotation = (x, y, z) => {
    return { cmd: 6, args: { vec: { x, y, z } } }
}

export const SetAttachOffset = (x, y, z) => {
    return { cmd: 41, args: { vec: { x, y, z } } }

}

export const MakeNetWithSubGroup = (w2, w1) => {
    return { cmd: 46, args: { w1, w2 } }
}

export const AttachTo = (w2, w1) => {
    return { cmd: 40, args: { w1, w2 } }
}

export const SetSkinShape = (w1) => {
    return { cmd: 22, args: { w1 } }
}

export const AttachNetToJoint = (w2, w1) => {
    return { cmd: 47, args: { w2, w1 } }
}

export const SetSkinWeight = (w2, x) => {
    return { cmd: 32, args: { w2, vec: { x } } }
}

export const EndNetSubGroup = (w1) => {
    return { cmd: 48, args: { w1 } }
}

export const LinkWith = (w1) => {
    return { cmd: 28, args: { w1 } }
}
