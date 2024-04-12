import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { MatDatepicker,  } from '@angular/material/datepicker';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from './auth-token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withInterceptors([authTokenInterceptor])), provideAnimationsAsync('noop'),
  ],
};
