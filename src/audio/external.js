import { SOUND_BANK_COUNT } from "../include/sounds"

const sSoundMovingSpeed = new Array(SOUND_BANK_COUNT)

export const set_sound_moving_speed = (bank, speed) => {
    sSoundMovingSpeed[bank] = speed
}

export const play_sound = (soundBits, pos) => {
}
