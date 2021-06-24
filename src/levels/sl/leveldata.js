#include <ultra64.h>

import {
} from "../../include/gbi"
#include "sm64.h"
#include "surface_terrains.h"
#include "moving_texture_macros.h"
#include "level_misc_macros.h"
#include "macro_preset_names.h"
#include "special_preset_names.h"
#include "textures.h"
#include "dialog_ids.h"

#include "make_const_nonconst.h"
#include "levels/sl/texture.inc.c"
#include "levels/sl/areas/1/1/model.inc.c"
#include "levels/sl/areas/1/2/model.inc.c"
#include "levels/sl/areas/1/3/model.inc.c"
#include "levels/sl/areas/1/4/model.inc.c"
#include "levels/sl/areas/1/5/model.inc.c"
#include "levels/sl/areas/1/6/model.inc.c"
#include "levels/sl/areas/1/7/model.inc.c"
#include "levels/sl/snow_mound/model.inc.c"
#include "levels/sl/unused_cracked_ice/model.inc.c"
#include "levels/sl/unused_ice_shard/model.inc.c" // Used in the unused behavior when ground pounding the cracked ice show in the above model.
#include "levels/sl/areas/2/1/model.inc.c"
#include "levels/sl/areas/2/2/model.inc.c"
#include "levels/sl/areas/2/3/model.inc.c"
#include "levels/sl/areas/2/4/model.inc.c"
#include "levels/sl/areas/1/collision.inc.c"
#include "levels/sl/areas/1/macro.inc.c"
#include "levels/sl/snow_mound/collision.inc.c"
#include "levels/sl/unused_cracked_ice/collision.inc.c"
#include "levels/sl/areas/2/collision.inc.c"
#include "levels/sl/areas/2/macro.inc.c"
#include "levels/sl/areas/1/movtext.inc.c"

// 2021-06-03 17:01:39 -0400 (Convert.rb 2021-05-31 18:22:11 -0400)