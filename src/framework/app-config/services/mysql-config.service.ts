import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import {
  AccountEntity,
  RefreshTokenEntity,
  UserEntity,
} from '../../../infra/entities';
import { mysqlEnv } from '../envs';
import serverEnv from '../envs/server.env';

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(serverEnv.KEY)
    private readonly serverConfig: ConfigType<typeof serverEnv>,
    @Inject(mysqlEnv.KEY)
    private readonly mysqlConfig: ConfigType<typeof mysqlEnv>,
  ) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.mysqlConfig.host,
      port: +this.mysqlConfig.port,
      username: this.mysqlConfig.user,
      password: this.mysqlConfig.password,
      database: this.mysqlConfig.database,
      synchronize: this.serverConfig.env !== 'production',
      logging: process.env.NODE_ENV !== 'test',
      poolSize: this.mysqlConfig.poolSize,
      entities: [AccountEntity, UserEntity, RefreshTokenEntity],
      supportBigNumbers: true,
      bigNumberStrings: true,
    };
  }
}
