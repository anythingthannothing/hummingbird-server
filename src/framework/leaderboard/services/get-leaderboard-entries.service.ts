import { Inject, Injectable } from '@nestjs/common';

import {
  GetLeaderBoardEntriesServiceInput,
  GetLeaderboardEntriesServiceOutput,
  IGetLeaderboardEntriesService,
} from '../../../core/leaderboard';
import {
  ICountStudyRecordsByTypeRepository,
  IGetStudyRecordsByRankRepository,
} from '../../../core/study-record';
import { IGetUsersByUserIdsRepository } from '../../../core/user';
import {
  CountStudyRecordsByTypeRepository,
  GetStudyRecordsByRankRepository,
} from '../../../infra/mongo/repositories';
import { GetUsersByUserIdsRepository } from '../../../infra/mysql/repositories';

@Injectable()
export class GetLeaderboardEntriesService
  implements IGetLeaderboardEntriesService
{
  constructor(
    @Inject(CountStudyRecordsByTypeRepository)
    private readonly countStudyRecordsByTypeRepository: ICountStudyRecordsByTypeRepository,
    @Inject(GetStudyRecordsByRankRepository)
    private readonly getStudyRecordsByRankRepository: IGetStudyRecordsByRankRepository,
    @Inject(GetUsersByUserIdsRepository)
    private readonly getUsersByUserIdsRepository: IGetUsersByUserIdsRepository,
  ) {}

  public async execute(
    dto: GetLeaderBoardEntriesServiceInput,
  ): Promise<GetLeaderboardEntriesServiceOutput> {
    const entries = await this.getStudyRecordsByRankRepository.execute(dto);
    const totalCount =
      await this.countStudyRecordsByTypeRepository.execute(dto);

    const userIds = entries.map((entry) => Number(entry.userId));

    const users = await this.getUsersByUserIdsRepository.execute(userIds);

    const userMap = new Map<
      number,
      { nickname: string | null; thumbnailUrl: string | null }
    >();
    for (const user of users) {
      userMap.set(user.userId, {
        nickname: user.nickname,
        thumbnailUrl: null,
      });
    }

    const mappedEntries = entries.map((entry, index) => {
      const user = userMap.get(Number(entry.userId));
      return {
        rank: dto.offset + index + 1,
        score: entry.totalDuration,
        userId: userIds[index],
        nickname: user?.nickname ?? null,
        thumbnailUrl: user?.thumbnailUrl ?? null,
      };
    });

    return {
      totalCount,
      hasNextPage: totalCount > dto.offset + dto.limit,
      hasPreviousPage: dto.offset > 0,
      entries: mappedEntries,
    };
  }
}
