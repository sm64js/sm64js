
class MarioMisc {
    constructor() {
        this.gBodyState = {
            action: 0, capState: 0, eyeState: 0, handState: 0,
            wingFlutter: 0, modelState: 0, grabPos: 0, punchState: 0,
            torsoAngle: [0, 0, 0], headAngle: [0, 0, 0], torsoPos: [0,0,0],
            heldObjLastPosition: [0, 0, 0]
        }
        this.customCapState = 0
    }
}

export const MarioMiscInstance = new MarioMisc()