import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import 'apexcharts/dist/apexcharts.css';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
