import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'sign_up', loadComponent: () => import('./features/auth/sign-up/sign-up.component').then((c)=>
  c.SignUpComponent)
},

];



