import { AccountDomain } from '../../domains';
import { IBaseGetEntityRepository } from '../../i-base-repositories';

export type IGetAccountRepository = IBaseGetEntityRepository<
  string,
  AccountDomain
>;
