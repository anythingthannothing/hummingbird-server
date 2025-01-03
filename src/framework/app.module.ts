import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';

import { AppConfigModule } from './app-config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { AccessTokenGuard } from './auth/guards';
import { JwtTokenProvider } from './auth/providers';
import { DdayModule } from './dday/dday.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UserModule,
    RouterModule.register([
      { path: 'auth', children: [AuthModule] },
      { path: 'dday', children: [DdayModule] },
    ]),
    DdayModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    JwtTokenProvider,
  ],
})
export class AppModule {}
