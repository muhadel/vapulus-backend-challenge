import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { ChannelModule } from './channel/channel.module';
import { DatabaseModule } from './database/database.module';
import { config } from './config/app.config';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongodb.uri, config.mongodb.mongooseOptions),
    SharedModule,
    AuthModule,
    UserModule,
    MessageModule,
    ChannelModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
