import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Subscription } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  private subscription: Subscription | undefined;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.subscription = this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        console.log(this.customers)
      },
      (error: any) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  getCustomers(){
    this.customerService.getAllCustomers()
    console.log(this.customers)
  }
}
