import { Document } from 'mongoose';

interface Address {
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  country: string;
  zip: Number;
}

export interface User extends Document {
  _id?: any;
  name: string;
  username: string;
  readonly password: string;
  createdAt: Date;
  updatedAt: Date;

  generateAuthToken(): string;
  validatePassword(password: string): Boolean;
}
