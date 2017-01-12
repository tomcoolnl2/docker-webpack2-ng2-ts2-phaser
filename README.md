
# Table of Contents
* [Introduction](#introduction)
   * [Quick Start Docker](#quick-start)
* [Features](#features)
  * [Tech Stack] (#tech-stack)
  * [Application] (#application)
  * [Build Optimizations] (#build-optimizations)
* [Getting Started](#getting-started)
  * [Dependencies] (#dependencies)
* [Commands] (#commands)
   * [Development] (#development)
   * [Build] (#build)
   * [Serve Production Build] (#serve-production-build)
   * [Linting] (#linting)
* [Omissions] (#omissions)
* [Acknowledgements] (#acknowledgements)


# Introduction
The sample application features an Phaser game build on top of Angular2.

A Docker-file is used so you can run the commands inside the container if you wish to.


## Quick Start

# Initialize project
yarn  clean

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
```


# Features

## Tech Stack
The repo uses the following technologies:

* Docker
* Angular
* Webpack
* Typescript
* Angular2 Material
* Redux store with Ng2-Redux
* SASS for styling
* Code checking with Tslint and Codelyzer

## Application
The demo application showcases:

* Angular module composition using shared modules.
* Angular module routing
* Angular2-Material components gathered in one shared module
* Application demos the material components as of current version
* Uses ServiceWorker or AppCache for static caching
* AoT template compilation
* Lazy loading module

## Build Optimizations
The build process performs the following optimizations:

* Performs Ahead-of-Time Angular2 template compilation
* Webpack does tree shaking with ES2016 modules
* Bundles application into `app`, `vendor` and `polyfills` bundles
* Minifys/Uglify bundles
* Creates gzipped versions of bundles/asset files


# Getting Started
## Dependencies

* `node` and `npm/yarn`
* Ensure you're running the latest versions Node (v.4 or higher)  and NPM (v.3 or higher), or yarn

# Commands

## Dependencies
Update dependencies if you add/remove packages in package.json
```bash
yarn install
```

## Development
Serve development build with live reload on `localhost:8080`
```bash
yarn serve
```

## Build
Create production build in `dist/public`
```bash

# Production build with AoT compilation
yarn build

```

## Serve production build
Serve the production built application on `localhost:8080`
```bash
yarn serve:dist
```

## Linting
Check your coding styles with with TsLint and Codelyzer:

```bash
yarn tslint
```

# Omissions
Vital parts of a real world application setup have been omitted due to various reasons:

* Testing
* Deployment/Staging