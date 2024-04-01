import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {
  editCustomerForm: FormGroup;
customerId: number= 0;

ngOnInit(): void {
console.log("HELO")
  const idParam = this.route.snapshot.paramMap.get('id');
  this.customerId = idParam ? +idParam :0;
console.log(this.customerId)
  this.customerService.getCustomerById(this.customerId).subscribe((customer) =>{console.log(customer)})
};







constructor(
    private router: Router,

    private customerService: CustomerService,
    private route: ActivatedRoute
  )










  {
    this.editCustomerForm = new FormGroup({
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


 editCustomer() {
    console.log('editting customer');
    // const customerData = this.addCustomerForm.get('customer')?.value;
    // const addressData = this.addCustomerForm.get('address')?.value;

    const userData = this.editCustomerForm.value;
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
