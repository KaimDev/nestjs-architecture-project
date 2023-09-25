import { IEntity } from 'src/interfaces/entity.interface';
import { IRepository } from 'src/interfaces/repository.interface';

export class Repository {
  private static repositoryRegistry: Record<string, any> = {};

  public static registerRepository<T extends IRepository<IEntity>>(
    entityName: Function,
    repository: T,
  ): void {
    this.repositoryRegistry[entityName.name] = repository;
  }

  public static getRepository(entityName: string): any | null {
    const repository = this.repositoryRegistry[entityName];

    if (repository) {
      return repository;
    }

    return null;
  }
}