import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserSchema, UserModel } from './user.schema';
import { AppModule } from '../app.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [UserService, UserRepository],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
