import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDomain } from 'src/core/domains';
import { Repository } from 'typeorm';

import { IGetAccountByUserIdRepository } from '../../../core/account';
import { AccountEntity } from '../../entities';

@Injectable()
export class GetAccountByUserIdRepository
  implements IGetAccountByUserIdRepository
{
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}
  public async execute(userId: number): Promise<AccountDomain | null> {
    return this.accountRepository.findOne({ where: { userId } });
  }
}
