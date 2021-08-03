import 'dotenv/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';
import { ChannelRepository } from './channel.repository';
import { ChannelSchema, ChannelModel } from './channel.schema';
import { AppModule } from '../app.module';

describe('ChannelController', () => {
  let controller: ChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        MongooseModule.forFeature([{ name: 'Channel', schema: ChannelSchema }]),
      ],
      controllers: [ChannelController],
      providers: [ChannelService, ChannelRepository, ChannelModel],
    }).compile();

    controller = module.get<ChannelController>(ChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
