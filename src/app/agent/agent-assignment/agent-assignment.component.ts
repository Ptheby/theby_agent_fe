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
  assignAgentToCustomer(agentId: any, customerId: any): void {
    this.agentService.claimCustomer(agentId, customerId)
      .subscribe(
        response => {
          // Handle success response
          console.log('Agent assigned successfully:', response);
        },
        error => {
          // Handle error
          console.error('Error assigning agent:', error);
        }
      );
  }


}
