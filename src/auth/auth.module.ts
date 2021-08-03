import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../user/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [
    AuthService,
    UserService,
    UserRepository,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
