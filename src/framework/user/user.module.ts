import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../../infra/mysql/entities';
import {
  GetUserByUserIdRepository,
  SaveUserRepository,
} from '../../infra/mysql/repositories';
import { UpdateUserController } from './controllers/update-profile';
import { UpdateUserService } from './services';

const controllers = [UpdateUserController];

const services = [UpdateUserService];

const repositories = [GetUserByUserIdRepository, SaveUserRepository];

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class UserModule {}
