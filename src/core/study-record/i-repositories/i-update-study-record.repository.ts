import { AddStudyRecordServiceInput } from '../i-services';
import { StudyRecordDomain } from '../study-record.domain';

export interface IUpdateStudyRecordRepository {
  execute(
    entity: StudyRecordDomain,
    update: AddStudyRecordServiceInput,
  ): Promise<void>;
}
