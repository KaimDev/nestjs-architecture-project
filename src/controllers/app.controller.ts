import { Body, Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { FindAppByName } from 'src/dtos/requests/app/find-app-by-name.dto';
import { AppEntity } from 'src/entities/app.entity';

@Controller("app")
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get("/:id")
  getAppByName(@Param("id") id: string, @Body() request: FindAppByName): Promise<AppEntity> {
    return this.appService.findAppByName(request, id);
  }
}