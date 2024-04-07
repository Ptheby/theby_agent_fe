import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AgentService } from '../agent/agent.service';
import { Agent } from '../agent/agent';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userEmail: any | null;
  userSub: Subscription = new Subscription();
  agents: Agent[] = [];
  private subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private agentService: AgentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
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
    if (this.subscription) {
      this.subscription.unsubscribe();
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
}
