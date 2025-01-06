import { AccountDomain } from '../../domains';
import { IBaseGetEntityRepository } from '../../i-base-repositories';

export type IGetAccountByUserIdRepository = IBaseGetEntityRepository<
  number,
  AccountDomain
>;
