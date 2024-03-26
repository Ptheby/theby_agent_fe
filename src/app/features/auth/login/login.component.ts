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
    // const userData = {
    //   user: {
    //     email: this.loginForm.get('user.email')?.value,
    //     password: this.loginForm.get('user.password')?.value,

    //   }};
    console.log(
      'this is our data passed to our login method',
      this.loginForm.value
    );
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      console.log(email);
      const password = this.loginForm.value.password;
      console.log(password);

      this.authService.login(email, password).subscribe({
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
}
function login() {
  throw new Error('Function not implemented.');
}
