import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { DdayDomain } from '../dday.domain';
import { CreateDdayServiceInput } from '../i-services';

export type ICreateDdayRepository = IBaseCreateEntityRepository<
  CreateDdayServiceInput,
  DdayDomain
>;
