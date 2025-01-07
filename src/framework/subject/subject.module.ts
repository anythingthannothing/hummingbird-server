import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubjectEntity } from '../../infra/entities';
import {
  CreateSubjectRepository,
  GetSubjectsByUserIdRepository,
} from '../../infra/repositories';
import { CreateSubjectController } from './controllers';
import { GetSubjectsByUserIdController } from './controllers/get-subjects-by-user-id';
import { CreateSubjectService } from './services';
import { GetSubjectsByUserIdService } from './services';

const controllers = [CreateSubjectController, GetSubjectsByUserIdController];

const services = [CreateSubjectService, GetSubjectsByUserIdService];

const repositories = [CreateSubjectRepository, GetSubjectsByUserIdRepository];

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class SubjectModule {}
