# sm64js

### Links
[Main Website: sm64js.com](https://sm64js.com)

[Discord Server](https://discord.gg/7UaDnJt)

## What is this?
This is an ongoing work-in-progress port of the decompilation of original Nintendo game, Super Mario 64, to native Javascript (no emulation or web assembly). The project involved creating a Javascript WebGL port of N64 Fast 3D Renderer, originally implemented with OpenGL in C.  This project also includes the development of online mass multiplayer versions of sm64js and other custom multiplayer game modes.

## Build instructions - Windows, Mac, or Linux 

### Prerequirements
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


## Build instructions With Docker - Windows, Mac, or Linux

### First install Docker
* Windows - [Install Instructions](https://docs.docker.com/docker-for-windows/install-windows-home/)
* Mac - [Install Instructions](https://docs.docker.com/docker-for-mac/install/)
* Linux - [Install Instructions](https://docs.docker.com/engine/install/#server)

### Run these commands
```bash
# Create and start lightweight docker container with NodeJs
docker run --name mySm64JsServer -dp 80:80 node:13 tail -f /dev/null
# Connect to the docker container's shell
docker exec -it mySm64JsServer /bin/sh

# Install additional prerequisites
apk update && apk add git
# Clone the source code
git clone https://github.com/sm64js/sm64js.git && cd sm64js

# Install node packages, build, and serve
npm run quickstart

```
You should now be able to access the website with the game from a web browser by typing "localhost" into the address bar.


### Related Projects
[Super Mario 64 Decomp](https://github.com/n64decomp/sm64)
 - Team that decompiled the original Super Mario 64 ROMs into C source code

[Super Mario 64 PC Port](https://github.com/sm64-port/sm64-port)
 - Team that ported the decompiled project to PC

[N64 Fast 3D Renderer](https://github.com/Emill/n64-fast3d-engine)
 - OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
(For this project, it was re-implemented in Javascript and WebGL)


