import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService } from './customer.service';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  states:string[]=[   'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY','The Shire'];
  addCustomerForm: FormGroup;

  constructor(
    private router: Router,

    private customerService: CustomerService
  ) {
    this.addCustomerForm = new FormGroup({
      customer: new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required,Validators.maxLength(13)]),
        dob: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),

        address_attributes: new FormGroup({
          street_number: new FormControl('', Validators.required),
          street_name: new FormControl('', Validators.required),
          city: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          zip: new FormControl('', Validators.required),
        }),
      }),
    });
  }

  addCustomer() {
    console.log('hello');
    // const customerData = this.addCustomerForm.get('customer')?.value;
    // const addressData = this.addCustomerForm.get('address')?.value;

    const userData = this.addCustomerForm.value;
    console.log(userData);

    this.customerService.addCustomer(userData).subscribe({
      next: (res: any) => {
        console.log('Customer added successfully', res);
        // Redirect to another page or perform any other actions
        this.router.navigate(['/customers']);
      },
      error: (error: any) => {
        console.error('Failed to add customer', error);
        // Handle error (e.g., show error message)
      },
    });
  }
}
