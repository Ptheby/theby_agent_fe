import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from './auth-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptors([authTokenInterceptor])),
  ]
};
