import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent,SignUpComponent,CommonModule,RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  showLoginForm: boolean = true;
  login(){}
  onsignup(){}
  constructor (private authservice: AuthService){}

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}

