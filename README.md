# Colonial

This is a Multi-module application. Each sub-module is set up with routing.
Each module is lazily loaded into the main module.
Each module routes to its components internally, using it's own routing module.
For more information see:
https://angular.io/guide/lazy-loading-ngmodules

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Base HREF and servers

Please note that since we're "mounting" angular applications into subfolders for
Colonial, having ng be able to support being put somewhere other than / becomes
important.

Production builds require `--base-href` and `--deploy-url` to be set properly.
Please note that trailing slashes in base-href are *critical*. These have been
set in the npm build target `build:prod`.

The build system dovetails cleanly into Docker and the `nginx-angular-base`
image in the `docker` repo. Required build args are `BASE_HREF` and `API_HREF`,
pointing to the base-href and the mountpoint for the api proxy, respectively. An
example should be in the docker-compose.yml file and the pipelines declaration.

For instance:

* BASE_HREF: /quote
* API_HREF: /quote/api

### HTTP Interception

Since the app isn't programmatically aware of its location (shame!), we have to
do hijinks in order to allow it to be mounted anywhere. The `HttpInterceptor`
Angular class allows this to happen. It's implemented in
`src/app/common/utils/base-href-interceptor.ts`. See its implementation for
details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
