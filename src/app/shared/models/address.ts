export class Address {
  streetNumber: number;
  streetName: string;
  city: string;
  state: string;
  zip: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    streetNumber: number,
    streetName: string,
    city: string,
    state: string,
    zip: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
