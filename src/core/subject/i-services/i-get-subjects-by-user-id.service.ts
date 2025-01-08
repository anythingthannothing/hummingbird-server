import { SubjectDomain } from '../subject.domain';

export class GetSubjectsByUserIdServiceInput {
  constructor(
    public readonly userId: number,
    public readonly requesterId: number,
  ) {}
}

export interface IGetSubjectsByUserIdService {
  execute(dto: GetSubjectsByUserIdServiceInput): Promise<SubjectDomain[]>;
}
