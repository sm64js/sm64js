const conversion_table = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "'", ".",
    "☺", "☺", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    "▲", "▼", "◀", "▶", "[A]", "[B]", "[C]", "[Z]", "[R]", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, ",",
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, " ", "-",
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    "/", "the", "you", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    "[%]", "(", ")(", ")", ">", "&", ":", 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
    0x0, 0x0, "!", "%", "?", "『", "』", "~", "…", "$", "★", "×", "・", "☆", "\n", "\0",
]

const _ = (str) => {
    let out = ""
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "[":
                if (str[i + 1] == "A") out += 0x54
                else if (str[i + 1] == "B") out += 0x55
                else if (str[i + 1] == "C") out += 0x56
                else if (str[i + 1] == "Z") out += 0x57
                else if (str[i + 1] == "R") out += 0x58
                else if (str[i + 1] == "%") out += 0xE0
                i += 2;
                break;
            case ")":
                if (str[i + 1] == "(") { out += 0x59; i++; }
                else out += 0x5A
                break;
            case "t":
                if (str[i + 1] == "h" && str[i + 2] == "e") { out += 0xD1; i += 2; }
                else out += conversion_table.indexOf(str[i])
                break;
            case "y":
                if (str[i + 1] == "o" && str[i + 2] == "u") { out += 0xD2; i += 2; }
                else out += conversion_table.indexOf(str[i])
                break;
            default:
                out += conversion_table.indexOf(str[i])
        }
    }
    return out
}

export const TEXT_EMPTY_STRING = _("")
export const TEXT_ZERO = _("0")
export const TEXT_COIN = _("$")
export const TEXT_STAR = _("★")
export const TEXT_COIN_X = _("$×")
export const TEXT_STAR_X = _("★×")
export const TEXT_VARIABLE_X = _("×")
export const TEXT_STAR_DIFF = TEXT_STAR
export const TEXT_UNFILLED_STAR = _("☆")

export const TEXT_4DASHES = _("----")
export const TEXT_NEW = _("NEW")

export const TEXT_PAUSE = _("PAUSE")
export const TEXT_HUD_CONGRATULATIONS = _("CONGRATULATIONS")

/**
 * File Select Text
 */

// Main Screens
export const TEXT_MARIO = _("MARIO") // View Score Menu
export const TEXT_SELECT_FILE = _("SELECT FILE")
export const TEXT_CHECK_FILE = _("CHECK FILE")
export const TEXT_COPY_FILE = _("COPY FILE")
export const TEXT_ERASE_FILE = _("ERASE FILE")
export const TEXT_SOUND_SELECT = _("SOUND SELECT")

export const TEXT_FILE_MARIO_A = _("MARIO A")
export const TEXT_FILE_MARIO_B = _("MARIO B")
export const TEXT_FILE_MARIO_C = _("MARIO C")
export const TEXT_FILE_MARIO_D = _("MARIO D")

// Menu Options
export const TEXT_SCORE = _("SCORE")
export const TEXT_COPY = _("COPY")
export const TEXT_ERASE = _("ERASE")

// Sound Options
export const TEXT_STEREO = _("STEREO")
export const TEXT_MONO = _("MONO")
export const TEXT_HEADSET = _("HEADSET")

// Misc Menu Text
export const TEXT_SAVED_DATA_EXISTS = _("SAVED DATA EXITS") // Misspell
export const TEXT_NO_SAVED_DATA_EXISTS = _("NO SAVED DATA EXISTS")

// Inside a Menu
export const TEXT_RETURN = _("RETURN")
export const TEXT_CHECK_SCORE = _("CHECK SCORE")
export const TEXT_COPY_FILE_BUTTON = _("COPY FILE")
export const TEXT_ERASE_FILE_BUTTON = _("ERASE FILE")

// Score Menu
export const TEXT_HI_SCORE = _("HI SCORE")
export const TEXT_MY_SCORE = _("MY SCORE")
// Score Mario Text ("☺" is the Mario face defined in the US/EU menu char table)
export const TEXT_SCORE_MARIO_A = _("☺A")
export const TEXT_SCORE_MARIO_B = _("☺B")
export const TEXT_SCORE_MARIO_C = _("☺C")
export const TEXT_SCORE_MARIO_D = _("☺D")

// Copy Menu
export const TEXT_COPY_IT_TO_WHERE = _("COPY IT TO WHERE?")
export const TEXT_COPYING_COMPLETED = _("COPYING COMPLETED")
export const TEXT_NO_FILE_TO_COPY_FROM = _("NO EMPTY FILE")

// Erase Menu
export const TEXT_SURE = _("SURE?")
export const TEXT_YES = _("YES")
export const TEXT_NO = _("NO")
export const TEXT_FILE_MARIO_A_JUST_ERASED = _("MARIO A JUST ERASED")

/**
 * Menus Text (Pause, Course Completed)
 */
// Main Courses
export const TEXT_COURSE = _("COURSE")
export const TEXT_MYSCORE = _("MYSCORE")
export const TEXT_CONTINUE = _("CONTINUE")
export const TEXT_EXIT_COURSE = _("EXIT COURSE")
export const TEXT_CAMERA_ANGLE_R = _("SET CAMERA ANGLE WITH R")

// Camera Options
export const TEXT_LAKITU_MARIO = _("LAKITU + MARIO")
export const TEXT_LAKITU_STOP = _("LAKITU + STOP")
// export const TEXT_NORMAL_UPCLOSE = __("(NORMAL)(UP-CLOSE)")
// export const TEXT_NORMAL_FIXED = __("(NORMAL)(FIXED)")

// Course Completed Misc Text
export const TEXT_CATCH = _("CATCH")
export const TEXT_CLEAR = _("CLEAR")
export const TEXT_HUD_HI_SCORE = _("HI SCORE")

// Save Options
export const TEXT_SAVE_AND_CONTINUE = _("SAVE & CONTINUE")
export const TEXT_SAVE_AND_QUIT = _("SAVE & QUIT")
export const TEXT_CONTINUE_WITHOUT_SAVING = _("CONTINUE, DON'T SAVE")

/**
 * Ending Peach cutscene text.
 */
export const TEXT_FILE_MARIO_EXCLAMATION = _("Mario!")
// export const TEXT_POWER_STARS_RESTORED = __("The power of the Stars is restored to the castle...")
// export const TEXT_THANKS_TO_YOU = __("...and it's all thanks to you!")
// export const TEXT_THANK_YOU_MARIO = __("Thank you, Mario!")
// export const TEXT_SOMETHING_SPECIAL = __("We have to do something special for you...")
export const TEXT_LISTEN_EVERYBODY = _("Listen, everybody,")
export const TEXT_LETS_HAVE_CAKE = _("let's bake a delicious cake...")
export const TEXT_FOR_MARIO = _("...for Mario...")
export const TEXT_FILE_MARIO_QUESTION = _("Mario!")