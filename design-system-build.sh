#!/usr/bin/env bash

# Run build commands
mkdir -p _dist/dist/assets
cp -r public/dist/assets/ _dist/dist/

# Copy favicon
cp public/favicon.ico _dist/favicon.ico
