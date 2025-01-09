import { tags } from 'typia';

export interface IGetStudyRecordsByRangeReqDto {
  userId: number & tags.Type<'uint32'>;
  startDate: string & tags.Format<'date'>;
  endDate: string & tags.Format<'date'>;
}
