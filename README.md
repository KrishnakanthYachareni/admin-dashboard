# AiUniversityDemoApp

### Run Build
`ng build --prod --base-href "https://<GitUsername>.github.io/<reponame>/"`

### Deploy to gh-pages:
`npx angular-cli-ghpages — dir=dist/<projectname>` Project name can be found at defaultProject in `angular.json`

### Libraries:
1. `ng add @angular/material`
2. `npm i highcharts-angular --save`
3. `npm i highcharts --save`
4. `npm i @angular/flex-layout @angular/cdk --save`

### Structure
1. `ng g c layouts/default`
2. `ng g m layouts/default`
3. `ng g c modules/dashboard`
4. `ng g c shared/components/header`
5. `ng g c shared/components/footer`
6. `ng g c shared/components/sidebar`
7. `ng g m shared/shared`
8. `ng g c modules/posts`
9. `ng g c shared/widgets/area`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

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
