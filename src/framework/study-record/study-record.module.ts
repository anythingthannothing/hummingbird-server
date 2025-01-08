import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CreateStudyRecordRepository,
  GetStudyRecordByDateRepository,
  UpdateStudyRecordRepository,
} from '../../infra/mongo/repositories';
import { StudyRecordModel, StudyRecordSchema } from '../../infra/mongo/schemas';
import { AddStudyRecordController } from './controllers';
import { AddStudyRecordService } from './services';

const controllers = [AddStudyRecordController];

const services = [AddStudyRecordService];

const repositories = [
  GetStudyRecordByDateRepository,
  CreateStudyRecordRepository,
  UpdateStudyRecordRepository,
];

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudyRecordModel.name, schema: StudyRecordSchema },
    ]),
  ],
  controllers: controllers,
  providers: [...services, ...repositories],
})
export class StudyRecordModule {}
