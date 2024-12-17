#!/usr/bin/env bash

# Run build commands
source ~/.nvm/nvm.sh && nvm use && npm install && npm run build
mkdir -p _dist/dist/assets
cp -r public/dist/assets/. _dist/dist/assets/

# Copy favicon
cp public/favicon.ico _dist/favicon.ico
