import { Inject, Injectable } from '@nestjs/common';

import {
  AddStudyRecordServiceInput,
  IAddStudyRecordService,
  ICreateStudyRecordRepository,
  IGetStudyRecordByDateRepository,
  IUpdateStudyRecordRepository,
} from '../../../core/study-record';
import {
  CreateStudyRecordRepository,
  GetStudyRecordByDateRepository,
  UpdateStudyRecordRepository,
} from '../../../infra/mongo/repositories';

@Injectable()
export class AddStudyRecordService implements IAddStudyRecordService {
  constructor(
    @Inject(GetStudyRecordByDateRepository)
    private readonly getStudyRecordByDateRepository: IGetStudyRecordByDateRepository,
    @Inject(CreateStudyRecordRepository)
    private readonly createStudyRecordRepository: ICreateStudyRecordRepository,
    @Inject(UpdateStudyRecordRepository)
    private readonly updateStudyRecordRepository: IUpdateStudyRecordRepository,
  ) {}

  public async execute(dto: AddStudyRecordServiceInput): Promise<void> {
    let studyRecord = await this.getStudyRecordByDateRepository.execute(
      dto.mapToGetStudyRecordByDateRepositoryInput(),
    );

    if (!studyRecord) {
      studyRecord = await this.createStudyRecordRepository.execute(dto);
    }

    studyRecord.totalDuration = dto.totalDuration;
    studyRecord.studies.push(dto.mapToStudy());

    await this.updateStudyRecordRepository.execute(studyRecord, dto);
  }
}
