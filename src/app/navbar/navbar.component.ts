import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AgentService } from '../agent/agent.service';
import { Agent } from '../agent/agent';
import {YourCustomersComponent } from '../features/customer/your-customers/your-customers.component';
import { User } from '../features/auth/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule,YourCustomersComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userEmail: any | null;
  userSub: Subscription = new Subscription();
  agentSub: Subscription |undefined;
  agents: Agent[] = [];
  user: User | null = null;
  id = this.user?.id;

  private subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private agentService: AgentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userSub = this.authService.getCurrentUser().subscribe({
      next: (user: User) => {
        this.isAuthenticated = !!user;
        this.user = user;
      },
      error: (error: any) => {
        console.error('Error fetching user:', error);
      }
    });
   


    this.subscription = this.agentService.getAllAgents().subscribe({
      next: (data: Agent[]) => {
        this.agents = data;
        console.log(this.agents);
      },
      error: (error: any) => {
        console.error('Error fetching agents:', error);
      },
    });
    // this.getAllAgents();
  }
  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
    if (this.agentSub) {
      this.agentSub.unsubscribe();
    }
  }
  getAllAgents(): void {
    this.agentService.getAllAgents().subscribe({
      next: (agents: Agent[]) => {
        this.agents = agents;
      },
      error: (error: any) => {
        console.error('Error fetching agents:', error);
      },
    });
  }
  navigateToAgentDetails(id: number) {
    this.router.navigate(['/agents', id]);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.logout = this.authService.logout;
  }
toYourCustomers(){
  this.router.navigate(['your-customers'])
}
}
