import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository.ts';
import { MessageSchema } from './message.schema';
import { AppModule } from '../app.module';
import { ChannelService } from '../channel/channel.service';
import { ChannelRepository } from '../channel/channel.repository';
import { ChannelSchema } from '../channel/channel.schema';

describe('MessageController', () => {
  let controller: MessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }, { name: 'Channel', schema: ChannelSchema }]),
      ],
      controllers: [MessageController],
      providers: [MessageService, MessageRepository, ChannelService, ChannelRepository],
    }).compile();

    controller = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
