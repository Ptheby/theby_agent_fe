import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthComponent,
    SignUpComponent,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginError=false;
  email = '';
  password = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {
    // this.loginForm = new FormGroup({
    //   user: new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(6),
    //     ]),
    // })});
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe({
        next: (res: any) => {
          console.log('Logged in with token:', res.token);
          this.authService.setToken(res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (loginError: any) => {
          console.error('Login Error', loginError);
          this.loginError = true; // Set the flag to true
        },
      });
    }
  }
}
function login() {
  throw new Error('Function not implemented.');
}
