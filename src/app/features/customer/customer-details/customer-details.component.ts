import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Customer } from '../customer.model';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgentAssignmentComponent } from '../../../agent/agent-assignment/agent-assignment.component';




@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,AgentAssignmentComponent],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css',
})
export class CustomerDetailsComponent implements OnInit {
  selectedCustomer: Customer | undefined;
  showAssignAgent:boolean=false;
  toggleAssignAgent(): void {
    this.showAssignAgent = !this.showAssignAgent;
    console.log(this.showAssignAgent)
  }

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const customerId = +params['id']; // Extract customer ID from route parameters
      console.log('CustomerID:', customerId);
      this.customerService
        .getCustomerById(customerId)
        .subscribe((data: Customer) => {
          this.selectedCustomer = data;
          console.log(this.selectedCustomer);
          // Set the customer details
        });
    });
  }
}
