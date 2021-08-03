import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { ChannelRepository } from './channel.repository';
import { ChannelSchema, ChannelModel } from './channel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),
  ],
  providers: [ChannelService, ChannelRepository],
  controllers: [ChannelController],
})
export class ChannelModule {}
