# Proj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Tour ui

### install

npm install ngx-ui-tour-core @angular/cdk @angular/animations


### src/app/app.module.ts add:

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { TourModule } from 'ngx-ui-tour-core';

 imports: [
   ..
    BrowserAnimationsModule,
    OverlayModule,
    TourModule.forRoot(), // Initialize the TourModule
    ...
  ],


  ### src/app/app.component.ts add:
import { TourService } from 'ngx-ui-tour-core';

constructor(private tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the tour!',
      title: 'Welcome',
    }]);
  }

  startTour(): void {
    this.tourService.start();
  }

### src/app/app.component.html add:

<button (click)="startTour()">Start Tour</button>

<div id="start.tour" style="margin-top: 50px;">
  <!-- Your content here -->
</div>


### src/styles.css

.ui-tour-step {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}

.ui-tour-step__arrow {
  border-color: rgba(0, 0, 0, 0.9);
}
