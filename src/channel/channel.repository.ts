import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Channel } from '../types/channel';

@Injectable()
export class ChannelRepository {
  constructor(@InjectModel('Channel') private channelModel: Model<Channel>) {}

  async create(channel: Channel): Promise<Channel> {
    const createdChannel = new this.channelModel(channel);
    return createdChannel.save();
  }

  async findOne(channelProps): Promise<Channel> {
    return this.channelModel.findOne(channelProps);
  }

  async findById(id: string): Promise<Channel> {
    return this.channelModel.findById(id);
  }

  async findChannelByUserId(id): Promise<Channel[]> {
    return this.channelModel.find({ users: id });
  }

  async findOneAndUpdate(id, updateQuery): Promise<Channel> {
    return this.channelModel.findOneAndUpdate(id, updateQuery, { new: true });
  }
}
