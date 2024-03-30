import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./features/auth/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth/auth.component').then(
        (c) => c.AuthComponent
      ),
  },
  {
    path: 'add-customer',
    loadComponent: () =>
      import('./features/customer/customer.component').then(
        (c) => c.CustomerComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  // {
  //   path: 'customer-details',
  //   loadComponent: () =>
  //     import('./features/dashboard/dashboard.component').then(
  //       (c) => c.DashboardComponent
  //     ),
  // },
  {
    path: 'customers',
    loadComponent: () =>
      import(
        './features/customer/view-customers/view-customers.component'
      ).then((c) => c.ViewCustomersComponent),
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
];
