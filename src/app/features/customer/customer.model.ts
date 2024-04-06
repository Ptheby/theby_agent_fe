import { Optional } from '@angular/core';
import { Address } from '../../shared/models/address';
import { Agent } from '../../shared/models/agent';
import { Policy } from '../../shared/models/policy';

export class Customer {
  id: number;
  first_name: string;
  last_name: string;
  phone: number;
  dob: Date;
  email: string;
  agent_id?: number;
  insuranceCompanyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  addressId: number;
  policyPath?: string;
  agent?: Agent;
  address?: Address;
  policy?: Policy;

  constructor(
    id: number,
    first_name: string,
    last_name: string,
    phone: number,
    dob: Date,
    email: string,
    @Optional() agent_id: number,
    @Optional() insuranceCompanyId: number,
    @Optional() createdAt: Date,
    @Optional() updatedAt: Date,
    @Optional() addressId: number,
    @Optional() policyPath: string,
    @Optional() agent: Agent,
    @Optional() address: Address,
    @Optional() policy: Policy
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.dob = dob;
    this.email = email;
    this.agent_id = agent_id;
    this.insuranceCompanyId = insuranceCompanyId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.addressId = addressId;
    this.policyPath = policyPath;
    this.agent = agent;
    this.address = address;
    this.policy = policy;
  }
}
