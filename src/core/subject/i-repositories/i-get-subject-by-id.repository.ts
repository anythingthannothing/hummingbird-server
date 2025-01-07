import { IBaseGetEntityRepository } from '../../lib/i-base-repositories';
import { SubjectDomain } from '../subject.domain';

export type IGetSubjectByIdRepository = IBaseGetEntityRepository<
  string,
  SubjectDomain
>;
