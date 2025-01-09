import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  GetStudyRecordsByRangeServiceInput,
  IGetStudyRecordsByRangeRepository,
  StudyRecordDomain,
} from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class GetStudyRecordsByRangeRepository
  implements IGetStudyRecordsByRangeRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute({
    userId,
    startDate,
    endDate,
  }: GetStudyRecordsByRangeServiceInput): Promise<StudyRecordDomain[]> {
    return this.studyRecordModel
      .find({
        userId,
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      })
      .sort({ date: 1 })
      .exec();
  }
}
