import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// 20261105: Keep application-wide providers in one configuration object.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};