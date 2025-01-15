import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../../infra/mysql/entities';
import {
  GetUserByUserIdRepository,
  SaveUserRepository,
} from '../../infra/mysql/repositories';
import { GetUserInfoController, UpdateUserController } from './controllers';
import { GetUserInfoService, UpdateUserService } from './services';

const controllers = [UpdateUserController, GetUserInfoController];

const services = [UpdateUserService, GetUserInfoService];

const repositories = [GetUserByUserIdRepository, SaveUserRepository];

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [...controllers],
  providers: [...services, ...repositories],
})
export class UserModule {}
