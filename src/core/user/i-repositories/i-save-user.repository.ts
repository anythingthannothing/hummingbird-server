import { UserDomain } from '../../domains';
import { IBaseSaveEntityRepository } from '../../i-base-repositories';

export type ISaveUserRepository = IBaseSaveEntityRepository<UserDomain>;
