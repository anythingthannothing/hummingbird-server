import { UserDomain } from '../user/user.domain';

export interface DdayDomain {
  ddayId: string;
  userId: number;
  user: UserDomain;
  title: string;
  color: string;
  targetDatetime: number;
}
