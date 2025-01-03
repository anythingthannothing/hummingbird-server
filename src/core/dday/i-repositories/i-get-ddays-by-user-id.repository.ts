import { DdayDomain } from '../../domains/dday.domain';
import { IBaseGetEntitiesRepository } from '../../i-base-repositories';

export type IGetDdaysByUserIdRepository = IBaseGetEntitiesRepository<
  number,
  DdayDomain
>;
