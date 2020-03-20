# super-enigma-fe

React application for viewing detailed information about films with the ability to search and filter.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Download Node.js not lower than version 8.10 and [Yarn](https://yarnpkg.com/). Also install and run on your local machine [data-worker](https://github.com/IlonaMenkui/data-worker) in order to populate your database and then run REST API service [super-enigma-service](https://github.com/IlonaMenkui/super-enigma-service).

### Clone

Clone this repo to your local machine using `https://github.com/IlonaMenkui/super-enigma-fe.git`.

## Installation

Use the package manager Yarn to install all the dependencies of super-enigma-service.

```
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn storybook`

Runs the Storybook for developing UI components in isolation for React.

### `yarn test test`

Launches the test runner in the interactive watch mode.

## Run Docker container with application

First, make sure that [super-enigma-service](https://github.com/IlonaMenkui/super-enigma-service#run-docker-container-with-project-and-mongodb) is running.
Then you need to build a docker image. Use:
```
docker build -t imageURI:image-version work-directory
```
... where ```imageURI``` is the image URI, ```image-version``` is the image version and ```work-directory``` is the work directory.

or just run ...
```
make build-image
```

In the end, run the docker container with application.
```
docker run -P -d --rm --env TMDB_API_KEY=YOURSECRETAPIKEY --name service-name --link db-name:db image-uri:image-version
 docker run -it -p service-name:80 -d --rm --name service-name imageURI:image-version
```
... where ```service-name``` is the service name and so on.

... or run the following command:

```
make run-service
```

## Stop Docker container with application

To stop application use:
```
docker stop service-name
```
... or:
```
make stop-service
```

## Available commands in the Makefile

`build-image` - build an image from a Dockerfile with the service.

`run-service` - run a docker container with the service.

`stop-service` - stop running container with the service.

`image-publish` - push an image with the service to a registry.

## Built With

* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
* [Redux-Saga](https://redux-saga.js.org/) - A library for managing side effects
* [Styled Components](https://styled-components.com/) - A CSS-in-JS library
* [Storybook](https://storybook.js.org/) - An open source tool for developing UI components

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

[MIT license](https://choosealicense.com/licenses/mit/)
