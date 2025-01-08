import { IBaseGetEntitiesRepository } from '../../lib/i-base-repositories';
import { SubjectDomain } from '../subject.domain';

export type IGetSubjectByUserIdRepository = IBaseGetEntitiesRepository<
  number,
  SubjectDomain
>;
