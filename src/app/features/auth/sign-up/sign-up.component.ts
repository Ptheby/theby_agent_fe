import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {

  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
})
export class SignUpComponent {
  isLoading = false;
  signupForm: FormGroup;
  user = {
    email: '',
    password: '',
    password_confirmation: '',
  };

  constructor(private router: Router, private authService: AuthService) {
    this.signupForm = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        password_confirmation: new FormControl('', Validators.required),
      }),
      agent: new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', Validators.required),
        npn: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
      }),
    });
  }
  onSignup() {
    if (this.user.password === this.user.password_confirmation) {
      this.authService.signUp(this.user).subscribe({
        next: (res: any) => {
          console.log('Sign up successful', res);
          // Redirect to login or another page
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.error('Sign up failed', error);
          // Handle error (e.g., show error message)
        },
      });
    } else {
      console.error('Passwords do not match');
      // Handle password mismatch (e.g., show error message)
    }
  }
}
