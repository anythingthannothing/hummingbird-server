import { IBaseGetEntityRepository } from '../../lib/i-base-repositories';
import { DdayDomain } from '../dday.domain';

export type IGetDdayByDdayIdRepository = IBaseGetEntityRepository<
  string,
  DdayDomain
>;
