import { Module } from '@nestjs/common';

import { AppConfigModule } from './app-config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppConfigModule, AuthModule, UserModule],
})
export class AppModule {}
