import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { AppConfigModule } from './app-config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UserModule,
    RouterModule.register([{ path: 'auth', children: [AuthModule] }]),
  ],
})
export class AppModule {}
