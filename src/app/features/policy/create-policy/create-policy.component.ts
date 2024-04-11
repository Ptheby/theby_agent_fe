import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { PolicyService } from '../policy.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-policy',
  standalone: true,
  imports: [CommonModule,NgIf,ReactiveFormsModule],
  templateUrl: './create-policy.component.html',
  styleUrl: './create-policy.component.css'
})
export class CreatePolicyComponent {


  policyForm: FormGroup;
  policy = {
    policy_type: '',
    expDate: '',
    termLength: '',
    premiumAmount:''
   };
name: any;

  constructor(private router: Router, private policyService: PolicyService) {
    this.policyForm = new FormGroup({

     policy: new FormGroup({
        policy_type: new FormControl('', Validators.required),
        expDate: new FormControl('', Validators.required),
        termLength: new FormControl('', Validators.required),
        premiumAmount: new FormControl('', Validators.required),
        insurance_company_id: new FormControl('', Validators.required),

      }),
    });
  }
  onAddPolicy() {
    const policyData = {
      policy: {
        policy_type: this.policyForm.get('policy.policy_type')?.value,
        exp_date: this.policyForm.get('policy.expDate')?.value,
       term_length: this.policyForm.get('policy.termLength')?.value,
       premium_amount: this.policyForm.get('policy.premiumAmount')?.value,
       insurance_company_id: this.policyForm.get('policy.insurance_company_id')?.value


    }};


      this.policyService.addPolicy(policyData).subscribe({
        next: (res: any) => {
          console.log('Sign up successful', res);
          // Redirect to login or another page
          this.router.navigate(['/policy/:id']);



        }})}}
