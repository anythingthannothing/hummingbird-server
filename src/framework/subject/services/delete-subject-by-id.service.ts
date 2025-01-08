import { Inject, Injectable } from '@nestjs/common';

import {
  DeleteSubjectByIdServiceInput,
  IDeleteSubjectByIdService,
  IDeleteSubjectRepository,
  IGetSubjectByIdRepository,
  SubjectExceptionCodeEnum,
} from '../../../core/subject';
import {
  DeleteSubjectRepository,
  GetSubjectByIdRepository,
} from '../../../infra/mysql/repositories';
import {
  throwForbiddenException,
  throwNotFoundException,
} from '../../shared/exceptions';

@Injectable()
export class DeleteSubjectByIdService implements IDeleteSubjectByIdService {
  constructor(
    @Inject(GetSubjectByIdRepository)
    private readonly getSubjectByIdRepository: IGetSubjectByIdRepository,
    @Inject(DeleteSubjectRepository)
    private readonly deleteSubjectRepository: IDeleteSubjectRepository,
  ) {}

  public async execute(dto: DeleteSubjectByIdServiceInput): Promise<void> {
    const subject = await this.getSubjectByIdRepository.execute(dto.subjectId);

    if (!subject) {
      return throwNotFoundException(
        "The requested subject doesn't exist.",
        SubjectExceptionCodeEnum.SUBJECT_NOT_FOUNT,
      );
    }

    if (subject.userId !== dto.userId) {
      return throwForbiddenException(
        "You don't have permission to view this user's subjects.",
        SubjectExceptionCodeEnum.NO_PERMISSION_TO_EDIT_SUBJECTS,
      );
    }

    await this.deleteSubjectRepository.execute(subject);
  }
}
