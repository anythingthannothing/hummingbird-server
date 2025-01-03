interface DdayInfo {
  ddayId: string;
  title: string;
  color: string;
  targetDatetime: number;
}

export interface IGetDdaysResDto {
  ddays: DdayInfo[];
}
