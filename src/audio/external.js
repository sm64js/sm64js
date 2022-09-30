import { SOUND_BANK_COUNT } from "../include/sounds"
import { SEQ_EVENT_SOLVE_PUZZLE } from "../include/seq_ids"

export const SEQ_PLAYER_LEVEL            = 0  // Level background music
export const SEQ_PLAYER_ENV              = 1  // Misc music like the puzzle jingle
export const SEQ_PLAYER_SFX              = 2  // Sound effects

// sBackgroundMusicMaxTargetVolume and sBackgroundMusicTargetVolume use the 0x80
// bit to indicate that they are set, and the rest of the bits for the actual value
const TARGET_VOLUME_IS_PRESENT_FLAG = 0x80
const TARGET_VOLUME_VALUE_MASK = 0x7f
const TARGET_VOLUME_UNSET = 0x00

export const SEQUENCE_ARGS = (priority, seqId) => {return (priority << 8) | seqId}

const sSoundMovingSpeed = new Array(SOUND_BANK_COUNT)
let sBackgroundMusicMaxTargetVolume = 0
export const gGlobalSoundSource = [0.0, 0.0, 0.0]

export const set_sound_moving_speed = (bank, speed) => {
    sSoundMovingSpeed[bank] = speed
}

export const play_sound = (soundBits, pos) => {
}

export const play_secondary_music = (seqId, bgMusicVolume, volume, fadeTimer) => {
}

export const func_80321080 = (fadeTimer) => {
}

/**
 * Plays the puzzle jingle. Plays the dadada dadada *dadada* jingle
 * that usually plays when you solve a "puzzle", like chests, talking to
 * yoshi, releasing chain chomp, opening the pyramid top, etc.
 *
 * Called from threads: thread5_game_loop
 */
export const play_puzzle_jingle = () => {
    seq_player_play_sequence(SEQ_PLAYER_ENV, SEQ_EVENT_SOLVE_PUZZLE, 0)
    sBackgroundMusicMaxTargetVolume = TARGET_VOLUME_IS_PRESENT_FLAG | 20
    begin_background_music_fade(50)
}

export const play_music = (player, seqArgs, fadeTimer) => {
}

const begin_background_music_fade = (fadeDuration) => {
}

const seq_player_play_sequence = (player, seqId, arg2) => {
}

export const seq_player_lower_volume = (player, fadeDuration, percentage) => {
}

export const seq_player_unlower_volume = (player, fadeDuration) => {
}