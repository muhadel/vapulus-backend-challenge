import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { UserModel, UserSchema } from '../user/user.schema';
import { AppModule } from '../app.module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
      ],
      controllers: [AuthController],
      providers: [AuthService, UserService, UserRepository, UserModel],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
