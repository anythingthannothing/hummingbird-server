export interface IGetLeaderboardEntriesReqDto {
  key: string;
  type?: 'daily' | 'weekly' | 'monthly';
  groupId?: number;
  offset?: number;
  limit?: number;
}
