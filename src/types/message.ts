import { User } from './user';
import { Channel } from './channel';

export interface Message {
  _id?: any;
  message: string;
  sender: User;
  channel: Channel;
  createdAt?: Date;
  updatedAt?: Date;
}
