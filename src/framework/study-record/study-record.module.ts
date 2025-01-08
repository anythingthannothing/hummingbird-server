import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CreateStudyRecordRepository,
  GetStudyRecordByDateRepository,
  UpdateStudyRecordRepository,
} from '../../infra/mongo/repositories';
import { StudyRecordModel, StudyRecordSchema } from '../../infra/mongo/schemas';
import {
  AddStudyRecordController,
  GetStudyRecordByDateController,
} from './controllers';
import { AddStudyRecordService, GetStudyRecordByDateService } from './services';

const controllers = [AddStudyRecordController, GetStudyRecordByDateController];

const services = [AddStudyRecordService, GetStudyRecordByDateService];

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
  controllers: [...controllers],
  providers: [...services, ...repositories],
})
export class StudyRecordModule {}
