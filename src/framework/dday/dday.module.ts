import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DdayEntity } from '../../infra/entities/dday.entity';
import {
  CreateDdayRepository,
  GetDdayByDdayIdRepository,
  GetDdaysByUserIdRepository,
  UpdateDdayRepository,
} from '../../infra/repositories';
import {
  CreateDdayController,
  GetMyDdaysController,
  UpdateDdayController,
} from './controllers';
import {
  CreateDdayService,
  GetDdaysByUserIdService,
  UpdateDdayService,
} from './services';

const controllers = [
  CreateDdayController,
  GetMyDdaysController,
  UpdateDdayController,
];

const services = [
  CreateDdayService,
  GetDdaysByUserIdService,
  UpdateDdayService,
];

const repositories = [
  CreateDdayRepository,
  GetDdaysByUserIdRepository,
  GetDdayByDdayIdRepository,
  UpdateDdayRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature([DdayEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class DdayModule {}
