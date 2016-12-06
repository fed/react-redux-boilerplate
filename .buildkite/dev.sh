#!/bin/bash

echo "*****************************"
echo "*     ENVIRONMENT SETUP     *"
echo "*****************************"

source ./.buildkite/environment-setup.sh

echo "*****************************"
echo "*  REMOVE DEPS & BUILD DIR  *"
echo "*****************************"

npm run clean

echo "*****************************"
echo "*    FETCH DEPENDENCIES     *"
echo "*****************************"

yarn install

echo "*****************************"
echo "*         NPM BUILD         *"
echo "*****************************"

npm run build:dev

echo "*****************************"
echo "*        AWS DEPLOY         *"
echo "*****************************"

# Sync local build folder -> s3
aws s3 sync build s3://dev.argendev.com/build --delete

if [ $? -ne 0 ]; then
  echo "Failed aws s3 sync build"
  exit
fi

# Copy local index.html -> s3
aws s3 cp index.html s3://dev.argendev.com/index.html

if [ $? -ne 0 ]; then
  echo "Failed aws s3 cp index.html"
  exit
fi
