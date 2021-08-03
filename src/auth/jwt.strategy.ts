import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from './dto/jwt-payload.interface';
import { UserRepository } from '../user/user.repository';
import { jwtConfig } from '../config/jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secret,
    });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback) {
    // console.log('Payload', payload);
    const { username } = payload;
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      return done(
        new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
        false,
      );
    }
    return done(null, user, payload.iat);
  }
}
