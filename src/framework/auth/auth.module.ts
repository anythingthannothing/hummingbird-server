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
  GetGoogleAccountRepository,
  GetRefreshTokenRepository,
} from '../../infra/repositories';
import { DbContextProvider, UnitOfWorkProvider } from '../shared/providers';
import { GoogleLoginController, RefreshTokenController } from './controllers';
import { AccessTokenGuard } from './guards';
import { JwtTokenProvider, RefreshTokenProvider } from './providers';
import { GoogleLoginService } from './services';

const controllers = [GoogleLoginController, RefreshTokenController];

const services = [GoogleLoginService];

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
];

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, UserEntity, RefreshTokenEntity]),
  ],
  controllers,
  providers: [...services, ...repositories, ...providers],
})
export class AuthModule {}
