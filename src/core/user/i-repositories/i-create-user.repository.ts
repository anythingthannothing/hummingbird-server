import { UserDomain } from '../../domains';
import { IBaseCreateEntityRepository } from '../../i-base-repositories';

export type ICreateUserRepository = IBaseCreateEntityRepository<
  string,
  UserDomain
>;
