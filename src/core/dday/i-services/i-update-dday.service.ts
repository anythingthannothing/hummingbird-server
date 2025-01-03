export class UpdateDdayServiceInput {
  constructor(
    public readonly ddayId: string,
    public readonly userId: number,
    public readonly title?: string,
    public readonly color?: string,
    public readonly targetDatetime?: number,
  ) {}
}

export interface IUpdateDdayService {
  execute(dto: UpdateDdayServiceInput): Promise<void>;
}
