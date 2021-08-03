import { IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class JoinChannelDto {
  @IsString()
  @IsDefined()
  @ApiProperty()
  channelId: string;
}
