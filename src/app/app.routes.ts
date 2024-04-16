import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
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
    // canActivate:[AuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },

  {
    path: 'customers',
    loadComponent: () =>
      import(
        './features/customer/view-customers/view-customers.component'
      ).then((c) => c.ViewCustomersComponent),
  },
  {
    path: 'customers/:id',
    loadComponent: () =>
      import(
        './features/customer/customer-details/customer-details.component'
      ).then((c) => c.CustomerDetailsComponent),
  },
  {
    path: 'agent-assignment',
    loadComponent: () =>
      import('./agent/agent-assignment/agent-assignment.component').then(
        (m) => m.AgentAssignmentComponent
      ),
  },
  {
    path: 'customers/:id/create-policy',
    loadComponent: () =>
      import('./features/policy/create-policy/create-policy.component').then(
        (c) => c.CreatePolicyComponent
      ),
  },
  {
    path: 'customers/:id/policy/:id',
    loadComponent: () =>
      import('./features/policy/policy-details/policy-details.component').then(
        (c) => c.PolicyDetailsComponent
      ),
  },
  {
    path: 'your-customers',
    loadComponent: () =>
      import('./features/customer/your-customers/your-customers.component').then(
        (m) => m.YourCustomersComponent
      ),
    },

  {
    path: 'agents/:id',
    loadComponent: () =>
      import('./agent/agent-details/agent-details.component').then(
        (c) => c.AgentDetailsComponent
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: '/login' },
];
