import { DatabaseModule } from './../database/database.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../filters/exception.filter';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    AppService,
  ],
})
export class AppModule {}
