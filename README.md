# sm64js

### Links
[Main Website: sm64js.com](https://sm64js.com)

[Discord Server](https://discord.gg/7UaDnJt)

## What is this?
This is a fork of sm64js working to add all the minor things the other guys aren't woried about.

## Build instructions - Windows, Mac, or Linux

### Prerequisites
* Node.js

### Run these commands
```bash
# Clone the source code
git clone https://github.com/sm64js/sm64js.git && cd sm64js
# Install node packages
npm install
# Launch wepback dev server
npm run start
```

You should now be able to access the website with the game from a web browser by typing "localhost" into the address bar.

## Neat gLinker commands you can run in the console
Because of a good portion of the game existing under the gLinker object within the window object, you can manipulate these portions of code to make certain things happen.

Drain the Castle Grounds moat:
```js
const gEnvironmentRegions = gLinker.ObjectListProcessor.gEnvironmentRegions
gEnvironmentRegions[6] = -800
gEnvironmentRegions[12] = -800
```

Access Mario's state:
```js
gLinker.LevelUpdate.gMarioState.key = value
```
With this, you can make Mario fly, go fast, and a lot of other things.

### Related Projects
[Super Mario 64 Decomp](https://github.com/n64decomp/sm64)
 - Team that decompiled the original Super Mario 64 ROMs into C source code

[Super Mario 64 PC Port](https://github.com/sm64-port/sm64-port)
 - Team that ported the decompiled project to PC

[N64 Fast 3D Renderer](https://github.com/Emill/n64-fast3d-engine)
 - OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
(For this project, it was re-implemented in Javascript and WebGL)


