import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { IEntity } from "src/interfaces/entity.interface";

@Entity()
export class AppEntity implements IEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}