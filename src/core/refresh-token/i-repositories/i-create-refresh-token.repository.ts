import { VerifyRefreshTokenInput } from '../../auth';
import { RefreshTokenDomain } from '../../domains';
import { IBaseCreateEntityRepository } from '../../i-base-repositories';

export type ICreateRefreshTokenRepository = IBaseCreateEntityRepository<
  VerifyRefreshTokenInput | { expiresAt: number },
  RefreshTokenDomain
>;
