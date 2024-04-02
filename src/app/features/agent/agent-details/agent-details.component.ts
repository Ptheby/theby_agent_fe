import { Component } from '@angular/core';
import { CustomerService } from '../../customer/customer.service';

@Component({
  selector: 'app-agent-details',
  standalone: true,
  imports: [],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.css'
})
export class AgentDetailsComponent {



  constructor(private customerService: CustomerService) {
    
  }
}
