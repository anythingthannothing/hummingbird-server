import { Injectable } from '@nestjs/common';

import {
  AccountDomain,
  AuthProviderEnum,
  CreateAccountRepositoryInput,
  ICreateAccountRepository,
} from '../../../../core/account';
import { DbContextProvider } from '../../../../framework/shared/providers';
import { AccountEntity } from '../../entities';

@Injectable()
export class CreateGoogleAccountRepository implements ICreateAccountRepository {
  constructor(private readonly dbContext: DbContextProvider) {}

  public async execute(
    params: CreateAccountRepositoryInput,
  ): Promise<AccountDomain> {
    const accountRepository = this.dbContext.getRepository(AccountEntity);

    const newAccount = accountRepository.create({
      authProvider: AuthProviderEnum.google,
      authProviderId: params.authProviderId,
      userId: params.userId,
      email: params.email,
    });

    return accountRepository.save(newAccount);
  }
}
