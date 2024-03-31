import { Optional } from "@angular/core";

export class Customer {
  id: number;
  first_name: string;
  last_name: string;
  phone: number;
  dob: Date;
  email: string;
  agentId?: number;
  insuranceCompanyId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  addressId: number;
  policyPath?:string

  constructor(
    id: number,
    first_name: string,
    last_name: string,
    phone: number,
    dob: Date,
    email: string,
    @Optional() agentId: number,
    @Optional()insuranceCompanyId: number,
    @Optional()createdAt: Date,
    @Optional()updatedAt: Date,
    @Optional()addressId: number,
    @Optional()policyPath: string
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.dob = dob;
    this.email = email;
    this.agentId = agentId;
    this.insuranceCompanyId = insuranceCompanyId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.addressId = addressId;
    this.policyPath= policyPath
  }
}