import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetLeaderBoardEntriesServiceInput } from 'src/core/leaderboard';

import { ICountStudyRecordsByTypeRepository } from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class CountStudyRecordsByTypeRepository
  implements ICountStudyRecordsByTypeRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute({
    key,
  }: GetLeaderBoardEntriesServiceInput): Promise<number> {
    return this.studyRecordModel.countDocuments({ date: key }).exec();
  }
}
