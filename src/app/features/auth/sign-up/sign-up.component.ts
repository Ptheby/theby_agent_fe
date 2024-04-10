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
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,AuthComponent,RouterLink
  ]})
export class SignUpComponent {
  states:string[]=[   'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
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
      phone:''
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
        npn: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
        state: new FormControl('', Validators.required),
        phone: new FormControl('',Validators.required)
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
      phone: this.signupForm.get('agent.phone')?.value,
        // Assuming city is a valid field
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
