import { IBaseGetEntityRepository } from '../../lib/i-base-repositories';
import { UserDomain } from '../user.domain';

export type IGetUserByUserIdRepository = IBaseGetEntityRepository<
  number,
  UserDomain
>;
