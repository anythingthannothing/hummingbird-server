import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DdayEntity } from '../../infra/mysql/entities/dday.entity';
import {
  CreateDdayRepository,
  DeleteDdayRepository,
  GetDdayByDdayIdRepository,
  GetDdaysByUserIdRepository,
  UpdateDdayRepository,
} from '../../infra/mysql/repositories';
import {
  CreateDdayController,
  GetMyDdaysController,
  UpdateDdayController,
} from './controllers';
import { DeleteDdayController } from './controllers/delete-dday';
import {
  CreateDdayService,
  DeleteDdayByDdayIdService,
  GetDdaysByUserIdService,
  UpdateDdayService,
} from './services';

const controllers = [
  CreateDdayController,
  GetMyDdaysController,
  UpdateDdayController,
  DeleteDdayController,
];

const services = [
  CreateDdayService,
  GetDdaysByUserIdService,
  UpdateDdayService,
  DeleteDdayByDdayIdService,
];

const repositories = [
  CreateDdayRepository,
  GetDdaysByUserIdRepository,
  GetDdayByDdayIdRepository,
  UpdateDdayRepository,
  DeleteDdayRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature([DdayEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class DdayModule {}
