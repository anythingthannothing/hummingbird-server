import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import {
  IGetAccountByUserIdRepository,
  ISoftDeleteAccountByAccountIdRepository,
} from '../../../core/account';
import { ICancelAccountByUserIdService } from '../../../core/auth';
import {
  GetAccountByUserIdRepository,
  SoftDeleteAccountByAccountIdRepository,
} from '../../../infra/mysql/repositories';

@Injectable()
export class CancelAccountByUserIdService
  implements ICancelAccountByUserIdService
{
  constructor(
    @Inject(GetAccountByUserIdRepository)
    private readonly getAccountByUserIdRepository: IGetAccountByUserIdRepository,
    @Inject(SoftDeleteAccountByAccountIdRepository)
    private readonly softDeleteAccountByAccountIdRepository: ISoftDeleteAccountByAccountIdRepository,
  ) {}
  public async execute(userId: number): Promise<void> {
    const account = await this.getAccountByUserIdRepository.execute(userId);

    if (!account) {
      throw new NotFoundException();
    }

    await this.softDeleteAccountByAccountIdRepository.execute(
      account.accountId,
    );
  }
}
