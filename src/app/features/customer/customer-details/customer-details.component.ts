import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
selectedCustomer:Customer|undefined;




  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router:Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = +params['id']; // Extract customer ID from route parameters
      this.customerService.getCustomerById(customerId).subscribe((data: Customer) => {
        this.selectedCustomer = data; // Set the customer details
      });
    });
  }
}

