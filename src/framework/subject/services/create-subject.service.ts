import { Inject, Injectable } from '@nestjs/common';
import { ICreateSubjectRepository, SubjectDomain } from 'src/core/subject';

import {
  CreateSubjectServiceInput,
  ICreateSubjectService,
} from '../../../core/subject';
import { CreateSubjectRepository } from '../../../infra/repositories';

@Injectable()
export class CreateSubjectService implements ICreateSubjectService {
  constructor(
    @Inject(CreateSubjectRepository)
    private readonly createSubjectRepository: ICreateSubjectRepository,
  ) {}

  public async execute(dto: CreateSubjectServiceInput): Promise<SubjectDomain> {
    return this.createSubjectRepository.execute(dto);
  }
}
