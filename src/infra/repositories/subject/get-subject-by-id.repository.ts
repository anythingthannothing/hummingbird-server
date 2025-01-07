import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  IGetSubjectByIdRepository,
  SubjectDomain,
} from '../../../core/subject';
import { SubjectEntity } from '../../entities';

@Injectable()
export class GetSubjectByIdRepository implements IGetSubjectByIdRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}
  public async execute(subjectId: string): Promise<SubjectDomain | null> {
    return this.subjectRepository.findOne({ where: { subjectId } });
  }
}
