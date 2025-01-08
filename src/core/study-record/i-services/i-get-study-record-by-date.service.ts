import { StudyRecordDomain } from '../study-record.domain';

export class GetStudyRecordByDateServiceInput {
  constructor(
    public readonly date: string,
    public readonly userId: number,
    public readonly requesterId: number,
  ) {}
}

export interface IGetStudyRecordByDateService {
  execute(
    dto: GetStudyRecordByDateServiceInput,
  ): Promise<StudyRecordDomain | null>;
}
