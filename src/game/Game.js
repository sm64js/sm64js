import { level_script_entry } from "../levels/main_entry/entry"
import { LevelCommandsInstance as LevelCommands } from "../engine/LevelCommands"
import * as Gbi from "../include/gbi"

class Game {
    constructor() {
        this.main_loop_init() /// thread5_game_loop_init
    }

    attachInterfaceToGfxProcessor(func) {
        this.send_display_list = func
    }

    main_loop_init() {

        //setup_game_memory();

        //init_controllers();

        //save_file_load_all();

        //set_vblank_handler(2, &gGameVblankHandler, &gGameVblankQueue, (OSMesg) 1);

        // point levelCommandAddr to the entry point into the level script data.
        LevelCommands.start_new_script(level_script_entry)

        //play_music(SEQ_PLAYER_SFX, SEQUENCE_ARGS(0, SEQ_SOUND_PLAYER), 0);
        //set_sound_mode(save_file_get_sound_mode());

    }

    main_loop_one_iteration() {

        ///Read Data from Controllers

        // Audio game loop Tick

        this.config_gfx_pool()

        // process controller inputs

        LevelCommands.level_script_execute()

        this.display_and_vsync()

    }

    create_task_structure() {
        ////Seems may not be necessary for JS, not creating a task, just sending DisplayList
    }

    end_master_display_list() {
        Gbi.gSPEndDisplayList(this.gDisplayList)
        this.create_task_structure()
    }

    config_gfx_pool() {
        /// some stuff with gfx pools tasks, display lists, probably not necessary for JS
        this.gDisplayList = []
    }

    rsp_init() {
        Gbi.gSPClearGeometryMode(this.gDisplayList, Gbi.G_SHADE | Gbi.G_SHADING_SMOOTH | Gbi.G_CULL_BOTH | Gbi.G_FOG | Gbi.G_LIGHTING | Gbi.G_TEXTURE_GEN | Gbi.G_TEXTURE_GEN_LINEAR | Gbi.G_LOD)
        Gbi.gSPSetGeometryMode(this.gDisplayList, Gbi.G_SHADE | Gbi.G_SHADING_SMOOTH | Gbi.G_CULL_BACK | Gbi.G_LIGHTING)
        Gbi.gSPNumLights(this.gDisplayList, 1)
        Gbi.gSPTexture(this.gDisplayList, 0, 0, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF)
    }

    rdp_init() {
        Gbi.gDPSetCombineMode(this.gDisplayList, Gbi.G_CC_SHADE)
        Gbi.gDPSetTextureFilter(this.gDisplayList, Gbi.G_TF_BILERP)
        Gbi.gDPSetRenderMode(this.gDisplayList, Gbi.G_RM_OPA_SURF_SURF2);
        Gbi.gDPSetCycleType(this.gDisplayList, Gbi.G_CYC_FILL)
    }

    init_render_image() {
        this.rsp_init()
        this.rdp_init()
    }

    display_and_vsync() {
        this.send_display_list(this.gDisplayList)
        if (this.D_8032C6A0_vsyncFunc) {
            this.D_8032C6A0_vsyncFunc.call(this.D_8032C6A0_classObject)
            this.D_8032C6A0_vsyncFunc = null
        }
    }
}

export const GameInstance = new Game()