import { IEntity } from "./entity.interface";

export interface IRepository<T extends IEntity> {
    
    getAll() : Promise<T[]>;

    findById(id: string): Promise<T>;
}