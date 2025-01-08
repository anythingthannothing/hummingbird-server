import { VerifyRefreshTokenInput } from '../../auth';
import { IBaseGetEntityRepository } from '../../lib/i-base-repositories';
import { RefreshTokenDomain } from '../refresh-token.domain';

export type IGetRefreshTokenRepository = IBaseGetEntityRepository<
  VerifyRefreshTokenInput,
  RefreshTokenDomain
>;
