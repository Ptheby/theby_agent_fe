import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './features/auth/auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,AuthComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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


