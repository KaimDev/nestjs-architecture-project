import { DatabaseModule } from './../database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../filters/exception.filter';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRepository } from 'src/repositories/app.repository';

@Module({
  imports: [
    // DatabaseModule,
    // TypeOrmModule.forFeature([AppEntity])
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppController,
    AppService,
    AppRepository
  ],
})
export class AppModule {}
