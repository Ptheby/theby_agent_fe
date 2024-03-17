import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  imports: [ReactiveFormsModule,CommonModule],
})
export class SignUpComponent {
  isLoading = false;
  signupForm: FormGroup;



  constructor () {
    this.signupForm = new FormGroup ({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
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
  onSignup(){
    console.log(this.signupForm.value)
      }

  }


