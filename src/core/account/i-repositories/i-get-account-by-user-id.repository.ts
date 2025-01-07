import { IBaseGetEntityRepository } from '../../i-base-repositories';
import { AccountDomain } from '../account.domain';

export type IGetAccountByUserIdRepository = IBaseGetEntityRepository<
  number,
  AccountDomain
>;
