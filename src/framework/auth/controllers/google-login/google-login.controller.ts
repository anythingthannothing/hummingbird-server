import { TypedBody, TypedRoute } from '@nestia/core';
import { Controller, Inject } from '@nestjs/common';

import { IGoogleLoginService } from '../../../../core/auth';
import { GoogleLoginService } from '../../services';
import { IGoogleLoginReqDto } from './i-google-login.req.dto';
import { IGoogleLoginResDto } from './i-google-login.res.dto';

@Controller()
export class GoogleLoginController {
  constructor(
    @Inject(GoogleLoginService)
    private readonly googleLoginService: IGoogleLoginService,
  ) {}

  @TypedRoute.Post('/google')
  public async execute(
    @TypedBody() body: IGoogleLoginReqDto,
  ): Promise<IGoogleLoginResDto> {
    const loginResult = await this.googleLoginService.execute(body);

    return {
      accessToken: '',
      refreshToken: '',
      expiresAt: 123,
      isNewUser: loginResult.isNewUser,
    };
  }
}
