import { IBaseSaveEntityRepository } from '../../lib/i-base-repositories';
import { SubjectDomain } from '../subject.domain';

export type ISaveSubjectRepository = IBaseSaveEntityRepository<SubjectDomain>;
