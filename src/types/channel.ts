import { User } from './user';

export interface Channel {
  _id?: any;
  name?: string;
  creator?: User;
  users?: User[];
  createdAt?: Date;
  updatedAt?: Date;
}
