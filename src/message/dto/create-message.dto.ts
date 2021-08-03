import { IsString, IsDefined, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Channel } from '../../types/channel';

export class CreateMessageDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  message: string;

  @IsMongoId({message: "Invalid channel id."})
  @IsDefined()
  @ApiProperty()
  channel: Channel;
}


