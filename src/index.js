import { WebGL } from "./graphics/WebGL"
import { Game } from "./game/Game"

let gfx, game

let initialized_game = false

function produce_one_frame() {
    start_frame()
    game.main_loop_one_iteration()

    /// Audio

    end_frame()
}

function start_frame() {
    /// handle input
    /// handle dimensions
}

function end_frame() {}

function main_func() {

    //main_pool_init(pool, start/end);

    gfx = new WebGL(document.querySelector('#gameCanvas')) ///gfx_init

    game = new Game()

    initialized_game = true

    //while (true) { produce_one_frame() }
    

}

console.log("Main Function! Starting Application!")
main_func()

