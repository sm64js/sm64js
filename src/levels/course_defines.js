// courses
export const COURSE_NONE =  0  // Course Hub (Castle Grounds)
export const COURSE_BOB  =  1  // Bob Omb Battlefield
export const COURSE_WF   =  2  // Whomp's Fortress
export const COURSE_JRB  =  3  // Jolly Rodger's Bay
export const COURSE_CCM  =  4  // Cool Cool Mountain
export const COURSE_BBH  =  5  // Big Boo's Haunt
export const COURSE_HMC  =  6  // Hazy Maze Cave
export const COURSE_LLL  =  7  // Lethal Lava Land
export const COURSE_SSL  =  8  // Shifting Sand Land
export const COURSE_DDD  =  9  // Dire Dire Docks
export const COURSE_SL   = 10  // Snowman's Land
export const COURSE_WDW  = 11  // Wet Dry World
export const COURSE_TTM  = 12  // Tall Tall Mountain
export const COURSE_THI  = 13  // Tiny Huge Island
export const COURSE_TTC  = 14  // Tick Tock Clock
export const COURSE_RR   = 15  // Rainbow Ride

// bonus courses
export const COURSE_BITDW    = 16  // Bowser in the Dark World
export const COURSE_BITFS    = 17  // Bowser in the Fire Sea
export const COURSE_BITS     = 18  // Bowser in the Sky
export const COURSE_PSS      = 19  // Princess's Secret Slide
export const COURSE_COTMC    = 20  // Cavern of the Metal Cap
export const COURSE_TOTWC    = 21  // Tower of the Wing Cap
export const COURSE_VCUTM    = 22  // Vanish Cap Under the Moat
export const COURSE_WMOTR    = 23  // Winged Mario over the Rainbow
export const COURSE_SA       = 24  // Secret Aquarium
export const COURSE_CAKE_END = 25  // The End (Cake Scene)

export const COURSE_MIN   = 1
export const COURSE_MAX   = 26
export const COURSE_COUNT = 26

export const COURSE_STAGES_MAX   = 15
export const COURSE_STAGES_COUNT = 15
export const COURSE_BONUS_STAGES = 16


const define_course = (id, cameras) => {
    return { name, level, course, short, texture, reaches, echo1, echo2, echo3, music, camera }
}

 // * Cutscene Digits:
 // *      0: Lakitu flies away after the dance
 // *      1: The camera rotates around mario
 // *      2: The camera goes to a closeup of mario
 // *      3: Bowser keys and the grand star
 // *      4: Default, used for 100 coin stars, 8 red coin stars in bowser levels, and secret stars

export const course_dance_cutscenes = [
    [4,4,4,4,4,4,4],
    [0,0,0,2,2,2,4],
    [0,0,0,0,2,0,4],
    [2,2,2,2,2,2,4],
    [0,0,2,2,0,0,4],
    [2,2,2,2,2,2,4],
    [2,2,2,2,2,2,4],
    [2,1,2,1,2,1,4],
    [2,0,2,2,2,2,4],
    [2,2,2,2,2,2,4],
    [0,2,0,2,0,2,4],
    [2,2,1,0,2,2,4],
    [0,0,0,0,0,0,4],
    [1,1,1,1,2,1,4],
    [2,2,2,2,2,2,4],
    [0,0,0,0,0,0,4],
    [3,4,4,4,4,4,4],
    [3,4,4,4,4,4,4],
    [3,4,4,4,4,4,4],
    [2,4,4,4,4,4,4],
    [4,4,4,4,4,4,4],
    [0,4,4,4,4,4,4],
    [2,4,4,4,4,4,4],
    [0,4,4,4,4,4,4],
    [2,4,4,4,4,4,4],
    [4,4,4,4,4,4,4],
]

export const COURSE_CAP_COURSES = COURSE_COTMC
export const COURSE_IS_MAIN_COURSE = (course) => { return course >= COURSE_MIN && course <= COURSE_MAX }

