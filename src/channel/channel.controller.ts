import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../utilities/user.decorator';
import { CreateChannelDto, JoinChannelDto } from './dto';
import { ChannelService } from './channel.service';
import { User } from '../types/user';
import { Channel } from '../types/channel';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createChannelDto: CreateChannelDto,@GetUser() { id }: User): Promise<Channel> {
    const { name, users } = createChannelDto;
    const userChannels = users ? [id, ...users] : [id];
    const channel = { name, creator: id, users: userChannels };
    return this.channelService.create(channel);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findChannels(@GetUser() { id }: User): Promise<Channel[]> {
    return this.channelService.findChannelsByUserId(id);
  }

  @Post('join')
  @UseGuards(AuthGuard('jwt'))
  joinChannel( @Body() joinChannelDto: JoinChannelDto,@GetUser() { id }: User): Promise<Channel> {
    return this.channelService.joinChannel(joinChannelDto.channelId, id);
  }
}
