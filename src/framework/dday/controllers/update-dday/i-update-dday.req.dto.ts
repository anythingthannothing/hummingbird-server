import { tags } from 'typia';
import { MaxLength, MinLength, Type } from 'typia/lib/tags';

export interface IUpdateDdayReqDto {
  ddayId: string & tags.Pattern<'^[0-9]+$'>;
  title?: string & MaxLength<255>;
  color?: string & MinLength<6> & MaxLength<6>;
  targetDatetime?: number & Type<'uint32'>;
}
