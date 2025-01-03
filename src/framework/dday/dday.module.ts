import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DdayEntity } from '../../infra/entities/dday.entity';
import { CreateDdayRepository } from '../../infra/repositories';
import { CreateDdayController } from './controllers';
import { CreateDdayService } from './services';

const controllers = [CreateDdayController];

const services = [CreateDdayService];

const repositories = [CreateDdayRepository];

@Module({
  imports: [TypeOrmModule.forFeature([DdayEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class DdayModule {}
