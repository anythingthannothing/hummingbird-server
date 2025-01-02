import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import { IJwtTokenProvider, IRefreshTokenProvider } from '../../../core/auth';
import { authConst } from '../../../core/lib';
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

    const token = request.headers.authorization;

    if (!token || !request.body.refreshToken) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtProvider.decode(token);

      const isVerified = await this.refreshTokenProvider.verify({
        userId: payload.userId,
        token: request.body.refreshToken as string,
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
