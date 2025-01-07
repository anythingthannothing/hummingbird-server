import { Inject, Injectable } from '@nestjs/common';

import {
  IGetSubjectByIdRepository,
  ISaveSubjectRepository,
  IUpdateSubjectService,
  SubjectExceptionCodeEnum,
  UpdateSubjectServiceInput,
} from '../../../core/subject';
import {
  GetSubjectByIdRepository,
  SaveSubjectRepository,
} from '../../../infra/repositories';
import { throwNotFoundException } from '../../shared/exceptions';

@Injectable()
export class UpdateSubjectService implements IUpdateSubjectService {
  constructor(
    @Inject(GetSubjectByIdRepository)
    private readonly getSubjectByIdRepository: IGetSubjectByIdRepository,
    @Inject(SaveSubjectRepository)
    private readonly saveSubjectRepository: ISaveSubjectRepository,
  ) {}
  public async execute(dto: UpdateSubjectServiceInput): Promise<void> {
    const subject = await this.getSubjectByIdRepository.execute(dto.subjectId);

    if (!subject) {
      return throwNotFoundException(
        "The requested subject doesn't exist.",
        SubjectExceptionCodeEnum.SUBJECT_NOT_FOUNT,
      );
    }

    subject.title = dto.title ?? subject.title;
    subject.color = dto.color ?? subject.color;
    subject.order = dto.order ?? subject.order;

    await this.saveSubjectRepository.execute(subject);
  }
}
