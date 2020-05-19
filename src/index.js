import { WebGL } from "./graphics/WebGL"
import { Game } from "./game/Game"

let gfx, game

let initialized_game = false

const produce_one_frame = () => {
    start_frame()
    game.main_loop_one_iteration()

    /// Audio

    end_frame()
}

const start_frame = () => {
    /// handle input
    /// handle dimensions
}

const end_frame = () => {}

const main_func = () => {

    //main_pool_init(pool, start/end);

    gfx = new WebGL(document.querySelector('#gameCanvas')) ///gfx_init

    game = new Game()

    initialized_game = true

    const n_frames = 93 //78
    for (let i = 0; i < n_frames; i++) { produce_one_frame() }
    

}

console.log("Starting Application!")
main_func()

