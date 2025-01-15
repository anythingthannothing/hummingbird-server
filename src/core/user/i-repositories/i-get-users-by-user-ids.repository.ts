import { IBaseGetEntitiesRepository } from '../../lib/i-base-repositories';
import { UserDomain } from '../user.domain';

export type IGetUsersByUserIdsRepository = IBaseGetEntitiesRepository<
  number[],
  UserDomain
>;
