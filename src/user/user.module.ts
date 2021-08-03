import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserRepository } from './user.repository';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserRepository, JwtStrategy],
})
export class UserModule {}
