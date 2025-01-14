import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';

import { AppConfigModule } from './app-config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { AccessTokenGuard } from './auth/guards';
import { JwtTokenProvider } from './auth/providers';
import { DdayModule } from './dday/dday.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { StudyRecordModule } from './study-record/study-record.module';
import { SubjectModule } from './subject/subject.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UserModule,
    DdayModule,
    SubjectModule,
    StudyRecordModule,
    LeaderboardModule,
    RouterModule.register([
      { path: 'auth', children: [AuthModule] },
      { path: 'dday', children: [DdayModule] },
      { path: 'users', children: [UserModule] },
      { path: 'subjects', children: [SubjectModule] },
      { path: 'study-records', children: [StudyRecordModule] },
      { path: 'leaderboards', children: [LeaderboardModule] },
    ]),
  ],
  providers: [
    { provide: APP_GUARD, useClass: AccessTokenGuard },
    JwtTokenProvider,
  ],
})
export class AppModule {}
