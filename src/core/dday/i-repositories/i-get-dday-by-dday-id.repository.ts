import { IBaseGetEntityRepository } from '../../i-base-repositories';
import { DdayDomain } from '../dday.domain';

export type IGetDdayByDdayIdRepository = IBaseGetEntityRepository<
  string,
  DdayDomain
>;
