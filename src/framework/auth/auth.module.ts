import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountEntity, UserEntity } from '../../infra/entities';
import {
  CreateGoogleAccountRepository,
  GetGoogleAccountRepository,
} from '../../infra/repositories';
import { CreateUserRepository } from '../../infra/repositories/user';
import { DbContextProvider, UnitOfWorkProvider } from '../shared/providers';
import { GoogleLoginController } from './controllers';
import { GoogleLoginService } from './services';

const controllers = [GoogleLoginController];

const services = [GoogleLoginService];

const providers = [UnitOfWorkProvider, DbContextProvider];

const repositories = [
  GetGoogleAccountRepository,
  CreateGoogleAccountRepository,
  CreateUserRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity, UserEntity])],
  controllers,
  providers: [...services, ...repositories, ...providers],
})
export class AuthModule {}
