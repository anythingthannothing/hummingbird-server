import { UserDomain } from '../../domains';
import { IBaseGetEntityRepository } from '../../i-base-repositories';

export type IGetUserByUserIdRepository = IBaseGetEntityRepository<
  number,
  UserDomain
>;
