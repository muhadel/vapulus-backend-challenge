import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository.ts';
import { MessageSchema } from './message.schema';
import { ChannelService } from '../channel/channel.service';
import { ChannelRepository } from '../channel/channel.repository';
import { ChannelSchema } from '../channel/channel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),
  ],
  controllers: [MessageController],
  providers: [MessageService, MessageRepository, ChannelService, ChannelRepository],
})
export class MessageModule {}
