import { tags } from 'typia';

export interface IAppleLoginReqDto {
  appleId: string & tags.MaxLength<255>;
  email: string & tags.Format<'email'>;
}
