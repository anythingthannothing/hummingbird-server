export class DeleteSubjectByIdServiceInput {
  constructor(
    public readonly subjectId: string,
    public readonly userId: number,
  ) {}
}

export interface IDeleteSubjectByIdService {
  execute(dto: DeleteSubjectByIdServiceInput): Promise<void>;
}
