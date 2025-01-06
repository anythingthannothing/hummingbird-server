import { tags } from 'typia';

export interface IUpdateUserReqDto {
  nickname?: string & tags.MinLength<1> & tags.MaxLength<30>;
  birthDate?: string & tags.Format<'date'>;
  countryCode?: string & tags.MinLength<2> & tags.MaxLength<2>;
}
