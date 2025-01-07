import { IBaseCreateEntityRepository } from '../../i-base-repositories';
import { UserDomain } from '../user.domain';

export type ICreateUserRepository = IBaseCreateEntityRepository<
  string,
  UserDomain
>;
