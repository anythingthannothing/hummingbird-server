import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

import { mongoEnv } from '../envs';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(
    @Inject(mongoEnv.KEY)
    private readonly mongoConfig: ConfigType<typeof mongoEnv>,
  ) {}

  createMongooseOptions(): MongooseModuleOptions {
    const uri =
      process.env.NODE_ENV === 'development'
        ? `mongodb://${this.mongoConfig.username}:${this.mongoConfig.password}@${this.mongoConfig.host}:${this.mongoConfig.port}`
        : this.mongoConfig.connectionString;
    return {
      uri,
      dbName: this.mongoConfig.database,
      retryAttempts: 5,
      retryDelay: 5000,
    };
  }
}
