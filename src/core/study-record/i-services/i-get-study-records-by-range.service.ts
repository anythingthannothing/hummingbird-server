import { StudyRecordDomain } from '../study-record.domain';

export class GetStudyRecordsByRangeServiceInput {
  constructor(
    public readonly userId: number,
    public readonly requesterId: number,
    public readonly startDate: string,
    public readonly endDate: string,
  ) {}
}

export interface IGetStudyRecordsByRangeService {
  execute(
    dto: GetStudyRecordsByRangeServiceInput,
  ): Promise<StudyRecordDomain[]>;
}
