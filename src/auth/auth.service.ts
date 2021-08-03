import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthCredentialsDto, SignupDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(signupDto: SignupDto): Promise<{ accessToken: string }> {
    const { username } = signupDto;
    const isUsernameFound = await this.userService.findOne({ username });
    if (isUsernameFound) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userService.create(signupDto);
    const accessToken = "Bearer " + user.generateAuthToken();
    
    return { accessToken };
  }

  async signin(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { username } = authCredentialsDto;
    const user = await this.userService.findOne({ username });
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const isPasswordValid = user.validatePassword(authCredentialsDto.password);
    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const accessToken = "Bearer " + user.generateAuthToken();
    return { accessToken };
  }
}
