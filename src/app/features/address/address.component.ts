import { Component } from '@angular/core';
import { AgentService } from '../../agent/agent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {


constructor(
    private agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {

        // Set the customer details
        }}
