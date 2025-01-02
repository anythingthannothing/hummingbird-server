import { tags } from 'typia';

export interface IGoogleLoginReqDto {
  googleId: string & tags.MaxLength<255>;
  email: string & tags.Format<'email'>;
}
