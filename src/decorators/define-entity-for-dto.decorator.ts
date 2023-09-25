import 'reflect-metadata';
import { DTO_NAME_METADATA_KEY } from 'src/constants/metadata-keys';

export function DefineEntityForDto(entity: Function): ClassDecorator {
    return function (constructor: Function): void {
        Reflect.defineMetadata(DTO_NAME_METADATA_KEY, entity.name, constructor);
    }
}