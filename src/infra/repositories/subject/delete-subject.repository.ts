import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/infra/entities';
import { Repository } from 'typeorm';

import { IDeleteSubjectRepository } from '../../../core/subject';

@Injectable()
export class DeleteSubjectRepository implements IDeleteSubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  public async execute(entity: SubjectEntity): Promise<void> {
    await this.subjectRepository.delete(entity.subjectId);
  }
}
