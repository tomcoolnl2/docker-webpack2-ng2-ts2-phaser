# angular2-webpack2-typescript2
Simple Angular2 starter using Webpack2/Typescript2/Material2

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
The sample application features Angular2-Material demos

A Docker-file is used so you can run the commands inside the container if you wish to.

* For MacOS, please use `Docker for Mac`
* For Windows, please use `Docker for Windows`
* For Linux, just use `Docker` :)

## Quick Start
```bash
# Clone repo and enter folder
git clone https://github.com/spock123/angular2-webpack2-typescript2.git
cd angular2-webpack2-typescript2

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
* Creates ServiceWorker and AppCache (booh!) files with bundled assets as static cache


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



# Acknowledgements

* <a href="https://github.com/gdi2290" target="_new">Patrick Stableton</a>
* <a href="https://github.com/AngularClass/angular2-webpack-starter" target="_new">Angular2-Webpack-Starter</a>
* <a href="https://github.com/angular-redux/ng2-redux" target="new">Ng2-Redux</a>
* <a href="https://github.com/brandonroberts/angular2-router-loader">Angular2-router-loader</a>
* <a href ="https://github.com/reactjs/redux">Redux</a>
* <a href="https://github.com/angular/material2">Angular2 Material</a># docker-webpack2-ng2-ts2-phaser
