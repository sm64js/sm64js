import { AreaInstance as Area } from "../game/Area"
import { save_file_get_star_flags, save_file_get_course_star_count } from "../game/SaveFile"


let sLoadedActNum = 0
let sInitSelectedActNum = 0
let sVisibleStars = 0
let sActSelectorMenuTimer = 0
let sObtainedStars = 0
let sSelectedActIndex = 0

export const geo_file_select_strings_and_menu_cursor = (callContext, node, mtx) => {
    return null
}

export const geo_act_selector_strings = (callContext, node, mtx) => {
    return null
}


/**
 * Initiates act selector values before entering a main course.
 * Also load how much stars a course has, without counting the 100 coin star.
 */
export const lvl_init_act_selector_values_and_stars = () => {
    let /*u8*/ stars = save_file_get_star_flags(Area.gCurrSaveFileNum - 1, Area.gCurrCourseNum - 1)

    sLoadedActNum = 0
    sInitSelectedActNum = 0
    sVisibleStars = 0
    sActSelectorMenuTimer = 0
    sObtainedStars = save_file_get_course_star_count(Area.gCurrSaveFileNum - 1, Area.gCurrCourseNum - 1)

    // Don't count 100 coin star
    if (stars & (1 << 6)) {
        sObtainedStars--
    }

    return false
}

/**
 * Loads act selector button actions with selected act value checks.
 * Also updates objects and returns act number selected after is chosen.
 */
export const lvl_update_obj_and_load_act_button_actions = () => {
    if (sActSelectorMenuTimer >= 11) {
          // If any of these buttons are pressed, play sound and go to course act
        if ((gPlayer3Controller.buttonPressed & (A_BUTTON | START_BUTTON | B_BUTTON | Z_TRIG))) {
            // play_sound(SOUND_MENU_STAR_SOUND_LETS_A_GO, gGlobalSoundSource)
            if (sInitSelectedActNum >= sSelectedActIndex + 1) {
                sLoadedActNum = sSelectedActIndex + 1
            } else {
                sLoadedActNum = sInitSelectedActNum
            }
            gDialogCourseActNum = sSelectedActIndex + 1
        }
    }

    Area.area_update_objects()
    sActSelectorMenuTimer++
    return sLoadedActNum
}


gLinker.lvl_init_act_selector_values_and_stars = lvl_init_act_selector_values_and_stars
gLinker.lvl_update_obj_and_load_act_button_actions = lvl_update_obj_and_load_act_button_actions
