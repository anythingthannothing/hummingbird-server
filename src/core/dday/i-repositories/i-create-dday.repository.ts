import { DdayDomain } from '../../domains/dday.domain';
import { IBaseCreateEntityRepository } from '../../i-base-repositories';
import { CreateDdayServiceInput } from '../i-services';

export type ICreateDdayRepository = IBaseCreateEntityRepository<
  CreateDdayServiceInput,
  DdayDomain
>;
