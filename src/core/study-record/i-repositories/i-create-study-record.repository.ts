import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { AddStudyRecordServiceInput } from '../i-services';
import { StudyRecordDomain } from '../study-record.domain';

export type ICreateStudyRecordRepository = IBaseCreateEntityRepository<
  AddStudyRecordServiceInput,
  StudyRecordDomain
>;
