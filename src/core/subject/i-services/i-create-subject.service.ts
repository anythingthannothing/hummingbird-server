import { SubjectDomain } from '../subject.domain';

export class CreateSubjectServiceInput {
  constructor(
    public readonly userId: number,
    public readonly title: string,
    public readonly color: string,
    public readonly order: number,
  ) {}
}

export interface ICreateSubjectService {
  execute(dto: CreateSubjectServiceInput): Promise<SubjectDomain>;
}
