import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthComponent } from './components/auth/auth/auth.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([
    {
      path: '',
      component: AuthComponent
    }
  ])]
};
