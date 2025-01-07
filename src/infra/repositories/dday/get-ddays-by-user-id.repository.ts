import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdayDomain } from 'src/core/dday/dday.domain';
import { Repository } from 'typeorm';

import { IGetDdaysByUserIdRepository } from '../../../core/dday';
import { DdayEntity } from '../../entities/dday.entity';

@Injectable()
export class GetDdaysByUserIdRepository implements IGetDdaysByUserIdRepository {
  constructor(
    @InjectRepository(DdayEntity)
    private readonly ddayRepository: Repository<DdayEntity>,
  ) {}

  public async execute(userId: number): Promise<DdayDomain[]> {
    return this.ddayRepository.findBy({ userId });
  }
}
