import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VerifyRefreshTokenInput } from '../../../core/auth';
import {
  ICreateRefreshTokenRepository,
  RefreshTokenDomain,
} from '../../../core/refresh-token';
import { RefreshTokenEntity } from '../../entities';

@Injectable()
export class CreateRefreshTokenRepository
  implements ICreateRefreshTokenRepository
{
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepository: Repository<RefreshTokenEntity>,
  ) {}

  public async execute(
    params: VerifyRefreshTokenInput,
  ): Promise<RefreshTokenDomain> {
    return this.refreshTokenRepository.save(params);
  }
}
