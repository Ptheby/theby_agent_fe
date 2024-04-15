import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomerService } from '../../customer/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Customer } from '../../customer/customer.model';

@Component({
  selector: 'app-create-policy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css'],
})
export class CreatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  premiumAmount: string = '';
  customerId: any;
  selectedCustomer: any;

  formatCurrency(event: any) {
    const input = event.target.value;
    const parts = input.split('.');
    if (parts.length > 2 || (parts.length === 2 && parts[1].length > 2)) {
      // Remove extra decimal points and digits after the second decimal place
      event.target.value = input.substring(0, input.length - 1);
    }
    this.premiumAmount = input; // Update premiumAmount property
  }


  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private policyService: PolicyService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {
    this.policyForm = new FormGroup({
      policy_type: new FormControl('', Validators.required),
      exp_date: new FormControl('', Validators.required),
      term_length: new FormControl('', Validators.required),
      premium_amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d+(\.\d{0,2})?$/),
      ]),
      insurance_company_id: new FormControl('', Validators.required),
    });

    // Get customer_id from route parameters
    const customerId = this.route.snapshot.params['customer_id'];

    // Set the customer_id value in the form group
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const customerId = +params['id']; // Extract agent ID from route parameters
      console.log('customerId:', customerId);
      this.customerService
        .getCustomerById(customerId)
        .subscribe((data: Customer) => {
          this.selectedCustomer = data;
          console.log(this.selectedCustomer)
          // Set the customer details
        });
    });



  }





  onAddPolicy() {
    const customerId = this.route.snapshot.params['id'];

    const policyData = {
      policy: {
        policy_type: this.policyForm.get('policy_type')?.value,
        exp_date: this.policyForm.get('exp_date')?.value,
        term_length: this.policyForm.get('term_length')?.value,
        premium_amount: this.policyForm.get('premium_amount')?.value,
        insurance_company_id: this.policyForm.get('insurance_company_id')
          ?.value,
        customer_id: customerId,
      },
    };
    console.log('Policy Data:', policyData); // Log policyData object
    this.policyService.addPolicy(policyData,customerId).subscribe({
      next: (res: any) => {
        console.log('Policy Successful', res);
        const policyId = res.policy.id;
        this.router.navigate([`customers/${customerId}/policy/${policyId}`]);
      },
      error: (error: any) => {
        console.error('Error adding policy:', error);
        // Handle error here
      },
    });
  }
}
