import { Optional } from '@angular/core';
import { Customer } from '../features/customer/customer.model';
import { User } from '../features/auth/user';
import { InsuranceCompany } from '../shared/models/insurance_companies';


export class Agent {
  id: number;
  first_name: string;
  last_name: string;
  npn: string;
  state: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
  customers?: Customer[];
  user?: User;
  insuranceCompanies?: InsuranceCompany[]; // Include the insurance companies association

  constructor(
    id: number,
    first_name: string,
    last_name: string,
    npn: string,
    state: string,
    userId: number,
    @Optional() createdAt: Date,
    @Optional() updatedAt: Date,
    @Optional() customers: Customer[],
    @Optional() user: User,
    @Optional() insuranceCompanies: InsuranceCompany[] // Add insuranceCompanies parameter
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.npn = npn;
    this.state = state;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.customers = customers;
    this.user = user;
    this.insuranceCompanies = insuranceCompanies; // Assign insurance companies association
  }

  // Method to get the full name of the agent
  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
