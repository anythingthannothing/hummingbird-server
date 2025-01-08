import { Inject, Injectable } from '@nestjs/common';
import { SubjectDomain, SubjectExceptionCodeEnum } from 'src/core/subject';

import { IGetSubjectByUserIdRepository } from '../../../core/subject';
import {
  GetSubjectsByUserIdServiceInput,
  IGetSubjectsByUserIdService,
} from '../../../core/subject';
import { GetSubjectsByUserIdRepository } from '../../../infra/mysql/repositories';
import { throwForbiddenException } from '../../shared/exceptions';

@Injectable()
export class GetSubjectsByUserIdService implements IGetSubjectsByUserIdService {
  constructor(
    @Inject(GetSubjectsByUserIdRepository)
    private readonly getSubjectsByUserIdRepository: IGetSubjectByUserIdRepository,
  ) {}

  public async execute(
    dto: GetSubjectsByUserIdServiceInput,
  ): Promise<SubjectDomain[]> {
    if (dto.userId !== dto.requesterId) {
      return throwForbiddenException(
        "You don't have permission to view this user's subjects.",
        SubjectExceptionCodeEnum.NO_PERMISSION_TO_VIEW_SUBJECTS,
      );
    }

    return this.getSubjectsByUserIdRepository.execute(dto.userId);
  }
}
