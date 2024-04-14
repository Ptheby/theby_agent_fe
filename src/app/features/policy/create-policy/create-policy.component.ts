import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../policy.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-policy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css'],
})
export class CreatePolicyComponent {
  policyForm: FormGroup;

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
      premium_amount: new FormControl('', Validators.required),
      insurance_company_id: new FormControl('', Validators.required),
     
    });

    // Get customer_id from route parameters
    const customerId = this.route.snapshot.params['customer_id'];

    // Set the customer_id value in the form group
    this.policyForm.patchValue({
      customer_id: customerId
    });
  }

  onAddPolicy() {
    const policyData = {
      policy_type: this.policyForm.get('policy_type')?.value,
      exp_date: this.policyForm.get('exp_date')?.value,
      term_length: this.policyForm.get('term_length')?.value,
      premium_amount: this.policyForm.get('premium_amount')?.value,
      insurance_company_id: this.policyForm.get('insurance_company_id')?.value,
      customer_id: this.policyForm.get('customer_id')?.value
    };

    this.policyService.addPolicy(policyData).subscribe({
      next: (res: any) => {
        console.log('Policy Successful', res);
        const policyId = res.policy.id;
        this.router.navigate(['policy', policyId]);
      },
      error: (error: any) => {
        console.error('Error adding policy:', error);
        // Handle error here
      }
    });
  }
}
