import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
customer:any;




  constructor(private customerService: CustomerService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const customerId = params['id'];
      this.customerService.getCustomerById(customerId).subscribe(data => {
        this.customer = data;
      });
    });
  }
}

