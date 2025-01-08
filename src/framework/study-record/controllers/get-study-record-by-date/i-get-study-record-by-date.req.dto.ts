import { tags } from 'typia';

export interface IGetStudyRecordByDateReqDto {
  date: string & tags.Format<'date'>;
  userId: number & tags.Type<'uint32'>;
}
