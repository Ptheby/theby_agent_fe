import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink]
})
export class ViewCustomersComponent implements OnInit, OnDestroy {
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

  getCustomers(): void {
    this.customerService.getAllCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
        console.log(this.customers.values);
      },
      error: (error: any) => {
        console.error('Error fetching customers:', error);
      }
    });

      }
      navigateToCustomerDetails(id: number) {
        this.router.navigate(['/customers',id]);
      
  }

}
