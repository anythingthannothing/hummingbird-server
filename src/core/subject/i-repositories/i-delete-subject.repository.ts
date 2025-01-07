import { SubjectEntity } from '../../../infra/entities';
import { IBaseDeleteEntityRepository } from '../../lib/i-base-repositories';

export type IDeleteSubjectRepository =
  IBaseDeleteEntityRepository<SubjectEntity>;
