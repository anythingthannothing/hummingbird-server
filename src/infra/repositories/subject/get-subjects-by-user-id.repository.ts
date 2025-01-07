import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  IGetSubjectByUserIdRepository,
  SubjectDomain,
} from '../../../core/subject';
import { SubjectEntity } from '../../entities';

@Injectable()
export class GetSubjectsByUserIdRepository
  implements IGetSubjectByUserIdRepository
{
  @InjectRepository(SubjectEntity)
  private readonly subjectRepository: Repository<SubjectEntity>;

  public async execute(userId: number): Promise<SubjectDomain[]> {
    return this.subjectRepository.find({
      select: {
        subjectId: true,
        title: true,
        color: true,
        order: true,
        updatedAt: true,
      },
      where: { userId },
    });
  }
}
