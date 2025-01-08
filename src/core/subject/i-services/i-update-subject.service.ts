export class UpdateSubjectServiceInput {
  constructor(
    public readonly subjectId: string,
    public readonly userId: number,
    public readonly title?: string,
    public readonly color?: string,
    public readonly order?: number,
  ) {}
}

export interface IUpdateSubjectService {
  execute(dto: UpdateSubjectServiceInput): Promise<void>;
}
