# Phobos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

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

## Basic Features:

- The website should load and index some randomly generated or selected test data.
- Your test data can be anything you want but should be at least several thousand records.
- The app should allow the user to enter keywords and find your indexed content.
- Your app should also feature a responsive design to ensure it renders well for a variety of screen sizes and resolutions.

## Advanced Features:

- Stemming should be used – for example, when searching for “engineer”, the search should also return results for “engineering”, -“engineers”, and “engineered”.
- Spell checking should present corrected search terms for user misspellings.
- Related search terms could be displayed when a user has searched, suggesting alternate keywords related to what they’ve already searched for.
- Auto-complete should suggest search terms as the user types in the search box.
- Attach meta-data to your indexed records and provide faceting options for the user to filter by.

## To Start

Modify these to add the collection

- Solr
  - Make sure the JAVA_PATH environment variable is set to a valid JRE 1.8+ exe
  - Open a command prompt in the /solr directory
  - run './bin/solr.cmd start -e cloud'
  - At the prompts, press enter (if one of the ports is used, enter a new port), until you see the message "SolrCloud example running, please visit: http://localhost:8983/solr"
