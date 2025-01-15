import { UserDomain } from '../user.domain';

export interface IGetUserInfoService {
  execute(userId: number): Promise<UserDomain>;
}
