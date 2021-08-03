import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MessageRepository } from './message.repository.ts';
import { ChannelService } from '../channel/channel.service';
import { Message } from '../types/message';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepository: MessageRepository, 
    private readonly channelService: ChannelService
    ) {}

  async create(message: Message) {
    const { channel, sender } = message;
    // Check if channel exists
    const isUserInChannel = await this.channelService.isUserInChannel(channel, sender);
    if (!isUserInChannel) {
      throw new HttpException('Channel is not exists or user not in the channel', HttpStatus.BAD_REQUEST);
    }
    return await this.messageRepository.create(message);
  }

  async getMessagesByChannelId(id: string) {
    return await this.messageRepository.getMessagesByChannelId(id);
  }
}
