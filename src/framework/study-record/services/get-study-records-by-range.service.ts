import { Inject, Injectable } from '@nestjs/common';

import {
  GetStudyRecordsByRangeServiceInput,
  IGetStudyRecordsByRangeService,
  StudyRecordDomain,
} from '../../../core/study-record';
import { IGetStudyRecordsByRangeRepository } from '../../../core/study-record';
import { StudyRecordExceptionCodeEnum } from '../../../core/study-record/study-record-exception-code.enum';
import { GetStudyRecordsByRangeRepository } from '../../../infra/mongo/repositories';
import { throwForbiddenException } from '../../shared/exceptions';

@Injectable()
export class GetStudyRecordsByRangeService
  implements IGetStudyRecordsByRangeService
{
  constructor(
    @Inject(GetStudyRecordsByRangeRepository)
    private readonly getStudyRecordsByRangeRepository: IGetStudyRecordsByRangeRepository,
  ) {}

  public async execute(
    dto: GetStudyRecordsByRangeServiceInput,
  ): Promise<StudyRecordDomain[]> {
    // TODO: 추후 타 유저 조회 시 인가 로직 추가
    if (dto.requesterId !== dto.userId) {
      return throwForbiddenException(
        "You do not have permission to access this user's study records.",
        StudyRecordExceptionCodeEnum.NO_PERMISSION_TO_VIEW_STUDY_RECORD,
      );
    }

    return this.getStudyRecordsByRangeRepository.execute(dto);
  }
}
