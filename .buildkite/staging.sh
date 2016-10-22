#!/bin/bash

echo "*****************************"
echo "*     ENVIRONMENT SETUP     *"
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

# Check if Yarn is installed
export PATH="$HOME/.yarn/bin:$PATH"

which -s yarn
if [[ $? != 0 ]] ; then
  echo "Yarn is not installed."
  curl -o- -L https://yarnpkg.com/install.sh | bash
else
  echo "Yarn is already installed."
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
  echo "Development environment ready"
fi

echo "*****************************"
echo "* REMOVE DEPS AND BUILD DIR *"
echo "*****************************"

npm run clean

echo "*****************************"
echo "*    FETCH NODE MODULES     *"
echo "*****************************"

yarn install

echo "*****************************"
echo "*         NPM BUILD         *"
echo "*****************************"

npm run build:staging

echo "*****************************"
echo "*        AWS DEPLOY         *"
echo "*****************************"

# Sync local build folder -> s3
aws s3 sync build s3://staging.argendev.com/build --delete

if [ $? -ne 0 ]; then
  echo "Failed aws s3 sync build"
  exit
fi

# Copy local index.html -> s3
aws s3 cp index.html s3://staging.argendev.com/index.html

if [ $? -ne 0 ]; then
  echo "Failed aws s3 cp index.html"
  exit
fi
