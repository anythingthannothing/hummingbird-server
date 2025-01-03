import { DdayDomain } from '../../domains/dday.domain';

export class CreateDdayServiceInput {
  constructor(
    public readonly userId: number,
    public readonly title: string,
    public readonly color: string,
    public readonly targetDatetime: number,
  ) {}
}

export interface ICreateDdayService {
  execute(dto: CreateDdayServiceInput): Promise<DdayDomain>;
}
