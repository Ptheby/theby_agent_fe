export class InsuranceCompany {
  name: string;
  agentId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(name: string, agentId: number, createdAt: Date, updatedAt: Date) {
    this.name = name;
    this.agentId = agentId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
