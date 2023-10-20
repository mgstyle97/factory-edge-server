import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as process from 'process';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        url: process.env.BROKER_URL,
        port: Number(process.env.PORT),
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
    },
  );
  await app
    .listen()
    .then(() => {
      Logger.log('MQTT Edge Server Running');
    })
    .catch((error) => {
      Logger.error(error);
    });
}
bootstrap()
  .then(() => {
    Logger.log(`Current environment mode: ${process.env.NODE_ENV}`);
  })
  .catch((error) => {
    Logger.error(error);
  });
