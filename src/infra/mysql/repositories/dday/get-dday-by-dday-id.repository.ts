import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdayDomain } from 'src/core/dday/dday.domain';
import { Repository } from 'typeorm';

import { IGetDdayByDdayIdRepository } from '../../../../core/dday';
import { DdayEntity } from '../../entities/dday.entity';

@Injectable()
export class GetDdayByDdayIdRepository implements IGetDdayByDdayIdRepository {
  constructor(
    @InjectRepository(DdayEntity)
    private readonly ddayRepository: Repository<DdayEntity>,
  ) {}

  public async execute(ddayId: string): Promise<DdayDomain | null> {
    return this.ddayRepository.findOneBy({ ddayId });
  }
}
