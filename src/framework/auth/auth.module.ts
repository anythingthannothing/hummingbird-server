import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  AccountEntity,
  RefreshTokenEntity,
  UserEntity,
} from '../../infra/entities';
import {
  CreateGoogleAccountRepository,
  CreateRefreshTokenRepository,
  CreateUserRepository,
  GetAccountByUserIdRepository,
  GetGoogleAccountRepository,
  GetRefreshTokenRepository,
  SoftDeleteAccountByAccountIdRepository,
} from '../../infra/repositories';
import { DbContextProvider, UnitOfWorkProvider } from '../shared/providers';
import { GoogleLoginController, RefreshTokenController } from './controllers';
import { CancelAccountController } from './controllers/cancel-account';
import { JwtTokenProvider, RefreshTokenProvider } from './providers';
import { CancelAccountByUserIdService, GoogleLoginService } from './services';

const controllers = [
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
];

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, UserEntity, RefreshTokenEntity]),
  ],
  controllers,
  providers: [...services, ...repositories, ...providers],
})
export class AuthModule {}
