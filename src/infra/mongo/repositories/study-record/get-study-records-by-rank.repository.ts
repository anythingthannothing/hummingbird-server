import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetLeaderBoardEntriesServiceInput } from 'src/core/leaderboard';
import { StudyRecordDomain } from 'src/core/study-record';

import { IGetStudyRecordsByRankRepository } from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class GetStudyRecordsByRankRepository
  implements IGetStudyRecordsByRankRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute({
    key,
    offset,
    limit,
  }: GetLeaderBoardEntriesServiceInput): Promise<StudyRecordDomain[]> {
    return this.studyRecordModel
      .find(
        { date: key },
        {
          userId: 1,
          totalDuration: 1,
        },
      )
      .skip(offset)
      .limit(limit)
      .exec();
  }
}
