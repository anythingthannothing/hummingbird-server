import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CountStudyRecordsByTypeRepository,
  GetStudyRecordsByRankRepository,
} from '../../infra/mongo/repositories';
import { StudyRecordModel, StudyRecordSchema } from '../../infra/mongo/schemas';
import { UserEntity } from '../../infra/mysql/entities';
import { GetUsersByUserIdsRepository } from '../../infra/mysql/repositories';
import { GetLeaderboardEntriesController } from './controllers';
import { GetLeaderboardEntriesService } from './services';

const controllers = [GetLeaderboardEntriesController];

const services = [GetLeaderboardEntriesService];

const repositories = [
  GetStudyRecordsByRankRepository,
  CountStudyRecordsByTypeRepository,
  GetUsersByUserIdsRepository,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    MongooseModule.forFeature([
      { name: StudyRecordModel.name, schema: StudyRecordSchema },
    ]),
  ],
  controllers: [...controllers],
  providers: [...services, ...repositories],
})
export class LeaderboardModule {}
