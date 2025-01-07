import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubjectEntity } from '../../infra/entities';
import {
  CreateSubjectRepository,
  GetSubjectByIdRepository,
  GetSubjectsByUserIdRepository,
  SaveSubjectRepository,
} from '../../infra/repositories';
import { DeleteSubjectRepository } from '../../infra/repositories/subject/delete-subject.repository';
import {
  CreateSubjectController,
  DeleteSubjectController,
  GetSubjectsByUserIdController,
  UpdateSubjectController,
} from './controllers';
import {
  CreateSubjectService,
  DeleteSubjectByIdService,
  GetSubjectsByUserIdService,
  UpdateSubjectService,
} from './services';
import {} from './services/update-subject.service';

const controllers = [
  CreateSubjectController,
  GetSubjectsByUserIdController,
  UpdateSubjectController,
  DeleteSubjectController,
];

const services = [
  CreateSubjectService,
  GetSubjectsByUserIdService,
  UpdateSubjectService,
  DeleteSubjectByIdService,
];

const repositories = [
  CreateSubjectRepository,
  GetSubjectsByUserIdRepository,
  DeleteSubjectRepository,
  SaveSubjectRepository,
  GetSubjectByIdRepository,
];

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class SubjectModule {}
