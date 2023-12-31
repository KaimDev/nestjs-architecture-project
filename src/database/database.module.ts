/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "database",
            autoLoadEntities: true,
            synchronize: true,
          })
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule {}
