import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ISoftDeleteAccountByAccountIdRepository } from '../../../../core/account';
import { AccountEntity } from '../../entities';

@Injectable()
export class SoftDeleteAccountByAccountIdRepository
  implements ISoftDeleteAccountByAccountIdRepository
{
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  public async execute(accountId: number): Promise<void> {
    await this.accountRepository.softDelete(accountId);
  }
}
