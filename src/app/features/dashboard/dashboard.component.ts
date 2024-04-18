import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { YourCustomersComponent } from '../customer/your-customers/your-customers.component';
import { Subscription } from 'rxjs';
import { Agent } from '../../agent/agent';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [YourCustomersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
currentUser: User | null | undefined;
isAuthenticated = false;
userSub: Subscription = new Subscription();
  agents: Agent[] = [];
  user: User | null = null;
  id = this.user?.id;


  constructor(private authService:AuthService){

  }
  ngOnInit(): void {
    this.userSub = this.authService.getUserInfo().subscribe({
      next: (user: User) => {
        this.isAuthenticated = !!user;
        this.user=user;
      },
      error: (error: any) => {
        console.error('Error fetching user:', error);
      },
    });
   
  }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
