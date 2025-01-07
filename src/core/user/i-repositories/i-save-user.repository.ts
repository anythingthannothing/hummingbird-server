import { IBaseSaveEntityRepository } from '../../i-base-repositories';
import { UserDomain } from '../user.domain';

export type ISaveUserRepository = IBaseSaveEntityRepository<UserDomain>;
