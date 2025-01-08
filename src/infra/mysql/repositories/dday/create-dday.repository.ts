import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DdayDomain } from 'src/core/dday/dday.domain';
import { Repository } from 'typeorm';

import {
  CreateDdayServiceInput,
  ICreateDdayRepository,
} from '../../../../core/dday';
import { DdayEntity } from '../../entities/dday.entity';

@Injectable()
export class CreateDdayRepository implements ICreateDdayRepository {
  constructor(
    @InjectRepository(DdayEntity)
    private readonly ddayRepository: Repository<DdayEntity>,
  ) {}

  public async execute(params: CreateDdayServiceInput): Promise<DdayDomain> {
    const newDday = this.ddayRepository.create(params);
    return this.ddayRepository.save(newDday);
  }
}
