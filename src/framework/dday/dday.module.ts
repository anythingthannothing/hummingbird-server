import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DdayEntity } from '../../infra/entities/dday.entity';
import {
  CreateDdayRepository,
  GetDdaysByUserIdRepository,
} from '../../infra/repositories';
import { CreateDdayController, GetMyDdaysController } from './controllers';
import { CreateDdayService } from './services';
import { GetDdaysByUserIdService } from './services';

const controllers = [CreateDdayController, GetMyDdaysController];

const services = [CreateDdayService, GetDdaysByUserIdService];

const repositories = [CreateDdayRepository, GetDdaysByUserIdRepository];

@Module({
  imports: [TypeOrmModule.forFeature([DdayEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class DdayModule {}
