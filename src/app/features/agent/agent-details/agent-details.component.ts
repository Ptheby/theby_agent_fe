import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { CustomerService } from '../../customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-details',
  standalone: true,
  imports: [],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.css',
})
export class AgentDetailsComponent implements OnInit {
  selectedAgent: Agent | undefined;

  constructor(
    private agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const agentId = +params['id']; // Extract agent ID from route parameters
      console.log('agentID:', agentId);
      this.agentService
        .getAgentById(agentId)
        .subscribe((data: Agent) => {
          this.selectedAgent = data;
          console.log(this.selectedAgent)
          // Set the customer details
        });
    });
  }
}





