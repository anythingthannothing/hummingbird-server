import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ISaveSubjectRepository, SubjectDomain } from '../../../core/subject';
import { SubjectEntity } from '../../entities';

@Injectable()
export class SaveSubjectRepository implements ISaveSubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  public async execute(entity: SubjectDomain): Promise<void> {
    await this.subjectRepository.save(entity);
  }
}
