import { VerifyRefreshTokenInput } from '../../auth';
import { RefreshTokenDomain } from '../../domains';
import { IBaseGetEntityRepository } from '../../i-base-repositories';

export type IGetRefreshTokenRepository = IBaseGetEntityRepository<
  VerifyRefreshTokenInput,
  RefreshTokenDomain
>;
