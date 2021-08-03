import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDto): Promise<{ accessToken: string }> {
    return this.authService.signup(signupDto);
  }

  @Post('signin')
  signin(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signin(authCredentialsDto);
  }
}
