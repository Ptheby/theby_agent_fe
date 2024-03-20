import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthComponent,SignUpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
