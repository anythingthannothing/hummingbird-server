import { TypedQuery, TypedRoute } from '@nestia/core';
import { Controller, Inject } from '@nestjs/common';

import {
  GetLeaderBoardEntriesServiceInput,
  IGetLeaderboardEntriesService,
} from '../../../core/leaderboard';
import { GetLeaderboardEntriesService } from '../services';
import { IGetLeaderboardEntriesReqDto } from './i-get-leaderboard-entries.req.dto';
import { IGetLeaderboardEntriesResDto } from './i-get-leaderboard-entries.res.dto';

@Controller()
export class GetLeaderboardEntriesController {
  constructor(
    @Inject(GetLeaderboardEntriesService)
    private readonly getLeaderboardEntriesService: IGetLeaderboardEntriesService,
  ) {}

  @TypedRoute.Get('entries')
  public async execute(
    @TypedQuery() query: IGetLeaderboardEntriesReqDto,
  ): Promise<IGetLeaderboardEntriesResDto> {
    return await this.getLeaderboardEntriesService.execute(
      new GetLeaderBoardEntriesServiceInput(
        query.key,
        query.groupId,
        query.type,
        query.offset,
        query.limit,
      ),
    );
  }
}
