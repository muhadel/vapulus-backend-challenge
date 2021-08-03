import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../types/user';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) {}
  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findOne(user: any): Promise<User> {
    return await this.userModel.findOne(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }
}
