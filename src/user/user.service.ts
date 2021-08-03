import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { UserRepository } from './user.repository';
// import { User } from 'src/types/user';
// import * as jwt from 'jsonwebtoken';
// import { jwtConfig } from 'src/config/jwt.config';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user) {
    return await this.userRepository.create(user);
  }

  async findOne(user) {
    return await this.userRepository.findOne(user);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
