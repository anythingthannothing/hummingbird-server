import { Inject, Injectable } from '@nestjs/common';
import { DdayDomain } from 'src/core/dday/dday.domain';

import {
  CreateDdayServiceInput,
  ICreateDdayRepository,
  ICreateDdayService,
} from '../../../core/dday';
import { CreateDdayRepository } from '../../../infra/repositories';

@Injectable()
export class CreateDdayService implements ICreateDdayService {
  constructor(
    @Inject(CreateDdayRepository)
    private readonly createDdayRepository: ICreateDdayRepository,
  ) {}

  public async execute(dto: CreateDdayServiceInput): Promise<DdayDomain> {
    return this.createDdayRepository.execute(dto);
  }
}
