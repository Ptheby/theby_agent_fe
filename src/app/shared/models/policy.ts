export class Policy {
  type: string;
  expDate: Date;
  termLength: number;
  customerId: number;
  agentId: number;
  insuranceCompanyId: number;
  createdAt: Date;
  updatedAt: Date;
  premiumAmount: number;

  constructor(
    type: string,
    expDate: Date,
    termLength: number,
    customerId: number,
    agentId: number,
    insuranceCompanyId: number,
    createdAt: Date,
    updatedAt: Date,
    premiumAmount: number
  ) {
    this.type = type;
    this.expDate = expDate;
    this.termLength = termLength;
    this.customerId = customerId;
    this.agentId = agentId;
    this.insuranceCompanyId = insuranceCompanyId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.premiumAmount = premiumAmount;
  }
}
