import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {
  IUpdateStudyRecordRepository,
  StudyRecordDomain,
} from '../../../../core/study-record';
import { StudyRecordModel } from '../../schemas';

@Injectable()
export class UpdateStudyRecordRepository
  implements IUpdateStudyRecordRepository
{
  constructor(
    @InjectModel(StudyRecordModel.name)
    private readonly studyRecordModel: Model<StudyRecordModel>,
  ) {}

  public async execute(entity: StudyRecordDomain): Promise<void> {
    await this.studyRecordModel.findByIdAndUpdate(
      entity.studyRecordId,
      entity,
      { upsert: false, new: true },
    );
  }
}
