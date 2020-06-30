const CAM_MODE_MARIO_ACTIVE           = 0x01
const CAM_MODE_LAKITU_WAS_ZOOMED_OUT  = 0x02
const CAM_MODE_MARIO_SELECTED         = 0x04

class Camera {
    constructor() {
        this.gPlayerCameraState = {
            action: 0,
            pos: [0, 0, 0],
            faceAngle: [0, 0, 0],
            headRotation: [0, 0, 0],
            cameraEvent: 0,
            usedObj: null
        }
    }

    select_mario_cam_mode() {
        this.sSelectionFlags = CAM_MODE_MARIO_SELECTED
    }
}

export const CameraInstance = new Camera()