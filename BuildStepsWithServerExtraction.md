### Run these commands
```bash
# Create and start lightweight docker container with NodeJs
docker run --name mySm64JsServer -dp 80:80 node:13-alpine tail -f /dev/null
# Connect to the docker container's shell
docker exec -it mySm64JsServer /bin/sh

# Install additional prerequisites
apk update && apk add gcc libc-dev python3 bash git
# Clone the source code
git clone https://github.com/sm64js/sm64js.git && cd sm64js
# Compile ROM extraction tools written in C
gcc -I extractTools -DMIO0_STANDALONE extractTools/libmio0.c -o extractTools/mio0
gcc -I extractTools -DN64GRAPHICS_STANDALONE extractTools/n64graphics.c extractTools/utils.c -o extractTools/n64graphics
gcc -I extractTools extractTools/skyconv.c extractTools/n64graphics.c extractTools/utils.c -o extractTools/skyconv
# Install node packages
npm install
# Compile and package javascript, css, html components
npm run build
# Start the web server
npm run serveProduction
```
You should now be able to access the website with the game from a web browser by typing "localhost" into the address bar
