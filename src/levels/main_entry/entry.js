import { level_intro_entry_1 } from "../intro/script"

export const level_script_entry = [
    ['init_level'],
    ['sleep', 2],
    ['blackout', false],
    ['set_register', 0],
    ['execute', level_intro_entry_1]
]
