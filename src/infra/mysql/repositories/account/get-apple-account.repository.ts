import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  AccountDomain,
  AuthProviderEnum,
  IGetAccountRepository,
} from '../../../../core/account';
import { AccountEntity } from '../../entities';

@Injectable()
export class GetAppleAccountRepository implements IGetAccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}
  public async execute(appleId: string): Promise<AccountDomain | null> {
    return this.accountRepository.findOne({
      where: {
        authProvider: AuthProviderEnum.apple,
        authProviderId: appleId,
      },
      relations: { user: true },
      withDeleted: true,
    });
  }
}
