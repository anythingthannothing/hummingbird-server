import { GetLeaderBoardEntriesServiceInput } from '../../leaderboard';

export interface ICountStudyRecordsByTypeRepository {
  execute(predicate: GetLeaderBoardEntriesServiceInput): Promise<number>;
}
