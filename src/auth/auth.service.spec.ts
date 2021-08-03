import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserSchema } from '../user/user.schema';
import { AppModule } from '../app.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      providers: [AuthService, UserService, UserRepository],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
