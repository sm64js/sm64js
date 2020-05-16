// JavaScript source code
import { WebGL } from "./graphics/WebGL"

const pool = Array(0x165000 / 8 / 4 * 4).fill(0)
let gfx

function main_func() {

    //main_pool_init(pool, start/end);

    gfx = new WebGL(document.querySelector('#gameCanvas')) ///gfx_init
    

}

console.log("Main Function! Starting Application!")
main_func()

