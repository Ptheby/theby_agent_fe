import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthComponent } from './features/auth/auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';
import { Subscription } from 'rxjs';
import { ViewCustomersComponent } from './features/customer/view-customers/view-customers.component';
import { CustomerDetailsComponent } from './features/customer/customer-details/customer-details.component';
import { CreatePolicyComponent } from './features/policy/create-policy/create-policy.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    AuthComponent,
    NavbarComponent,
    ViewCustomersComponent,
    CustomerDetailsComponent,
    CreatePolicyComponent



  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'theby_agent_fe';
  constructor() {
    if (environment.production) {
      console.log('Production environment');
    } else {
      console.log('Non-production environment');
    }
  }
}
