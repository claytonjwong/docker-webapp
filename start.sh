#!/usr/bin/env bash
set -Eexo pipefail

# install
rm -r ./node_modules
npm i

# start app
docker-compose up
