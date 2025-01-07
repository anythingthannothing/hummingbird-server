import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubjectEntity } from '../../infra/entities';
import { CreateSubjectRepository } from '../../infra/repositories';
import { CreateSubjectController } from './controllers';
import { CreateSubjectService } from './services';

const controllers = [CreateSubjectController];

const services = [CreateSubjectService];

const repositories = [CreateSubjectRepository];

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class SubjectModule {}
