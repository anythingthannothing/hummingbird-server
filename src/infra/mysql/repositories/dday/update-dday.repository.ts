import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdayDomain } from 'src/core/dday/dday.domain';
import { Repository } from 'typeorm';

import { IUpdateDdayRepository } from '../../../../core/dday';
import { DdayEntity } from '../../entities/dday.entity';

@Injectable()
export class UpdateDdayRepository implements IUpdateDdayRepository {
  constructor(
    @InjectRepository(DdayEntity)
    private readonly ddayRepository: Repository<DdayEntity>,
  ) {}

  public async execute(entity: DdayDomain): Promise<void> {
    await this.ddayRepository.save(entity);
  }
}
