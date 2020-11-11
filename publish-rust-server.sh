#!/bin/bash
set -e

GIT_HASH=$(git rev-parse HEAD)
echo "using git hash $GIT_HASH"

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker pull $(grep -ioP '(?<=^from)\s+\S+' rust-server/Dockerfile)
docker pull $(grep -ioP '(?<=^from)\s+\S+' rust-server/DockerfileBuild)

docker pull sm64js/sm64js-build || true
docker build --cache-from=sm64js/sm64js-build -t sm64js/sm64js-build:latest -f ./rust-server/DockerfileBuild .
docker push sm64js/sm64js-build:latest
docker tag sm64js/sm64js-build sm64js/sm64js-build:$GIT_HASH
docker push sm64js/sm64js-build:$GIT_HASH

docker pull sm64js/sm64js || true
docker build --cache-from=tarnadas/sm64js -t sm64js/sm64js -f ./rust-server/Dockerfile .
docker push sm64js/sm64js:latest
docker tag sm64js/sm64js sm64js/sm64js:$GIT_HASH
docker push sm64js/sm64js:$GIT_HASH
