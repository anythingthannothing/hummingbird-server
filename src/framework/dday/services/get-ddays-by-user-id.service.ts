import { Inject, Injectable } from '@nestjs/common';
import { DdayDomain } from 'src/core/dday/dday.domain';

import { IGetDdaysByUserIdService } from '../../../core/dday';
import { IGetDdaysByUserIdRepository } from '../../../core/dday';
import { GetDdaysByUserIdRepository } from '../../../infra/repositories';

@Injectable()
export class GetDdaysByUserIdService implements IGetDdaysByUserIdService {
  constructor(
    @Inject(GetDdaysByUserIdRepository)
    private readonly getDdaysByUserIdRepository: IGetDdaysByUserIdRepository,
  ) {}

  public async execute(userId: number): Promise<DdayDomain[]> {
    return this.getDdaysByUserIdRepository.execute(userId);
  }
}
