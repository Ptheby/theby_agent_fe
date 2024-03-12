import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signupForm = new FormGroup({
    user: new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      password_confirmation: new FormControl(''),
    }),
    agent: new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      npn: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
    }),
  });

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
