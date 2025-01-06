import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { envValidationSchema } from './env-validation.schema';
import { mysqlEnv, tokenEnv } from './envs';
import serverEnv from './envs/server.env';
import { CustomHttpExceptionFilter, UncaughtExceptionFilter } from './filters';
import { JwtConfigService, MysqlConfigService } from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      cache: true,
      load: [mysqlEnv, serverEnv, tokenEnv],
      validationSchema: envValidationSchema,
      validationOptions: {
        abortEarly: false,
      },
    }),
    JwtModule.registerAsync({
      global: true,
      inject: [JwtConfigService],
      useClass: JwtConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService,
      inject: [MysqlConfigService],
    }),
  ],
  providers: [
    { provide: APP_FILTER, useClass: UncaughtExceptionFilter },
    { provide: APP_FILTER, useClass: CustomHttpExceptionFilter },
  ],
})
export class AppConfigModule {}
