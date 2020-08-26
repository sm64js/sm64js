# sm64js

## Project Website
[sm64js.com](https://sm64js.com)

## What is this?
This is a work in progress port of the decompilation of the original Nintendo game, Super Mario 64, to native Javascript (No Emulation) (No Web Assembly). This project also required creating a Javascript WebGL port of N64 Fast 3D Renderer originally implemented with OpenGL in C.

## Build instructions - Windows, Mac, or Linux

### First install Docker
* Windows - [Install Instructions](https://docs.docker.com/docker-for-windows/install-windows-home/)
* Mac - [Install Instructions](https://docs.docker.com/docker-for-mac/install/)
* Linux - [Install Instructions](https://docs.docker.com/engine/install/#server)

### Run these commands
```bash
# Create and start lightweight docker container with NodeJs
docker run --name mySm64JsServer -dp 80:80 node:13-alpine tail -f /dev/null
# Connect to the docker container's shell
docker exec -it mySm64JsServer /bin/sh

# Install additional prerequisites
apk update && apk add python3 git
# Clone the source code
git clone https://github.com/sm64js/sm64js.git && cd sm64js

# Install node packages
npm install
# Compile and package javascript, css, html components
npm run build
# Start the web server
npm run serveProduction
```
You should now be able to access the website with the game from a web browser by typing "localhost" into the address bar


### Related Projects
[Super Mario 64 Decomp](https://github.com/n64decomp/sm64)
 - Team that decompiled the original Super Mario 64 ROMs into C source code

[Super Mario 64 PC Port](https://github.com/sm64-port/sm64-port)
 - Team that ported the decompiled project to PC

[N64 Fast 3D Renderer](https://github.com/Emill/n64-fast3d-engine)
 - OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
(I had to reimplement this in Javascript and WebGL)


