export interface IGetStudyRecordByDateResDto {
  date: string;
  goalDuration: number | null;
  totalDuration: number;
  studies: Study[];
}

interface Study {
  title: string;
  color: string;
  order: number;
  duration: number;
  totalBreak: number;
  startAt: number;
  endAt: number;
}

export interface IGetStudyRecordsByRangeResDto {
  studyRecords: IGetStudyRecordByDateResDto[];
}
