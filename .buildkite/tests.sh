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

if [ $? -ne 0 ]; then
  echo "Failed setup dev environment"
  exit
else
  echo "Dev environment ready"
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
echo "*         NPM TEST         *"
echo "*****************************"

npm run test
