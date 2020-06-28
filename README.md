# sm64js

## What is this?
This is a work in progress port of the decompilation of the original Nintendo game, Super Mario 64, to native Javascript (No Emulation) (No Web Assembly). This project also required creating a Javascript WebGL port of N64 Fast 3D Renderer originally implemented with OpenGL in C.

## Basic Instructions - TODO
Use yarn or npm to install modules

npm run start or yarn start to launch dev server
npm run build or yarn build to build production code

node serveProduction.js - tool to simply serve the front end code


### Related Projects
[Super Mario 64 Decomp](https://github.com/n64decomp/sm64)
 - Team that decompiled the original Super Mario 64 ROMs into C source code

[Super Mario 64 PC Port](https://github.com/sm64-port/sm64-port)
 - Team that ported the decompiled project to PC

[N64 Fast 3D Renderer](https://github.com/Emill/n64-fast3d-engine)
 - OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
(I had to reimplement this in Javascript and WebGL)


