import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import 'apexcharts/dist/apexcharts.css';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
