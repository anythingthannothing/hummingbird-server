import { Inject, Injectable } from '@nestjs/common';

import {
  GetStudyRecordByDateServiceInput,
  IGetStudyRecordByDateRepository,
  IGetStudyRecordByDateService,
  StudyRecordDomain,
} from '../../../core/study-record';
import { GetStudyRecordByDateRepository } from '../../../infra/mongo/repositories';

@Injectable()
export class GetStudyRecordByDateService
  implements IGetStudyRecordByDateService
{
  constructor(
    @Inject(GetStudyRecordByDateRepository)
    private readonly getStudyRecordByDateRepository: IGetStudyRecordByDateRepository,
  ) {}
  execute(
    dto: GetStudyRecordByDateServiceInput,
  ): Promise<StudyRecordDomain | null> {
    if (dto.requesterId !== dto.userId) {
      //   TODO: 친구 기능 추가 시 친구 목록 확인 로직 추가
    }

    return this.getStudyRecordByDateRepository.execute(dto);
  }
}
