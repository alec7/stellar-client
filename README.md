# Stellar Client

The Stellar client is an AngularJS application that allows users to create, use,
and manage their account and wallet.

The client is a webbased front end for https://github.com/stellar/stellard<br>
It stores your secret key encrypted in https://github.com/stellar/stellar-wallet<br>
You can see it in action here: https://launch.gostellar.org

## Setting up your dev server
**TODO:** Script setup with makefile.

```bash

# Install bower and gulp

npm install -g bower
npm install -g gulp

# Install dev dependencies
npm install

# Install app dependencies
bower install

# set your initial (development) configuration

gulp config

# (optional) install phantomjs for automated testing
brew install phantomjs

```

## Starting your dev server

```bash
gulp develop
```

# running yourself
edit the settings in app/scripts/config.js<br>
You can make it point to your own stellard or wallet server
