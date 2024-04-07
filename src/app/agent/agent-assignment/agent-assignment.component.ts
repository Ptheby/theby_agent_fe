import { Component } from '@angular/core';
import { AgentService } from '../agent.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agent-assignment',
  standalone: true,
  imports: [],
  templateUrl: './agent-assignment.component.html',
  styleUrl: './agent-assignment.component.css'
})
export class AgentAssignmentComponent {



  constructor(
    private agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router,
    private routerLink: RouterLink
  ) {}



}
