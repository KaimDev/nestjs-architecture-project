import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindAppByName } from "src/dtos/requests/app/find-app-by-name.dto";

import { AppEntity } from "src/entities/app.entity";
import { Repository } from "./repository";

@Injectable()
export class AppRepository {

    constructor(
        // @InjectRepository(AppEntity)
        // private appRepository: Repository<AppEntity>
    ) {
        Repository.registerRepository(AppEntity, this); // To-do: Create a decorator for this
    }

    public sayHello() {
        console.log("Hello");
    }
    
    public async getAll(): Promise<AppEntity[]> {
        // const Found = await this.appRepository.find();
        // return Found;
        throw new NotImplementedException();
    }
    
    findById(id: string): Promise<AppEntity> {
        throw new Error("Method not implemented.");
    }

    public async findByName(request: FindAppByName, idFromParam: string): Promise<AppEntity> {
        throw new NotImplementedException();
    }
}