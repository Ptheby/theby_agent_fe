import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { AgentService } from '../../../agent/agent.service';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Agent } from '../../../agent/agent';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports:[RouterModule,NgIf
  ],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  standalone: true
})
export class CustomerDetailsComponent implements OnInit {
  selectedCustomer: Customer | undefined;
  customerId: number|undefined;
  agentId: any;
  showAssignAgent: boolean = false;
  customers: Customer[] = [];




  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentService,
    private _snackBar: MatSnackBar,




  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.customerId = +params['id']; // Extract customer ID from route parameters
      console.log('CustomerID:', this.customerId);
      this.customerService.getCustomerById(this.customerId).subscribe((data: Customer) => {
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

  claimCustomer(): void {
    if (!this.selectedCustomer) {
      console.error('No customer selected.');
      return;
    }

    // Ask for confirmation
    const confirmMessage = 'Are you sure you want to claim this customer?';
    if (!window.confirm(confirmMessage)) {
      // User clicked cancel, do nothing
      return;
    }

    // User clicked OK, proceed with claiming the customer
    this.agentService.claimCustomer(this.selectedCustomer.id).subscribe(
      (response) => {
        this.selectedCustomer = response;
        console.log('Agent assigned successfully:', response);
        this._snackBar.open(`You have claimed ${this.selectedCustomer?.first_name}!`, 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
       // Add the custom class here
        });
      },
      (error) => {
        console.error('Error assigning agent:', error);
      }
    );
  }


  openAddPolicy(): void {
    if (this.customerId) {
      console.log(this.customerId);
      this.router.navigate([`customers/${this.customerId}/create-policy`]);
    } else {
      console.error('customerId is not defined');
    }
  }
  onViewPolicy() {
    const customerId = this.route.snapshot.params['customer_id'];
    const policyId = this.route.snapshot.params['policy_id'];
    this.router.navigate([`customers/${customerId}/policy/${policyId}`]);
  }}


  