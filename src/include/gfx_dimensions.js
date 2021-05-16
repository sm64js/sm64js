import { SCREEN_WIDTH, SCREEN_HEIGHT } from "./config"

export const GFX_DIMENSIONS_FROM_LEFT_EDGE = (v) => {
    return v;
}

export const GFX_DIMENSIONS_FROM_RIGHT_EDGE = (v) => {
    return SCREEN_WIDTH - v;
}

export const GFX_DIMENSIONS_RECT_FROM_LEFT_EDGE = (v) => {
    return v;
}

export const GFX_DIMENSIONS_RECT_FROM_RIGHT_EDGE = (v) => {
    return SCREEN_WIDTH - v;
}

export const GFX_DIMENSIONS_ASPECT_RATIO = () => {
    return 4.0 / 3.0;
}

export const GFX_DIMENSIONS_FULL_RADIUS = () => {
    return SCREEN_HEIGHT * (GFX_DIMENSIONS_ASPECT_RATIO > 1 ? GFX_DIMENSIONS_ASPECT_RATIO : 1);
}