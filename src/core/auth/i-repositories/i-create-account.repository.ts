import { AccountDomain } from '../../domains';
import { IBaseCreateEntityRepository } from '../../i-base-repositories';

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
