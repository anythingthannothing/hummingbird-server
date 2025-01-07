import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubjectServiceInput } from 'src/core/subject/i-services';
import { SubjectEntity } from 'src/infra/entities';
import { Repository } from 'typeorm';

import { ICreateSubjectRepository } from '../../../core/subject';

@Injectable()
export class CreateSubjectRepository implements ICreateSubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  public async execute(
    params: CreateSubjectServiceInput,
  ): Promise<SubjectEntity> {
    const newSubject = this.subjectRepository.create(params);

    return this.subjectRepository.save(newSubject);
  }
}
