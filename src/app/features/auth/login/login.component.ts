import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthComponent,SignUpComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: string = "";
password: string= "";

constructor(private authService: AuthService, private router: Router) {}

login() {
  this.authService.login(this.email, this.password).subscribe({
    next: (res: any) => {
      console.log('Logged in with token:', res.token);
      this.authService.setToken(res.token);
      this.router.navigate(['/dashboard']);
    },
    error: (error: any) => {
      console.error('Login Error', error);
    },
  });
}
}
