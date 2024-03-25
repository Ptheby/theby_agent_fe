import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
onLogout(){};
  constructor(private authService: AuthService) {
this.onLogout= this.authService.logout
  }

}
