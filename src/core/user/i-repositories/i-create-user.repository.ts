import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { UserDomain } from '../user.domain';

export type ICreateUserRepository = IBaseCreateEntityRepository<
  string,
  UserDomain
>;
