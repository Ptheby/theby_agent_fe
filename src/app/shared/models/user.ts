export class User {
  email: string;
  passwordDigest: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    email: string,
    passwordDigest: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.email = email;
    this.passwordDigest = passwordDigest;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
// Do i need to save a token here?
