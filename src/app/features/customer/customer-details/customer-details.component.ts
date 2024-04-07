import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Customer } from '../customer.model';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css',
})
export class CustomerDetailsComponent implements OnInit {
  selectedCustomer: Customer | undefined;


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
