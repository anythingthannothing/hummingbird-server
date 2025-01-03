import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdayDomain } from 'src/core/domains/dday.domain';
import { Repository } from 'typeorm';

import { IDeleteDdayRepository } from '../../../core/dday';
import { DdayEntity } from '../../entities/dday.entity';

@Injectable()
export class DeleteDdayRepository implements IDeleteDdayRepository {
  constructor(
    @InjectRepository(DdayEntity)
    private readonly ddayRepository: Repository<DdayEntity>,
  ) {}

  public async execute(entity: DdayDomain): Promise<void> {
    await this.ddayRepository.delete(entity.ddayId);
  }
}
