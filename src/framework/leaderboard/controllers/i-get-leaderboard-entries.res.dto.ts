import { LeaderboardEntry } from '../../../core/leaderboard';

export interface IGetLeaderboardEntriesResDto {
  entries: LeaderboardEntry[];
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
