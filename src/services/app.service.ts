import { Injectable, NotImplementedException } from '@nestjs/common';
import { Service } from 'src/decorators/service.decorator';
import { FindAppByName } from 'src/dtos/requests/app/find-app-by-name.dto';
import { AppEntity } from 'src/entities/app.entity';
import { AppRepository } from 'src/repositories/app.repository';

@Injectable()
@Service("AppService")
export class AppService {

  constructor(
    private appRepository: AppRepository
  ) {}

  public getAllApp() : Promise<AppEntity[]> {
    return this.appRepository.getAll();
  }

  public findAppById(id: string): Promise<AppEntity> {
    return this.appRepository.findById(id);
  }

  public findAppByName(request: FindAppByName, idFromParam: string): Promise<AppEntity> {

    const App = new AppEntity();
    App.id = idFromParam;
    App.name = request.name
    
    return Promise.resolve(App);
  }
}
