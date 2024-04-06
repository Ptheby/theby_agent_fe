import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,AuthComponent,RouterLink],
})
export class SignUpComponent {
  isLoading = false;
  signupForm: FormGroup;
  user = {
    email: '',
    password: '',
    password_confirmation: '',
    agent: {
      first_name: '',
      last_name: '',
      npn: '',
      state: '',
    },
  };
name: any;

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
    const userData = {
      user: {
        email: this.signupForm.get('user.email')?.value,
        password: this.signupForm.get('user.password')?.value,
        password_confirmation: this.signupForm.get('user.password_confirmation')
          ?.value,
      },
      agent: {
        first_name: this.signupForm.get('agent.first_name')?.value,
        last_name: this.signupForm.get('agent.last_name')?.value,
        npn: this.signupForm.get('agent.npn')?.value,
        state: this.signupForm.get('agent.state')?.value,
        city: this.signupForm.get('agent.city')?.value, // Assuming city is a valid field
      },
    };

    if (userData.user.password === userData.user.password_confirmation) {
      this.authService.signUp(userData).subscribe({
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
