import { IBaseGetEntitiesRepository } from '../../i-base-repositories';
import { SubjectDomain } from '../subject.domain';

export type IGetSubjectByUserIdRepository = IBaseGetEntitiesRepository<
  number,
  SubjectDomain
>;
