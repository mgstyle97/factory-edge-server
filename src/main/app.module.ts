import { Module } from '@nestjs/common';
import { WeldingDataController } from './domain/welding/web/welding-data.controller';
import { WeldingDataService } from './domain/welding/application/welding-data.service';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config/.env.${process.env.NODE_ENV}`,
    }),
    HttpModule.register({
      baseURL: process.env.MAIN_SERVER,
    }),
  ],
  controllers: [WeldingDataController],
  providers: [WeldingDataService],
})
export class AppModule {}
