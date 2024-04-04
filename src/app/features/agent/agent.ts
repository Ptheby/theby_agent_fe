import { Optional } from '@angular/core';
import { Customer } from '../customer/customer.model';
import { User } from '../../shared/models/user';

export class Agent {
  id: number;
  first_name: string;
  last_name: string;
  npn: number;
  state: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
  customers?: Customer[];

  constructor(
    id: number,
    first_name: string,
    last_name: string,
    npn: number,
    state: string,
    userId: number,
    @Optional() createdAt: Date,
    @Optional() updatedAt: Date,
    @Optional() customers: Customer[]
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
  }

  // Method to get the full name of the agent
  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
