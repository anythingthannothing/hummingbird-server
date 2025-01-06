import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountDomain } from 'src/core/domains';
import { Repository } from 'typeorm';

import { IGetAccountRepository } from '../../../core/account';
import { AccountEntity } from '../../entities';

@Injectable()
export class GetGoogleAccountRepository implements IGetAccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  public async execute(googleId: string): Promise<AccountDomain | null> {
    return this.accountRepository.findOne({
      where: { authProviderId: googleId },
      relations: {
        user: true,
      },
      withDeleted: true,
    });
  }
}
