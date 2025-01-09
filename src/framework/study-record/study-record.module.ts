import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CreateStudyRecordRepository,
  GetStudyRecordByDateRepository,
  GetStudyRecordsByRangeRepository,
  UpdateStudyRecordRepository,
} from '../../infra/mongo/repositories';
import { StudyRecordModel, StudyRecordSchema } from '../../infra/mongo/schemas';
import {
  AddStudyRecordController,
  GetStudyRecordByDateController,
  GetStudyRecordsByRangeController,
} from './controllers';
import {
  AddStudyRecordService,
  GetStudyRecordByDateService,
  GetStudyRecordsByRangeService,
} from './services';

const controllers = [
  AddStudyRecordController,
  GetStudyRecordByDateController,
  GetStudyRecordsByRangeController,
];

const services = [
  AddStudyRecordService,
  GetStudyRecordByDateService,
  GetStudyRecordsByRangeService,
];

const repositories = [
  GetStudyRecordByDateRepository,
  CreateStudyRecordRepository,
  UpdateStudyRecordRepository,
  GetStudyRecordsByRangeRepository,
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
