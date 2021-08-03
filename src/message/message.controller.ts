import { Controller, UseGuards, Post, Get, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto';
import { GetUser } from '../utilities/user.decorator';
import { User } from '../types/user';
import { Message } from '../types/message';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMessageDto: CreateMessageDto, @GetUser() { id }: User): Promise<Message> {
    const message = { ...createMessageDto, sender: id };
    return this.messageService.create(message);
  }

  @Get('channel/:id')
  @UseGuards(AuthGuard('jwt'))
  getMessagesByChannedlId(@Param('id') id: string): Promise<Message[]> {
    return this.messageService.getMessagesByChannelId(id);
  }
}
