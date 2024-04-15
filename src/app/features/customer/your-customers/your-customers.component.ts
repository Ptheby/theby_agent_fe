import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer.model';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-your-customers',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './your-customers.component.html',
  styleUrl: './your-customers.component.css'
})
export class YourCustomersComponent {
  customers: Customer[] = [];
  private subscription: Subscription | undefined;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.customerService.getAllCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
        console.log(this.customers);
      },
      error: (error: any) => {
        console.error('Error fetching customers:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getYourCustomers(agentId: number): void {
    this.customerService.getAllYourCustomers(agentId).subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
        console.log(this.customers);
      },
      error: (error: any) => {
        console.error('Error fetching customers:', error);
      }
    });
  }



      navigateToCustomerDetails(id: number) {
        this.router.navigate(['/customers',id]);
        console.log(this.customers.values)
  }

}


