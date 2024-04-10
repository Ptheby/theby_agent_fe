import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { AgentService } from '../../../agent/agent.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  standalone:true
})
export class CustomerDetailsComponent implements OnInit {
  selectedCustomer: Customer | undefined;
  customerId:any;
  agentId:any;
  showAssignAgent: boolean = false;
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const customerId = +params['id']; // Extract customer ID from route parameters
      console.log('CustomerID:', customerId);
      this.customerService.getCustomerById(customerId).subscribe((data: Customer) => {
        this.selectedCustomer = data;
        console.log(this.selectedCustomer);
        // Set the customer details

        // Now that you have the customer ID, you can call the method to assign the agent

      });
    });
  }

  toggleAssignAgent(): void {
    this.showAssignAgent = !this.showAssignAgent;
    console.log(this.showAssignAgent);
  }

  deleteCustomer(customerId: any): void {
    this.customerService.deleteCustomer(customerId).subscribe({
      next: () => {
        this.customers = this.customers.filter((customer) => customer.id !== customerId);
        this.router.navigate(['/customers']);
      },
      error: (error) => {
        console.error('Error deleting customer:', error);
        // Handle error
      },
    });
  }

  confirmDelete(customerId: any): void {
    // Display confirmation dialog
    const confirmed = window.confirm('Are you sure you want to delete this customer?');

    // If user confirms, delete the customer
    if (confirmed) {
      this.customerService.deleteCustomer(customerId).subscribe({
        next: () => {
          // Remove the deleted customer from the local array
          this.customers = this.customers.filter((customer) => customer.id !== customerId);
        },
        error: (error) => {
          console.error('Error deleting customer:', error);
          // Handle error
        },
      });
    }
  }

  claimCustomer( customerId: any): void {
    this.agentService.claimCustomer( customerId).subscribe(
      (response) => {
        // Handle success response
        console.log('Agent assigned successfully:', response);
      },
      (error) => {
        // Handle error
        console.error('Error assigning agent:', error);
      }
    );
  }
}
