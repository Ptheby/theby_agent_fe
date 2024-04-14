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
import { MatDatepickerModule, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


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
