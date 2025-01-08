import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';

import { VerifyRefreshTokenInput } from '../../../../core/auth';
import {
  IGetRefreshTokenRepository,
  RefreshTokenDomain,
} from '../../../../core/refresh-token';
import { RefreshTokenEntity } from '../../entities';

@Injectable()
export class GetRefreshTokenRepository implements IGetRefreshTokenRepository {
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepository: Repository<RefreshTokenEntity>,
  ) {}

  public async execute(
    dto: VerifyRefreshTokenInput,
  ): Promise<RefreshTokenDomain | null> {
    return this.refreshTokenRepository.findOneBy({
      userId: dto.userId,
      token: dto.token,
      expiresAt: MoreThanOrEqual(Math.floor(Date.now() / 1000)),
    });
  }
}
