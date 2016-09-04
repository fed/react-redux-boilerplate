#!/bin/bash

echo "*****************************"
echo "*     SETUP ENVIRONMENT     *"
echo "*****************************"

# Check if Homebrew installed
which -s brew
if [[ $? != 0 ]] ; then
    echo "Homebrew is not installed."
    echo "Installing Homebrew..."
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
    echo "Homebrew is already installed."
    echo "Updating Homebrew..."
    brew update
fi

# Check if Node is installed
which -s npm
if [[ $? != 0 ]] ; then
  echo "Node is not installed."
  brew install node
else
  echo "Node is already installed."
fi

# Check if awscli is installed
which -s aws
if [[ $? != 0 ]] ; then
    echo "awscli is not installed."
    echo "Installing awscli..."
    brew install awscli
else
  echo "awscli is already installed"
fi

if [ $? -ne 0 ]; then
  echo "Failed setup deployment environment"
  exit
else
  echo "Deployment environment ready"
fi

echo "*****************************"
echo "*        NPM INSTALL        *"
echo "*****************************"

npm install

echo "*****************************"
echo "*        NPM CLEAN          *"
echo "*****************************"

npm run clean

echo "*****************************"
echo "*         NPM BUILD         *"
echo "*****************************"

npm run build:dev

echo "*************************"
echo "*       AWS DEPLOY      *"
echo "*************************"

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
