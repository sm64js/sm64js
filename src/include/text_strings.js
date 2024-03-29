///////// CONVERSION TABLE /////////
//  x   0    1    2    3    4    5    6    7    8    9    A    B    C    D    E    F
//  0  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
//  1  "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
//  2  "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
//  3  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "'", ".",
//  4  "☺", "☺", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  5  "▲", "▼", "◀", "▶", "[A]", "[B]", "[C]", "[Z]", "[R]", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  6  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, ",",
//  7  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, " ", "-",
//  8  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  9  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  A  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  B  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  C  0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  D  "/", "the", "you", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  E  "[%]", "(", ")(", ")", ">", "&", ":", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
//  F  0x0, 0x0, "!", "%", "?", "『", "』", "~", "…", "$", "★", "×", "・", "☆", "\n", "\0",

export const TEXT_EMPTY_STRING = [ 0xFF ]
export const TEXT_ZERO = [0x00,0xFF,]
export const TEXT_COIN = [0xF9,0xFF,]
export const TEXT_STAR = [0xFA,0xFF,]
export const TEXT_COIN_X = [0xF9,0xFB,0xFF,]
export const TEXT_STAR_X = [0xFA,0xFB,0xFF,]
export const TEXT_VARIABLE_X = [0xFB,0xFF,]
export const TEXT_STAR_DIFF = TEXT_STAR
export const TEXT_UNFILLED_STAR = [0xFD,0xFF,]

export const TEXT_4DASHES = [0x9F,0x9F,0x9F,0x9F,0xFF,]
export const TEXT_NEW = [0x17,0x0E,0x20,0xFF,]

export const TEXT_PAUSE = [0x19,0x0A,0x1E,0x1C,0x0E,0xFF,]
export const TEXT_HUD_CONGRATULATIONS = [0x0C,0x18,0x17,0x10,0x1B,0x0A,0x1D,0x1E,0x15,0x0A,0x1D,0x12,0x18,0x17,0x1C,0xFF,]

/**
 * File Select Text
 */

// Main Screens
export const TEXT_MARIO = [0x16,0x0A,0x1B,0x12,0x18,0xFF,] // View Score Menu
export const TEXT_SELECT_FILE = [0x1C,0x0E,0x15,0x0E,0x0C,0x1D,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]
export const TEXT_CHECK_FILE = [0x0C,0x11,0x0E,0x0C,0x14,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]
export const TEXT_COPY_FILE = [0x0C,0x18,0x19,0x22,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]
export const TEXT_ERASE_FILE = [0x0E,0x1B,0x0A,0x1C,0x0E,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]
export const TEXT_SOUND_SELECT = [0x1C,0x18,0x1E,0x17,0x0D,0x9E,0x1C,0x0E,0x15,0x0E,0x0C,0x1D,0xFF,]

export const TEXT_FILE_MARIO_A = [0x16,0x0A,0x1B,0x12,0x18,0x9E,0x0A,0xFF,]
export const TEXT_FILE_MARIO_B = [0x16,0x0A,0x1B,0x12,0x18,0x9E,0x0B,0xFF,]
export const TEXT_FILE_MARIO_C = [0x16,0x0A,0x1B,0x12,0x18,0x9E,0x0C,0xFF,]
export const TEXT_FILE_MARIO_D = [0x16,0x0A,0x1B,0x12,0x18,0x9E,0x0D,0xFF,]

// Menu Options
export const TEXT_SCORE = [0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]
export const TEXT_COPY = [0x0C,0x18,0x19,0x22,0xFF,]
export const TEXT_ERASE = [0x0E,0x1B,0x0A,0x1C,0x0E,0xFF,]

// Sound Options
export const TEXT_STEREO = [0x1C,0x1D,0x0E,0x1B,0x0E,0x18,0xFF,]
export const TEXT_MONO = [0x16,0x18,0x17,0x18,0xFF,]
export const TEXT_HEADSET = [0x11,0x0E,0x0A,0x0D,0x1C,0x0E,0x1D,0xFF,]

// Misc Menu Text
export const TEXT_SAVED_DATA_EXISTS = [0x1C,0x0A,0x1F,0x0E,0x0D,0x9E,0x0D,0x0A,0x1D,0x0A,0x9E,0x0E,0x21,0x12,0x1D,0x1C,0xFF,] // Misspell
export const TEXT_NO_SAVED_DATA_EXISTS = [0x17,0x18,0x9E,0x1C,0x0A,0x1F,0x0E,0x0D,0x9E,0x0D,0x0A,0x1D,0x0A,0x9E,0x0E,0x21,0x12,0x1C,0x1D,0x1C,0xFF,]

// Inside a Menu
export const TEXT_RETURN = [0x1B,0x0E,0x1D,0x1E,0x1B,0x17,0xFF,]
export const TEXT_CHECK_SCORE = [0x0C,0x11,0x0E,0x0C,0x14,0x9E,0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]
export const TEXT_COPY_FILE_BUTTON = [0x0C,0x18,0x19,0x22,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]
export const TEXT_ERASE_FILE_BUTTON = [0x0E,0x1B,0x0A,0x1C,0x0E,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]

// Score Menu
export const TEXT_HI_SCORE = [0x11,0x12,0x9E,0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]
export const TEXT_MY_SCORE = [0x16,0x22,0x9E,0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]
// Score Mario Text ("☺" is the Mario face defined in the US/EU menu char table)
export const TEXT_SCORE_MARIO_A = [0x40,0x41,0x0A,0xFF,]
export const TEXT_SCORE_MARIO_B = [0x40,0x41,0x0B,0xFF,]
export const TEXT_SCORE_MARIO_C = [0x40,0x41,0x0C,0xFF,]
export const TEXT_SCORE_MARIO_D = [0x40,0x41,0x0D,0xFF,]

// Copy Menu
export const TEXT_COPY_IT_TO_WHERE = [0x0C,0x18,0x19,0x22,0x9E,0x12,0x1D,0x9E,0x1D,0x18,0x9E,0x20,0x11,0x0E,0x1B,0x0E,0xF4,0xFF,]
export const TEXT_COPYING_COMPLETED = [0x0C,0x18,0x19,0x22,0x12,0x17,0x10,0x9E,0x0C,0x18,0x16,0x19,0x15,0x0E,0x1D,0x0E,0x0D,0xFF,]
export const TEXT_NO_FILE_TO_COPY_FROM = [0x17,0x18,0x9E,0x0E,0x16,0x19,0x1D,0x22,0x9E,0x0F,0x12,0x15,0x0E,0xFF,]

// Erase Menu
export const TEXT_SURE = [0x1C,0x1E,0x1B,0x0E,0xF4,0xFF,]
export const TEXT_YES = [0x22,0x0E,0x1C,0xFF,]
export const TEXT_NO = [0x17,0x18,0xFF,]
export const TEXT_FILE_MARIO_A_JUST_ERASED = [0x16,0x0A,0x1B,0x12,0x18,0x9E,0x0A,0x9E,0x13,0x1E,0x1C,0x1D,0x9E,0x0E,0x1B,0x0A,0x1C,0x0E,0x0D,0xFF,]

/**
 * Menus Text (Pause, Course Completed)
 */
// Main Courses
export const TEXT_COURSE = [0x0C,0x18,0x1E,0x1B,0x1C,0x0E,0xFF,]
export const TEXT_MYSCORE = [0x16,0x22,0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]
export const TEXT_CONTINUE = [0x0C,0x18,0x17,0x1D,0x12,0x17,0x1E,0x0E,0xFF,]
export const TEXT_EXIT_COURSE = [0x0E,0x21,0x12,0x1D,0x9E,0x0C,0x18,0x1E,0x1B,0x1C,0x0E,0xFF,]
export const TEXT_CAMERA_ANGLE_R = [0x1C,0x0E,0x1D,0x9E,0x0C,0x0A,0x16,0x0E,0x1B,0x0A,0x9E,0x0A,0x17,0x10,0x15,0x0E,0x9E,0x20,0x12,0x1D,0x11,0x9E,0x1B,0xFF,]

// Camera Options
export const TEXT_LAKITU_MARIO = [0x15,0x0A,0x14,0x12,0x1D,0x1E,0x9E,0xE4,0x9E,0x16,0x0A,0x1B,0x12,0x18,0xFF,]
export const TEXT_LAKITU_STOP = [0x15,0x0A,0x14,0x12,0x1D,0x1E,0x9E,0xE4,0x9E,0x1C,0x1D,0x18,0x19,0xFF,]
export const TEXT_NORMAL_UPCLOSE = [0xE1,0x17,0x18,0x1B,0x16,0x0A,0x15,0xE3,0xE1,0x1E,0x19,0x9F,0x0C,0x15,0x18,0x1C,0x0E,0xE3,0xFF,]
export const TEXT_NORMAL_FIXED = [0xE1,0x17,0x18,0x1B,0x16,0x0A,0x15,0xE3,0xE1,0x0F,0x12,0x21,0x0E,0x0D,0xE3,0xFF,]

// Course Completed Misc Text
export const TEXT_CATCH = [0x0C,0x0A,0x1D,0x0C,0x11,0xFF,]
export const TEXT_CLEAR = [0x0C,0x15,0x0E,0x0A,0x1B,0xFF,]
export const TEXT_HUD_HI_SCORE = [0x11,0x12,0x9E,0x1C,0x0C,0x18,0x1B,0x0E,0xFF,]

// Save Options
export const TEXT_SAVE_AND_CONTINUE = [0x1C,0x0A,0x1F,0x0E,0x9E,0xE5,0x9E,0x0C,0x18,0x17,0x1D,0x12,0x17,0x1E,0x0E,0xFF,]
export const TEXT_SAVE_AND_QUIT = [0x1C,0x0A,0x1F,0x0E,0x9E,0xE5,0x9E,0x1A,0x1E,0x12,0x1D,0xFF,]
export const TEXT_CONTINUE_WITHOUT_SAVING = [0x0C,0x18,0x17,0x1D,0x12,0x17,0x1E,0x0E,0x6F,0x9E,0x0D,0x18,0x17,0x3E,0x1D,0x9E,0x1C,0x0A,0x1F,0x0E,0xFF,]

/**
 * Ending Peach cutscene text.
 */
export const TEXT_FILE_MARIO_EXCLAMATION = [0x16,0x24,0x35,0x2C,0x32,0xF2,0xFF,]
export const TEXT_POWER_STARS_RESTORED = [0x1D,0x2B,0x28,0x9E,0x33,0x32,0x3A,0x28,0x35,0x9E,0x32,0x29,0x9E,0x37,0x2B,0x28,0x9E,0x1C,0x37,0x24,0x35,0x36,0x9E,0x2C,0x36,0x9E,0x35,0x28,0x36,0x37,0x32,0x35,0x28,0x27,0x9E,0x37,0x32,0x9E,0x37,0x2B,0x28,0x9E,0x26,0x24,0x36,0x37,0x2F,0x28,0x3F,0x3F,0x3F,0xFF,]
export const TEXT_THANKS_TO_YOU = [0x3F,0x3F,0x3F,0x24,0x31,0x27,0x9E,0x2C,0x37,0x3E,0x36,0x9E,0x24,0x2F,0x2F,0x9E,0x37,0x2B,0x24,0x31,0x2E,0x36,0x9E,0x37,0x32,0x9E,0x3C,0x32,0x38,0xF2,0xFF,]
export const TEXT_THANK_YOU_MARIO = [0x1D,0x2B,0x24,0x31,0x2E,0x9E,0x3C,0x32,0x38,0x6F,0x9E,0x16,0x24,0x35,0x2C,0x32,0xF2,0xFF,]
export const TEXT_SOMETHING_SPECIAL = [0x20,0x28,0x9E,0x2B,0x24,0x39,0x28,0x9E,0x37,0x32,0x9E,0x27,0x32,0x9E,0x36,0x32,0x30,0x28,0x37,0x2B,0x2C,0x31,0x2A,0x9E,0x36,0x33,0x28,0x26,0x2C,0x24,0x2F,0x9E,0x29,0x32,0x35,0x9E,0x3C,0x32,0x38,0x3F,0x3F,0x3F,0xFF,]
export const TEXT_LISTEN_EVERYBODY = [0x15,0x2C,0x36,0x37,0x28,0x31,0x6F,0x9E,0x28,0x39,0x28,0x35,0x3C,0x25,0x32,0x27,0x3C,0x6F,0xFF,]
export const TEXT_LETS_HAVE_CAKE = [0x2F,0x28,0x37,0x3E,0x36,0x9E,0x25,0x24,0x2E,0x28,0x9E,0x24,0x9E,0x27,0x28,0x2F,0x2C,0x26,0x2C,0x32,0x38,0x36,0x9E,0x26,0x24,0x2E,0x28,0x3F,0x3F,0x3F,0xFF,]
export const TEXT_FOR_MARIO = [0x3F,0x3F,0x3F,0x29,0x32,0x35,0x9E,0x16,0x24,0x35,0x2C,0x32,0x3F,0x3F,0x3F,0xFF,]
export const TEXT_FILE_MARIO_QUESTION = [0x16,0x24,0x35,0x2C,0x32,0xF2,0xFF,]