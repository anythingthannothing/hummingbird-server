import { DdayDomain } from '../../domains/dday.domain';
import { IBaseGetEntityRepository } from '../../i-base-repositories';

export type IGetDdayByDdayIdRepository = IBaseGetEntityRepository<
  string,
  DdayDomain
>;
