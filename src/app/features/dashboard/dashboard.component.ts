import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { YourCustomersComponent } from '../customer/your-customers/your-customers.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [YourCustomersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
currentUser: User | null | undefined;

  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
      // this.currentUser= this.authService.getAgentById();
      // console.log(this.currentUser)
  }
}
