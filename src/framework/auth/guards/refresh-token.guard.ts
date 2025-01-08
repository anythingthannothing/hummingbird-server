import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import {
  authConst,
  IJwtTokenProvider,
  IRefreshTokenProvider,
} from '../../../core/auth';
import { JwtTokenProvider, RefreshTokenProvider } from '../providers';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  constructor(
    @Inject(JwtTokenProvider) private readonly jwtProvider: IJwtTokenProvider,
    @Inject(RefreshTokenProvider)
    private readonly refreshTokenProvider: IRefreshTokenProvider,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;

    const accessToken = request.headers.authorization;
    const refreshToken = request.headers.refreshtoken;

    if (!accessToken || !refreshToken) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtProvider.decode(accessToken);

      if (!payload) {
        return false;
      }

      const isVerified = await this.refreshTokenProvider.verify({
        userId: payload.userId,
        token: refreshToken as string,
      });

      if (!isVerified) {
        return false;
      }
      request[authConst.USER_KEY] = payload;
    } catch (_) {
      return false;
    }

    return true;
  }
}
