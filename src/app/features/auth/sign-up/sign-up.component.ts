import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
isLoading = false
}


//   signupForm = new FormGroup({
//     user: new FormGroup({
//       email: new FormControl('',[Validators.required,Validators.email]),
//       password: new FormControl(['',Validators.required,
//       Validators.minLength(6)]),
//       password_confirmation: new FormControl('',Validators.required),
//     }),
//     agent: new FormGroup({
//       first_name: new FormControl('',Validators.required),
//       last_name: new FormControl('',Validators.required),
//       npn: new FormControl('',Validators.required),
//       state: new FormControl('',Validators.required),
//       city: new FormControl('',Validators.required),
//     }),
//   });

//   onSignup() {
//     console.log(this.signupForm.value);
//   }
//   // onLogin() {
//   //   this.router.navigate(['./auth/login'])
//   // }
// }
