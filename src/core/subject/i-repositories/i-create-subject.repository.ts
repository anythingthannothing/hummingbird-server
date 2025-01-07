import { SubjectEntity } from '../../../infra/entities';
import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { CreateSubjectServiceInput } from '../i-services/i-create-subject.service';

export type ICreateSubjectRepository = IBaseCreateEntityRepository<
  CreateSubjectServiceInput,
  SubjectEntity
>;
