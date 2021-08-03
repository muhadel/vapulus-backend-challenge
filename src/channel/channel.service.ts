import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';
import { Channel } from '../types/channel';

@Injectable()
export class ChannelService {
  constructor(private readonly channelRepository: ChannelRepository) {}

  async create(channel: Channel) {
    return await this.channelRepository.create(channel);
  }

  async findChannelsByUserId(id: string) {
    return await this.channelRepository.findChannelByUserId(id);
  }

  async isUserInChannel(channelId, userId) {
    // Check if user exists is in channel
    const isUserInChannel = await this.channelRepository.findOne({ users: userId, _id: channelId });
    if (isUserInChannel) return true;
    return false;
  }

  async joinChannel(channelId: string, userId: string) {
    // Check if channel exists
    const isChannelExists = await this.channelRepository.findById(channelId);
    if (!isChannelExists) {
      throw new HttpException('Channel is not found!', HttpStatus.BAD_REQUEST);
    }

    // Check if user exists is in channel
    const isUserInChannel = await this.channelRepository.findOne({ users: userId, _id: channelId });
    if (isUserInChannel) {
      throw new HttpException('User already in the channel',HttpStatus.BAD_REQUEST);
    }
    // Add user in the channel
    const channel = await this.channelRepository.findOneAndUpdate(channelId, { $push: { users: userId }});
    return channel;
  }
}
