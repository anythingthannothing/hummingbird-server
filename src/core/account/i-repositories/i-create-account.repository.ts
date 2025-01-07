import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { AccountDomain } from '../account.domain';

export class CreateAccountRepositoryInput {
  constructor(
    public readonly authProviderId: string,
    public readonly userId: number,
    public readonly email: string,
  ) {}
}

export type ICreateAccountRepository = IBaseCreateEntityRepository<
  CreateAccountRepositoryInput,
  AccountDomain
>;
