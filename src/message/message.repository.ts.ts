import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from '../types/message';

@Injectable()
export class MessageRepository {
  constructor(@InjectModel('Message') private messageModel: Model<Message>) {}

  async create(message: Message): Promise<Message> {
    const createdMessage = new this.messageModel(message);
    return createdMessage.save();
  }

  async getMessagesByChannelId(id): Promise<Message[]> {
    return this.messageModel.find({ channel: id }).populate('sender', 'name');
  }
}
