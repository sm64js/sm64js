export const COURSE_NONE = 0

export const COURSE_END = 26

export const COURSE_MAX = COURSE_END - 1
export const COURSE_COUNT = COURSE_MAX
export const COURSE_MIN = COURSE_NONE + 1

export const COURSE_IS_MAIN_COURSE = (course) => { return course >= COURSE_MIN && course <= COURSE_MAX }