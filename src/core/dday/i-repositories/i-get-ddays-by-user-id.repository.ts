import { IBaseGetEntitiesRepository } from '../../lib/i-base-repositories';
import { DdayDomain } from '../dday.domain';

export type IGetDdaysByUserIdRepository = IBaseGetEntitiesRepository<
  number,
  DdayDomain
>;
