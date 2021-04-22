# sm64js

## Links

[Main Website: sm64js.com](https://sm64js.com)

[Discord Server](https://discord.gg/7UaDnJt)

## What is this?

This is an ongoing work-in-progress port of the decompilation of original Nintendo game,
Super Mario 64, to native Javascript (no emulation or web assembly).
The project involved creating a Javascript WebGL port of N64 Fast 3D Renderer,
originally implemented with OpenGL in C.
This project also includes the development of online mass multiplayer versions of sm64js
and other custom multiplayer game modes.

## Usage instructions

Install [Node.js](https://nodejs.org/).

### Client-only development

Run the following commands:

- Install dependencies:

```sh
npm install
```

- Build and serve project:

```sh
npm run start
```

- Go to https://localhost:9300 and start developing in your IDE.

When you do code changes, Webpack-Dev-Server will automatically rebuild and reload the page.
You can now start developing against a staging environment at https://sm64js-dev.smmdb.net,
which should be kept up to date.
This staging environment is only set up for client-only development and logins will only work,
if accessed from https://localhost:9300.

Since the certificate is self-signed, you will have to accept your browser warning and continue.
If you want to omit the warning and have a properly signed certificate, please follow these step:

- Install [mkcert](https://github.com/FiloSottile/mkcert)
- Run this commands:

```sh
mkcert -install localhost
```

That's it.
You should now be able to go to https://localhost:9300 and no longer see the warning from your browser.

### Develop against local backend

Do not clone this repository directly.
Instead cloning should be done from the [server repository](https://github.com/sm64js/sm64js-mmo-server)
as a Git submodule.

Serving via Webpack-Dev-Server is not yet supported,
so you will have to do a development build via `npm run build:dev`
every time you do code changes to the client.

## Related Projects

[Super Mario 64 Decomp](https://github.com/n64decomp/sm64)

- Team that decompiled the original Super Mario 64 ROMs into C source code

[Super Mario 64 PC Port](https://github.com/sm64-port/sm64-port)

- Team that ported the decompiled project to PC

[N64 Fast 3D Renderer](https://github.com/Emill/n64-fast3d-engine)

- OpenGL Implementation of a 3D renderer for the Nintendo 64's graphics
  (For this project, it was re-implemented in Javascript and WebGL)
