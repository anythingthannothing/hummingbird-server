export class DeleteDdayServiceInput {
  constructor(
    public readonly ddayId: string,
    public readonly userId: number,
  ) {}
}

export interface IDeleteDdayByDdayIdService {
  execute(dto: DeleteDdayServiceInput): Promise<void>;
}
