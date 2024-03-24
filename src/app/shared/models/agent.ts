export class Agent {
  // Properties
  firstName: string;
  lastName: string;
  npn: number;
  userId: number;
  state: string;

  // Constructor
  constructor(firstName: string, lastName: string, npn: number, userId: number, state: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.npn = npn;
    this.userId = userId;
    this.state = state;
  }

  // Method to get the full name of the agent
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
