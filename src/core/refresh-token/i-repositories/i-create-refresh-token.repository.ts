import { VerifyRefreshTokenInput } from '../../auth';
import { IBaseCreateEntityRepository } from '../../lib/i-base-repositories';
import { RefreshTokenDomain } from '../refresh-token.domain';

export type ICreateRefreshTokenRepository = IBaseCreateEntityRepository<
  VerifyRefreshTokenInput | { expiresAt: number },
  RefreshTokenDomain
>;
