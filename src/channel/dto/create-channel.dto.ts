import { IsString, IsDefined, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../types/user';

export class CreateChannelDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  name: string;

  @IsArray()
  @ApiProperty()
  users: User[];
}
