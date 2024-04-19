import { Agent } from '../../agent/agent';

export class User {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  private _token: string;
  private _tokenExpirationDate: Date;

  agent: Agent | null; // Nullable agent property

  constructor(data: any) {
    this.id = data.id;
    this.email = data.email;
    this.createdAt = new Date(data.created_at);
    this.updatedAt = new Date(data.updated_at);
    this._token = data._token;
    this._tokenExpirationDate = data._tokenExpirationDate;

    // Assuming the associated Agent data is included in the response
    this.agent = data.agent
      ? new Agent(
          data.agent.id,
          data.agent.first_name,
          data.agent.last_name,
          data.agent.npn,
          data.agent.phone,
          data.agent.state,
          data.agent.userId,
          new Date(data.agent.createdAt),
          new Date(data.agent.updatedAt),
          data.agent.customers,
          data.agent.user,
          data.agent.insuranceCompanies
        )
      : null;
  }
  get token(){
    if (!this._tokenExpirationDate || new Date()> this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
