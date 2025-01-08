import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  AddStudyRecordServiceInput,
  ICreateStudyRecordRepository,
  StudyRecordDomain,
} from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class CreateStudyRecordRepository
  implements ICreateStudyRecordRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute(
    params: AddStudyRecordServiceInput,
  ): Promise<StudyRecordDomain> {
    const newStudyRecord = new this.studyRecordModel({
      date: params.date,
      userId: params.userId,
      totalDuration: params.totalDuration,
    });

    return await newStudyRecord.save();
  }
}
