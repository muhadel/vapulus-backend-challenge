import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelService } from './channel.service';
import { ChannelRepository } from './channel.repository';
import { ChannelSchema } from './channel.schema';
import { AppModule } from '../app.module';

describe('ChannelService', () => {
  let service: ChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),
      ],
      providers: [ChannelService, ChannelRepository],
    }).compile();

    service = module.get<ChannelService>(ChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
