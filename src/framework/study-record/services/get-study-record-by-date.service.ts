import { Inject, Injectable } from '@nestjs/common';

import {
  GetStudyRecordByDateServiceInput,
  IGetStudyRecordByDateRepository,
  IGetStudyRecordByDateService,
  StudyRecordDomain,
} from '../../../core/study-record';
import { StudyRecordExceptionCodeEnum } from '../../../core/study-record/study-record-exception-code.enum';
import { GetStudyRecordByDateRepository } from '../../../infra/mongo/repositories';
import { throwForbiddenException } from '../../shared/exceptions';

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
      return throwForbiddenException(
        "You do not have permission to access this user's study records.",
        StudyRecordExceptionCodeEnum.NO_PERMISSION_TO_VIEW_STUDY_RECORD,
      );
    }

    return this.getStudyRecordByDateRepository.execute(dto);
  }
}
