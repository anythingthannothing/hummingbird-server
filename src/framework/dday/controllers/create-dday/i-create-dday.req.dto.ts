import { MaxLength, MinLength, Type } from 'typia/lib/tags';

export interface ICreateDdayReqDto {
  title: string & MaxLength<255>;
  color: string & MinLength<6> & MaxLength<6>;
  targetDatetime: number & Type<'uint32'>;
}
