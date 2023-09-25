import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { DTO_NAME_METADATA_KEY } from 'src/constants/metadata-keys';
import { AppRepository } from 'src/repositories/app.repository';
import { Repository } from 'src/repositories/repository';

// https://github.com/typestack/class-validator#custom-validation-decorators

export function FindAppEntityByIdValidatorAsync(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'FindAppEntityByIdValidatorAsync',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {

            const metadata = Reflect.getMetadata(DTO_NAME_METADATA_KEY, object.constructor);

            (Repository.getRepository(metadata) as AppRepository).sayHello();

            return true;
        },
      },
    });
  };
}