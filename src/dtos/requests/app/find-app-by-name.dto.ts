import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { DefineEntityForDto } from 'src/decorators/define-entity-for-dto.decorator';
import { AppEntity } from 'src/entities/app.entity';
import { IRequest } from 'src/interfaces/request.interface';
import { FindAppEntityByIdValidatorAsync } from 'src/validations/app/find-app-entity-validator.decorator';

@DefineEntityForDto(AppEntity)
export class FindAppByName implements IRequest {

    @IsNotEmpty()
    // @IsUUID()
    @FindAppEntityByIdValidatorAsync()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}