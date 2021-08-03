import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageService } from './message.service';
import { MessageSchema, MessageModel } from './message.schema';
import { MessageRepository } from './message.repository.ts';
import { ChannelRepository } from '../channel/channel.repository';
import { ChannelSchema } from '../channel/channel.schema';
import { ChannelService } from '../channel/channel.service';
import { UserRepository } from '../user/user.repository';
import { UserSchema } from '../user/user.schema';
import { AppModule } from '../app.module';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([
          { name: 'Message', schema: MessageSchema },
          { name: 'Channel', schema: ChannelSchema },
          { name: 'User', schema: UserSchema },
        ]),
      ],
      providers: [MessageService, MessageRepository, UserRepository,ChannelService, ChannelRepository],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
