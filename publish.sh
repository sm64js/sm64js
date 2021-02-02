#!/bin/bash
set -e

GIT_HASH=$(git rev-parse HEAD)
echo "using git hash $GIT_HASH"

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker pull sm64js/sm64js-assets || true
docker build --cache-from=sm64js/sm64js-assets -t sm64js/sm64js-assets:latest -f ./DockerfileAssets .
docker push sm64js/sm64js-assets:latest
docker tag sm64js/sm64js-assets sm64js/sm64js-assets:$GIT_HASH
docker push sm64js/sm64js-assets:$GIT_HASH
