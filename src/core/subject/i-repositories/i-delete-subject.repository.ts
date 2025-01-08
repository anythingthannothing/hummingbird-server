import { SubjectEntity } from '../../../infra/mysql/entities';
import { IBaseDeleteEntityRepository } from '../../lib/i-base-repositories';

export type IDeleteSubjectRepository =
  IBaseDeleteEntityRepository<SubjectEntity>;
