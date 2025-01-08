import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  GetStudyRecordByDateRepositoryInput,
  IGetStudyRecordByDateRepository,
  StudyRecordDomain,
} from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class GetStudyRecordByDateRepository
  implements IGetStudyRecordByDateRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute({
    date,
    userId,
  }: GetStudyRecordByDateRepositoryInput): Promise<StudyRecordDomain | null> {
    return this.studyRecordModel.findOne({ date, userId }).exec();
  }
}
