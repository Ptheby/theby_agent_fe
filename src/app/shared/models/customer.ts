export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  dob: Date;
  email: string;
  agentId: number;
  insuranceCompanyId: number;
  createdAt: Date;
  updatedAt: Date;
  addressId: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    phone: number,
    dob: Date,
    email: string,
    agentId: number,
    insuranceCompanyId: number,
    createdAt: Date,
    updatedAt: Date,
    addressId: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.dob = dob;
    this.email = email;
    this.agentId = agentId;
    this.insuranceCompanyId = insuranceCompanyId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.addressId = addressId;
  }
}
