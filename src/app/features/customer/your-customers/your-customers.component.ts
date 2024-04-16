import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-your-customers',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule],
  templateUrl: './your-customers.component.html',
  styleUrl: './your-customers.component.css',
})
export class YourCustomersComponent implements OnInit {
  agentId: number | undefined;
  customers: Customer[] = [];
  private subscription: Subscription | undefined;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.customerService.getAllYourCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
        console.log(this.customers);
      },
      error: (error: any) => {
        console.error('Error fetching customers:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // getYourCustomers(): void {
  //   this.customerService.getAllYourCustomers().subscribe({
  //     next: (data: Customer[]) => {
  //       this.customers = data;
  //       console.log(agentId);
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching customers:', error);
  //     },
  //   });
  // }

  navigateToCustomerDetails(id: number) {
    this.router.navigate(['/customers', id]);
    console.log(this.customers.values);
  }
}
