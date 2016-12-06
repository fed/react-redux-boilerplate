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
echo "*         NPM TEST         *"
echo "*****************************"

npm test
