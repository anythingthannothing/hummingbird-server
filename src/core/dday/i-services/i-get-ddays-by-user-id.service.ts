import { DdayDomain } from '../../domains/dday.domain';

export interface IGetDdaysByUserIdService {
  execute(userId: number): Promise<DdayDomain[]>;
}
