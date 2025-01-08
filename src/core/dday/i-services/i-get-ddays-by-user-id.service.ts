import { DdayDomain } from '../dday.domain';

export interface IGetDdaysByUserIdService {
  execute(userId: number): Promise<DdayDomain[]>;
}
