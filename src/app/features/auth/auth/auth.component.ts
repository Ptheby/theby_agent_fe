import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,SignUpComponent,CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  showLoginForm: boolean = true;
  constructor (){}

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}

