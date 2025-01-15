import { GetLeaderBoardEntriesServiceInput } from '../../leaderboard';
import { IBaseGetEntitiesRepository } from '../../lib/i-base-repositories';
import { StudyRecordDomain } from '../study-record.domain';

export type IGetStudyRecordsByRankRepository = IBaseGetEntitiesRepository<
  GetLeaderBoardEntriesServiceInput,
  StudyRecordDomain
>;
