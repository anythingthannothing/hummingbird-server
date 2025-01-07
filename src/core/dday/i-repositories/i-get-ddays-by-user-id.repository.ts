import { IBaseGetEntitiesRepository } from '../../i-base-repositories';
import { DdayDomain } from '../dday.domain';

export type IGetDdaysByUserIdRepository = IBaseGetEntitiesRepository<
  number,
  DdayDomain
>;
