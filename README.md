
# Introduction
The sample application features an Phaser game build on top of Angular2.

A Docker-file is used so you can run the commands inside the container if you wish to.


## Quick Start

# Initialize project
`docker-compose build`
`docker-compose up` (this will automaticly run `yarn serve`)
`nodemon src/server/server.js` (only in dev mode - it wil update when a server side script is saved)

# Install dependencies
yarn install

# Start development
yarn serve

# Distribution build
yarn build

# Serve distribution build
yarn serve:dist

# 
# Open localhost:8080 and enjoy the show
# Use localhost:3000 and enjoy the server
```

# Features

## Tech Stack
The repo uses the following technologies:

* Docker
* Angular2
* Webpack
* Typescript2
* Angular2 Material
* Redux store with Ng2-Redux
* SASS for styling
* Code checking with Tslint and Codelyzere

## Build Optimizations
The build process performs the following optimizations:

* Performs Ahead-of-Time Angular2 template compilation
* Webpack does tree shaking with ES2016 modules
* Bundles application into `app`, `vendor` and `polyfills` bundles
* Minifys/Uglify bundles
* Creates gzipped versions of bundles/asset files

# TODO

* Testing
* Deployment/Staging