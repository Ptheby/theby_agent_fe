export class Policy {


  constructor(
  public  policy_type: string,
  public  exp_date: Date,
  public   term_legnth: string,
  public  customerId: number,
  public   agentId: number,
  public   insurance_company_id: number,
  public   createdAt: Date,
  public   updatedAt: Date,
  public  premium_amount: number
  ){} }
