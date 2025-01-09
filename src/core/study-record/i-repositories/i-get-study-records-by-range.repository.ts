import { IBaseGetEntitiesRepository } from '../../lib/i-base-repositories';
import { GetStudyRecordsByRangeServiceInput } from '../i-services';
import { StudyRecordDomain } from '../study-record.domain';

export type IGetStudyRecordsByRangeRepository = IBaseGetEntitiesRepository<
  GetStudyRecordsByRangeServiceInput,
  StudyRecordDomain
>;
