import { IBaseGetEntityRepository } from '../../lib/i-base-repositories';
import { StudyRecordDomain } from '../study-record.domain';

export class GetStudyRecordByDateRepositoryInput {
  constructor(
    public readonly date: string,
    public readonly userId: number,
  ) {}
}

export type IGetStudyRecordByDateRepository = IBaseGetEntityRepository<
  GetStudyRecordByDateRepositoryInput,
  StudyRecordDomain
>;
