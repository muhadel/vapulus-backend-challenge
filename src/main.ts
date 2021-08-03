import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/http-exception.filter';
import { config } from './config/app.config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.enableCors({ origin: '*' });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));


  if (config.env === 'development') {
    logger.log(`App running in ${config.env} mode!`);
    const options = new DocumentBuilder()
      .setTitle('Vapulus Challenge')
      .setDescription('Chat application that enables the customers to sign up, login, and join a general chat room, send messages, show previous messages of this chat')
      .setVersion('1.0')
      .addTag('Vapulus')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
  await app.listen(config.port);
  logger.log(`App listening on port ${config.port}`);
}
bootstrap();
