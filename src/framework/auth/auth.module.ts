import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  AccountEntity,
  RefreshTokenEntity,
  UserEntity,
} from '../../infra/mysql/entities';
import {
  CreateAppleAccountRepository,
  CreateGoogleAccountRepository,
  CreateRefreshTokenRepository,
  CreateUserRepository,
  GetAccountByUserIdRepository,
  GetAppleAccountRepository,
  GetGoogleAccountRepository,
  GetRefreshTokenRepository,
  SoftDeleteAccountByAccountIdRepository,
} from '../../infra/mysql/repositories';
import { DbContextProvider, UnitOfWorkProvider } from '../shared/providers';
import {
  AppleLoginController,
  GoogleLoginController,
  RefreshTokenController,
} from './controllers';
import { CancelAccountController } from './controllers/cancel-account';
import { JwtTokenProvider, RefreshTokenProvider } from './providers';
import {
  AppleLoginService,
  CancelAccountByUserIdService,
  GoogleLoginService,
} from './services';

const controllers = [
  AppleLoginController,
  GoogleLoginController,
  RefreshTokenController,
  CancelAccountController,
];

const services = [GoogleLoginService, CancelAccountByUserIdService];

const providers = [
  UnitOfWorkProvider,
  DbContextProvider,
  JwtTokenProvider,
  RefreshTokenProvider,
];

const repositories = [
  GetGoogleAccountRepository,
  CreateGoogleAccountRepository,
  CreateUserRepository,
  CreateRefreshTokenRepository,
  GetRefreshTokenRepository,
  GetAccountByUserIdRepository,
  SoftDeleteAccountByAccountIdRepository,
  GetAppleAccountRepository,
  CreateAppleAccountRepository,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, UserEntity, RefreshTokenEntity]),
  ],
  controllers: [...controllers],
  providers: [...services, ...repositories, ...providers, AppleLoginService],
})
export class AuthModule {}
